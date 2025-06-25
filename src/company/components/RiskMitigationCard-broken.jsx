import React from 'react';
impor      <div className={styles['risk-mitigation-content']}>
        <label><i className="fas fa-shield-alt" /> Mitigation Strategy</label>
        <p>{mitigation}</p>
      </div>yles from '../styles/CompanyIndex.module.css';

const RiskMitigationCard = ({ risk, mitigation, severity = 'medium', icon }) => {
  const getSeverityColor = (level) => {
    switch (level) {
      case 'low': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      case 'critical': return '#dc2626';
      default: return '#6b7280';
    }
  };

  return (
    <div className={styles['risk-mitigation-card']}>
      <div className={styles['risk-header']}>
        <div className={styles['risk-icon']}>
          <i className={icon} />
        </div>
        <div className={styles['risk-info']}>
          <h3 className={styles['risk-title']}>{risk}</h3>
          <div className={styles['severity-indicator']}>
            <span 
              className={styles['severity-dot']} 
              style={{ backgroundColor: getSeverityColor(severity) }}
            ></span>
            <span className={styles['severity-label']}>{severity.toUpperCase()}</span>
          </div>
        </div>
      </div>
      
      <div className={styles['mitigation-content']}>
        <label>🛡️ Mitigation Strategy</label>
        <p>{mitigation}</p>
      </div>
    </div>
  );
};

export default RiskMitigationCard;
