import React from 'react';
import './SectionHeader.css';

/**
 * SectionHeader - Reusable section header component
 * Used across all use case pages for consistent section titles and descriptions
 * 
 * @param {string} id - Optional ID for the title element
 * @param {string} title - Required title text
 * @param {string} icon - Optional Font Awesome icon class
 * @param {string} description - Optional description text
 * @param {string} className - Optional additional CSS classes
 * @param {string} titleLevel - HTML heading level (h1-h6), defaults to h2
 */
const SectionHeader = ({ 
    id, 
    title, 
    icon, 
    description, 
    className = '', 
    titleLevel = 'h2' 
}) => {
    const TitleElement = titleLevel;
    
    return (
        <div className={`section-header ${className}`}>
            <TitleElement 
                id={id} 
                className="section-title"
            >
                {icon && <i className={icon}></i>}
                {title}
            </TitleElement>
            {description && (
                <p className="section-description">{description}</p>
            )}
        </div>
    );
};

export default SectionHeader;
