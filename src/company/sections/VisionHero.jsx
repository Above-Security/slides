import React from 'react';
import styles from '../styles/CompanyIndex.module.css';
import { Logo } from '../../components/LogoWatermark';

const VisionHero = () => (
  <header className={styles["company-hero"]}>
    <div className={styles["hero-content"]}>
      <div className={styles["company-logo"]}>
        <Logo 
          className="above-company-hero-logo" 
          style={{
            height: '72px',
            width: '72px',
            minHeight: '72px',
            maxHeight: '72px', 
            minWidth: '72px',
            maxWidth: '72px',
            display: 'block',
            alignItems: 'initial',
            justifyContent: 'initial',
            gap: 'initial',
            flex: 'none'
          }}
        />
      </div>
      <h1 className={styles["company-hero-title"]}>Above Strategic Narrative</h1>
      <p className={styles["company-hero-subtitle"]}>Two‑Year Strategic Narrative &amp; Execution Plan</p>
      <p className={styles["vision-statement"]}>
        <em>Real-time visibility into user behavior inside SaaS and browsers — to detect risky activity, guide users in the moment, and protect data without changing how users work.</em>
      </p>
    </div>
  </header>
);

export default VisionHero;
