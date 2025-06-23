import React from 'react';
import styles from './MotionTimeline.module.css';

const MotionTimeline = ({ phases }) => (
  <div className={styles.timelineWrapper}>
    {phases.map(({ stage, channel, champion, model, risk, icon }, idx) => (
      <div
        key={idx}
        className={styles.phaseCard}
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        <div className={styles.phaseHeader}>
          <div className={`${styles.icon} ${icon}`} aria-hidden="true" />
          <h4 className={styles.stage}>{stage}</h4>
        </div>
        <ul className={styles.details}>
          <li><strong>Channel:</strong> {channel}</li>
          <li><strong>Champion:</strong> {champion}</li>
          <li><strong>Model:</strong> {model}</li>
          <li><strong>Risk:</strong> {risk}</li>
        </ul>
      </div>
    ))}
  </div>
);

export default MotionTimeline;
