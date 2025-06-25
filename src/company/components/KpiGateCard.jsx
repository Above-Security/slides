import React from 'react';
import styles from '../styles/CompanyIndex.module.css';

const KpiGateCard = ({ kpi, passTarget, failTrigger, status = 'pending' }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'pass': return '#10b981';
      case 'fail': return '#ef4444';
      case 'pending': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <div className={styles['kpi-gate-card']}>
      <div className={styles['kpi-header']}>
        <h4 className={styles['kpi-title']}>{kpi}</h4>
        <div 
          className={styles['status-indicator']}
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {status.toUpperCase()}
        </div>
      </div>
      
      <div className={styles['kpi-targets']}>
        <div className={styles['pass-target']}>
          <label><i className="fas fa-check-circle" /> Pass Target</label>
          <span>{passTarget}</span>
        </div>
        
        <div className={styles['fail-trigger']}>
          <label><i className="fas fa-times-circle" /> Fail Trigger</label>
          <span>{failTrigger}</span>
        </div>
      </div>
    </div>
  );
};

export default KpiGateCard;
