import React from 'react';
import './MetricCard.css';

/**
 * MetricCard - Display component for business impact metrics
 * Shows before/after comparison with improvement percentage
 * 
 * @param {Object} metric - Metric data object with metric, before, after, improvement properties
 * @param {string} className - Optional additional CSS classes
 */
const MetricCard = ({ 
    metric, 
    className = '' 
}) => {
    return (
        <div className={`business-metric-card ${className}`}>
            <h3 className="metric-title">{metric.metric}</h3>
            <div className="metric-comparison">
                <div className="before-after">
                    <div className="before">
                        <span className="label">Before</span>
                        <span className="value">{metric.before}</span>
                    </div>
                    <i className="fas fa-arrow-right"></i>
                    <div className="after">
                        <span className="label">After</span>
                        <span className="value">{metric.after}</span>
                    </div>
                </div>
                <div className="improvement">
                    <span className="improvement-value">{metric.improvement}</span>
                    <span className="improvement-label">improvement</span>
                </div>
            </div>
        </div>
    );
};

export default MetricCard;
