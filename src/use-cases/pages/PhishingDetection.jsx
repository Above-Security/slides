import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
import '../styles/PhishingDetection.css';

/**
 * PhishingDetection Use Case Component - Completely Independent
 * 
 * This component is completely self-contained with its own:
 * - Data structure (embedded)
 * - Styling (PhishingDetection.css)
 * - Analytics tracking
 * - Error handling
 * - Navigation logic
 * 
 * Features:
 * - 4 detailed phishing attack scenarios
 * - 99.7% detection rate metrics
 * - Real-world attack vectors and Above's detection methods
 * - Comprehensive technique and indicator mapping
 * - Specialized phishing detection content
 */

// Embedded data - specific to PhishingDetection only
const PHISHING_DETECTION_DATA = {
    id: 'phishing-detection',
    title: 'Phishing Detection',
    subtitle: 'Real-time detection of sophisticated phishing attacks',
    description: 'Above Security\'s runtime analysis detects sophisticated phishing attacks that bypass traditional email security, including AiTM phishing, consent phishing, and brand impersonation attacks.',
    icon: 'fas fa-shield-alt',
    color: 'var(--brand-primary)',
    scenarios: [
        {
            id: 'aitm-phishing',
            title: 'Fake Microsoft Login Page (AiTM Phish)',
            icon: 'fas fa-fish',
            attack: 'Attacker sends link to pixel-perfect fake Microsoft login hosted on compromised SharePoint subdomain. Uses AiTM kit to harvest credentials + session cookies.',
            detection: 'Above flags form structure and JavaScript behavior inconsistent with legitimate login flow — semantic model detects spoofed branding and session token theft pattern.',
            outcome: 'Session blocked before credentials submitted',
            severity: 'critical',
            techniques: ['AiTM (Adversary-in-the-Middle)', 'Brand Impersonation', 'Session Token Theft'],
            indicators: ['Suspicious form behavior', 'Spoofed branding patterns', 'Session manipulation']
        },
        {
            id: 'oauth-consent',
            title: 'Consent Phishing via OAuth (LOTS)',
            icon: 'fab fa-google',
            attack: 'Attacker sends fake "Google Workspace Backup" OAuth app with Google branding. App asks for Gmail read/send + Drive access.',
            detection: 'Above detects mismatch between app identity, permissions requested, and consent screen branding — LOTS signature pattern flagged.',
            outcome: 'OAuth token request blocked before consent',
            severity: 'high',
            techniques: ['LOTS (Living off Trusted Sites)', 'OAuth Abuse', 'Consent Phishing'],
            indicators: ['App identity mismatch', 'Excessive permissions', 'Branding inconsistencies']
        },
        {
            id: 'credential-harvesting',
            title: 'Credential Harvesting Portal',
            icon: 'fas fa-key',
            attack: 'Sophisticated portal mimicking company SSO login, deployed on legitimate cloud infrastructure with valid TLS certificate.',
            detection: 'Runtime analysis detects form submission patterns and endpoint behavior inconsistent with legitimate SSO flow.',
            outcome: 'Portal access blocked and credentials protected',
            severity: 'high',
            techniques: ['Credential Harvesting', 'Domain Spoofing', 'SSO Impersonation'],
            indicators: ['Form behavior analysis', 'Endpoint validation', 'SSL certificate anomalies']
        },
        {
            id: 'business-email',
            title: 'Business Email Compromise (BEC)',
            icon: 'fas fa-envelope-open-text',
            attack: 'Compromised executive email account used to send wire transfer requests to finance team, appearing from legitimate internal address.',
            detection: 'Behavioral analysis detects writing style, timing, and request pattern deviations from executive\'s historical communication.',
            outcome: 'Fraudulent transfer request flagged and blocked',
            severity: 'critical',
            techniques: ['Account Takeover', 'Social Engineering', 'Financial Fraud'],
            indicators: ['Communication pattern analysis', 'Behavioral deviation', 'Transaction anomalies']
        }
    ],
    metrics: {
        detectionRate: '99.7%',
        falsePositives: '<0.1%',
        responseTime: '<200ms',
        coverage: 'All major SaaS platforms'
    }
};

