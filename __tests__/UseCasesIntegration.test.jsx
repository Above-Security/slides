import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { posthogEvent, posthogSet, initializePostHog } from '../src/utils/posthog';

// Mock PostHog analytics
vi.mock('../src/utils/posthog', () => ({
    posthogEvent: vi.fn(),
    posthogSet: vi.fn(),
    initializePostHog: vi.fn()
}));

// Mock LogoWatermark component
vi.mock('../src/components/LogoWatermark', () => ({
    Logo: ({ className }) => <div data-testid="logo" className={className}>Logo</div>
}));

// Import standalone components only - no shared abstractions
import PhishingDetection from '../src/use-cases/pages/PhishingDetection';
import InsiderThreat from '../src/use-cases/pages/InsiderThreat';

describe('Use Cases Integration Tests - Standalone Components', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Standalone Component Architecture', () => {
        it('all components render independently without shared dependencies', () => {
            const components = [
                { Component: PhishingDetection, testId: 'comprehensive-phishing', title: 'Comprehensive Phishing Prevention' },
                { Component: InsiderThreat, testId: 'insider-protection', title: 'Insider Protection' }
            ];

            components.forEach(({ Component, testId, title }) => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Check if component renders with correct testId
                expect(screen.getByTestId(testId)).toBeInTheDocument();

                // Check if component renders the correct title
                expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();

                // PhishingDetection has "Business Impact" instead of "Performance Metrics"
                if (Component === PhishingDetection) {
                    expect(screen.getByText('Business Impact')).toBeInTheDocument();
                } else {
                    // InsiderThreat also uses "Business Impact"
                    expect(screen.getByText('Business Impact')).toBeInTheDocument();
                }

                unmount();
            });
        });

        it('all components have their own embedded data structures', () => {
            const components = [
                { Component: PhishingDetection, expectedMetrics: ['99.9%', '96.7%', '99%'] },
                { Component: InsiderThreat, expectedMetrics: ['99%', '85%', '137%'] }
            ];

            components.forEach(({ Component, expectedMetrics }) => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Check that each component has its specific metrics
                expectedMetrics.forEach(metric => {
                    expect(screen.getByText(metric)).toBeInTheDocument();
                });

                unmount();
            });
        });
    });

    describe('Analytics Integration - Component Specific', () => {
        it('all components initialize analytics correctly with their own events', () => {
            const components = [
                { Component: PhishingDetection, expectedEvent: 'comprehensive_phishing_prevention_view' },
                { Component: InsiderThreat, expectedEvent: 'insider_protection_view' }
            ];

            components.forEach(({ Component, expectedEvent }) => {
                vi.clearAllMocks();

                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                expect(initializePostHog).toHaveBeenCalled();
                expect(posthogEvent).toHaveBeenCalledWith(expectedEvent);

                unmount();
            });
        });
    });

    describe('Component Independence Validation', () => {
        it('components do not share CSS classes or dependencies', () => {
            const components = [
                { Component: PhishingDetection, expectedContainer: 'comprehensive-phishing-container' },
                { Component: InsiderThreat, expectedContainer: 'insider-protection-container' }
            ];

            components.forEach(({ Component, expectedContainer }) => {
                const { unmount, container } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Check for component-specific container class
                const componentContainer = container.querySelector(`.${expectedContainer}`);
                expect(componentContainer).toBeInTheDocument();

                unmount();
            });
        });

        it('components have unique scenario content and styling', () => {
            const components = [
                { Component: PhishingDetection, expectedScenarioType: 'Real-World Phishing Incidents' },
                { Component: InsiderThreat, expectedScenarioType: 'Real-World Insider Protection Incidents' }
            ];

            components.forEach(({ Component, expectedScenarioType }) => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Check for component-specific scenario section title
                expect(screen.getByText(expectedScenarioType)).toBeInTheDocument();

                unmount();
            });
        });
    });

    describe('Navigation Independence', () => {
        it('all components have consistent but independent navigation structure', () => {
            const components = [PhishingDetection, InsiderThreat];

            components.forEach(Component => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Back link should exist in each component
                const backLinks = screen.getAllByText('Back to Use Cases');
                expect(backLinks.length).toBeGreaterThanOrEqual(1);

                // All back links should have correct href
                backLinks.forEach(link => {
                    expect(link.closest('a')).toHaveAttribute('href', '/use-cases');
                });

                unmount();
            });
        });
    });

    describe('Error Resilience - Standalone Components', () => {
        it('components handle rendering gracefully even with undefined props', () => {
            const components = [PhishingDetection, InsiderThreat];

            components.forEach(Component => {
                expect(() => {
                    render(
                        <MemoryRouter>
                            <Component />
                        </MemoryRouter>
                    );
                }).not.toThrow();
            });
        });
    });
});
