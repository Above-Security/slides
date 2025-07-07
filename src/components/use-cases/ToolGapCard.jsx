import React from 'react';
import './ToolGapCard.css';

/**
 * ToolGapCard - Display component for traditional tool limitations
 * Shows tool name, coverage percentage, and limitation description
 * 
 * @param {Object} tool - Tool data object with tool, limitation, coverage properties
 * @param {Function} onClick - Optional click handler function
 * @param {string} className - Optional additional CSS classes
 */
const ToolGapCard = ({ 
    tool, 
    onClick, 
    className = '' 
}) => {
    const handleClick = () => {
        if (onClick) {
            onClick(tool.tool);
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
            className={`tool-gap-card ${className}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
        >
            <div className="tool-gap-header">
                <h3 className="tool-name">{tool.tool}</h3>
                <div className="coverage-indicator">
                    <div className="coverage-bar">
                        <div
                            className="coverage-fill"
                            style={{ width: tool.coverage }}
                        ></div>
                    </div>
                    <span className="coverage-percentage">{tool.coverage}</span>
                </div>
            </div>
            <p className="tool-limitation">{tool.limitation}</p>
        </div>
    );
};

export default ToolGapCard;
