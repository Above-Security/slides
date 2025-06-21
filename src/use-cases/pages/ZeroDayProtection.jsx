import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
import '../styles/ZeroDayProtection.css';

/**
 * ZeroDayProtection Use Case Component - Completely Independent
 * 
 * This component is completely self-contained with its own:
 * - Data structure (embedded)
 * - Styling (ZeroDayProtection.css)
 * - Analytics tracking
 * - Error handling
 * - Navigation logic
 * 
 * Features:
 * - 2 advanced zero-day scenarios
 * - 97.8% detection rate metrics
 * - Runtime behavior analysis capabilities
 * - Novel attack pattern identification
 * - Specialized zero-day protection content
 */

// Embedded data - specific to ZeroDayProtection only
const ZERO_DAY_PROTECTION_DATA = {
    id: 'zero-day-protection',
    title: 'Zero-Day Protection',
    subtitle: 'Runtime analysis for unknown threat detection',
    description: 'Behavioral and runtime analysis to detect unknown threats and novel attack patterns that bypass signature-based security solutions.',
    icon: 'fas fa-bug',
    color: 'var(--text-warning)',
    scenarios: [
        {
            id: 'novel-malware',
            title: 'Novel Browser-Based Malware',
            icon: 'fas fa-virus',
            attack: 'Unknown JavaScript-based malware exploits browser vulnerability to establish persistence and steal session tokens.',
            detection: 'Runtime behavior analysis detects unusual DOM manipulation patterns and suspicious network communications.',
            outcome: 'Malware execution blocked and browser quarantined',
            severity: 'critical',
            techniques: ['Zero-Day Exploit', 'Browser Hijacking', 'Token Theft'],
            indicators: ['DOM manipulation anomalies', 'Network behavior analysis', 'Execution pattern detection']
        },
        {
            id: 'unknown-c2',
            title: 'Unknown Command & Control',
            icon: 'fas fa-satellite-dish',
            attack: 'Novel C2 protocol uses legitimate SaaS applications to tunnel commands and exfiltrate data without detection.',
            detection: 'Machine learning models detect abnormal data flow patterns and communication timing inconsistent with legitimate usage.',
            outcome: 'C2 communication blocked and IOCs extracted',
            severity: 'high',
            techniques: ['C2 Communication', 'Living off the Land', 'Steganography'],
            indicators: ['Communication pattern analysis', 'Data flow anomalies', 'Timing correlation']
        }
    ],
    metrics: {
        detectionRate: '97.8%',
        falsePositives: '<0.5%',
        responseTime: '<500ms',
        coverage: 'Unknown and novel threats'
    }
};

