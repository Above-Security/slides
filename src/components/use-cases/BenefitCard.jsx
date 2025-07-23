import React from 'react';
import './BenefitCard.css';

/**
 * BenefitCard - Display component for product benefits and features
 * Shows icon, title, and description
 * 
 * @param {string} title - Required benefit title
 * @param {string} description - Required benefit description
 * @param {string} icon - Optional Font Awesome icon class
 * @param {string} accentColor - Optional CSS color value for theming
 * @param {string} className - Optional additional CSS classes
 */
const BenefitCard = ({ 
    title, 
    description, 
    icon, 
    accentColor = 'var(--color-primary)',
    className = '' 
}) => {
    return (
        <div 
            className={`benefit-card ${className}`}
            style={{ '--accent-color': accentColor }}
        >
            {icon && (
                <div className="benefit-icon">
                    <i className={icon}></i>
                </div>
            )}
            <div className="benefit-content">
                <h3 className="benefit-title">{title}</h3>
                <p className="benefit-description">{description}</p>
            </div>
        </div>
    );
};

export default BenefitCard;
