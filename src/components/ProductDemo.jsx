import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './LogoWatermark';
import EmailGate from './EmailGate';
import '../styles/layout/navigation-footer.css';
import { initializePostHog, posthogEvent } from '../utils/posthog';
import {
    HeroSection,
    ContentGroup
} from './use-cases';
import './ProductDemo.css';

/**
 * ProductDemo Component - Video Demonstration Page
 * 
 * This component presents Above Security's product demonstration video
 * following brand guidelines and one-pager design patterns:
 * - Clean, professional layout matching OnePager structure
 * - Video embedding with proper controls and accessibility
 * - Navigation buttons to key pages (OnePager, slides, insider threat matrix)
 * - Reusable component architecture
 * 
 * Features:
 * - Responsive video player
 * - Brand-compliant styling
 * - Scoped CSS to prevent bleeding
 * - Accessible navigation
 * - PostHog analytics integration
 */

const PRODUCT_DEMO_DATA = {
    id: 'product-demo',
    title: 'Above Security Product Demo',
    subtitle: 'See Our Insider Protection Platform in Action',
    description: 'Watch our comprehensive product demonstration to see how Above Security detects insider threats through behavioral analysis and real-time monitoring.',
    icon: 'fas fa-play-circle',
    color: 'var(--primary-color)',
    videoFile: 'https://github.com/Above-Security/slides/blob/main/public/Above%20demo%201080p%20studio%20with%20new%20audio.mp4?raw=true',

    navigation: {
        title: 'Explore More',
        items: [
            {
                title: 'Executive Summary',
                description: 'One-page overview for decision makers',
                link: '/one-pager',
                icon: 'fas fa-file-alt',
                color: '#08872B'
            },
            {
                title: 'Full Presentation',
                description: 'Complete slide deck and detailed content',
                link: '/slides',
                icon: 'fas fa-presentation',
                color: '#0366d6'
            },
            {
                title: 'Insider Threat Matrix',
                description: 'Interactive threat analysis framework',
                link: '/insider-threat-matrix',
                icon: 'fas fa-shield-alt',
                color: '#d73a49'
            }
        ]
    }
};

const ProductDemo = () => {
    const [posthogInitialized, setPosthogInitialized] = useState(false);

    useEffect(() => {
        if (!posthogInitialized) {
            initializePostHog('product-demo');
            setPosthogInitialized(true);
        }

        // Track page view
        posthogEvent('page_view', {
            page: 'product-demo',
            title: 'Product Demo Page'
        });
    }, [posthogInitialized]);

    const handleVideoPlay = () => {
        posthogEvent('video_play', {
            video: 'product_demo',
            location: 'product-demo-page'
        });
    };

    const handleNavigationClick = (destination) => {
        posthogEvent('navigation_click', {
            from: 'product-demo',
            to: destination,
            type: 'internal_link'
        });
    };

    const handleEmailSubmitted = (email) => {
        posthogEvent('product_demo_email_submitted', {
            page: 'product_demo',
            email_domain: email.split('@')[1]
        });
    };

    return (
        <EmailGate onEmailSubmitted={handleEmailSubmitted}>
            <div className="product-demo-container">
                {/* Header with Logo and Title - Matching HomePage */}
                <header className="product-demo-header-section">
                    <div className="homepage-header">
                        <div className="company-logo" onClick={() => posthogEvent('logo_clicked_from_product_demo')}>
                            <Logo />
                        </div>
                        <h1 className="homepage-title">
                            <div className="brand-container">
                                <span className="brand-name">Above</span>
                            </div>
                        </h1>
                        <h2 className="homepage-subtitle">Product Demo</h2>
                    </div>
                </header>

                {/* Compact Description Section */}
                <section className="product-demo-description-section">
                    <div className="product-demo-description-content">
                        <div className="product-demo-description-group">
                            <div className="product-demo-description-icon">
                                <i className={PRODUCT_DEMO_DATA.icon}></i>
                            </div>
                            <div className="product-demo-description-text">
                                <h3 className="product-demo-section-title">{PRODUCT_DEMO_DATA.subtitle}</h3>
                                <p className="product-demo-section-description">{PRODUCT_DEMO_DATA.description}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Video Section - With CTA buttons directly below */}
                <section className="product-demo-video-section">
                    <ContentGroup
                        title="Product Demonstration"
                        description="Watch our comprehensive demo to see Above Security's behavioral intelligence platform in action"
                        className="product-demo-video-group"
                    >
                        <div className="product-demo-video-container">
                            <iframe
                                src="https://drive.google.com/file/d/1qvDH0bVcrLj55O5U914vcG8zHvH8nirW/preview?hd=1&vq=hd1080&embedded=true&controls=1"
                                allow="autoplay"
                                allowFullScreen
                                className="product-demo-video"
                                aria-label="Above Security Product Demonstration Video"
                                onLoad={() => posthogEvent('video_iframe_loaded', { source: 'google_drive' })}
                                title="Above Security Product Demo"
                            />
                        </div>

                        {/* CTA Navigation - Moved directly under video */}
                        <div className="product-demo-navigation-grid">
                            {PRODUCT_DEMO_DATA.navigation.items.map((item, index) => (
                                <Link
                                    key={`nav-${index}`}
                                    to={item.link}
                                    className={`product-demo-cta-button ${index === 0 ? 'product-demo-cta-button--primary' :
                                            index === 1 ? 'product-demo-cta-button--secondary' :
                                                'product-demo-cta-button--tertiary'
                                        }`}
                                    onClick={() => handleNavigationClick(item.link)}
                                >
                                    <div className="product-demo-cta-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="product-demo-cta-content">
                                        <div className="product-demo-cta-title">{item.title}</div>
                                        <div className="product-demo-cta-description">{item.description}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ContentGroup>
                </section>
            </div>
        </EmailGate>
    );
};

export default ProductDemo;
