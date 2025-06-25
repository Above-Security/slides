import React from 'react';
import styles from '../styles/CompanyIndex.module.css';

const ValueProofCard = ({ title, description, icon, priority = 'default' }) => {
  return (
    <div className={`${styles['value-proof-card']} ${styles[`value-proof-card--${priority}`]}`}>
      <div className={styles['value-proof-header']}>
        <div className={styles['value-proof-icon']}>
          <i className={icon} />
        </div>
        <h3 className={styles['value-proof-title']}>{title}</h3>
      </div>
      
      <div className={styles['value-proof-content']}>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ValueProofCard;
