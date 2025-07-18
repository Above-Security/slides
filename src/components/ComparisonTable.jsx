import React from 'react';
import { Logo } from './LogoWatermark';
import './ComparisonTable.css';

/**
 * Reusable Comparison Table Component
 * 
 * Features:
 * - Accessible table structure with proper ARIA labels
 * - Responsive design with horizontal scroll on mobile
 * - Visual indicators for advantages
 * - Customizable vendor names and features
 * - High contrast support
 */

const ComparisonTable = ({ 
    title = "Product Comparison",
    subtitle,
    vendor1 = { name: "Above", logo: <Logo size="small" /> },
    vendor2 = { name: "Competitor", logo: null },
    features = [],
    summary,
    className = ""
}) => {
    return (
        <div className={`comparison-component ${className}`}>
            {(title || subtitle) && (
                <div className="comparison-header">
                    {title && <h2 className="comparison-title">{title}</h2>}
                    {subtitle && <p className="comparison-subtitle">{subtitle}</p>}
                </div>
            )}

            <div className="comparison-table-wrapper" role="region" aria-label="Product comparison table">
                <table className="comparison-table" role="table">
                    <caption className="sr-only">
                        Comparison between {vendor1.name} and {vendor2.name}
                    </caption>
                    <thead>
                        <tr>
                            <th scope="col" className="feature-column">Feature</th>
                            <th scope="col" className="vendor-column vendor1">
                                <div className="vendor-header">
                                    {vendor1.logo}
                                    <span>{vendor1.name}</span>
                                </div>
                            </th>
                            <th scope="col" className="vendor-column vendor2">
                                <div className="vendor-header">
                                    {vendor2.logo}
                                    <span>{vendor2.name}</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr key={index} className="feature-row">
                                <td className="feature-name">{feature.name}</td>
                                <td className={`vendor-value ${feature.advantage === 'vendor1' ? 'advantage' : ''}`}>
                                    {feature.vendor1}
                                    {feature.advantage === 'vendor1' && (
                                        <span className="sr-only">(Advantage)</span>
                                    )}
                                </td>
                                <td className={`vendor-value ${feature.advantage === 'vendor2' ? 'advantage' : ''}`}>
                                    {feature.vendor2}
                                    {feature.advantage === 'vendor2' && (
                                        <span className="sr-only">(Advantage)</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {summary && (
                <div className="comparison-summary">
                    {typeof summary === 'string' ? (
                        <p>{summary}</p>
                    ) : (
                        summary
                    )}
                </div>
            )}
        </div>
    );
};

export default ComparisonTable;