const ZeroDayProtection = () => {
    useEffect(() => {
        try {
            // Initialize Clarity tracking for this specific use case
            initializeClarity();
            clarityEvent('zero_day_protection_view');
            claritySet('page_type', 'zero_day_protection');
            claritySet('use_case', 'zero-day-protection');
            console.log('ZeroDayProtection component loaded with analytics');
        } catch (error) {
            console.warn('Analytics initialization failed in ZeroDayProtection:', error);
        }
    }, []);

    const handleScenarioClick = (scenarioId) => {
        try {
            clarityEvent('zero_day_scenario_clicked', { scenario: scenarioId });
            console.log(`Zero-day scenario clicked: ${scenarioId}`);
        } catch (error) {
            console.warn('Analytics tracking failed in ZeroDayProtection:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>{ZERO_DAY_PROTECTION_DATA.title} - Above Security Use Cases</title>
            <meta name="description" content={ZERO_DAY_PROTECTION_DATA.description} />

            <div className="zero-day-protection-container" data-testid="zero-day-protection">
                <div className="zero-day-protection-content">
                    {/* Header */}
                    <header className="zero-day-protection-header">
                        <Link to="/use-cases" className="back-link">
                            <i className="fas fa-arrow-left"></i>
                            Back to Use Cases
                        </Link>

                        <div className="zero-day-protection-hero" style={{ '--accent-color': ZERO_DAY_PROTECTION_DATA.color }}>
                            <div className="zero-day-protection-hero-icon">
                                <i className={ZERO_DAY_PROTECTION_DATA.icon}></i>
                            </div>
                            <h1 className="zero-day-protection-hero-title">{ZERO_DAY_PROTECTION_DATA.title}</h1>
                            <p className="zero-day-protection-hero-subtitle">{ZERO_DAY_PROTECTION_DATA.subtitle}</p>
                            <p className="zero-day-protection-hero-description">{ZERO_DAY_PROTECTION_DATA.description}</p>
                        </div>
                    </header>

                    <main>
                        {/* Metrics Section */}
                        <section className="zero-day-protection-metrics" role="region" aria-labelledby="zero-day-protection-metrics-heading">
                            <h2 id="zero-day-protection-metrics-heading" className="zero-day-protection-section-title">Performance Metrics</h2>
                            <div className="zero-day-protection-metrics-grid">
                                {Object.entries(ZERO_DAY_PROTECTION_DATA.metrics).map(([key, value]) => (
                                    <div key={key} className="zero-day-protection-metric-card">
                                        <div className="zero-day-protection-metric-value">{value}</div>
                                        <div className="zero-day-protection-metric-label">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Scenarios Section */}
                        <section className="zero-day-protection-scenarios" role="region" aria-labelledby="zero-day-protection-scenarios-heading">
                            <h2 id="zero-day-protection-scenarios-heading" className="zero-day-protection-section-title">Real-World Zero-Day Scenarios</h2>
                            <div className="zero-day-protection-scenarios-grid">
                                {ZERO_DAY_PROTECTION_DATA.scenarios.map((scenario) => (
                                    <div
                                        key={scenario.id}
                                        className={`zero-day-protection-scenario-card ${scenario.severity}`}
                                        onClick={() => handleScenarioClick(scenario.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleScenarioClick(scenario.id);
                                            }
                                        }}
                                        aria-label={`View details for ${scenario.title} zero-day scenario`}
                                    >
                                        <div className="zero-day-protection-scenario-header">
                                            <div className="zero-day-protection-scenario-icon">
                                                <i className={scenario.icon}></i>
                                            </div>
                                            <div className="zero-day-protection-scenario-title-section">
                                                <h3 className="zero-day-protection-scenario-title">{scenario.title}</h3>
                                                <span className={`zero-day-protection-severity-badge ${scenario.severity}`}>
                                                    {scenario.severity.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="zero-day-protection-scenario-content">
                                            <div className="zero-day-protection-scenario-section">
                                                <h4 className="zero-day-protection-scenario-section-title">Attack Vector</h4>
                                                <p className="zero-day-protection-scenario-text">{scenario.attack}</p>
                                            </div>

                                            <div className="zero-day-protection-scenario-section">
                                                <h4 className="zero-day-protection-scenario-section-title">Above Detection</h4>
                                                <p className="zero-day-protection-scenario-text">{scenario.detection}</p>
                                            </div>

                                            <div className="zero-day-protection-scenario-outcome">
                                                <i className="fas fa-check"></i>
                                                {scenario.outcome}
                                            </div>

                                            <div className="zero-day-protection-scenario-techniques">
                                                <h5>Attack Techniques</h5>
                                                <div className="zero-day-protection-technique-tags">
                                                    {scenario.techniques.map((technique) => (
                                                        <span key={technique} className="zero-day-protection-technique-tag">
                                                            {technique}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="zero-day-protection-scenario-indicators">
                                                <h5>Detection Indicators</h5>
                                                <ul className="zero-day-protection-indicator-list">
                                                    {scenario.indicators.map((indicator) => (
                                                        <li key={indicator}>{indicator}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Zero-Day Protection-Specific Additional Content */}
                        <section className="zero-day-protection-additional-info" role="region" aria-labelledby="zero-day-protection-info-heading">
                            <div className="zero-day-protection-info-callout">
                                <h3 id="zero-day-protection-info-heading">
                                    <i className="fas fa-microscope"></i>
                                    Runtime Analysis for Unknown Threats
                                </h3>
                                <p>
                                    Zero-day attacks exploit unknown vulnerabilities and use novel techniques that 
                                    signature-based security solutions cannot detect. Above Security's runtime 
                                    analysis engine uses machine learning and behavioral analysis to identify 
                                    suspicious patterns, even when the specific attack has never been seen before.
                                </p>
                                <div className="zero-day-protection-analysis-techniques">
                                    <div className="zero-day-protection-technique-card">
                                        <h4><i className="fas fa-code"></i> DOM Manipulation Analysis</h4>
                                        <p>
                                            Monitors JavaScript execution patterns and DOM modifications to detect 
                                            browser-based malware and exploitation attempts.
                                        </p>
                                    </div>
                                    <div className="zero-day-protection-technique-card">
                                        <h4><i className="fas fa-network-wired"></i> Communication Pattern Detection</h4>
                                        <p>
                                            Analyzes network traffic patterns and data flow to identify novel 
                                            command and control protocols and data exfiltration methods.
                                        </p>
                                    </div>
                                    <div className="zero-day-protection-technique-card">
                                        <h4><i className="fas fa-robot"></i> Machine Learning Models</h4>
                                        <p>
                                            Uses unsupervised learning to identify anomalous behaviors and 
                                            classify unknown threats based on behavioral characteristics.
                                        </p>
                                    </div>
                                    <div className="zero-day-protection-technique-card">
                                        <h4><i className="fas fa-shield-alt"></i> Behavioral Baselines</h4>
                                        <p>
                                            Establishes normal behavior patterns to detect deviations that indicate 
                                            unknown threats or novel attack techniques.
                                        </p>
                                    </div>
                                </div>
                                <div className="zero-day-protection-benefits">
                                    <h4><i className="fas fa-shield-alt"></i> Zero-Day Protection Benefits</h4>
                                    <ul>
                                        <li>Proactive defense against unknown attack vectors</li>
                                        <li>No reliance on signature updates or threat intelligence feeds</li>
                                        <li>Real-time detection and response to novel threats</li>
                                        <li>Comprehensive coverage across all application layers</li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Navigation Footer */}
                    <footer className="zero-day-protection-footer">
                        <div className="zero-day-protection-footer-content">
                            <Logo className="zero-day-protection-footer-logo" />
                            <div className="zero-day-protection-footer-nav">
                                <Link to="/use-cases" className="zero-day-protection-footer-link">
                                    <i className="fas fa-arrow-left"></i>
                                    Back to Use Cases
                                </Link>
                                <Link to="/" className="zero-day-protection-footer-link">
                                    <i className="fas fa-home"></i>
                                    Home
                                </Link>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default ZeroDayProtection;
