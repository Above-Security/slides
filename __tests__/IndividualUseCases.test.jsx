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
import AccountTakeover from '../src/use-cases/pages/AccountTakeover';
import InsiderThreat from '../src/use-cases/pages/InsiderThreat';
import ZeroDayProtection from '../src/use-cases/pages/ZeroDayProtection';

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

    describe('AccountTakeover Component', () => {
        it('renders account takeover use case correctly', () => {
            renderWithRouter(AccountTakeover);

            expect(screen.getByText('Account Takeover Prevention')).toBeInTheDocument();
            expect(screen.getByText('Behavioral analysis to detect unauthorized access')).toBeInTheDocument();
            expect(screen.getByText('99.5%')).toBeInTheDocument(); // Detection rate
        });

        it('renders all 3 account takeover scenarios', () => {
            renderWithRouter(AccountTakeover);

            expect(screen.getByText('Account Takeover via Shared Cookie')).toBeInTheDocument();
            expect(screen.getByText('Credential Stuffing Attack')).toBeInTheDocument();
            expect(screen.getByText('Privilege Escalation Attack')).toBeInTheDocument();
        });

        it('renders behavioral analysis content', () => {
            renderWithRouter(AccountTakeover);

            expect(screen.getByText('Advanced Behavioral Analysis')).toBeInTheDocument();
            expect(screen.getByText('Identity Drift Detection')).toBeInTheDocument();
            expect(screen.getByText('Session Analysis')).toBeInTheDocument();
            expect(screen.getByText('Privilege Monitoring')).toBeInTheDocument();
        });

        it('tracks analytics correctly for account takeover', () => {
            renderWithRouter(AccountTakeover);

            expect(clarityEvent).toHaveBeenCalledWith('account_takeover_view');
            expect(claritySet).toHaveBeenCalledWith('page_type', 'account_takeover');
            expect(claritySet).toHaveBeenCalledWith('use_case', 'account-takeover');
        });
    });

    describe('InsiderThreat Component', () => {
        it('renders insider threat use case correctly', () => {
            renderWithRouter(InsiderThreat);

            expect(screen.getByText('Insider Threat Detection')).toBeInTheDocument();
            expect(screen.getByText('Cross-app behavior correlation for privileged misuse')).toBeInTheDocument();
            expect(screen.getByText('98.9%')).toBeInTheDocument(); // Detection rate
        });

        it('renders all 3 insider threat scenarios', () => {
            renderWithRouter(InsiderThreat);

            expect(screen.getByText('Privileged Misuse by Insider')).toBeInTheDocument();
            expect(screen.getByText('Mass Data Download')).toBeInTheDocument();
            expect(screen.getByText('Compliance Policy Violation')).toBeInTheDocument();
        });

        it('renders cross-application behavior correlation content', () => {
            renderWithRouter(InsiderThreat);

            expect(screen.getByText('Cross-Application Behavior Correlation')).toBeInTheDocument();
            expect(screen.getByText('Temporal Patterns')).toBeInTheDocument();
            expect(screen.getByText('Data Access Patterns')).toBeInTheDocument();
            expect(screen.getByText('Sharing Behaviors')).toBeInTheDocument();
        });

        it('renders specific insider threat indicators', () => {
            renderWithRouter(InsiderThreat);

            expect(screen.getByText(/Unusual access times and duration/)).toBeInTheDocument();
            expect(screen.getByText(/Mass data downloads and exports/)).toBeInTheDocument();
            expect(screen.getByText(/External sharing of internal documents/)).toBeInTheDocument();
        });

        it('tracks analytics correctly for insider threat', () => {
            renderWithRouter(InsiderThreat);

            expect(clarityEvent).toHaveBeenCalledWith('insider_threat_view');
            expect(claritySet).toHaveBeenCalledWith('page_type', 'insider_threat');
            expect(claritySet).toHaveBeenCalledWith('use_case', 'insider-threat');
        });
    });

    describe('ZeroDayProtection Component', () => {
        it('renders zero-day protection use case correctly', () => {
            renderWithRouter(ZeroDayProtection);

            expect(screen.getByText('Zero-Day Protection')).toBeInTheDocument();
            expect(screen.getByText('Runtime analysis for unknown threat detection')).toBeInTheDocument();
            expect(screen.getByText('97.8%')).toBeInTheDocument(); // Detection rate
        });

        it('renders all 2 zero-day scenarios', () => {
            renderWithRouter(ZeroDayProtection);

            expect(screen.getByText('Novel Browser-Based Malware')).toBeInTheDocument();
            expect(screen.getByText('Unknown Command & Control')).toBeInTheDocument();
        });

        it('renders runtime analysis content', () => {
            renderWithRouter(ZeroDayProtection);

            expect(screen.getByText('Runtime Analysis for Unknown Threats')).toBeInTheDocument();
            expect(screen.getByText('DOM Manipulation Analysis')).toBeInTheDocument();
            expect(screen.getByText('Communication Pattern Detection')).toBeInTheDocument();
            expect(screen.getByText('Machine Learning Models')).toBeInTheDocument();
        });

        it('renders zero-day protection benefits', () => {
            renderWithRouter(ZeroDayProtection);

            expect(screen.getByText('Zero-Day Protection Benefits')).toBeInTheDocument();
            expect(screen.getByText(/Proactive defense against unknown attack vectors/)).toBeInTheDocument();
            expect(screen.getByText(/No reliance on signature updates/)).toBeInTheDocument();
        });

        it('tracks analytics correctly for zero-day protection', () => {
            renderWithRouter(ZeroDayProtection);

            expect(clarityEvent).toHaveBeenCalledWith('zero_day_protection_view');
            expect(claritySet).toHaveBeenCalledWith('page_type', 'zero_day_protection');
            expect(claritySet).toHaveBeenCalledWith('use_case', 'zero-day-protection');
        });
    });

    describe('Cross-Component Consistency', () => {
        const components = [
            { name: 'PhishingDetection', Component: PhishingDetection },
            { name: 'AccountTakeover', Component: AccountTakeover },
            { name: 'InsiderThreat', Component: InsiderThreat },
            { name: 'ZeroDayProtection', Component: ZeroDayProtection }
        ];

        it('all components render metrics section', () => {
            // PhishingDetection has "Business Impact", others have "Performance Metrics"
            const { unmount: unmountPhishing } = renderWithRouter(PhishingDetection);
            expect(screen.getByText('Business Impact')).toBeInTheDocument();
            unmountPhishing();

            [AccountTakeover, InsiderThreat, ZeroDayProtection].forEach((Component) => {
                const { unmount } = renderWithRouter(Component);
                expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
                unmount();
            });
        });

        it('all components render scenarios section', () => {
            // PhishingDetection has "Real-World Phishing Incidents", others have different scenario sections
            const { unmount: unmountPhishing } = renderWithRouter(PhishingDetection);
            expect(screen.getByText('Real-World Phishing Incidents')).toBeInTheDocument();
            unmountPhishing();

            [AccountTakeover, InsiderThreat, ZeroDayProtection].forEach((Component) => {
                const { unmount } = renderWithRouter(Component);
                // Each component has its own scenario section title
                const scenarioText = screen.getByText(/Real-World.*Scenarios/);
                expect(scenarioText).toBeInTheDocument();
                unmount();
            });
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
                AccountTakeover: 'account_takeover_view', 
                InsiderThreat: 'insider_threat_view',
                ZeroDayProtection: 'zero_day_protection_view'
            };
            
            const expectedPageTypes = {
                PhishingDetection: 'comprehensive_phishing_prevention',
                AccountTakeover: 'account_takeover',
                InsiderThreat: 'insider_threat', 
                ZeroDayProtection: 'zero_day_protection'
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
            const components = [PhishingDetection, AccountTakeover, InsiderThreat, ZeroDayProtection];
            
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

            // AccountTakeover should load account-takeover data
            renderWithRouter(AccountTakeover);
            expect(screen.getByText('99.5%')).toBeInTheDocument(); // Account takeover detection rate
            expect(screen.getByTestId('account-takeover')).toBeInTheDocument();
            cleanup();

            // InsiderThreat should load insider-threat data
            renderWithRouter(InsiderThreat);
            expect(screen.getByText('98.9%')).toBeInTheDocument(); // Insider threat detection rate
            expect(screen.getByTestId('insider-threat')).toBeInTheDocument();
            cleanup();

            // ZeroDayProtection should load zero-day-protection data
            renderWithRouter(ZeroDayProtection);
            expect(screen.getByText('97.8%')).toBeInTheDocument(); // Zero-day detection rate
            expect(screen.getByTestId('zero-day-protection')).toBeInTheDocument();
        });
    });
});
