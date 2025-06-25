import React from 'react';
import styles from '../styles/CompanyIndex.module.css';

const HypothesesTestCard = ({ hypothesis, evidence, killCriteria, riskLevel = 'medium', testProgress = 0 }) => {
  const getRiskColor = (level) => {
    switch (level) {
      case 'low': return '#10b981';
      case 'medium': return '#f59e0b';
      case 'high': return '#ef4444';
      default: return '#6b7280';
    }
  };

  return (
    <div className={styles['hypothesis-card']}>
      <div className={styles['hypothesis-header']}>
        <div className={styles['hypothesis-info']}>
          <h3 className={styles['hypothesis-title']}>{hypothesis}</h3>
          <div className={styles['risk-indicator']}>
            <span 
              className={styles['risk-dot']} 
              style={{ backgroundColor: getRiskColor(riskLevel) }}
            ></span>
            <span className={styles['risk-label']}>{riskLevel.toUpperCase()} RISK</span>
          </div>
        </div>
      </div>
      
      <div className={styles['hypothesis-content']}>
        <div className={styles['evidence-section']}>
          <label><i className="fas fa-check-circle" /> Evidence We're Seeking</label>
          <p>{evidence}</p>
        </div>
        
        <div className={styles['kill-criteria-section']}>
          <label><i className="fas fa-times-circle" /> Kill Criteria</label>
          <p>{killCriteria}</p>
        </div>
        
        {testProgress > 0 && (
          <div className={styles['test-progress']}>
            <label>Test Progress</label>
            <div className={styles['progress-bar-container']}>
              <div 
                className={styles['progress-bar-fill']} 
                style={{ width: `${testProgress}%` }}
              ></div>
            </div>
            <span className={styles['progress-text']}>{testProgress}% validated</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HypothesesTestCard;
