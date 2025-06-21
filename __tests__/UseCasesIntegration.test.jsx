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

import { 
    useCasesData, 
    getUseCaseById, 
    getAllUseCases, 
    getUseCaseIds 
} from '../src/use-cases/data/useCasesData';
import BaseUseCaseLayout from '../src/use-cases/components/BaseUseCaseLayout';
import PhishingDetection from '../src/use-cases/pages/PhishingDetection';
import AccountTakeover from '../src/use-cases/pages/AccountTakeover';
import InsiderThreat from '../src/use-cases/pages/InsiderThreat';
import ZeroDayProtection from '../src/use-cases/pages/ZeroDayProtection';

describe('Use Cases Integration Tests', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('Data Integration', () => {
        it('all components use correct data from useCasesData', () => {
            const components = [
                { Component: PhishingDetection, id: 'phishing-detection' },
                { Component: AccountTakeover, id: 'account-takeover' },
                { Component: InsiderThreat, id: 'insider-threat' },
                { Component: ZeroDayProtection, id: 'zero-day-protection' }
            ];

            components.forEach(({ Component, id }) => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                const expectedData = getUseCaseById(id);
                expect(expectedData).toBeDefined();
                
                // Check if component renders the correct title
                expect(screen.getByText(expectedData.title)).toBeInTheDocument();
                
                // Check if detection rate is displayed
                expect(screen.getByText(expectedData.metrics.detectionRate)).toBeInTheDocument();
                
                unmount();
            });
        });

        it('data helpers work correctly with all use cases', () => {
            const allUseCases = getAllUseCases();
            expect(allUseCases).toHaveLength(4);

            const useCaseIds = getUseCaseIds();
            expect(useCaseIds).toEqual([
                'phishing-detection',
                'account-takeover',
                'insider-threat', 
                'zero-day-protection'
            ]);

            useCaseIds.forEach(id => {
                const useCase = getUseCaseById(id);
                expect(useCase).toBeDefined();
                expect(useCase.id).toBe(id);
            });
        });
    });

    describe('Component-Data Consistency', () => {
        it('BaseUseCaseLayout correctly handles all use case data structures', () => {
            const useCaseIds = getUseCaseIds();
            
            useCaseIds.forEach(id => {
                const useCase = getUseCaseById(id);
                const { unmount } = render(
                    <MemoryRouter>
                        <BaseUseCaseLayout useCase={useCase} useCaseId={id} />
                    </MemoryRouter>
                );

                // Should render title
                expect(screen.getByText(useCase.title)).toBeInTheDocument();
                
                // Should render metrics
                expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
                expect(screen.getByText(useCase.metrics.detectionRate)).toBeInTheDocument();
                
                // Should render scenarios
                expect(screen.getByText('Real-World Scenarios')).toBeInTheDocument();
                useCase.scenarios.forEach(scenario => {
                    expect(screen.getByText(scenario.title)).toBeInTheDocument();
                });

                unmount();
            });
        });

        it('all scenarios have required data structure', () => {
            const allUseCases = getAllUseCases();
            
            allUseCases.forEach(useCase => {
                useCase.scenarios.forEach(scenario => {
                    // Test in BaseUseCaseLayout
                    const { unmount } = render(
                        <MemoryRouter>
                            <BaseUseCaseLayout useCase={useCase} useCaseId={useCase.id} />
                        </MemoryRouter>
                    );

                    // Scenario should render without errors
                    expect(screen.getByText(scenario.title)).toBeInTheDocument();
                    expect(screen.getByText(scenario.severity.toUpperCase())).toBeInTheDocument();
                    
                    // Techniques should render
                    scenario.techniques.forEach(technique => {
                        expect(screen.getByText(technique)).toBeInTheDocument();
                    });

                    unmount();
                });
            });
        });
    });

    describe('Analytics Integration Across Components', () => {
        it('all components initialize analytics correctly', () => {
            const components = [
                { Component: PhishingDetection, id: 'phishing-detection' },
                { Component: AccountTakeover, id: 'account-takeover' },
                { Component: InsiderThreat, id: 'insider-threat' },
                { Component: ZeroDayProtection, id: 'zero-day-protection' }
            ];

            components.forEach(({ Component, id }) => {
                vi.clearAllMocks();
                
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                expect(initializeClarity).toHaveBeenCalledOnce();
                expect(clarityEvent).toHaveBeenCalledWith('use_case_detail_view', {
                    use_case: id
                });
                expect(claritySet).toHaveBeenCalledWith('page_type', 'use_case_detail');
                expect(claritySet).toHaveBeenCalledWith('current_use_case', id);

                unmount();
            });
        });

        it('scenario click tracking works across all use cases', async () => {
            const user = userEvent.setup();
            const allUseCases = getAllUseCases();

            for (const useCase of allUseCases) {
                vi.clearAllMocks();
                
                const { unmount } = render(
                    <MemoryRouter>
                        <BaseUseCaseLayout useCase={useCase} useCaseId={useCase.id} />
                    </MemoryRouter>
                );

                // Click on first scenario
                const firstScenario = useCase.scenarios[0];
                const scenarioButton = screen.getByText(firstScenario.title).closest('[role="button"]');
                
                await user.click(scenarioButton);

                expect(clarityEvent).toHaveBeenCalledWith('scenario_clicked', {
                    use_case: useCase.id,
                    scenario: firstScenario.id
                });

                unmount();
            }
        });
    });

    describe('Component Architecture Validation', () => {
        it('all individual components extend BaseUseCaseLayout correctly', () => {
            const components = [PhishingDetection, AccountTakeover, InsiderThreat, ZeroDayProtection];
            
            components.forEach(Component => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Should have base layout elements
                expect(screen.getByText('Performance Metrics')).toBeInTheDocument();
                expect(screen.getByText('Real-World Scenarios')).toBeInTheDocument();
                expect(screen.getByText('Back to Use Cases')).toBeInTheDocument();
                expect(screen.getByText('All Use Cases')).toBeInTheDocument();
                expect(screen.getByText('View Full Presentation')).toBeInTheDocument();

                unmount();
            });
        });

        it('all components have additional custom content', () => {
            const components = [PhishingDetection, AccountTakeover, InsiderThreat, ZeroDayProtection];
            
            components.forEach(Component => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Should have additional content sections beyond base layout
                const regions = screen.getAllByRole('region');
                expect(regions.length).toBeGreaterThan(2); // More than just metrics and scenarios

                unmount();
            });
        });
    });

    describe('CSS and Styling Integration', () => {
        it('all components apply color variables correctly', () => {
            const useCaseIds = getUseCaseIds();
            
            useCaseIds.forEach(id => {
                const useCase = getUseCaseById(id);
                const { unmount } = render(
                    <MemoryRouter>
                        <BaseUseCaseLayout useCase={useCase} useCaseId={id} />
                    </MemoryRouter>
                );

                const heroSection = screen.getByText(useCase.title).closest('.use-case-hero');
                expect(heroSection).toHaveStyle(`--accent-color: ${useCase.color}`);

                unmount();
            });
        });

        it('severity badges render correctly for all scenarios', () => {
            const allUseCases = getAllUseCases();
            
            allUseCases.forEach(useCase => {
                const { unmount } = render(
                    <MemoryRouter>
                        <BaseUseCaseLayout useCase={useCase} useCaseId={useCase.id} />
                    </MemoryRouter>
                );

                useCase.scenarios.forEach(scenario => {
                    const severityBadge = screen.getByText(scenario.severity.toUpperCase());
                    expect(severityBadge).toHaveClass(`severity-badge`);
                    expect(severityBadge).toHaveClass(scenario.severity);
                });

                unmount();
            });
        });
    });

    describe('Navigation Integration', () => {
        it('all components have consistent navigation structure', () => {
            const components = [PhishingDetection, AccountTakeover, InsiderThreat, ZeroDayProtection];
            
            components.forEach(Component => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Back link
                const backLink = screen.getByText('Back to Use Cases').closest('a');
                expect(backLink).toHaveAttribute('href', '/use-cases');

                // Navigation footer
                const useCasesLink = screen.getByText('All Use Cases').closest('a');
                expect(useCasesLink).toHaveAttribute('href', '/use-cases');

                const presentationLink = screen.getByText('View Full Presentation').closest('a');
                expect(presentationLink).toHaveAttribute('href', '/slide/1');

                unmount();
            });
        });
    });

    describe('Error Resilience', () => {
        it('components handle missing or corrupted data gracefully', () => {
            const invalidUseCase = {
                id: 'invalid',
                title: 'Invalid Use Case',
                // Missing required fields
            };

            // Should render error state or handle gracefully
            expect(() => {
                render(
                    <MemoryRouter>
                        <BaseUseCaseLayout useCase={invalidUseCase} useCaseId="invalid" />
                    </MemoryRouter>
                );
            }).not.toThrow();
        });

        it('components handle analytics failures without breaking', () => {
            initializeClarity.mockImplementation(() => {
                throw new Error('Analytics service unavailable');
            });

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

    describe('Performance and Memory', () => {
        it('components clean up properly on unmount', () => {
            const components = [PhishingDetection, AccountTakeover, InsiderThreat, ZeroDayProtection];
            
            components.forEach(Component => {
                const { unmount } = render(
                    <MemoryRouter>
                        <Component />
                    </MemoryRouter>
                );

                // Should unmount without errors
                expect(() => unmount()).not.toThrow();
            });
        });

        it('data operations are efficient', () => {
            const start = performance.now();
            
            // Perform multiple data operations
            const allUseCases = getAllUseCases();
            const useCaseIds = getUseCaseIds();
            useCaseIds.forEach(id => getUseCaseById(id));
            
            const end = performance.now();
            
            // Should complete in under 10ms
            expect(end - start).toBeLessThan(10);
        });
    });
});
