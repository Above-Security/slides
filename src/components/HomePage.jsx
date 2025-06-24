import React, { useEffect } from 'react';
import { Logo } from './LogoWatermark';
import { initializeClarity, clarityEvent, claritySet } from '../utils/clarity';
import './HomePage.css';

const HomePage = () => {
    useEffect(() => {
        // Initialize Clarity when the homepage loads
        initializeClarity();

        // Track homepage view
        clarityEvent('homepage_view');
        claritySet('page_type', 'homepage');
        claritySet('user_journey', 'homepage_landing');

        // Track homepage engagement timing
        const startTime = Date.now();

        // Track how long users stay on homepage
        const trackEngagementTime = () => {
            const timeSpent = Math.round((Date.now() - startTime) / 1000);
            clarityEvent('homepage_engagement_time', { time_spent_seconds: timeSpent });
            claritySet('homepage_time_spent', timeSpent.toString());
        };

        // Track when user leaves or closes tab
        const handleBeforeUnload = () => {
            trackEngagementTime();
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        console.log('Homepage loaded with Clarity tracking');

        // Cleanup
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            trackEngagementTime();
        };
    }, []);

    const handleEmailClick = () => {
        clarityEvent('email_contact_clicked');
        claritySet('user_action', 'email_contact');
        claritySet('cta_clicked', 'get_early_access');
        console.log('Email contact tracked');
    };

    const handleLogoClick = () => {
        try {
            clarityEvent('logo_clicked');
            claritySet('user_action', 'logo_interaction');
            console.log('Logo interaction tracked');
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata - React 19 native support */}
            <title>Above - Coming Soon | Revolutionary Security Technology</title>
            <meta name="description" content="Above is building revolutionary security technology backed by tier 1 investors. Coming soon." />
            <meta name="keywords" content="Above, security, technology, tier 1 investors, coming soon, innovation" />
            <meta name="author" content="Above Security" />
            <meta name="robots" content="index, follow" />

            {/* Viewport and Mobile */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#00872b" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-title" content="Above" />

            {/* Favicons */}
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Open Graph / Social Media */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://abovesec.com/" />
            <meta property="og:title" content="Above - Coming Soon | Revolutionary Security Technology" />
            <meta property="og:description" content="Above is building revolutionary security technology backed by tier 1 investors. Coming soon." />
            <meta property="og:image" content="https://abovesec.com/og-image.png" />
            <meta property="og:site_name" content="Above" />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content="https://abovesec.com/" />
            <meta name="twitter:title" content="Above - Coming Soon | Revolutionary Security Technology" />
            <meta name="twitter:description" content="Above is building revolutionary security technology backed by tier 1 investors. Coming soon." />
            <meta name="twitter:image" content="https://abovesec.com/og-image.png" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://abovesec.com/" />

            <div className="homepage-container" data-testid="home-page">
                <div className="homepage-overlay">
                    <div className="homepage-content">
                        <div className="homepage-header">
                            <div className="company-logo" onClick={handleLogoClick}>
                                <Logo />
                            </div>
                            <h1 className="homepage-title">
                                <div className="brand-container">
                                    <span className="brand-name">Above</span>
                                </div>
                            </h1>
                            <h2 className="homepage-subtitle">Coming Soon</h2>
                        </div>

                        <div className="homepage-body">
                            <div className="coming-soon-content">
                                <p className="coming-soon-description">
                                    We're building something incredible. <br /><br />Backed by tier 1 investors,
                                    our team is working on revolutionary technology that will transform
                                    how organizations approach security and threat detection.
                                </p>

                <br />
                <div className="action-buttons">
                    <a
                        href="mailto:aviv@abovesec.com"
                        className="secondary-button"
                        onClick={handleEmailClick}
                    >
                        <svg className="button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Get Early Access
                    </a>
                </div>
                            </div>

                            <div className="homepage-footer">
                                <p className="brand-notice">
                                    Above is revolutionizing technology with cutting-edge innovation and world-class engineering.
                                    Stay tuned for updates on our breakthrough platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
