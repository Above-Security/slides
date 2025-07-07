import React from 'react';
import './IncidentCard.css';

/**
 * IncidentCard - Display component for security incidents
 * Shows incident details with severity indicators and click handling
 * 
 * @param {Object} incident - Incident data object
 * @param {Function} onClick - Optional click handler function
 * @param {string} className - Optional additional CSS classes
 */
const IncidentCard = ({ 
    incident, 
    onClick, 
    className = '' 
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(incident.id);
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
            className={`incident-card ${incident.severity} ${className}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-label={`View details for ${incident.title} incident`}
        >
            <div className="incident-header">
                <div className="incident-icon">
                    <i className={incident.icon}></i>
                </div>
                <div className="incident-title-section">
                    <h3 className="incident-title">{incident.title}</h3>
                    <div className="incident-meta">
                        <span className={`severity-badge ${incident.severity}`}>
                            {incident.severity.toUpperCase()}
                        </span>
                        <span className="affected-count">{incident.affected}</span>
                    </div>
                </div>
            </div>

            <div className="incident-content">
                <p className="incident-description">{incident.description}</p>

                <div className="incident-details">
                    <div className="detail-section">
                        <h4>Attack Vector</h4>
                        <p>{incident.attackVector}</p>
                    </div>

                    <div className="detail-section">
                        <h4>Impact</h4>
                        <p className="impact-text">{incident.impact}</p>
                    </div>

                    <div className="detail-section above-prevention">
                        <h4>Above Prevention</h4>
                        <p>{incident.abovePrevention}</p>
                    </div>
                </div>

                <div className="incident-category">
                    <span className="category-tag">{incident.category}</span>
                </div>
            </div>
        </div>
    );
};

export default IncidentCard;
