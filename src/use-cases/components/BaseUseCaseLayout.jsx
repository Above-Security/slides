import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
import '../styles/UseCaseDetail.css';

/**
 * BaseUseCaseLayout - Shared layout component for all use case pages
 * 
 * This component provides:
 * - Consistent analytics tracking
 * - Shared layout structure
 * - Common navigation elements
 * - Error handling
 * - Accessibility features
 * 
 * @param {Object} props
 * @param {Object} props.useCase - The use case data object
 * @param {string} props.useCaseId - The use case identifier
 * @param {React.Node} props.children - Custom content for the specific use case
 */
const BaseUseCaseLayout = ({ useCase, useCaseId, children }) => {
    useEffect(() => {
        try {
            // Initialize Clarity tracking
            initializeClarity();

            if (useCaseId && useCase) {
                // Track use case detail view
                clarityEvent('use_case_detail_view', { use_case: useCaseId });
                claritySet('page_type', 'use_case_detail');
                claritySet('current_use_case', useCaseId);

                console.log(`Use case detail loaded: ${useCaseId}`);
            }
        } catch (error) {
            console.warn('Analytics initialization failed:', error);
        }
    }, [useCaseId, useCase]);

    const handleScenarioClick = (scenarioId) => {
        try {
            clarityEvent('scenario_clicked', {
                use_case: useCaseId,
                scenario: scenarioId
            });
            console.log(`Scenario clicked: ${scenarioId}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    if (!useCase) {
        return (
            <div className="use-case-error" data-testid="use-case-error">
                <h1>Use Case Not Found</h1>
                <p>The requested use case could not be found.</p>
                <Link to="/use-cases" className="nav-link primary">
                    <i className="fas fa-arrow-left"></i>
                    Back to Use Cases
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* Document Head Metadata */}
            <title>{useCase.title} - Above Security Use Cases</title>
            <meta name="description" content={useCase.description} />

            <div className="use-case-detail-container" data-testid="use-case-detail">
                <div className="use-case-detail-content">
                    {/* Header */}
                    <header className="use-case-detail-header">
                        <Link to="/use-cases" className="back-link">
                            <i className="fas fa-arrow-left"></i>
                            Back to Use Cases
                        </Link>

                        <div className="use-case-hero" style={{ '--accent-color': useCase.color }}>
                            <div className="use-case-hero-icon">
                                <i className={useCase.icon}></i>
                            </div>
                            <h1 className="use-case-hero-title">{useCase.title}</h1>
                            <p className="use-case-hero-subtitle">{useCase.subtitle}</p>
                            <p className="use-case-hero-description">{useCase.description}</p>
                        </div>
                    </header>

                    <main>
                        {/* Metrics Section */}
                        <section className="use-case-metrics" role="region" aria-labelledby="metrics-heading">
                            <h2 id="metrics-heading" className="section-title">Performance Metrics</h2>
                            <div className="metrics-grid">
                                {Object.entries(useCase.metrics).map(([key, value]) => (
                                    <div key={key} className="metric-card">
                                        <div className="metric-value">{value}</div>
                                        <div className="metric-label">
                                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Scenarios Section */}
                        <section className="use-case-scenarios" role="region" aria-labelledby="scenarios-heading">
                            <h2 id="scenarios-heading" className="section-title">Real-World Scenarios</h2>
                            <div className="scenarios-grid">
                                {useCase.scenarios.map((scenario) => (
                                    <div
                                        key={scenario.id}
                                        className={`scenario-card ${scenario.severity}`}
                                        onClick={() => handleScenarioClick(scenario.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleScenarioClick(scenario.id);
                                            }
                                        }}
                                        aria-label={`View details for ${scenario.title} scenario`}
                                    >
                                        <div className="scenario-header">
                                            <div className="scenario-icon">
                                                <i className={scenario.icon}></i>
                                            </div>
                                            <div className="scenario-title-section">
                                                <h3 className="scenario-title">{scenario.title}</h3>
                                                <span className={`severity-badge ${scenario.severity}`}>
                                                    {scenario.severity.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="scenario-content">
                                            <div className="scenario-section">
                                                <h4 className="scenario-section-title">Attack Vector</h4>
                                                <p className="scenario-text">{scenario.attack}</p>
                                            </div>

                                            <div className="scenario-section">
                                                <h4 className="scenario-section-title">Above Detection</h4>
                                                <p className="scenario-text">{scenario.detection}</p>
                                            </div>

                                            <div className="scenario-outcome">
                                                <i className="fas fa-check"></i>
                                                {scenario.outcome}
                                            </div>

                                            <div className="scenario-techniques">
                                                <h5>Techniques</h5>
                                                <div className="technique-tags">
                                                    {scenario.techniques.map((technique) => (
                                                        <span key={technique} className="technique-tag">
                                                            {technique}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="scenario-indicators">
                                                <h5>Key Indicators</h5>
                                                <ul className="indicator-list">
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

                        {/* Custom Content */}
                        {children}
                    </main>

                    {/* Navigation Footer */}
                    <footer className="use-case-detail-navigation">
                        <Link to="/use-cases" className="nav-link secondary">
                            <i className="fas fa-grid-2"></i>
                            All Use Cases
                        </Link>

                        <Link to="/slide/1" className="nav-link primary">
                            View Full Presentation
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default BaseUseCaseLayout;
