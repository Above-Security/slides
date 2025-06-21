import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
import '../styles/UseCasesIndex.css';

const UseCasesIndex = () => {
    useEffect(() => {
        try {
            // Initialize Clarity tracking for use cases
            initializeClarity();

            // Track use cases index view
            clarityEvent('use_cases_index_view');
            claritySet('page_type', 'use_cases_index');
            claritySet('user_journey', 'use_cases_exploration');

            console.log('Use Cases Index loaded with Clarity tracking');
        } catch (error) {
            console.warn('Analytics initialization failed:', error);
        }
    }, []);

    const useCases = [
        {
            id: 'phishing-detection',
            title: 'Phishing Detection',
            description: 'Real-time detection of sophisticated phishing attacks including AiTM and consent phishing',
            icon: 'fas fa-shield-alt',
            color: 'var(--brand-primary)',
            scenarios: 4
        },
        {
            id: 'account-takeover',
            title: 'Account Takeover Prevention',
            description: 'Behavioral analysis to detect unauthorized access and session hijacking',
            icon: 'fas fa-user-shield',
            color: 'var(--security-blue-2)',
            scenarios: 3
        },
        {
            id: 'insider-threat',
            title: 'Insider Threat Detection',
            description: 'Cross-app behavior correlation to identify privileged misuse and data exfiltration',
            icon: 'fas fa-user-times',
            color: 'var(--text-danger)',
            scenarios: 3
        },
        {
            id: 'zero-day-protection',
            title: 'Zero-Day Protection',
            description: 'Runtime analysis to detect unknown threats and novel attack patterns',
            icon: 'fas fa-bug',
            color: 'var(--text-warning)',
            scenarios: 2
        }
    ];

    const handleUseCaseClick = (useCaseId) => {
        try {
            clarityEvent('use_case_clicked', { use_case: useCaseId });
            claritySet('selected_use_case', useCaseId);
            console.log(`Use case selected: ${useCaseId}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    const handleLogoClick = () => {
        try {
            clarityEvent('logo_clicked_from_use_cases');
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>Use Cases - Above Security | Runtime ITDR Solutions</title>
            <meta name="description" content="Explore real-world use cases for Above Security's Runtime ITDR platform. See how we detect phishing, account takeovers, insider threats, and zero-day attacks." />
            <meta name="keywords" content="phishing detection, account takeover prevention, insider threat, zero-day protection, ITDR, runtime security" />

            <div className="use-cases-container" data-testid="use-cases-index">
                <div className="use-cases-content">
                    {/* Header Section */}
                    <header className="use-cases-header">
                        <Link to="/" className="logo-container" onClick={handleLogoClick}>
                            <Logo className="use-cases-logo" />
                        </Link>

                        <div className="use-cases-hero">
                            <h1 className="use-cases-title">Runtime ITDR Use Cases</h1>
                            <p className="use-cases-subtitle">
                                Real-world scenarios where Above Security's runtime visibility
                                and behavioral analysis stop threats that traditional security misses
                            </p>
                        </div>
                    </header>

                    {/* Use Cases Grid */}
                    <main className="use-cases-grid">
                        {useCases.map((useCase) => (
                            <Link
                                key={useCase.id}
                                to={`/use-cases/${useCase.id}`}
                                className="use-case-card"
                                onClick={() => handleUseCaseClick(useCase.id)}
                                style={{ '--accent-color': useCase.color }}
                            >
                                <div className="use-case-icon">
                                    <i className={useCase.icon}></i>
                                </div>

                                <div className="use-case-content">
                                    <h3 className="use-case-title">{useCase.title}</h3>
                                    <p className="use-case-description">{useCase.description}</p>

                                    <div className="use-case-meta">
                                        <span className="scenarios-count">
                                            {useCase.scenarios} scenarios
                                        </span>
                                        <span className="use-case-arrow">
                                            <i className="fas fa-arrow-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </main>

                    {/* Navigation Footer */}
                    <footer className="use-cases-navigation">
                        <Link to="/" className="nav-link secondary">
                            <i className="fas fa-home"></i>
                            Back to Home
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

export default UseCasesIndex;
