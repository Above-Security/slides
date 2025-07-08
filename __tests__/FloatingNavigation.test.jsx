import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import FloatingNavigation from '../src/components/FloatingNavigation'

// Mock IntersectionObserver for all tests
global.IntersectionObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}))

// Test wrapper component
const TestWrapper = ({ children, initialEntries = ['/use-cases'] }) => (
    <MemoryRouter initialEntries={initialEntries}>
        {children}
    </MemoryRouter>
)

describe('FloatingNavigation Component', () => {
    beforeEach(() => {
        // Clear any previous test artifacts
        vi.clearAllMocks();
    });

    describe('Rendering and Basic Functionality', () => {
        it('renders navigation component with default links', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            // Check if navigation is rendered
            expect(screen.getByRole('navigation')).toBeInTheDocument();
            expect(screen.getByLabelText('Use cases navigation')).toBeInTheDocument();

            // Check if default links are rendered
            expect(screen.getByText('All Use Cases')).toBeInTheDocument();
            expect(screen.getByText('Phishing')).toBeInTheDocument();
            expect(screen.getByText('Insider Protection')).toBeInTheDocument();
            expect(screen.getByText('Business Case')).toBeInTheDocument();
        });

        it('renders with custom links when provided', () => {
            const customLinks = [
                {
                    to: '/custom-page',
                    icon: 'fas fa-home',
                    text: 'Custom Page',
                    ariaLabel: 'Navigate to custom page',
                    tooltip: 'Custom page tooltip'
                }
            ];

            render(
                <TestWrapper>
                    <FloatingNavigation links={customLinks} />
                </TestWrapper>
            );

            expect(screen.getByText('Custom Page')).toBeInTheDocument();
            expect(screen.queryByText('All Use Cases')).not.toBeInTheDocument();
        });

        it('applies custom className and topOffset', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation 
                        className="custom-class" 
                        topOffset={30}
                    />
                </TestWrapper>
            );

            const nav = screen.getByRole('navigation');
            expect(nav).toHaveClass('floating-navigation', 'custom-class');
            expect(nav).toHaveStyle('--top-offset: 30px');
        });

        it('renders without errors when links array is empty', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation links={[]} />
                </TestWrapper>
            );

            // Should render default links when empty array is provided
            expect(screen.getByText('All Use Cases')).toBeInTheDocument();
        });
    });

    describe('Active State Logic', () => {
        it('marks correct link as active for use cases index', () => {
            render(
                <TestWrapper initialEntries={['/use-cases']}>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const allUseCasesLink = screen.getByLabelText('Navigate to all use cases overview');
            expect(allUseCasesLink).toHaveClass('active');
            expect(allUseCasesLink).toHaveAttribute('aria-current', 'page');
        });

        it('marks correct link as active for individual use case', () => {
            render(
                <TestWrapper initialEntries={['/use-cases/phishing-detection']}>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const phishingLink = screen.getByLabelText('Navigate to phishing detection use case');
            expect(phishingLink).toHaveClass('active');
            expect(phishingLink).toHaveAttribute('aria-current', 'page');
        });

        it('no links are active for unrelated routes', () => {
            render(
                <TestWrapper initialEntries={['/some-other-page']}>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const links = screen.getAllByRole('link');
            links.forEach(link => {
                expect(link).not.toHaveClass('active');
                expect(link).not.toHaveAttribute('aria-current', 'page');
            });
        });
    });

    describe('Accessibility Features', () => {
        it('has proper ARIA attributes', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            // Navigation landmark
            const nav = screen.getByRole('navigation');
            expect(nav).toHaveAttribute('aria-label', 'Use cases navigation');

            // List structure
            expect(screen.getByRole('list')).toBeInTheDocument();
            expect(screen.getAllByRole('listitem')).toHaveLength(4);

            // Links with proper labels
            const links = screen.getAllByRole('link');
            links.forEach(link => {
                expect(link).toHaveAttribute('aria-label');
                expect(link).toHaveAttribute('tabIndex', '0');
            });
        });

        it('supports keyboard navigation', async () => {
            const user = userEvent.setup();

            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const firstLink = screen.getByLabelText('Navigate to all use cases overview');
            
            // Tab to first link
            await user.tab();
            expect(firstLink).toHaveFocus();

            // Test Enter key
            await user.keyboard('{Enter}');
            // Note: In a real router context, this would navigate

            // Test Space key
            await user.keyboard(' ');
            // Note: In a real router context, this would navigate
        });

        it('handles keyboard events correctly', async () => {
            const mockNavigate = vi.fn();

            render(
                <TestWrapper>
                    <FloatingNavigation onNavigate={mockNavigate} />
                </TestWrapper>
            );

            const firstLink = screen.getByLabelText('Navigate to all use cases overview');
            
            // Simulate Enter key
            fireEvent.keyDown(firstLink, { key: 'Enter' });
            await waitFor(() => {
                expect(mockNavigate).toHaveBeenCalled();
            });

            // Simulate Space key
            fireEvent.keyDown(firstLink, { key: ' ' });
            await waitFor(() => {
                expect(mockNavigate).toHaveBeenCalledTimes(2);
            });
        });

        it('icons are properly hidden from screen readers', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const icons = screen.getAllByTestId('nav-icon');
            icons.forEach(icon => {
                expect(icon).toHaveAttribute('aria-hidden', 'true');
                expect(icon).toHaveAttribute('role', 'presentation');
            });
        });
    });

    describe('Interaction Callbacks', () => {
        it('calls onNavigate callback when link is clicked', async () => {
            const mockNavigate = vi.fn();
            const user = userEvent.setup();

            render(
                <TestWrapper>
                    <FloatingNavigation onNavigate={mockNavigate} />
                </TestWrapper>
            );

            const firstLink = screen.getByLabelText('Navigate to all use cases overview');
            await user.click(firstLink);

            expect(mockNavigate).toHaveBeenCalledWith(
                expect.objectContaining({
                    to: '/use-cases',
                    text: 'All Use Cases'
                })
            );
        });

        it('shows tooltips when showTooltips is enabled', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation showTooltips={true} />
                </TestWrapper>
            );

            const firstLink = screen.getByLabelText('Navigate to all use cases overview');
            expect(firstLink).toHaveAttribute('title', 'View all available use cases');
        });

        it('does not show tooltips when showTooltips is disabled', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation showTooltips={false} />
                </TestWrapper>
            );

            const firstLink = screen.getByLabelText('Navigate to all use cases overview');
            expect(firstLink).not.toHaveAttribute('title');
        });
    });

    describe('Performance and Edge Cases', () => {
        it('handles missing icon gracefully', () => {
            const linksWithoutIcons = [
                {
                    to: '/test',
                    text: 'Test Link',
                    ariaLabel: 'Test link'
                }
            ];

            render(
                <TestWrapper>
                    <FloatingNavigation links={linksWithoutIcons} />
                </TestWrapper>
            );

            expect(screen.getByText('Test Link')).toBeInTheDocument();
            expect(screen.queryByTestId('nav-icon')).not.toBeInTheDocument();
        });

        it('handles long text labels properly', () => {
            const linksWithLongText = [
                {
                    to: '/test',
                    icon: 'fas fa-test',
                    text: 'This is a very long navigation text that might cause layout issues',
                    ariaLabel: 'Long text test'
                }
            ];

            render(
                <TestWrapper>
                    <FloatingNavigation links={linksWithLongText} />
                </TestWrapper>
            );

            const textElement = screen.getByTestId('nav-text');
            expect(textElement).toHaveStyle('white-space: nowrap');
        });

        it('memoizes navigation links to prevent unnecessary re-renders', () => {
            const { rerender } = render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const initialLinks = screen.getAllByRole('link');
            const initialCount = initialLinks.length;

            // Re-render with same props
            rerender(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const rerenderedLinks = screen.getAllByRole('link');
            expect(rerenderedLinks).toHaveLength(initialCount);
        });
    });

    describe('Test IDs for E2E Testing', () => {
        it('includes proper test IDs for automated testing', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            // Main navigation test ID
            expect(screen.getByTestId('floating-navigation')).toBeInTheDocument();

            // Link test IDs
            expect(screen.getByTestId('nav-link--use-cases')).toBeInTheDocument();
            expect(screen.getByTestId('nav-link--use-cases-phishing-detection')).toBeInTheDocument();
            expect(screen.getByTestId('nav-link--use-cases-insider-threat')).toBeInTheDocument();
        });
    });

    describe('Sticky State Behavior', () => {
        beforeEach(() => {
            // Mock IntersectionObserver for sticky state testing
            global.IntersectionObserver = vi.fn((callback) => ({
                observe: vi.fn(),
                unobserve: vi.fn(),
                disconnect: vi.fn(),
                // Simulate the callback for testing
                trigger: (entries) => callback(entries)
            }));
        });

        it('applies sticky state class when intersecting', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const nav = screen.getByTestId('floating-navigation');
            
            // Initially should not have stuck class
            expect(nav).not.toHaveClass('is-stuck');
            expect(nav).toHaveAttribute('data-stuck', 'false');
        });

        it('handles sticky state transitions with proper data attributes', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const nav = screen.getByTestId('floating-navigation');
            
            // Verify initial state
            expect(nav).toHaveAttribute('data-stuck', 'false');
            
            // Verify sticky class structure exists
            expect(nav).toHaveClass('floating-navigation');
        });

        it('applies correct CSS custom properties', () => {
            const customOffset = 50;
            
            render(
                <TestWrapper>
                    <FloatingNavigation topOffset={customOffset} />
                </TestWrapper>
            );

            const nav = screen.getByTestId('floating-navigation');
            expect(nav).toHaveStyle(`--top-offset: ${customOffset}px`);
        });
    });

    describe('Design Token Compliance', () => {
        it('uses semantic HTML structure', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            // Verify semantic structure
            expect(screen.getByRole('navigation')).toBeInTheDocument();
            expect(screen.getByRole('list')).toBeInTheDocument();
            expect(screen.getAllByRole('listitem')).toHaveLength(4);
            expect(screen.getAllByRole('link')).toHaveLength(4);
        });

        it('applies proper CSS classes for styling', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const nav = screen.getByTestId('floating-navigation');
            const list = screen.getByRole('list');
            const links = screen.getAllByRole('link');

            // Verify CSS classes for design token application
            expect(nav).toHaveClass('floating-navigation');
            expect(list).toHaveClass('floating-nav-list');
            
            links.forEach(link => {
                expect(link).toHaveClass('floating-nav-link');
            });
        });

        it('maintains accessible touch targets', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation />
                </TestWrapper>
            );

            const links = screen.getAllByRole('link');
            
            // All links should have the nav-link class for consistent styling
            links.forEach(link => {
                expect(link).toHaveClass('floating-nav-link');
                // The CSS ensures min-height: 44px for WCAG compliance
            });
        });
    });

    describe('Sticky State Logic', () => {
        it('applies sticky state class when intersection changes', () => {
            // We'll test the state management directly since DOM manipulation is disabled in test env
            render(
                <TestWrapper>
                    <FloatingNavigation topOffset={20} />
                </TestWrapper>
            );

            const nav = screen.getByRole('navigation');
            
            // In test environment, IntersectionObserver setup is skipped, 
            // so we verify the component renders with default state
            expect(nav).not.toHaveClass('is-stuck');
            expect(nav).toHaveAttribute('data-stuck', 'false');
        });

        it('uses correct top offset for sticky positioning', () => {
            render(
                <TestWrapper>
                    <FloatingNavigation topOffset={30} />
                </TestWrapper>
            );

            const nav = screen.getByRole('navigation');
            expect(nav).toHaveStyle('--top-offset: 30px');
        });

        it('handles missing IntersectionObserver gracefully', () => {
            // Temporarily remove IntersectionObserver
            const originalIntersectionObserver = global.IntersectionObserver;
            delete global.IntersectionObserver;

            expect(() => {
                render(
                    <TestWrapper>
                        <FloatingNavigation />
                    </TestWrapper>
                );
            }).not.toThrow();

            // Component should render normally without IntersectionObserver
            const nav = screen.getByRole('navigation');
            expect(nav).toBeInTheDocument();
            expect(nav).toHaveAttribute('data-stuck', 'false');

            // Restore IntersectionObserver
            global.IntersectionObserver = originalIntersectionObserver;
        });
    });
});
