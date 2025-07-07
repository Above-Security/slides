import React from 'react';
import './DifferentiatorCard.css';

/**
 * DifferentiatorCard - Display component for Above's differentiating capabilities
 * Shows capability icon, title, and description
 * 
 * @param {Object} differentiator - Differentiator data object
 * @param {Function} onClick - Optional click handler function
 * @param {string} className - Optional additional CSS classes
 */
const DifferentiatorCard = ({ 
    differentiator, 
    onClick, 
    className = '' 
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(differentiator.capability);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
        }
    };

    return (
        <div
            className={`differentiator-card ${className}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <div className="differentiator-icon">
                <i className={differentiator.icon}></i>
            </div>
            <h3 className="differentiator-title">{differentiator.capability}</h3>
            <p className="differentiator-description">{differentiator.description}</p>
        </div>
    );
};

export default DifferentiatorCard;
