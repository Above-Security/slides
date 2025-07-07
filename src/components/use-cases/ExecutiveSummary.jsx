import React from 'react';
import './ExecutiveSummary.css';

/**
 * ExecutiveSummary - Complete executive summary section component
 * Displays title, description, and key points in a structured layout
 * 
 * @param {Object} summary - Summary data object with title, description, keyPoints
 * @param {string} variant - Visual variant: 'light' or 'dark'
 * @param {string} className - Optional additional CSS classes
 */
const ExecutiveSummary = ({ 
    summary, 
    variant = 'light', 
    className = '' 
}) => {
    return (
        <section 
            className={`executive-summary executive-summary--${variant} ${className}`} 
            role="region" 
            aria-labelledby="executive-summary-heading"
        >
            <div className="section-header">
                <h2 id="executive-summary-heading" className="section-title">
                    <i className="fas fa-star"></i>
                    {summary.title}
                </h2>
            </div>
            <div className="executive-content">
                <p className={`executive-description executive-description--${variant}`}>
                    {summary.description}
                </p>
                <div className="key-points-grid">
                    {summary.keyPoints.map((point, index) => (
                        <div key={index} className="executive-key-point">
                            <i className="fas fa-check"></i>
                            <span>{point}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutiveSummary;
