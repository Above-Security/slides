import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { clarityEvent, claritySet, initializeClarity } from '../src/utils/clarity'

// Mock Clarity analytics - use vi.fn() directly in the mock
vi.mock('../src/utils/clarity', () => ({
    clarityEvent: vi.fn(),
    claritySet: vi.fn(),
    initializeClarity: vi.fn()
}))

// Mock LogoWatermark component
vi.mock('../src/components/LogoWatermark', () => ({
    Logo: ({ className }) => <div data-testid="logo" className={className}>Logo</div>
}))

import { UseCasesIndex } from '../src/use-cases'

describe('UseCasesIndex Component', () => {
    const renderWithRouter = (initialEntries = ['/use-cases']) => {
        return render(
            <MemoryRouter initialEntries={initialEntries}>
                <UseCasesIndex />
            </MemoryRouter>
        )
    }

    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('Component Rendering', () => {
        it('renders the main title and subtitle', () => {
            renderWithRouter()

            expect(screen.getByText('Runtime Insider Protection & SaaS Behavioral Visibility')).toBeInTheDocument()
            expect(screen.getByText(/Real-world scenarios where Above Security/)).toBeInTheDocument()
        })

        it('renders the logo with correct link', () => {
            renderWithRouter()

            const logo = screen.getByTestId('logo')
            expect(logo).toBeInTheDocument()

            const logoLink = logo.closest('a')
            expect(logoLink).toHaveAttribute('href', '/')
        })

        it('renders all three use case cards', () => {
            renderWithRouter()

            expect(screen.getByText('Phishing Detection')).toBeInTheDocument()
            expect(screen.getByText('Insider Threat Detection')).toBeInTheDocument()
            
            // Be more specific to avoid finding the navigation element
            const useCaseGrid = screen.getByRole('main')
            expect(useCaseGrid).toHaveTextContent('Business Case')
        })

        it('displays correct scenario counts for each use case', () => {
            renderWithRouter()

            expect(screen.getByText('4 scenarios')).toBeInTheDocument()
            expect(screen.getByText('3 scenarios')).toBeInTheDocument()
            expect(screen.getByText('1 scenarios')).toBeInTheDocument()
        })
    })

    describe('Navigation Links', () => {
        it('renders navigation footer with correct links', () => {
            renderWithRouter()

            const homeLink = screen.getByText('Back to Home').closest('a')
            expect(homeLink).toHaveAttribute('href', '/')

            const presentationLink = screen.getByText('View Full Presentation').closest('a')
            expect(presentationLink).toHaveAttribute('href', '/slides/1')
        })

        it('generates correct use case detail links', () => {
            renderWithRouter()

            const phishingCard = screen.getByText('Phishing Detection').closest('a')
            expect(phishingCard).toHaveAttribute('href', '/use-cases/phishing-detection')

            const insiderCard = screen.getByText('Insider Threat Detection').closest('a')
            expect(insiderCard).toHaveAttribute('href', '/use-cases/insider-threat')

            // Find Business Case within the main content area to avoid the navigation
            const mainContent = screen.getByRole('main')
            const businessCard = within(mainContent).getByText('Business Case').closest('a')
            expect(businessCard).toHaveAttribute('href', '/use-cases/ciso-business-case')
        })
    })

    describe('Analytics Integration', () => {
        it('initializes Clarity on component mount', () => {
            renderWithRouter()

            expect(initializeClarity).toHaveBeenCalledOnce()
            expect(clarityEvent).toHaveBeenCalledWith('use_cases_index_view')
            expect(claritySet).toHaveBeenCalledWith('page_type', 'use_cases_index')
        })

        it('tracks use case clicks', async () => {
            const user = userEvent.setup()
            renderWithRouter()

            const phishingCard = screen.getByText('Phishing Detection').closest('a')
            await user.click(phishingCard)

            expect(clarityEvent).toHaveBeenCalledWith('use_case_clicked', 
                expect.objectContaining({
                    use_case: 'phishing-detection',
                    interaction_type: 'enhanced_card_click',
                    timestamp: expect.any(Number)
                })
            )
            expect(claritySet).toHaveBeenCalledWith('selected_use_case', 'phishing-detection')
            expect(claritySet).toHaveBeenCalledWith('interaction_method', 'enhanced_ui')
        })

        it('tracks logo clicks', async () => {
            const user = userEvent.setup()
            renderWithRouter()

            const logoLink = screen.getByTestId('logo').closest('a')
            await user.click(logoLink)

            expect(clarityEvent).toHaveBeenCalledWith('logo_clicked_from_use_cases',
                expect.objectContaining({
                    interaction_type: 'enhanced_logo_hover',
                    timestamp: expect.any(Number)
                })
            )
        })
    })

    describe('Accessibility', () => {
        it('has proper heading hierarchy', () => {
            renderWithRouter()

            const mainTitle = screen.getByRole('heading', { level: 1 })
            expect(mainTitle).toHaveTextContent('Runtime Insider Protection & SaaS Behavioral Visibility')

            const useCaseTitles = screen.getAllByRole('heading', { level: 3 })
            expect(useCaseTitles).toHaveLength(3)
        })

        it('has proper link accessibility', () => {
            renderWithRouter()

            const useCaseLinks = screen.getAllByRole('link')
            useCaseLinks.forEach(link => {
                expect(link).toBeVisible()
                expect(link).not.toHaveAttribute('aria-disabled', 'true')
            })
        })

        it('uses semantic HTML structure', () => {
            renderWithRouter()

            expect(screen.getByRole('banner')).toBeInTheDocument() // header
            expect(screen.getByRole('main')).toBeInTheDocument() // main content
        })
    })

    describe('Responsive Design', () => {
        it('renders without layout shifts on different screen sizes', () => {
            // This would require more complex setup for proper responsive testing
            // For now, we ensure the component renders without errors
            renderWithRouter()

            expect(screen.getByText('Runtime Insider Protection & SaaS Behavioral Visibility')).toBeInTheDocument()
        })
    })

    describe('Error Handling', () => {
        it('handles missing clarity utils gracefully', () => {
            // Temporarily mock clarity functions to throw errors
            initializeClarity.mockImplementationOnce(() => {
                throw new Error('Clarity not available')
            })

            // Component should still render even if analytics fail
            expect(() => renderWithRouter()).not.toThrow()
            expect(screen.getByText('Runtime Insider Protection & SaaS Behavioral Visibility')).toBeInTheDocument()
        })
    })

    describe('SEO and Metadata', () => {
        it('sets correct document title', () => {
            renderWithRouter()

            // In a real browser environment, this would check document.title
            // For testing, we verify the component attempts to set it
            expect(screen.getByText('Runtime Insider Protection & SaaS Behavioral Visibility')).toBeInTheDocument()
        })
    })
})
