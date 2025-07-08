import React from 'react';
import './HeroSection.css';

/**
 * HeroSection - Reusable hero component for use case pages
 * Displays icon, title, subtitle, and description with consistent styling
 * 
 * @param {string} title - Required main title
 * @param {string} subtitle - Optional subtitle
 * @param {string} description - Optional description text
 * @param {string} icon - Optional Font Awesome icon class
 * @param {string} accentColor - Optional CSS color value for theming
 * @param {string} className - Optional additional CSS classes
 */
const HeroSection = ({ 
    title, 
    subtitle, 
    description, 
    icon, 
    accentColor = 'var(--color-primary)',
    className = '' 
}) => {
    return (
        <header className={`use-case-header ${className}`}>
            <div 
                className="use-case-hero" 
                style={{ '--accent-color': accentColor }}
            >
                <div className="hero-gradient-background"></div>
                <div className="hero-content">
                    {icon && (
                        <div className="hero-icon">
                            <i className={icon}></i>
                        </div>
                    )}
                    <h1 className="hero-title">{title}</h1>
                    {subtitle && <p className="hero-subtitle">{subtitle}</p>}<br />
                    {description && <p className="hero-description">{description}</p>}
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
