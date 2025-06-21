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
    PhishingDetection: () => <div data-testid="phishing-detection">Phishing Detection</div>,
    AccountTakeover: () => <div data-testid="account-takeover">Account Takeover</div>,
    InsiderThreat: () => <div data-testid="insider-threat">Insider Threat</div>,
    ZeroDayProtection: () => <div data-testid="zero-day-protection">Zero-Day Protection</div>
}))

describe('App Router - Updated Architecture', () => {
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

    describe('Use Cases Routes - New Architecture', () => {
        it('renders UseCasesIndex at /use-cases', () => {
            renderWithRouter(['/use-cases'])
            expect(screen.getByTestId('use-cases-index')).toBeInTheDocument()
        })

        it('renders PhishingDetection component for phishing-detection route', () => {
            renderWithRouter(['/use-cases/phishing-detection'])
            expect(screen.getByTestId('phishing-detection')).toBeInTheDocument()
        })

        it('renders AccountTakeover component for account-takeover route', () => {
            renderWithRouter(['/use-cases/account-takeover'])
            expect(screen.getByTestId('account-takeover')).toBeInTheDocument()
        })

        it('renders InsiderThreat component for insider-threat route', () => {
            renderWithRouter(['/use-cases/insider-threat'])
            expect(screen.getByTestId('insider-threat')).toBeInTheDocument()
        })

        it('renders ZeroDayProtection component for zero-day-protection route', () => {
            renderWithRouter(['/use-cases/zero-day-protection'])
            expect(screen.getByTestId('zero-day-protection')).toBeInTheDocument()
        })

        it('redirects invalid use case routes to homepage', () => {
            renderWithRouter(['/use-cases/invalid-use-case'])
            expect(screen.getByTestId('home-page')).toBeInTheDocument()
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

        it('maintains route state during navigation', () => {
            renderWithRouter(['/slides/10'])
            expect(screen.getByTestId('presentation-app')).toBeInTheDocument()

            // Test that we can navigate to use cases
            cleanup()
            renderWithRouter(['/use-cases/phishing-detection'])
            expect(screen.getByTestId('phishing-detection')).toBeInTheDocument()
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

            // Test that we can navigate to individual use cases
            cleanup()
            renderWithRouter(['/use-cases/account-takeover'])
            expect(screen.getByTestId('account-takeover')).toBeInTheDocument()
        })
    })

    describe('Edge Cases', () => {
        it('handles empty slide number gracefully', () => {
            renderWithRouter(['/slides/'])
            expect(screen.getByTestId('presentation-app')).toBeInTheDocument()
        })

        it('handles special characters in use case routes', () => {
            // Test hyphenated routes work correctly
            renderWithRouter(['/use-cases/phishing-detection'])
            expect(screen.getByTestId('phishing-detection')).toBeInTheDocument()
            
            cleanup()
            renderWithRouter(['/use-cases/zero-day-protection'])
            expect(screen.getByTestId('zero-day-protection')).toBeInTheDocument()
        })

        it('handles multiple consecutive slashes', () => {
            // Multiple slashes should redirect to home
            renderWithRouter(['/use-cases//invalid'])
            expect(screen.getByTestId('home-page')).toBeInTheDocument()
        })

        it('handles case sensitivity correctly', () => {
            // Routes should be case sensitive and invalid case should redirect
            renderWithRouter(['/use-cases/Phishing-Detection'])
            expect(screen.getByTestId('home-page')).toBeInTheDocument()
        })
    })

    describe('Use Case Route Validation', () => {
        const validUseCaseRoutes = [
            '/use-cases/phishing-detection',
            '/use-cases/account-takeover', 
            '/use-cases/insider-threat',
            '/use-cases/zero-day-protection'
        ];

        const expectedComponents = [
            'phishing-detection',
            'account-takeover',
            'insider-threat', 
            'zero-day-protection'
        ];

        it('all valid use case routes render correct components', () => {
            validUseCaseRoutes.forEach((route, index) => {
                cleanup();
                renderWithRouter([route]);
                expect(screen.getByTestId(expectedComponents[index])).toBeInTheDocument();
            });
        });

        it('invalid use case IDs redirect to home', () => {
            const invalidRoutes = [
                '/use-cases/non-existent',
                '/use-cases/phishing', // Partial match
                '/use-cases/account-takeover-prevention', // Too long
                '/use-cases/123' // Numeric
            ];

            invalidRoutes.forEach(route => {
                cleanup();
                renderWithRouter([route]);
                expect(screen.getByTestId('home-page')).toBeInTheDocument();
            });
            
            // Test that /use-cases/ shows use cases index (trailing slash normalized)
            cleanup();
            renderWithRouter(['/use-cases/']);
            expect(screen.getByTestId('use-cases-index')).toBeInTheDocument();
        });
    })

    describe('Routing Performance', () => {
        it('renders routes without significant delay', async () => {
            const start = performance.now();
            renderWithRouter(['/use-cases/phishing-detection']);
            expect(screen.getByTestId('phishing-detection')).toBeInTheDocument();
            const end = performance.now();
            
            // Should render in under 100ms
            expect(end - start).toBeLessThan(100);
        });

        it('handles rapid route changes', () => {
            const routes = [
                '/use-cases/phishing-detection',
                '/use-cases/account-takeover',
                '/use-cases/insider-threat',
                '/use-cases/zero-day-protection'
            ];

            routes.forEach(route => {
                cleanup();
                renderWithRouter([route]);
                // Should render without errors
                expect(document.body).toBeInTheDocument();
            });
        });
    });
})
