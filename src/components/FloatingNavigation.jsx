import React, { useMemo, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './FloatingNavigation.css';

/**
 * FloatingNavigation Component
 * 
 * A professional, reusable sticky navigation component with refined design
 * and comprehensive accessibility features. Designed for use across all
 * use-case views with consistent brand compliance.
 * 
 * Features:
 * - Refined pill-like design with professional shadows and spacing
 * - Sticky positioning with configurable offset
 * - Responsive behavior from desktop to mobile
 * - Comprehensive accessibility (ARIA, keyboard nav, screen readers)
 * - Performance optimized with memoization
 * - Error boundary compatible
 * 
 * @param {Object} props - Component props
 * @param {Array} props.links - Array of navigation link objects
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.topOffset - Top offset for sticky positioning (default: 20px)
 * @param {Function} props.onNavigate - Optional callback for navigation events
 * @param {boolean} props.showTooltips - Whether to show tooltips on hover (default: false)
 */
const FloatingNavigation = ({ 
    links = [], 
    className = '',
    topOffset = 20,
    onNavigate = null,
    showTooltips = false
}) => {
    const location = useLocation();
    const [isEnhanced, setIsEnhanced] = useState(false);
    const navRef = useRef(null);

    // Enhanced scroll-based sticky state detection
    useEffect(() => {
        const handleScroll = () => {
            if (!navRef.current) return;
            
            const navRect = navRef.current.getBoundingClientRect();
            // Invert logic: enhanced when at top, subtle when scrolled
            const shouldBeEnhanced = navRect.top > topOffset;
            
            setIsEnhanced(shouldBeEnhanced);
        };

        // Initial check
        handleScroll();
        
        // Add scroll listener with throttling for performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', throttledScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [topOffset]);

    // Memoized default navigation links for performance
    const defaultLinks = useMemo(() => [
        {
            to: '/use-cases',
            icon: 'fas fa-th-large',
            text: 'All Use Cases',
            ariaLabel: 'Navigate to all use cases overview',
            tooltip: 'View all available use cases'
        },
        {
            to: '/use-cases/phishing-detection',
            icon: 'fas fa-shield-alt',
            text: 'Phishing',
            ariaLabel: 'Navigate to phishing detection use case',
            tooltip: 'Phishing detection and prevention'
        },
        {
            to: '/use-cases/account-takeover',
            icon: 'fas fa-user-shield',
            text: 'Account Takeover',
            ariaLabel: 'Navigate to account takeover prevention use case',
            tooltip: 'Account takeover prevention'
        },
        {
            to: '/use-cases/insider-threat',
            icon: 'fas fa-user-times',
            text: 'Insider Threat',
            ariaLabel: 'Navigate to insider threat detection use case',
            tooltip: 'Insider threat detection'
        },
        {
            to: '/use-cases/zero-day-protection',
            icon: 'fas fa-bug',
            text: 'Zero-Day',
            ariaLabel: 'Navigate to zero-day protection use case',
            tooltip: 'Zero-day threat protection'
        }
    ], []);

    // Memoized navigation links to prevent unnecessary re-renders
    const navigationLinks = useMemo(() => {
        return links.length > 0 ? links : defaultLinks;
    }, [links, defaultLinks]);

    /**
     * Active link detection function
     * @param {string} linkPath - The path to check
     * @returns {boolean} - Whether the link is active
     */
    const isActiveLink = (linkPath) => {
        // Exact match for the use cases index
        if (linkPath === '/use-cases' && location.pathname === '/use-cases') {
            return true;
        }
        // Partial match for individual use case pages
        if (linkPath !== '/use-cases' && location.pathname.startsWith(linkPath)) {
            return true;
        }
        return false;
    };

    /**
     * Enhanced keyboard navigation handler
     * @param {KeyboardEvent} event - The keyboard event
     * @param {Object} link - The link object
     */
    const handleKeyDown = (event, link) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            
            // Call navigation callback if provided
            if (onNavigate) {
                onNavigate(link);
            }
            
            // Navigation will be handled by the Link component automatically
        }
    };

    /**
     * Click handler for analytics and callbacks
     * @param {Object} link - The link object
     */
    const handleClick = (link) => {
        if (onNavigate) {
            onNavigate(link);
        }
    };

    // Error boundary fallback for graceful degradation
    if (!navigationLinks || navigationLinks.length === 0) {
        return null;
    }

    return (
        <nav 
            ref={navRef}
            className={`floating-navigation ${isEnhanced ? 'is-enhanced' : ''} ${className}`}
            style={{ '--top-offset': `${topOffset}px` }}
            role="navigation"
            aria-label="Use cases navigation"
            data-testid="floating-navigation"
            data-enhanced={isEnhanced}
        >
            <ul className="floating-nav-list" role="list">
                {navigationLinks.map((link) => {
                    const isActive = isActiveLink(link.to);
                    
                    return (
                        <li key={link.to} className="floating-nav-item" role="listitem">
                            <Link
                                to={link.to}
                                className={`floating-nav-link ${isActive ? 'active' : ''}`}
                                aria-label={link.ariaLabel}
                                aria-current={isActive ? 'page' : undefined}
                                title={showTooltips ? link.tooltip : undefined}
                                onKeyDown={(e) => handleKeyDown(e, link)}
                                onClick={() => handleClick(link)}
                                tabIndex={0}
                                data-testid={`nav-link-${link.to.replace(/\//g, '-')}`}
                            >
                                {link.icon && (
                                    <i 
                                        className={link.icon} 
                                        aria-hidden="true"
                                        role="presentation"
                                        data-testid="nav-icon"
                                    />
                                )}
                                <span 
                                    className="nav-text"
                                    data-testid="nav-text"
                                >
                                    {link.text}
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default FloatingNavigation;
