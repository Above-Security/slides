import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { clarityEvent, claritySet, initializeClarity } from '../src/utils/clarity';

// Mock Clarity analytics
vi.mock('../src/utils/clarity', () => ({
    clarityEvent: vi.fn(),
    claritySet: vi.fn(),
    initializeClarity: vi.fn()
}));

// Mock LogoWatermark component
vi.mock('../src/components/LogoWatermark', () => ({
    Logo: ({ className }) => <div data-testid="logo" className={className}>Logo</div>
}));

// Import standalone components only - no shared abstractions
import PhishingDetection from '../src/use-cases/pages/PhishingDetection';
import AccountTakeover from '../src/use-cases/pages/AccountTakeover';
import InsiderThreat from '../src/use-cases/pages/InsiderThreat';
import ZeroDayProtection from '../src/use-cases/pages/ZeroDayProtection';

describe('Use Cases Integration Tests - Standalone Components', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Standalone Component Architecture', () => {
        it('all components render independently without shared dependencies', () => {
            const components = [
                { Component: PhishingDetection, testId: 'phishing-detection', title: 'Phishing Detection' },
                { Component: AccountTakeover, testId: 'account-takeover', title: 'Account Takeover Prevention' },
                { Component: InsiderThreat, testId: 'insider-threat', title: 'Insider Threat Detection' },
                { Component: ZeroDayProtection, testId: 'zero-day-protection', title: 'Zero-Day Protection' }
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
                expect(screen.getByText(title)).toBeInTheDocument();
                
                // Check if component has Performance Metrics section
                expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
                
                unmount();
            });
        });

        it('all components have their own embedded data structures', () => {
            const components = [
                { Component: PhishingDetection, expectedMetrics: ['99.7%', '<0.1%', '<200ms'] },
                { Component: AccountTakeover, expectedMetrics: ['99.5%', '<0.2%', '<150ms'] },
                { Component: InsiderThreat, expectedMetrics: ['98.9%', '<0.3%', '<300ms'] },
                { Component: ZeroDayProtection, expectedMetrics: ['97.8%', '<0.5%', '<500ms'] }
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
                { Component: PhishingDetection, expectedEvent: 'phishing_detection_view' },
                { Component: AccountTakeover, expectedEvent: 'account_takeover_view' },
                { Component: InsiderThreat, expectedEvent: 'insider_threat_view' },
                { Component: ZeroDayProtection, expectedEvent: 'zero_day_protection_view' }
            ];

            components.forEach(({ Component, expectedEvent }) => {
                vi.clearAllMocks();
                
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                expect(initializeClarity).toHaveBeenCalled();
                expect(clarityEvent).toHaveBeenCalledWith(expectedEvent);
                
                unmount();
            });
        });
    });

    describe('Component Independence Validation', () => {
        it('components do not share CSS classes or dependencies', () => {
            const components = [
                { Component: PhishingDetection, expectedContainer: 'phishing-detection-container' },
                { Component: AccountTakeover, expectedContainer: 'account-takeover-container' },
                { Component: InsiderThreat, expectedContainer: 'insider-threat-container' },
                { Component: ZeroDayProtection, expectedContainer: 'zero-day-protection-container' }
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
                { Component: PhishingDetection, expectedScenarioType: 'Real-World Phishing Scenarios' },
                { Component: AccountTakeover, expectedScenarioType: 'Real-World Account Takeover Scenarios' },
                { Component: InsiderThreat, expectedScenarioType: 'Real-World Insider Threat Scenarios' },
                { Component: ZeroDayProtection, expectedScenarioType: 'Real-World Zero-Day Scenarios' }
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
            const components = [PhishingDetection, AccountTakeover, InsiderThreat, ZeroDayProtection];

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
            const components = [PhishingDetection, AccountTakeover, InsiderThreat, ZeroDayProtection];

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