const PhishingDetection = () => {
    useEffect(() => {
        try {
            // Initialize Clarity tracking for this specific use case
            initializeClarity();
            clarityEvent('phishing_detection_view');
            claritySet('page_type', 'phishing_detection');
            claritySet('use_case', 'phishing-detection');
            console.log('PhishingDetection component loaded with analytics');
        } catch (error) {
            console.warn('Analytics initialization failed in PhishingDetection:', error);
        }
    }, []);

    const handleScenarioClick = (scenarioId) => {
        try {
            clarityEvent('phishing_scenario_clicked', { scenario: scenarioId });
            console.log(`Phishing scenario clicked: ${scenarioId}`);
        } catch (error) {
            console.warn('Analytics tracking failed in PhishingDetection:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>{PHISHING_DETECTION_DATA.title} - Above Security Use Cases</title>
            <meta name="description" content={PHISHING_DETECTION_DATA.description} />

            <div className="phishing-detection-container" data-testid="phishing-detection">
                <div className="phishing-detection-content">
                    {/* Header */}
                    <header className="phishing-detection-header">
                        <Link to="/use-cases" className="back-link">
                            <i className="fas fa-arrow-left"></i>
                            Back to Use Cases
                        </Link>

                        <div className="phishing-hero" style={{ '--accent-color': PHISHING_DETECTION_DATA.color }}>
                            <div className="phishing-hero-icon">
                                <i className={PHISHING_DETECTION_DATA.icon}></i>
                            </div>
                            <h1 className="phishing-hero-title">{PHISHING_DETECTION_DATA.title}</h1>
                            <p className="phishing-hero-subtitle">{PHISHING_DETECTION_DATA.subtitle}</p>
                            <p className="phishing-hero-description">{PHISHING_DETECTION_DATA.description}</p>
                        </div>
                    </header>

                    <main>
                        {/* Metrics Section */}
                        <section className="phishing-metrics" role="region" aria-labelledby="phishing-metrics-heading">
                            <h2 id="phishing-metrics-heading" className="phishing-section-title">Performance Metrics</h2>
                            <div className="phishing-metrics-grid">
                                {Object.entries(PHISHING_DETECTION_DATA.metrics).map(([key, value]) => (
                                    <div key={key} className="phishing-metric-card">
                                        <div className="phishing-metric-value">{value}</div>
                                        <div className="phishing-metric-label">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Scenarios Section */}
                        <section className="phishing-scenarios" role="region" aria-labelledby="phishing-scenarios-heading">
                            <h2 id="phishing-scenarios-heading" className="phishing-section-title">Real-World Phishing Scenarios</h2>
                            <div className="phishing-scenarios-grid">
                                {PHISHING_DETECTION_DATA.scenarios.map((scenario) => (
                                    <div
                                        key={scenario.id}
                                        className={`phishing-scenario-card ${scenario.severity}`}
                                        onClick={() => handleScenarioClick(scenario.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleScenarioClick(scenario.id);
                                            }
                                        }}
                                        aria-label={`View details for ${scenario.title} phishing scenario`}
                                    >
                                        <div className="phishing-scenario-header">
                                            <div className="phishing-scenario-icon">
                                                <i className={scenario.icon}></i>
                                            </div>
                                            <div className="phishing-scenario-title-section">
                                                <h3 className="phishing-scenario-title">{scenario.title}</h3>
                                                <span className={`phishing-severity-badge ${scenario.severity}`}>
                                                    {scenario.severity.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="phishing-scenario-content">
                                            <div className="phishing-scenario-section">
                                                <h4 className="phishing-scenario-section-title">Attack Vector</h4>
                                                <p className="phishing-scenario-text">{scenario.attack}</p>
                                            </div>

                                            <div className="phishing-scenario-section">
                                                <h4 className="phishing-scenario-section-title">Above Detection</h4>
                                                <p className="phishing-scenario-text">{scenario.detection}</p>
                                            </div>

                                            <div className="phishing-scenario-outcome">
                                                <i className="fas fa-check"></i>
                                                {scenario.outcome}
                                            </div>

                                            <div className="phishing-scenario-techniques">
                                                <h5>Attack Techniques</h5>
                                                <div className="phishing-technique-tags">
                                                    {scenario.techniques.map((technique) => (
                                                        <span key={technique} className="phishing-technique-tag">
                                                            {technique}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="phishing-scenario-indicators">
                                                <h5>Detection Indicators</h5>
                                                <ul className="phishing-indicator-list">
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

                        {/* Phishing-Specific Additional Content */}
                        <section className="phishing-additional-info" role="region" aria-labelledby="phishing-info-heading">
                            <div className="phishing-info-callout">
                                <h3 id="phishing-info-heading">
                                    <i className="fas fa-shield-alt"></i>
                                    Why Phishing Detection Matters
                                </h3>
                                <p>
                                    Traditional email security solutions miss sophisticated phishing attacks that bypass 
                                    signature-based detection. Above Security's runtime analysis provides comprehensive 
                                    protection against evolving phishing techniques, ensuring your organization stays 
                                    protected against the latest threats.
                                </p>
                                <div className="phishing-benefits-grid">
                                    <div className="phishing-benefit-card">
                                        <i className="fas fa-fish"></i>
                                        <h4>AiTM Protection</h4>
                                        <p>Detects Adversary-in-the-Middle attacks in real-time, preventing credential and session theft.</p>
                                    </div>
                                    <div className="phishing-benefit-card">
                                        <i className="fab fa-google"></i>
                                        <h4>OAuth Abuse Detection</h4>
                                        <p>Identifies consent phishing and malicious OAuth applications before damage occurs.</p>
                                    </div>
                                    <div className="phishing-benefit-card">
                                        <i className="fas fa-key"></i>
                                        <h4>Credential Protection</h4>
                                        <p>Prevents credential harvesting through advanced behavioral analysis patterns.</p>
                                    </div>
                                    <div className="phishing-benefit-card">
                                        <i className="fas fa-envelope-open-text"></i>
                                        <h4>BEC Prevention</h4>
                                        <p>Stops business email compromise attacks before financial or data damage.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Navigation Footer */}
                    <footer className="phishing-detection-navigation">
                        <Link to="/use-cases" className="phishing-nav-link secondary">
                            <i className="fas fa-grid-2"></i>
                            All Use Cases
                        </Link>

                        <Link to="/slide/1" className="phishing-nav-link primary">
                            View Full Presentation
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default PhishingDetection;
