import React from 'react';
import './POVSection.css';

/**
 * POVSection - Display component for Proof of Value sections
 * Shows title and list of items with consistent styling
 * 
 * @param {string} title - Section title
 * @param {string[]} items - Array of text items to display
 * @param {string} className - Optional additional CSS classes
 */
const POVSection = ({ 
    title, 
    items, 
    className = '' 
}) => {
    return (
        <div className={`pov-section ${className}`}>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default POVSection;
