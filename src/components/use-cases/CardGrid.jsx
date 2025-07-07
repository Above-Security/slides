import React from 'react';
import './CardGrid.css';

/**
 * CardGrid - Flexible grid container for displaying cards
 * Provides responsive grid layout with consistent spacing
 * 
 * @param {React.ReactNode} children - Required child elements (cards)
 * @param {string|number} columns - Grid columns configuration
 * @param {string} minWidth - Minimum width for auto-fit columns
 * @param {string} gap - CSS gap value for spacing
 * @param {string} className - Optional additional CSS classes
 */
const CardGrid = ({ 
    children, 
    columns = 'auto-fit', 
    minWidth = '400px', 
    gap = 'var(--spacing-2xl)', 
    className = '' 
}) => {
    const gridStyle = {
        '--grid-columns': columns === 'auto-fit' ? `repeat(auto-fit, minmax(${minWidth}, 1fr))` : columns,
        '--grid-gap': gap
    };

    return (
        <div 
            className={`card-grid ${className}`}
            style={gridStyle}
        >
            {children}
        </div>
    );
};

export default CardGrid;
