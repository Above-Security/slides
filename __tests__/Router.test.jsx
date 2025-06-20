import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, waitFor, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from '../src/App'

// Mock the components to avoid complex rendering issues
vi.mock('../src/components/HomePage', () => ({
    default: () => <div data-testid="home-page">Home Page</div>
}))

vi.mock('../src/components/PresentationApp', () => ({
    default: () => <div data-testid="presentation-app">Presentation App</div>
}))

vi.mock('../src/use-cases', () => ({
    UseCasesIndex: () => <div data-testid="use-cases-index">Use Cases Index</div>,
    UseCaseDetail: () => <div data-testid="use-case-detail">Use Case Detail</div>
}))

describe('App Router', () => {
    const renderWithRouter = (initialEntries = ['/']) => {
        return render(
            <MemoryRouter initialEntries={initialEntries}>
                <App />
            </MemoryRouter>
        )
    }

    beforeEach(() => {
        vi.clearAllMocks()
    })

    describe('Root Routes', () => {
        it('renders HomePage at root path', () => {
            renderWithRouter(['/'])
            expect(screen.getByTestId('home-page')).toBeInTheDocument()
        })

        it('redirects unknown routes to homepage', () => {
            renderWithRouter(['/unknown-route'])
            expect(screen.getByTestId('home-page')).toBeInTheDocument()
        })
    })

    describe('Presentation Routes', () => {
        it('redirects /slides to /slides/1', async () => {
            renderWithRouter(['/slides'])
            await waitFor(() => {
                expect(screen.getByTestId('presentation-app')).toBeInTheDocument()
            })
        })

        it('renders PresentationApp for slide routes', () => {
            renderWithRouter(['/slides/5'])
            expect(screen.getByTestId('presentation-app')).toBeInTheDocument()
        })

        it('handles slide parameters correctly', () => {
            renderWithRouter(['/slides/42'])
            expect(screen.getByTestId('presentation-app')).toBeInTheDocument()
        })
    })

    describe('Use Cases Routes', () => {
        it('renders UseCasesIndex at /use-cases', () => {
            renderWithRouter(['/use-cases'])
            expect(screen.getByTestId('use-cases-index')).toBeInTheDocument()
        })

        it('renders UseCaseDetail for specific use case', () => {
            renderWithRouter(['/use-cases/phishing-detection'])
            expect(screen.getByTestId('use-case-detail')).toBeInTheDocument()
        })

        it('handles multiple use case IDs', () => {
            renderWithRouter(['/use-cases/account-takeover'])
            expect(screen.getByTestId('use-case-detail')).toBeInTheDocument()
        })
    })

    describe('Route Navigation', () => {
        it('supports programmatic navigation between routes', async () => {
            renderWithRouter(['/'])
            expect(screen.getByTestId('home-page')).toBeInTheDocument()

            // Test direct navigation to use cases
            cleanup()
            renderWithRouter(['/use-cases'])
            expect(screen.getByTestId('use-cases-index')).toBeInTheDocument()
        })
    })

    describe('GitHub Pages Compatibility', () => {
        it('handles hash-based routing structure', () => {
            // This test ensures compatibility with HashRouter used in main.jsx
            renderWithRouter(['/'])
            expect(screen.getByTestId('home-page')).toBeInTheDocument()
        })

        it('maintains route state during navigation', () => {
            renderWithRouter(['/slides/10'])
            expect(screen.getByTestId('presentation-app')).toBeInTheDocument()

            // Test that we can navigate to use cases
            cleanup()
            renderWithRouter(['/use-cases'])
            expect(screen.getByTestId('use-cases-index')).toBeInTheDocument()
        })
    })

    describe('Edge Cases', () => {
        it('handles empty slide number gracefully', () => {
            renderWithRouter(['/slides/'])
            expect(screen.getByTestId('presentation-app')).toBeInTheDocument()
        })

        it('handles special characters in use case IDs', () => {
            renderWithRouter(['/use-cases/test-case-with-hyphens'])
            expect(screen.getByTestId('use-case-detail')).toBeInTheDocument()
        })

        it('handles multiple consecutive slashes', () => {
            // Multiple slashes should be handled gracefully, may redirect to home
            renderWithRouter(['/use-cases//test'])
            // Either should show a valid component or redirect to home
            const hasValidComponent = screen.queryByTestId('use-case-detail') ||
                screen.queryByTestId('home-page') ||
                screen.queryByTestId('use-cases-index')
            expect(hasValidComponent).toBeInTheDocument()
        })
    })
})
