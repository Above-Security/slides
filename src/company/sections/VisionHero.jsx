import React from 'react';
import styles from '../styles/CompanyIndex.module.css';
import { Logo } from '../../components/LogoWatermark';

const VisionHero = () => (
  <header className={styles["company-hero"]}>
    <div className={styles["hero-content"]}>
      <div className={styles["company-logo"]}>
        <Logo className="use-cases-logo" />
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
