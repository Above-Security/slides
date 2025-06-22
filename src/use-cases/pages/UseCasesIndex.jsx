import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import FloatingNavigation from '../../components/FloatingNavigation';
import '../../components/FloatingNavigationIntegration.css';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
import '../styles/UseCasesIndex.enhanced.css';

const UseCasesIndex = () => {
    const gridRef = useRef(null);

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
            id: 'account-takeover',
            title: 'Account Takeover Prevention',
            description: 'Behavioral analysis to detect unauthorized access and session hijacking',
            icon: 'fas fa-user-shield',
            color: 'var(--security-blue-2)',
            scenarios: 3,
            complexity: 'High',
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
            id: 'zero-day-protection',
            title: 'Zero-Day Protection',
            description: 'Runtime analysis to detect unknown threats and novel attack patterns',
            icon: 'fas fa-bug',
            color: 'var(--text-warning)',
            scenarios: 2,
            complexity: 'Advanced',
            impact: 'High'
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
            clarityEvent('use_case_clicked', { 
                use_case: useCaseId,
                interaction_type: 'enhanced_card_click',
                timestamp: Date.now()
            });
            claritySet('selected_use_case', useCaseId);
            claritySet('interaction_method', 'enhanced_ui');
            console.log(`Enhanced use case selected: ${useCaseId}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    const handleLogoClick = () => {
        try {
            clarityEvent('logo_clicked_from_use_cases', {
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
            <title>Runtime ITDR Use Cases - Above Security | Advanced Threat Detection</title>
            <meta name="description" content="Discover Above Security's world-class Runtime ITDR solutions. Advanced phishing detection, account takeover prevention, insider threat detection, and zero-day protection." />
            <meta name="keywords" content="runtime ITDR, advanced phishing detection, account takeover prevention, insider threat detection, zero-day protection, behavioral analysis, real-time security" />

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
                                Runtime ITDR Use Cases
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
