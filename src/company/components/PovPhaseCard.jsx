import React from 'react';
import styles from '../styles/CompanyIndex.module.css';

const PovPhaseCard = ({ phase, days, objectives, activities, exitCriteria, phaseNumber, isActive = false }) => {
  return (
    <div className={`${styles['pov-phase-card']} ${isActive ? styles['pov-phase-card--active'] : ''}`}>
      <div className={styles['pov-phase-header']}>
        <div className={styles['phase-info']}>
          <h3 className={styles['phase-title']}>{phase}</h3>
          <span className={styles['phase-duration']}>{days}</span>
        </div>
      </div>
      
      <div className={styles['pov-phase-content']}>
        <div className={styles['objectives-section']}>
          <label><i className="fas fa-bullseye" /> Objectives</label>
          <p>{objectives}</p>
        </div>
        
        <div className={styles['activities-section']}>
          <label><i className="fas fa-bolt" /> Key Activities</label>
          <p>{activities}</p>
        </div>
        
        <div className={styles['exit-criteria-section']}>
          <label><i className="fas fa-check-circle" /> Success Criteria</label>
          <p>{exitCriteria}</p>
        </div>
      </div>
    </div>
  );
};

export default PovPhaseCard;
