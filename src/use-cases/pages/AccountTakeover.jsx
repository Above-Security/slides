import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import FloatingNavigation from '../../components/FloatingNavigation';
import '../../components/FloatingNavigationIntegration.css';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
import '../styles/AccountTakeover.css';

/**
 * AccountTakeover Use Case Component - Completely Independent
 * 
 * This component is completely self-contained with its own:
 * - Data structure (embedded)
 * - Styling (AccountTakeover.css)
 * - Analytics tracking
 * - Error handling
 * - Navigation logic
 * 
 * Features:
 * - 3 detailed account takeover scenarios
 * - 99.5% detection rate metrics
 * - Advanced behavioral analysis capabilities
 * - Cross-platform detection coverage
 * - Specialized account takeover content
 */

// Embedded data - specific to AccountTakeover only
const ACCOUNT_TAKEOVER_DATA = {
    id: 'account-takeover',
    title: 'Account Takeover Prevention',
    subtitle: 'Behavioral analysis to detect unauthorized access',
    description: 'Advanced behavioral monitoring and session analysis to detect account takeovers, session hijacking, and unauthorized access patterns across all connected applications.',
    icon: 'fas fa-user-shield',
    color: 'var(--security-blue-2)',
    scenarios: [
        {
            id: 'shared-cookie',
            title: 'Account Takeover via Shared Cookie',
            icon: 'fas fa-cookie-bite',
            attack: 'Attacker reuses session cookie from shared browser profile to access internal CRM without triggering MFA.',
            detection: 'Above detects behavioral mismatch with historical user — different location, click cadence, app navigation pattern triggers identity drift model.',
            outcome: 'Session terminated before data access',
            severity: 'high',
            techniques: ['Session Hijacking', 'Cookie Theft', 'MFA Bypass'],
            indicators: ['Behavioral drift', 'Geolocation anomalies', 'Navigation pattern changes']
        },
        {
            id: 'credential-stuffing',
            title: 'Credential Stuffing Attack',
            icon: 'fas fa-key',
            attack: 'Automated bot attempts login with leaked credentials from previous breaches across multiple corporate accounts.',
            detection: 'Runtime analysis identifies non-human interaction patterns and correlates with threat intelligence feeds.',
            outcome: 'Automated login attempts blocked',
            severity: 'medium',
            techniques: ['Credential Stuffing', 'Automation', 'Password Reuse'],
            indicators: ['Bot behavior patterns', 'Credential correlation', 'Automation signatures']
        },
        {
            id: 'privilege-escalation',
            title: 'Privilege Escalation Attack',
            icon: 'fas fa-user-crown',
            attack: 'Compromised standard user account attempts to access admin functions through API manipulation and role exploitation.',
            detection: 'Cross-application privilege monitoring detects unauthorized access attempts and role boundary violations.',
            outcome: 'Privilege escalation blocked and admin alerted',
            severity: 'critical',
            techniques: ['Privilege Escalation', 'API Abuse', 'Role Exploitation'],
            indicators: ['Privilege boundary violations', 'API anomalies', 'Role escalation patterns']
        }
    ],
    metrics: {
        detectionRate: '99.5%',
        falsePositives: '<0.2%',
        responseTime: '<150ms',
        coverage: 'Cross-platform behavioral analysis'
    }
};

