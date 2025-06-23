import React from 'react';
import styles from './ICPProfile.module.css';

const ICPProfile = ({ items }) => (
  <div className={styles.profileList}>
    {items.map(({ label, icon, text }, idx) => (
      <div
        key={idx}
        className={styles.item}
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        <div className={`${styles.icon} ${icon}`} aria-hidden="true" />
        <div>
          <h5 className={styles.label}>{label}</h5>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ICPProfile;
