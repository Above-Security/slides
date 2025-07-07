import React from 'react';
import './ContentGroup.css';

/**
 * ContentGroup - Wrapper component for organizing content sections
 * Provides consistent spacing and grouping for use case content
 * 
 * @param {string} id - Optional ID for the content group
 * @param {React.ReactNode} children - Required child elements
 * @param {string} className - Optional additional CSS classes
 */
const ContentGroup = ({ 
    id, 
    children, 
    className = '' 
}) => {
    return (
        <div 
            className={`content-group ${className}`}
            id={id}
        >
            {children}
        </div>
    );
};

export default ContentGroup;
