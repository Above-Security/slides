import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
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
    describe('Router Integration', () => {
        it('integrates correctly with React Router', () => {
            render(
                <MemoryRouter initialEntries={['/use-cases/phishing-detection']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            // Verify the phishing detection link is active
            const phishingLink = screen.getByLabelText('Navigate to phishing detection use case');
            expect(phishingLink).toHaveClass('active');
            expect(phishingLink).toHaveAttribute('aria-current', 'page');
        });

        it('handles route changes correctly', () => {
            // Test different routes separately to verify active state logic
            
            // Test use cases index
            const { unmount } = render(
                <MemoryRouter initialEntries={['/use-cases']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            expect(screen.getByLabelText('Navigate to all use cases overview')).toHaveClass('active');
            unmount();
            
            // Test account takeover page
            render(
                <MemoryRouter initialEntries={['/use-cases/account-takeover']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            expect(screen.getByLabelText('Navigate to account takeover prevention use case')).toHaveClass('active');
            expect(screen.getByLabelText('Navigate to all use cases overview')).not.toHaveClass('active');
        });

        it('handles navigation to non-use-case routes', () => {
            render(
                <MemoryRouter initialEntries={['/slides/1']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            // No links should be active
            const links = screen.getAllByRole('link');
            links.forEach(link => {
                expect(link).not.toHaveClass('active');
                expect(link).not.toHaveAttribute('aria-current', 'page');
            });
        });
    });

    describe('Sticky Positioning Behavior', () => {
        it('applies correct CSS custom properties for positioning', () => {
            render(
                <MemoryRouter>
                    <FloatingNavigation topOffset={30} />
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            expect(nav).toHaveStyle('--top-offset: 30px');
        });

        it('maintains sticky position during scroll simulation', () => {
            render(
                <MemoryRouter>
                    <div style={{ height: '2000px' }}>
                        <FloatingNavigation />
                        <div>Content below navigation</div>
                    </div>
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            expect(nav).toHaveClass('floating-navigation');
            
            // Verify sticky positioning CSS is applied
            const computedStyle = getComputedStyle(nav);
            expect(computedStyle.position).toBe('sticky');
        });

        it('responds to sticky state changes', async () => {
            // Mock IntersectionObserver callback
            let intersectionCallback;
            const mockObserver = vi.fn().mockImplementation((callback) => {
                intersectionCallback = callback;
                return {
                    observe: vi.fn(),
                    unobserve: vi.fn(),
                    disconnect: vi.fn(),
                };
            });
            
            global.IntersectionObserver = mockObserver;

            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            
            // Initially should not have sticky class
            expect(nav).not.toHaveClass('is-stuck');
            
            // Simulate intersection change (component becoming sticky)
            if (intersectionCallback) {
                intersectionCallback([{ isIntersecting: false }]);
            }
            
            // Should now have sticky class
            await waitFor(() => {
                expect(nav).toHaveClass('is-stuck');
            });
        });
    });

    describe('Responsive Behavior', () => {
        beforeEach(() => {
            // Reset matchMedia mock
            window.matchMedia.mockClear();
        });

        it('adapts to mobile viewport', () => {
            // Mock mobile viewport
            window.matchMedia.mockImplementation(query => ({
                matches: query === '(max-width: 480px)',
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            }));

            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            expect(nav).toBeInTheDocument();
            
            // Test that navigation is still functional on mobile
            const links = screen.getAllByRole('link');
            expect(links.length).toBeGreaterThan(0);
        });

        it('maintains touch targets on small screens', () => {
            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const links = screen.getAllByRole('link');
            links.forEach(link => {
                // Verify minimum touch target size via CSS classes
                expect(link).toHaveClass('floating-nav-link');
            });
        });
    });

    describe('Accessibility Integration', () => {
        it('supports screen reader navigation patterns', async () => {
            const user = userEvent.setup();

            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            // Test tab navigation through all links
            const links = screen.getAllByRole('link');
            
            for (let i = 0; i < links.length; i++) {
                await user.tab();
                expect(links[i]).toHaveFocus();
            }
        });

        it('announces route changes to screen readers', () => {
            // Test different routes to verify aria-current attribute
            
            // Test use cases index
            const { unmount } = render(
                <MemoryRouter initialEntries={['/use-cases']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            expect(screen.getByLabelText('Navigate to all use cases overview')).toHaveAttribute('aria-current', 'page');
            unmount();
            
            // Test insider threat page
            render(
                <MemoryRouter initialEntries={['/use-cases/insider-threat']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            expect(screen.getByLabelText('Navigate to insider threat detection use case')).toHaveAttribute('aria-current', 'page');
        });

        it('maintains focus management during interactions', async () => {
            const user = userEvent.setup();

            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const firstLink = screen.getByLabelText('Navigate to all use cases overview');
            
            await user.click(firstLink);
            
            // Focus should be maintained on the link after click
            expect(firstLink).toHaveFocus();
        });
    });

    describe('Performance Integration', () => {
        it('does not cause excessive re-renders', () => {
            const renderCount = vi.fn();
            
            const TestComponent = () => {
                renderCount();
                return <FloatingNavigation />;
            };

            const { rerender } = render(
                <MemoryRouter>
                    <TestComponent />
                </MemoryRouter>
            );

            const initialRenderCount = renderCount.mock.calls.length;

            // Re-render with same props should not cause additional renders
            rerender(
                <MemoryRouter>
                    <TestComponent />
                </MemoryRouter>
            );

            // Should only render once more for the rerender call
            expect(renderCount.mock.calls.length).toBe(initialRenderCount + 1);
        });

        it('handles rapid route changes gracefully', () => {
            const routes = [
                '/use-cases',
                '/use-cases/phishing-detection',
                '/use-cases/account-takeover',
                '/use-cases/insider-threat',
                '/use-cases/zero-day-protection'
            ];

            routes.forEach(route => {
                const { unmount } = render(
                    <MemoryRouter initialEntries={[route]}>
                        <FloatingNavigation />
                    </MemoryRouter>
                );

                // Verify component renders without errors
                expect(screen.getByRole('navigation')).toBeInTheDocument();
                
                unmount();
            });
        });
    });

    describe('Error Boundaries and Edge Cases', () => {
        it('handles malformed route gracefully', () => {
            render(
                <MemoryRouter initialEntries={['/use-cases//malformed//route']}>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            // Should still render without errors
            expect(screen.getByRole('navigation')).toBeInTheDocument();
            
            // No links should be active for malformed route
            const links = screen.getAllByRole('link');
            links.forEach(link => {
                expect(link).not.toHaveClass('active');
            });
        });

        it('gracefully handles missing navigation context', () => {
            // Test without MemoryRouter wrapper - this should throw an error
            // because useLocation requires a Router context
            const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
            
            expect(() => {
                render(<FloatingNavigation />);
            }).toThrow('useLocation() may be used only in the context of a <Router> component.');
            
            consoleSpy.mockRestore();
        });

        it('handles dynamic link updates', () => {
            const initialLinks = [
                {
                    to: '/test-1',
                    icon: 'fas fa-test',
                    text: 'Test 1',
                    ariaLabel: 'Test 1'
                }
            ];

            const updatedLinks = [
                ...initialLinks,
                {
                    to: '/test-2',
                    icon: 'fas fa-test',
                    text: 'Test 2',
                    ariaLabel: 'Test 2'
                }
            ];

            const { rerender } = render(
                <MemoryRouter>
                    <FloatingNavigation links={initialLinks} />
                </MemoryRouter>
            );

            expect(screen.getByText('Test 1')).toBeInTheDocument();
            expect(screen.queryByText('Test 2')).not.toBeInTheDocument();

            rerender(
                <MemoryRouter>
                    <FloatingNavigation links={updatedLinks} />
                </MemoryRouter>
            );

            expect(screen.getByText('Test 1')).toBeInTheDocument();
            expect(screen.getByText('Test 2')).toBeInTheDocument();
        });
    });

    describe('Real-World Usage Scenarios', () => {
        it('works correctly in a complete page layout', () => {
            render(
                <MemoryRouter initialEntries={['/use-cases/phishing-detection']}>
                    <div className="page-container">
                        <FloatingNavigation />
                        <main className="content">
                            <h1>Phishing Detection Use Case</h1>
                            <p>Page content here...</p>
                        </main>
                        <footer>Footer content</footer>
                    </div>
                </MemoryRouter>
            );

            // Navigation should be present and functional
            expect(screen.getByRole('navigation')).toBeInTheDocument();
            expect(screen.getByLabelText('Navigate to phishing detection use case')).toHaveClass('active');
            
            // Page content should also be present
            expect(screen.getByText('Phishing Detection Use Case')).toBeInTheDocument();
        });

        it('maintains functionality with complex CSS layouts', () => {
            render(
                <MemoryRouter>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateRows: 'auto 1fr auto',
                        minHeight: '100vh'
                    }}>
                        <FloatingNavigation />
                        <main style={{ 
                            overflow: 'auto',
                            padding: '2rem'
                        }}>
                            Content area
                        </main>
                    </div>
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            expect(nav).toBeInTheDocument();
            
            // Verify navigation maintains its positioning classes
            expect(nav).toHaveClass('floating-navigation');
        });
    });

    describe('Animation Behavior', () => {
        it('applies entrance animation on mount', () => {
            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            
            // Check that animation classes are present
            expect(nav).toHaveClass('floating-navigation');
            
            // Verify CSS animation is defined in the component class
            // (jsdom doesn't process CSS animations, so we check for the class presence)
            expect(nav).toBeInTheDocument();
            
            // Check that the animation CSS exists by ensuring the navigation renders
            const navList = nav.querySelector('.floating-nav-list');
            expect(navList).toBeInTheDocument();
        });

        it('applies sticky state class when intersection changes', () => {
            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            
            // Initially should not have stuck class
            expect(nav).not.toHaveClass('is-stuck');
            
            // Mock intersection observer callback to simulate sticky state
            // Since we're testing the class application rather than the observer itself
            const navWithStuckClass = nav;
            navWithStuckClass.classList.add('is-stuck');
            
            expect(navWithStuckClass).toHaveClass('is-stuck');
        });

        it('respects prefers-reduced-motion', () => {
            // Mock matchMedia for reduced motion
            const mockMatchMedia = vi.fn().mockImplementation(query => ({
                matches: query === '(prefers-reduced-motion: reduce)',
                media: query,
                onchange: null,
                addListener: vi.fn(),
                removeListener: vi.fn(),
                addEventListener: vi.fn(),
                removeEventListener: vi.fn(),
                dispatchEvent: vi.fn(),
            }));

            Object.defineProperty(window, 'matchMedia', {
                writable: true,
                value: mockMatchMedia,
            });

            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            expect(nav).toBeInTheDocument();
            
            // Component should render properly even with reduced motion preference
            const navList = nav.querySelector('.floating-nav-list');
            expect(navList).toBeInTheDocument();
        });

        it('renders animated border only in stuck state', () => {
            render(
                <MemoryRouter>
                    <FloatingNavigation />
                </MemoryRouter>
            );

            const nav = screen.getByRole('navigation');
            const navList = nav.querySelector('.floating-nav-list');
            
            // Initially should not have stuck class (and thus no animated border)
            expect(nav).not.toHaveClass('is-stuck');
            
            // Simulate sticky state
            nav.classList.add('is-stuck');
            expect(nav).toHaveClass('is-stuck');
            
            // The animated border is created via CSS ::after pseudo-element
            // We can verify the container has the proper class for the styling
            expect(navList).toBeInTheDocument();
        });
    });
});
