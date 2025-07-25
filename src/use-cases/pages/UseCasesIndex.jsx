import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import FloatingNavigation from '../../components/FloatingNavigation';
import '../../components/FloatingNavigationIntegration.css';
import { initializePostHog, posthogEvent, posthogSet } from '../../utils/posthog';
import '../styles/UseCasesIndex.enhanced.css';

const UseCasesIndex = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        try {
            // Initialize PostHog tracking for use cases
            initializePostHog();

            // Track use cases index view
            posthogEvent('use_cases_index_view');
            posthogSet({ page_type: 'use_cases_index' });
            posthogSet({ user_journey: 'use_cases_exploration' });

            console.log('Use Cases Index loaded with PostHog tracking');
        } catch (error) {
            console.warn('Analytics initialization failed:', error);
        }
    }, []);

    // Enhanced use cases data with additional metadata
    const useCases = [
        {
            id: 'phishing-detection',
            title: 'Phishing Detection',
            description: 'Real-time detection of sophisticated phishing attacks including AiTM and consent phishing',
            icon: 'fas fa-shield-alt',
            color: 'var(--brand-primary)',
            scenarios: 4,
            complexity: 'Advanced',
            impact: 'Critical'
        },
        {
            id: 'insider-threat',
            title: 'Insider Threat Detection',
            description: 'Cross-app behavior correlation to identify privileged misuse and data exfiltration',
            icon: 'fas fa-user-times',
            color: 'var(--text-danger)',
            scenarios: 3,
            complexity: 'Expert',
            impact: 'Severe'
        },
        {
            id: 'ciso-business-case',
            title: 'Business Case',
            description: 'Comprehensive business case for runtime identity & insider protection platform',
            icon: 'fas fa-briefcase',
            color: 'var(--brand-primary)',
            scenarios: 1,
            complexity: 'Strategic',
            impact: 'Business Critical'
        }
    ];

    // Intersection Observer for staggered animations
    useEffect(() => {
        if (!gridRef.current) return;

        const cards = gridRef.current.querySelectorAll('.use-case-card');

        // Fallback: Show all cards after 1 second if IntersectionObserver fails
        const fallbackTimer = setTimeout(() => {
            cards.forEach((card, index) => {
                card.style.setProperty('--card-index', index);
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            });
        }, 1000);

        if (typeof IntersectionObserver === 'undefined') {
            // No IntersectionObserver support, show cards immediately
            cards.forEach((card, index) => {
                card.style.setProperty('--card-index', index);
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            });
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        clearTimeout(fallbackTimer);
                        entry.target.style.setProperty('--card-index', index);
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -10px 0px'
            }
        );

        cards.forEach((card) => {
            observer.observe(card);
        });

        return () => {
            clearTimeout(fallbackTimer);
            observer.disconnect();
        };
    }, []);

    const handleUseCaseClick = (useCaseId) => {
        try {
            posthogEvent('use_case_clicked', {
                use_case: useCaseId,
                interaction_type: 'enhanced_card_click',
                timestamp: Date.now()
            });
            posthogSet({ selected_use_case: useCaseId });
            posthogSet({ interaction_method: 'enhanced_ui' });
            console.log(`Enhanced use case selected: ${useCaseId}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    const handleLogoClick = () => {
        try {
            posthogEvent('logo_clicked_from_use_cases', {
                interaction_type: 'enhanced_logo_hover',
                timestamp: Date.now()
            });
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    return (
        <>
            {/* Enhanced Document Head Metadata */}
            <title>Runtime Insider Protection Use Cases - Above Security | Advanced Threat Detection</title>
            <meta name="description" content="Discover Above Security's world-class Runtime Insider Protection solutions. Advanced phishing detection, insider threat protection, and executive business case analysis." />
            <meta name="keywords" content="Runtime Insider Protection, advanced phishing detection, insider threat protection, CISO business case, behavioral analysis, real-time security" />

            <div className="use-cases-container" data-testid="use-cases-index">
                {/* Floating Navigation with Enhanced Integration */}
                <FloatingNavigation />

                <div className="use-cases-content">
                    {/* Enhanced Header Section */}
                    <header className="use-cases-header">
                        <Link
                            to="/"
                            className="logo-container"
                            onClick={handleLogoClick}
                            aria-label="Navigate to Above Security homepage"
                        >
                            <Logo className="use-cases-logo" />
                        </Link>

                        <div className="use-cases-hero">
                            <h1 className="use-cases-title">
                                Runtime Insider Protection & SaaS Behavioral Visibility
                            </h1>
                            <p className="use-cases-subtitle">
                                Real-world scenarios where Above Security's advanced runtime visibility
                                and intelligent behavioral analysis stop sophisticated threats that traditional security completely misses
                            </p>
                        </div>
                    </header>

                    {/* Enhanced Use Cases Grid with Advanced Cards */}
                    <main className="use-cases-grid" ref={gridRef}>
                        {useCases.map((useCase, index) => (
                            <Link
                                key={useCase.id}
                                to={`/use-cases/${useCase.id}`}
                                className="use-case-card"
                                onClick={() => handleUseCaseClick(useCase.id)}
                                style={{ '--accent-color': useCase.color }}
                                aria-label={`Explore ${useCase.title} use case with ${useCase.scenarios} scenarios`}
                            >
                                <div className="use-case-card-inner">
                                    <div className="use-case-icon">
                                        <i className={useCase.icon} aria-hidden="true"></i>
                                    </div>

                                    <div className="use-case-content">
                                        <h3 className="use-case-title">{useCase.title}</h3>
                                        <p className="use-case-description">{useCase.description}</p>

                                        <div className="use-case-meta">
                                            <span className="scenarios-count">
                                                <i className="fas fa-layer-group" aria-hidden="true"></i>
                                                {useCase.scenarios} scenarios
                                            </span>
                                            <div className="use-case-arrow">
                                                <i className="fas fa-arrow-right" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </main>

                    {/* Enhanced Navigation Footer */}
                    <footer className="use-cases-navigation">
                        <Link
                            to="/"
                            className="nav-link secondary"
                            aria-label="Return to homepage"
                        >
                            <i className="fas fa-home" aria-hidden="true"></i>
                            Back to Home
                        </Link>

                        <Link
                            to="/slides/1"
                            className="nav-link primary"
                            aria-label="View complete presentation deck"
                        >
                            View Full Presentation
                            <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default UseCasesIndex;
