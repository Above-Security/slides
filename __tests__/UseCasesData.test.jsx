import { describe, it, expect } from 'vitest';
import { 
    useCasesData, 
    getUseCaseById, 
    getAllUseCases, 
    getUseCaseIds 
} from '../src/use-cases/data/useCasesData';

describe('Use Cases Data Module', () => {
    describe('useCasesData Structure', () => {
        it('contains all 4 use cases', () => {
            const expectedIds = [
                'phishing-detection',
                'account-takeover', 
                'insider-threat',
                'zero-day-protection'
            ];
            
            expect(Object.keys(useCasesData)).toEqual(expect.arrayContaining(expectedIds));
            expect(Object.keys(useCasesData)).toHaveLength(4);
        });

        it('has complete data structure for each use case', () => {
            Object.values(useCasesData).forEach((useCase) => {
                // Required fields
                expect(useCase).toHaveProperty('id');
                expect(useCase).toHaveProperty('title');
                expect(useCase).toHaveProperty('subtitle');
                expect(useCase).toHaveProperty('description');
                expect(useCase).toHaveProperty('icon');
                expect(useCase).toHaveProperty('color');
                expect(useCase).toHaveProperty('scenarios');
                expect(useCase).toHaveProperty('metrics');

                // Scenarios validation
                expect(Array.isArray(useCase.scenarios)).toBe(true);
                expect(useCase.scenarios.length).toBeGreaterThan(0);

                useCase.scenarios.forEach((scenario) => {
                    expect(scenario).toHaveProperty('id');
                    expect(scenario).toHaveProperty('title');
                    expect(scenario).toHaveProperty('icon');
                    expect(scenario).toHaveProperty('attack');
                    expect(scenario).toHaveProperty('detection');
                    expect(scenario).toHaveProperty('outcome');
                    expect(scenario).toHaveProperty('severity');
                    expect(scenario).toHaveProperty('techniques');
                    expect(scenario).toHaveProperty('indicators');
                    
                    expect(Array.isArray(scenario.techniques)).toBe(true);
                    expect(Array.isArray(scenario.indicators)).toBe(true);
                    expect(['critical', 'high', 'medium', 'low']).toContain(scenario.severity);
                });

                // Metrics validation
                expect(useCase.metrics).toHaveProperty('detectionRate');
                expect(useCase.metrics).toHaveProperty('falsePositives');
                expect(useCase.metrics).toHaveProperty('responseTime');
                expect(useCase.metrics).toHaveProperty('coverage');
            });
        });

        it('has correct scenario counts for each use case', () => {
            expect(useCasesData['phishing-detection'].scenarios).toHaveLength(4);
            expect(useCasesData['account-takeover'].scenarios).toHaveLength(3);
            expect(useCasesData['insider-threat'].scenarios).toHaveLength(3);
            expect(useCasesData['zero-day-protection'].scenarios).toHaveLength(2);
        });
    });

    describe('getUseCaseById', () => {
        it('returns correct use case for valid ID', () => {
            const phishingCase = getUseCaseById('phishing-detection');
            expect(phishingCase).toBeDefined();
            expect(phishingCase.id).toBe('phishing-detection');
            expect(phishingCase.title).toBe('Phishing Detection');
        });

        it('returns null for invalid ID', () => {
            expect(getUseCaseById('non-existent-id')).toBeNull();
            expect(getUseCaseById('')).toBeNull();
            expect(getUseCaseById(undefined)).toBeNull();
        });

        it('returns all use cases correctly', () => {
            const validIds = ['phishing-detection', 'account-takeover', 'insider-threat', 'zero-day-protection'];
            
            validIds.forEach(id => {
                const useCase = getUseCaseById(id);
                expect(useCase).toBeDefined();
                expect(useCase.id).toBe(id);
            });
        });
    });

    describe('getAllUseCases', () => {
        it('returns array of all use cases', () => {
            const allUseCases = getAllUseCases();
            expect(Array.isArray(allUseCases)).toBe(true);
            expect(allUseCases).toHaveLength(4);
            
            const titles = allUseCases.map(uc => uc.title);
            expect(titles).toContain('Phishing Detection');
            expect(titles).toContain('Account Takeover Prevention');
            expect(titles).toContain('Insider Threat Detection');
            expect(titles).toContain('Zero-Day Protection');
        });

        it('maintains object integrity', () => {
            const allUseCases = getAllUseCases();
            allUseCases.forEach(useCase => {
                expect(useCase).toHaveProperty('id');
                expect(useCase).toHaveProperty('scenarios');
                expect(useCase).toHaveProperty('metrics');
            });
        });
    });

    describe('getUseCaseIds', () => {
        it('returns array of all use case IDs', () => {
            const ids = getUseCaseIds();
            expect(Array.isArray(ids)).toBe(true);
            expect(ids).toHaveLength(4);
            expect(ids).toEqual(expect.arrayContaining([
                'phishing-detection',
                'account-takeover',
                'insider-threat',
                'zero-day-protection'
            ]));
        });
    });

    describe('Data Quality and Consistency', () => {
        it('has unique IDs for all use cases', () => {
            const ids = Object.keys(useCasesData);
            const uniqueIds = [...new Set(ids)];
            expect(ids).toHaveLength(uniqueIds.length);
        });

        it('has unique scenario IDs within each use case', () => {
            Object.values(useCasesData).forEach(useCase => {
                const scenarioIds = useCase.scenarios.map(s => s.id);
                const uniqueScenarioIds = [...new Set(scenarioIds)];
                expect(scenarioIds).toHaveLength(uniqueScenarioIds.length);
            });
        });

        it('has consistent color variables', () => {
            Object.values(useCasesData).forEach(useCase => {
                expect(useCase.color).toMatch(/^var\(--[a-z-]+\)$/);
            });
        });

        it('has consistent icon classes', () => {
            Object.values(useCasesData).forEach(useCase => {
                expect(useCase.icon).toMatch(/^fas? fa-[a-z-]+$/);
                
                useCase.scenarios.forEach(scenario => {
                    expect(scenario.icon).toMatch(/^fa[brs]? fa-[a-z-]+$/);
                });
            });
        });

        it('has non-empty arrays for techniques and indicators', () => {
            Object.values(useCasesData).forEach(useCase => {
                useCase.scenarios.forEach(scenario => {
                    expect(scenario.techniques.length).toBeGreaterThan(0);
                    expect(scenario.indicators.length).toBeGreaterThan(0);
                    
                    scenario.techniques.forEach(technique => {
                        expect(typeof technique).toBe('string');
                        expect(technique.length).toBeGreaterThan(0);
                    });
                    
                    scenario.indicators.forEach(indicator => {
                        expect(typeof indicator).toBe('string');
                        expect(indicator.length).toBeGreaterThan(0);
                    });
                });
            });
        });

        it('has realistic detection rates and metrics', () => {
            Object.values(useCasesData).forEach(useCase => {
                expect(useCase.metrics.detectionRate).toMatch(/^\d+\.\d+%$/);
                expect(useCase.metrics.falsePositives).toMatch(/^<?\d+\.\d+%$/);
                expect(useCase.metrics.responseTime).toMatch(/^<?\d+ms$/);
                expect(useCase.metrics.coverage).toBeDefined();
                expect(useCase.metrics.coverage.length).toBeGreaterThan(0);
            });
        });
    });
});