const AccountTakeover = () => {
    useEffect(() => {
        try {
            // Initialize Clarity tracking for this specific use case
            initializeClarity();
            clarityEvent('account_takeover_view');
            claritySet('page_type', 'account_takeover');
            claritySet('use_case', 'account-takeover');
            console.log('AccountTakeover component loaded with analytics');
        } catch (error) {
            console.warn('Analytics initialization failed in AccountTakeover:', error);
        }
    }, []);

    const handleScenarioClick = (scenarioId) => {
        try {
            clarityEvent('account_takeover_scenario_clicked', { scenario: scenarioId });
            console.log(`Account takeover scenario clicked: ${scenarioId}`);
        } catch (error) {
            console.warn('Analytics tracking failed in AccountTakeover:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>{ACCOUNT_TAKEOVER_DATA.title} - Above Security Use Cases</title>
            <meta name="description" content={ACCOUNT_TAKEOVER_DATA.description} />

            <div className="account-takeover-container" data-testid="account-takeover">
                {/* Floating Navigation */}
                <FloatingNavigation />
                
                <div className="account-takeover-content">
                    {/* Header */}
                    <header className="account-takeover-header">
                        <div className="account-takeover-hero" style={{ '--accent-color': ACCOUNT_TAKEOVER_DATA.color }}>
                            <div className="account-takeover-hero-icon">
                                <i className={ACCOUNT_TAKEOVER_DATA.icon}></i>
                            </div>
                            <h1 className="account-takeover-hero-title">{ACCOUNT_TAKEOVER_DATA.title}</h1>
                            <p className="account-takeover-hero-subtitle">{ACCOUNT_TAKEOVER_DATA.subtitle}</p>
                            <p className="account-takeover-hero-description">{ACCOUNT_TAKEOVER_DATA.description}</p>
                        </div>
                    </header>

                    <main>
                        {/* Metrics Section */}
                        <section className="account-takeover-metrics" role="region" aria-labelledby="account-takeover-metrics-heading">
                            <h2 id="account-takeover-metrics-heading" className="account-takeover-section-title">Performance Metrics</h2>
                            <div className="account-takeover-metrics-grid">
                                {Object.entries(ACCOUNT_TAKEOVER_DATA.metrics).map(([key, value]) => (
                                    <div key={key} className="account-takeover-metric-card">
                                        <div className="account-takeover-metric-value">{value}</div>
                                        <div className="account-takeover-metric-label">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Scenarios Section */}
                        <section className="account-takeover-scenarios" role="region" aria-labelledby="account-takeover-scenarios-heading">
                            <h2 id="account-takeover-scenarios-heading" className="account-takeover-section-title">Real-World Account Takeover Scenarios</h2>
                            <div className="account-takeover-scenarios-grid">
                                {ACCOUNT_TAKEOVER_DATA.scenarios.map((scenario) => (
                                    <div
                                        key={scenario.id}
                                        className={`account-takeover-scenario-card ${scenario.severity}`}
                                        onClick={() => handleScenarioClick(scenario.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleScenarioClick(scenario.id);
                                            }
                                        }}
                                        aria-label={`View details for ${scenario.title} account takeover scenario`}
                                    >
                                        <div className="account-takeover-scenario-header">
                                            <div className="account-takeover-scenario-icon">
                                                <i className={scenario.icon}></i>
                                            </div>
                                            <div className="account-takeover-scenario-title-section">
                                                <h3 className="account-takeover-scenario-title">{scenario.title}</h3>
                                                <span className={`account-takeover-severity-badge ${scenario.severity}`}>
                                                    {scenario.severity.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="account-takeover-scenario-content">
                                            <div className="account-takeover-scenario-section">
                                                <h4 className="account-takeover-scenario-section-title">Attack Vector</h4>
                                                <p className="account-takeover-scenario-text">{scenario.attack}</p>
                                            </div>

                                            <div className="account-takeover-scenario-section">
                                                <h4 className="account-takeover-scenario-section-title">Above Detection</h4>
                                                <p className="account-takeover-scenario-text">{scenario.detection}</p>
                                            </div>

                                            <div className="account-takeover-scenario-outcome">
                                                <i className="fas fa-check"></i>
                                                {scenario.outcome}
                                            </div>

                                            <div className="account-takeover-scenario-techniques">
                                                <h5>Attack Techniques</h5>
                                                <div className="account-takeover-technique-tags">
                                                    {scenario.techniques.map((technique) => (
                                                        <span key={technique} className="account-takeover-technique-tag">
                                                            {technique}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="account-takeover-scenario-indicators">
                                                <h5>Detection Indicators</h5>
                                                <ul className="account-takeover-indicator-list">
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

                        {/* Account Takeover-Specific Additional Content */}
                        <section className="account-takeover-additional-info" role="region" aria-labelledby="account-takeover-info-heading">
                            <div className="account-takeover-info-callout">
                                <h3 id="account-takeover-info-heading">
                                    <i className="fas fa-user-shield"></i>
                                    Advanced Behavioral Analysis
                                </h3>
                                <p>
                                    Account takeover attacks often bypass traditional security measures by using 
                                    legitimate credentials. Above Security's behavioral analysis engine creates 
                                    unique user profiles to detect when authorized credentials are being used 
                                    by unauthorized individuals.
                                </p>
                                <div className="account-takeover-benefits-grid">
                                    <div className="account-takeover-benefit-card">
                                        <i className="fas fa-brain"></i>
                                        <h4>Identity Drift Detection</h4>
                                        <p>Monitors behavioral patterns including click cadence, navigation habits, and location anomalies.</p>
                                    </div>
                                    <div className="account-takeover-benefit-card">
                                        <i className="fas fa-network-wired"></i>
                                        <h4>Session Analysis</h4>
                                        <p>Tracks session characteristics and device fingerprints to identify unauthorized access.</p>
                                    </div>
                                    <div className="account-takeover-benefit-card">
                                        <i className="fas fa-chart-line"></i>
                                        <h4>Privilege Monitoring</h4>
                                        <p>Cross-application privilege monitoring to detect unauthorized elevation attempts.</p>
                                    </div>
                                    <div className="account-takeover-benefit-card">
                                        <i className="fas fa-shield-alt"></i>
                                        <h4>Real-time Protection</h4>
                                        <p>Immediate response to suspicious behavioral patterns and unauthorized access attempts.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Navigation Footer */}
                    <footer className="account-takeover-footer">
                        <div className="account-takeover-footer-content">
                            <Logo className="account-takeover-footer-logo" />
                            <div className="account-takeover-footer-nav">
                                <Link to="/" className="account-takeover-footer-link">
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

export default AccountTakeover;
