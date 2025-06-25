import React from 'react';
import styles from '../styles/CompanyIndex.module.css';

const RoadmapTimelineCard = ({ quarter, capability, revenue, hypothesis, status = 'planned', isLast = false }) => {
  return (
    <div className={`${styles['timeline-item']} ${styles[`timeline-item--${status}`]}`}>
      <div className={styles['timeline-marker']}>
        <div className={styles['timeline-dot']}></div>
        {!isLast && <div className={styles['timeline-line']}></div>}
      </div>
      
      <div className={styles['timeline-content']}>
        <div className={styles['timeline-quarter']}>{quarter}</div>
        <h3 className={styles['timeline-capability']}>{capability}</h3>
        
        <div className={styles['timeline-details']}>
          <div className={styles['timeline-revenue']}>
            <i className="fas fa-dollar-sign" />
            <span>{revenue}</span>
          </div>
          
          <div className={styles['timeline-hypothesis']}>
            <i className="fas fa-flask" />
            <span>{hypothesis}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimelineCard;
