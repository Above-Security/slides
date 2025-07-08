import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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

import PhishingDetection from '../src/use-cases/pages/PhishingDetection';
import InsiderThreat from '../src/use-cases/pages/InsiderThreat';

describe('Individual Use Case Components', () => {
    const renderWithRouter = (Component) => {
        return render(
            <MemoryRouter>
                <Component />
            </MemoryRouter>
        );
    };

    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('PhishingDetection Component', () => {
        it('renders phishing detection use case correctly', () => {
            renderWithRouter(PhishingDetection);

            expect(screen.getByText('Comprehensive Phishing Prevention')).toBeInTheDocument();
            expect(screen.getByText('Beyond Email, Beyond LOTS — Runtime Protection Against Modern Threats')).toBeInTheDocument();
            expect(screen.getByText('Living Off Trusted Services (LOTS) attacks')).toBeInTheDocument(); // Key point
        });

        it('renders all 4 phishing scenarios', () => {
            renderWithRouter(PhishingDetection);

            expect(screen.getByText('Cyberhaven Incident (2024)')).toBeInTheDocument();
            expect(screen.getByText('DocuSign-Embedded OAuth Phishing')).toBeInTheDocument();
            expect(screen.getByText('Slack/Teams IM-Driven Payloads')).toBeInTheDocument();
            expect(screen.getByText('Adversary-in-the-Middle Session Hijacking')).toBeInTheDocument();
        });

        it('renders specific phishing content and benefits', () => {
            renderWithRouter(PhishingDetection);

            expect(screen.getByText('Executive Summary')).toBeInTheDocument();
            expect(screen.getByText('Real-World Phishing Incidents')).toBeInTheDocument();
            expect(screen.getByText('Why Traditional Tools Miss Modern Phishing')).toBeInTheDocument();
        });

        it('has correct test ID for phishing detection page', () => {
            renderWithRouter(PhishingDetection);
            expect(screen.getByTestId('comprehensive-phishing')).toBeInTheDocument();
        });

        it('tracks analytics correctly for phishing detection', () => {
            renderWithRouter(PhishingDetection);

            expect(initializeClarity).toHaveBeenCalledOnce();
            expect(clarityEvent).toHaveBeenCalledWith('comprehensive_phishing_prevention_view');
            expect(claritySet).toHaveBeenCalledWith('page_type', 'comprehensive_phishing_prevention');
            expect(claritySet).toHaveBeenCalledWith('use_case', 'comprehensive-phishing-prevention');
        });
    });

    describe('InsiderThreat Component', () => {
        it('renders insider threat use case correctly', () => {
            renderWithRouter(InsiderThreat);

            expect(screen.getByRole('heading', { name: 'Insider Protection' })).toBeInTheDocument();
            expect(screen.getByText('Post-auth browser visibility for human-centric security')).toBeInTheDocument();
            expect(screen.getByText('<15 minutes')).toBeInTheDocument(); // MTTD improvement
        });

        it('renders all 4 insider protection scenarios', () => {
            renderWithRouter(InsiderThreat);

            expect(screen.getByText('Notion Session After IdP Offboarding')).toBeInTheDocument();
            expect(screen.getByText('Confluence Export of Financial Data')).toBeInTheDocument();
            expect(screen.getByText('OAuth Grants to Unapproved Apps')).toBeInTheDocument();
            expect(screen.getByText('Sensitive Data into GenAI Tools')).toBeInTheDocument();
        });

        it('renders comprehensive insider protection content', () => {
            renderWithRouter(InsiderThreat);

            expect(screen.getByText('Real-Time User Engagement & Nudging')).toBeInTheDocument();
            expect(screen.getByText('Behavioral Pattern Recognition')).toBeInTheDocument();
            expect(screen.getByText('Human-Centric Protection Framework')).toBeInTheDocument();
        });

        it('renders specific insider protection indicators', () => {
            renderWithRouter(InsiderThreat);

            expect(screen.getByText(/Stale session cookies/)).toBeInTheDocument();
            expect(screen.getByText(/Incremental exports/)).toBeInTheDocument();
            expect(screen.getByText(/OAuth permissions to unsanctioned third-party applications/)).toBeInTheDocument();
        });

        it('tracks analytics correctly for insider protection', () => {
            renderWithRouter(InsiderThreat);

            expect(clarityEvent).toHaveBeenCalledWith('insider_protection_view');
            expect(claritySet).toHaveBeenCalledWith('page_type', 'insider_protection');
            expect(claritySet).toHaveBeenCalledWith('use_case', 'insider-protection');
        });
    });

    describe('Cross-Component Consistency', () => {
        const components = [
            { name: 'PhishingDetection', Component: PhishingDetection },
            { name: 'InsiderThreat', Component: InsiderThreat }
        ];

        it('all components render metrics section', () => {
            // PhishingDetection has "Business Impact", InsiderThreat has "Business Impact"
            const { unmount: unmountPhishing } = renderWithRouter(PhishingDetection);
            expect(screen.getByText('Business Impact')).toBeInTheDocument();
            unmountPhishing();

            const { unmount: unmountInsider } = renderWithRouter(InsiderThreat);
            expect(screen.getByText('Business Impact')).toBeInTheDocument();
            unmountInsider();
        });

        it('all components render scenarios section', () => {
            // PhishingDetection has "Real-World Phishing Incidents", InsiderThreat has "Real-World Incidents"
            const { unmount: unmountPhishing } = renderWithRouter(PhishingDetection);
            expect(screen.getByText('Real-World Phishing Incidents')).toBeInTheDocument();
            unmountPhishing();

            const { unmount: unmountInsider } = renderWithRouter(InsiderThreat);
            expect(screen.getByText('Real-World Insider Protection Incidents')).toBeInTheDocument();
            unmountInsider();
        });

        it('all components have navigation footer', () => {
            components.forEach(({ Component }) => {
                const { unmount } = renderWithRouter(Component);
                // Each component has its own footer with back links
                const backLinks = screen.getAllByText('Back to Use Cases');
                expect(backLinks.length).toBeGreaterThan(0);
                unmount();
            });
        });

        it('all components have back link to use cases', () => {
            components.forEach(({ Component }) => {
                const { unmount } = renderWithRouter(Component);
                const backLinks = screen.getAllByText('Back to Use Cases');
                const backLink = backLinks[0].closest('a');
                expect(backLink).toHaveAttribute('href', '/use-cases');
                unmount();
            });
        });

        it('all components initialize analytics', () => {
            const expectedEvents = {
                PhishingDetection: 'comprehensive_phishing_prevention_view',
                InsiderThreat: 'insider_protection_view'
            };

            const expectedPageTypes = {
                PhishingDetection: 'comprehensive_phishing_prevention',
                InsiderThreat: 'insider_protection'
            };

            components.forEach(({ Component, name }) => {
                vi.clearAllMocks();
                const { unmount } = renderWithRouter(Component);
                expect(initializeClarity).toHaveBeenCalledOnce();
                expect(clarityEvent).toHaveBeenCalledWith(expectedEvents[name]);
                expect(claritySet).toHaveBeenCalledWith('page_type', expectedPageTypes[name]);
                unmount();
            });
        });

        it('all components render additional info sections', () => {
            components.forEach(({ Component }) => {
                const { unmount } = renderWithRouter(Component);
                // Each component should have some additional content section
                const additionalSections = screen.getAllByRole('region');
                expect(additionalSections.length).toBeGreaterThan(2); // At least metrics, scenarios, and additional content
                unmount();
            });
        });
    });

    describe('Error Handling', () => {
        it('all components handle analytics failures gracefully', () => {
            const components = [PhishingDetection, InsiderThreat];

            // Mock analytics to fail
            initializeClarity.mockImplementation(() => {
                throw new Error('Analytics failed');
            });

            components.forEach(Component => {
                expect(() => renderWithRouter(Component)).not.toThrow();
                const { unmount } = renderWithRouter(Component);
                unmount();
            });
        });
    });

    describe('Data Integration', () => {
        it('all components load correct data for their use case', () => {
            // PhishingDetection should load comprehensive phishing data
            renderWithRouter(PhishingDetection);
            expect(screen.getByText('99.9%')).toBeInTheDocument(); // Improvement metric
            expect(screen.getByTestId('comprehensive-phishing')).toBeInTheDocument();
            cleanup();

            // InsiderThreat should load insider-protection data
            renderWithRouter(InsiderThreat);
            expect(screen.getByText('99%')).toBeInTheDocument(); // MTTD improvement
            expect(screen.getByTestId('insider-protection')).toBeInTheDocument();
        });
    });
});
