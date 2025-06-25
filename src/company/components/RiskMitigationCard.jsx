import React from 'react';
import styles from '../styles/CompanyIndex.module.css';

const RiskMitigationCard = ({ risk, mitigation, severity, icon }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high':
        return 'var(--color-danger)';
      case 'medium':
        return 'var(--color-warning)';
      case 'low':
        return 'var(--color-primary)';
      default:
        return 'var(--color-text-secondary)';
    }
  };

  const getSeverityBg = (severity) => {
    switch (severity) {
      case 'high':
        return 'rgba(209, 36, 47, 0.1)';
      case 'medium':
        return 'rgba(253, 126, 20, 0.1)';
      case 'low':
        return 'rgba(8, 135, 43, 0.1)';
      default:
        return 'var(--color-background-secondary)';
    }
  };

  return (
    <div className={styles['risk-mitigation-card']}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-lg)' }}>
        <div className={styles['risk-icon']}>
          <i className={icon} />
        </div>
        
        <div className={styles['risk-info']}>
          <div className={styles['risk-title']}>
            {risk}
          </div>
          
          <div style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--spacing-xs)',
            padding: 'var(--spacing-xs) var(--spacing-sm)',
            borderRadius: 'var(--radius-sm)',
            fontSize: 'var(--font-size-xs)',
            fontWeight: 'var(--font-weight-bold)',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            background: getSeverityBg(severity),
            color: getSeverityColor(severity),
            border: `1px solid ${getSeverityColor(severity)}40`,
            marginBottom: 'var(--spacing-md)'
          }}>
            <i className="fas fa-exclamation-triangle" style={{ fontSize: '10px' }} />
            {severity} risk
          </div>
          
          <div className={styles['risk-mitigation']}>
            <strong>Mitigation:</strong> {mitigation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskMitigationCard;