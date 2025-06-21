import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import FloatingNavigation from '../../components/FloatingNavigation';
import '../../components/FloatingNavigationIntegration.css';
import '../../styles/layout/navigation-footer.css';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
import '../styles/InsiderThreat.css';

/**
 * InsiderThreat Use Case Component - Completely Independent
 * 
 * This component is completely self-contained with its own:
 * - Data structure (embedded)
 * - Styling (InsiderThreat.css)
 * - Analytics tracking
 * - Error handling
 * - Navigation logic
 * 
 * Features:
 * - 3 detailed insider threat scenarios
 * - 98.9% detection rate metrics
 * - Cross-app behavior correlation capabilities
 * - Comprehensive privilege monitoring
 * - Specialized insider threat content
 */

// Embedded data - specific to InsiderThreat only
const INSIDER_THREAT_DATA = {
    id: 'insider-threat',
    title: 'Insider Threat Detection',
    subtitle: 'Cross-app behavior correlation for privileged misuse',
    description: 'Comprehensive monitoring of privileged user activities across all connected applications to detect data exfiltration, policy violations, and malicious insider behavior.',
    icon: 'fas fa-user-times',
    color: 'var(--text-danger)',
    scenarios: [
        {
            id: 'privileged-misuse',
            title: 'Privileged Misuse by Insider',
            icon: 'fas fa-user-tie',
            attack: 'Departing finance exec accesses acquisition documents across multiple apps two days before exit.',
            detection: 'Above correlates cross-app access behavior, detects deviation from peer role norms, and flags intent mismatch.',
            outcome: 'Real-time alert triggered with full session trace',
            severity: 'critical',
            techniques: ['Data Exfiltration', 'Privileged Abuse', 'Policy Violation'],
            indicators: ['Cross-app correlation', 'Peer behavior deviation', 'Access pattern anomalies']
        },
        {
            id: 'data-exfiltration',
            title: 'Mass Data Download',
            icon: 'fas fa-download',
            attack: 'Employee downloads unusually large amounts of customer data from CRM and file shares before leaving company.',
            detection: 'Volume-based anomaly detection combined with contextual analysis of user lifecycle and access patterns.',
            outcome: 'Data transfer blocked and security team alerted',
            severity: 'high',
            techniques: ['Data Theft', 'Mass Download', 'Exfiltration'],
            indicators: ['Volume anomalies', 'Lifecycle correlation', 'Download pattern analysis']
        },
        {
            id: 'policy-violation',
            title: 'Compliance Policy Violation',
            icon: 'fas fa-exclamation-triangle',
            attack: 'HR manager accesses employee records outside normal business hours and shares sensitive information externally.',
            detection: 'Time-based access monitoring combined with data sharing pattern analysis detects policy violations.',
            outcome: 'Policy violation logged and manager notified',
            severity: 'medium',
            techniques: ['Policy Violation', 'Unauthorized Sharing', 'Time-based Abuse'],
            indicators: ['Time-based anomalies', 'Sharing pattern analysis', 'Policy correlation']
        }
    ],
    metrics: {
        detectionRate: '98.9%',
        falsePositives: '<0.3%',
        responseTime: '<300ms',
        coverage: 'All privileged user activities'
    }
};

