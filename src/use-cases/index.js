// Use Cases Module Exports - Independent Components Only
export { default as UseCasesIndex } from './pages/UseCasesIndex';

// Individual Use Case Components - Completely Independent
export { default as PhishingDetection } from './pages/PhishingDetection';
export { default as AccountTakeover } from './pages/AccountTakeover';
export { default as InsiderThreat } from './pages/InsiderThreat';
export { default as ZeroDayProtection } from './pages/ZeroDayProtection';

// Re-export for convenience
export * from './pages/UseCasesIndex';
