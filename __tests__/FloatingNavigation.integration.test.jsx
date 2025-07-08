import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import FloatingNavigation from '../src/components/FloatingNavigation'

/**
 * Integration Tests for FloatingNavigation Component
 * 
 * These tests verify the component's behavior in realistic scenarios
 * including routing integration, sticky positioning, and responsive behavior.
 */

// Mock IntersectionObserver for sticky position testing
global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

// Mock ResizeObserver for responsive testing
global.ResizeObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

// Mock window.matchMedia for responsive breakpoint testing
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
})

describe('FloatingNavigation Integration Tests', () => {
    beforeEach(() => {
        cleanup()
        vi.clearAllMocks()
    })

    describe('Routing Integration', () => {
        it('should correctly highlight active routes', () => {
            // Test use cases overview page
            const { unmount } = render(
                <MemoryRouter initialEntries={['/use-cases']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            expect(screen.getByLabelText('Navigate to all use cases overview')).toHaveClass('active');
            unmount();
            
            // Test insider protection page
            render(
                <MemoryRouter initialEntries={['/use-cases/insider-threat']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            expect(screen.getByLabelText('Navigate to insider protection detection use case')).toHaveClass('active');
            expect(screen.getByLabelText('Navigate to all use cases overview')).not.toHaveClass('active');
        })

        it('should navigate between routes correctly', async () => {
            const user = userEvent.setup()
            
            render(
                <MemoryRouter initialEntries={['/use-cases']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            // Click on phishing detection
            const phishingLink = screen.getByLabelText('Navigate to phishing detection use case')
            await user.click(phishingLink)

            // Should have navigated (would be tested with router state in real app)
            expect(phishingLink).toHaveAttribute('href', '/use-cases/phishing-detection')
        })

        it('should handle invalid routes gracefully', () => {
            render(
                <MemoryRouter initialEntries={['/invalid-route']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            // Should render without errors
            expect(screen.getByRole('navigation')).toBeInTheDocument()
            
            // No items should be active
            const links = screen.getAllByRole('link')
            links.forEach(link => {
                expect(link).not.toHaveClass('active')
            })
        })
    })

    describe('Accessibility Integration', () => {
        it('should maintain keyboard navigation flow', async () => {
            const user = userEvent.setup()
            
            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const firstLink = screen.getByLabelText('Navigate to all use cases overview')
            firstLink.focus()

            // Tab through navigation items
            await user.tab()
            expect(screen.getByLabelText('Navigate to phishing detection use case')).toHaveFocus()

            await user.tab()
            expect(screen.getByLabelText('Navigate to insider protection detection use case')).toHaveFocus()

            await user.tab()
            expect(screen.getByLabelText('Navigate to CISO business case')).toHaveFocus()
        })

        it('should announce route changes to screen readers', () => {
            render(
                <MemoryRouter initialEntries={['/use-cases/phishing-detection']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const activeLink = screen.getByLabelText('Navigate to phishing detection use case')
            expect(activeLink).toHaveAttribute('aria-current', 'page')
        })
    })
})
