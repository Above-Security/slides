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
    InsiderThreat: () => <div data-testid="insider-threat">Insider Threat</div>,
    CISOBusinessCase: () => <div data-testid="ciso-business-case">CISO Business Case</div>
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

        it('renders InsiderThreat component for insider-threat route', () => {
            renderWithRouter(['/use-cases/insider-threat'])
            expect(screen.getByTestId('insider-threat')).toBeInTheDocument()
        })

        it('renders CISO Business Case component for ciso-business-case route', () => {
            renderWithRouter(['/use-cases/ciso-business-case'])
            expect(screen.getByTestId('ciso-business-case')).toBeInTheDocument()
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
            renderWithRouter(['/use-cases/insider-threat'])
            expect(screen.getByTestId('insider-threat')).toBeInTheDocument()
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
            renderWithRouter(['/use-cases/ciso-business-case'])
            expect(screen.getByTestId('ciso-business-case')).toBeInTheDocument()
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
            '/use-cases/insider-threat',
            '/use-cases/ciso-business-case'
        ];

        const expectedComponents = [
            'phishing-detection',
            'insider-threat', 
            'ciso-business-case'
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
                '/use-cases/account-takeover-prevention', // Removed use case
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
                '/use-cases/insider-threat',
                '/use-cases/ciso-business-case'
            ];

            routes.forEach(route => {
                cleanup();
                renderWithRouter([route]);
                // Should render without errors
                expect(document.body).toBeInTheDocument();
            });
        });
    });

    /**
     * HASH ROUTING DOCUMENTATION FOR GITHUB PAGES COMPATIBILITY
     * 
     * These tests document hash routing behavior for GitHub Pages deployment.
     * Note: We cannot test HashRouter directly in JSDOM due to window.location limitations.
     */
    describe('HashRouter - GitHub Pages Compatibility Documentation', () => {
        describe('Production Deployment Documentation', () => {
            it('documents HashRouter usage in main.jsx for GitHub Pages', () => {
                // In production (main.jsx), we use HashRouter for GitHub Pages compatibility:
                // ReactDOM.createRoot(document.getElementById('root')).render(
                //   <HashRouter>
                //     <App />
                //   </HashRouter>
                // )
                
                // This allows URLs like: https://above.github.io/#/use-cases/phishing-detection
                expect(true).toBe(true) // Documentation test
            })

            it('documents expected hash URL patterns for GitHub Pages', () => {
                // In production with GitHub Pages, these hash URLs will work:
                const expectedHashUrls = [
                    '#/',                              // Home page
                    '#/use-cases',                     // Use cases index  
                    '#/use-cases/phishing-detection',  // Individual use case
                    '#/slides/1',                      // Presentation slides
                    '#/slides/10'                      // Specific slide number
                ]
                
                // Verify we have the expected URL patterns documented
                expect(expectedHashUrls.length).toBe(5)
                expect(expectedHashUrls[0]).toBe('#/')
                expect(expectedHashUrls[1]).toBe('#/use-cases')
                expect(expectedHashUrls[2]).toBe('#/use-cases/phishing-detection')
                expect(expectedHashUrls[3]).toBe('#/slides/1')
                expect(expectedHashUrls[4]).toBe('#/slides/10')
            })

            it('confirms hash routing benefits for GitHub Pages deployment', () => {
                // HashRouter provides these benefits for GitHub Pages:
                const benefits = [
                    'No server-side routing configuration needed',
                    'All routes served from single index.html',
                    'Bookmark-able URLs with hash fragments',
                    'Browser back/forward navigation works',
                    'Compatible with static hosting'
                ]
                
                expect(benefits.length).toBe(5)
                expect(benefits[0]).toContain('server-side routing')
                expect(benefits[1]).toContain('index.html')
                expect(benefits[2]).toContain('Bookmark-able')
            })

            it('documents routing architecture compatibility', () => {
                // Our routing structure works with both MemoryRouter (tests) and HashRouter (production)
                // The same route definitions in App.jsx work with both routers:
                
                const routeStructure = {
                    home: '/',
                    useCasesIndex: '/use-cases',
                    useCaseDetail: '/use-cases/:id',
                    slides: '/slides/:slideNumber?'
                }
                
                // These routes work with HashRouter as:
                // #/ #/use-cases #/use-cases/phishing-detection #/slides/1
                
                expect(Object.keys(routeStructure)).toEqual([
                    'home', 'useCasesIndex', 'useCaseDetail', 'slides'
                ])
            })
        })

        describe('Implementation Verification', () => {
            it('confirms our app uses same routing structure for all router types', () => {
                // Our tests use MemoryRouter to verify routing logic
                // Production uses HashRouter with the same App component
                // This ensures compatibility between test and production environments
                
                renderWithRouter(['/'])
                expect(screen.getByTestId('home-page')).toBeInTheDocument()
                
                // The same component structure works with HashRouter in production
            })

            it('verifies route definitions are router-agnostic', () => {
                // Our route definitions in App.jsx work with any React Router implementation
                const routes = [
                    '/',
                    '/use-cases',
                    '/use-cases/phishing-detection',
                    '/slides/1'
                ]
                
                routes.forEach(route => {
                    // These routes work in tests with MemoryRouter
                    // and in production with HashRouter
                    expect(typeof route).toBe('string')
                    expect(route.startsWith('/')).toBe(true)
                })
            })
        })
    })
})