const InsiderThreat = () => {
    useEffect(() => {
        try {
            // Initialize Clarity tracking for this specific use case
            initializeClarity();
            clarityEvent('insider_threat_view');
            claritySet('page_type', 'insider_threat');
            claritySet('use_case', 'insider-threat');
            console.log('InsiderThreat component loaded with analytics');
        } catch (error) {
            console.warn('Analytics initialization failed in InsiderThreat:', error);
        }
    }, []);

    const handleScenarioClick = (scenarioId) => {
        try {
            clarityEvent('insider_threat_scenario_clicked', { scenario: scenarioId });
            console.log(`Insider threat scenario clicked: ${scenarioId}`);
        } catch (error) {
            console.warn('Analytics tracking failed in InsiderThreat:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>{INSIDER_THREAT_DATA.title} - Above Security Use Cases</title>
            <meta name="description" content={INSIDER_THREAT_DATA.description} />

            <div className="insider-threat-container" data-testid="insider-threat">
                {/* Floating Navigation */}
                <FloatingNavigation />
                
                <div className="insider-threat-content">
                    {/* Header */}
                    <header className="insider-threat-header">
                        <div className="insider-threat-hero" style={{ '--accent-color': INSIDER_THREAT_DATA.color }}>
                            <div className="insider-threat-hero-icon">
                                <i className={INSIDER_THREAT_DATA.icon}></i>
                            </div>
                            <h1 className="insider-threat-hero-title">{INSIDER_THREAT_DATA.title}</h1>
                            <p className="insider-threat-hero-subtitle">{INSIDER_THREAT_DATA.subtitle}</p>
                            <p className="insider-threat-hero-description">{INSIDER_THREAT_DATA.description}</p>
                        </div>
                    </header>

                    <main>
                        {/* Metrics Section */}
                        <section className="insider-threat-metrics" role="region" aria-labelledby="insider-threat-metrics-heading">
                            <h2 id="insider-threat-metrics-heading" className="insider-threat-section-title">Performance Metrics</h2>
                            <div className="insider-threat-metrics-grid">
                                {Object.entries(INSIDER_THREAT_DATA.metrics).map(([key, value]) => (
                                    <div key={key} className="insider-threat-metric-card">
                                        <div className="insider-threat-metric-value">{value}</div>
                                        <div className="insider-threat-metric-label">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Scenarios Section */}
                        <section className="insider-threat-scenarios" role="region" aria-labelledby="insider-threat-scenarios-heading">
                            <h2 id="insider-threat-scenarios-heading" className="insider-threat-section-title">Real-World Insider Threat Scenarios</h2>
                            <div className="insider-threat-scenarios-grid">
                                {INSIDER_THREAT_DATA.scenarios.map((scenario) => (
                                    <div
                                        key={scenario.id}
                                        className={`insider-threat-scenario-card ${scenario.severity}`}
                                        onClick={() => handleScenarioClick(scenario.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleScenarioClick(scenario.id);
                                            }
                                        }}
                                        aria-label={`View details for ${scenario.title} insider threat scenario`}
                                    >
                                        <div className="insider-threat-scenario-header">
                                            <div className="insider-threat-scenario-icon">
                                                <i className={scenario.icon}></i>
                                            </div>
                                            <div className="insider-threat-scenario-title-section">
                                                <h3 className="insider-threat-scenario-title">{scenario.title}</h3>
                                                <span className={`insider-threat-severity-badge ${scenario.severity}`}>
                                                    {scenario.severity.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="insider-threat-scenario-content">
                                            <div className="insider-threat-scenario-section">
                                                <h4 className="insider-threat-scenario-section-title">Attack Vector</h4>
                                                <p className="insider-threat-scenario-text">{scenario.attack}</p>
                                            </div>

                                            <div className="insider-threat-scenario-section">
                                                <h4 className="insider-threat-scenario-section-title">Above Detection</h4>
                                                <p className="insider-threat-scenario-text">{scenario.detection}</p>
                                            </div>

                                            <div className="insider-threat-scenario-outcome">
                                                <i className="fas fa-check"></i>
                                                {scenario.outcome}
                                            </div>

                                            <div className="insider-threat-scenario-techniques">
                                                <h5>Attack Techniques</h5>
                                                <div className="insider-threat-technique-tags">
                                                    {scenario.techniques.map((technique) => (
                                                        <span key={technique} className="insider-threat-technique-tag">
                                                            {technique}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="insider-threat-scenario-indicators">
                                                <h5>Detection Indicators</h5>
                                                <ul className="insider-threat-indicator-list">
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

                        {/* Insider Threat-Specific Additional Content */}
                        <section className="insider-threat-additional-info" role="region" aria-labelledby="insider-threat-info-heading">
                            <div className="insider-threat-info-callout">
                                <h3 id="insider-threat-info-heading">
                                    <i className="fas fa-users"></i>
                                    Cross-Application Behavior Correlation
                                </h3>
                                <p>
                                    Insider threats are among the most difficult to detect because they involve authorized 
                                    users with legitimate access. Above Security's cross-application monitoring creates a 
                                    comprehensive view of user behavior to identify suspicious patterns and policy violations.
                                </p>
                                <div className="insider-threat-indicators-grid">
                                    <div className="insider-threat-indicator-category">
                                        <h4><i className="fas fa-clock"></i> Temporal Patterns</h4>
                                        <ul>
                                            <li>Unusual access times and duration</li>
                                            <li>Activity spikes before departure dates</li>
                                            <li>Weekend and holiday access anomalies</li>
                                        </ul>
                                    </div>
                                    <div className="insider-threat-indicator-category">
                                        <h4><i className="fas fa-download"></i> Data Access Patterns</h4>
                                        <ul>
                                            <li>Mass data downloads and exports</li>
                                            <li>Access to files outside role scope</li>
                                            <li>Copying sensitive documents</li>
                                        </ul>
                                    </div>
                                    <div className="insider-threat-indicator-category">
                                        <h4><i className="fas fa-share"></i> Sharing Behaviors</h4>
                                        <ul>
                                            <li>External sharing of internal documents</li>
                                            <li>Unauthorized email forwarding</li>
                                            <li>Cloud storage uploads</li>
                                        </ul>
                                    </div>
                                    <div className="insider-threat-indicator-category">
                                        <h4><i className="fas fa-shield-alt"></i> Privilege Monitoring</h4>
                                        <ul>
                                            <li>Cross-application privilege escalation</li>
                                            <li>Role boundary violations</li>
                                            <li>Administrative function abuse</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Navigation Footer */}
                    <footer className="navigation-footer multi-link">
                        <Link to="/use-cases" className="nav-link secondary">
                            <i className="fas fa-arrow-left"></i>
                            Back to Use Cases
                        </Link>
                        <Link to="/slides/1" className="nav-link primary">
                            View Full Presentation
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default InsiderThreat;
