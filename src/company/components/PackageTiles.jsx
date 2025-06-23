import React from 'react';
import styles from './PackageTiles.module.css';

const PackageTiles = ({ packages }) => (
  <div className={styles.tileGrid}>
    {packages.map(({ name, description, icon }, idx) => (
      <div
        key={idx}
        className={styles.tile}
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        <div className={styles.tileHeader}>
          <div className={`${styles.icon} ${icon}`} aria-hidden="true" />
          <h4 className={styles.name}>{name}</h4>
        </div>
        <p className={styles.desc}>{description}</p>
      </div>
    ))}
  </div>
);

export default PackageTiles;
