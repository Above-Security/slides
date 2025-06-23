import React from 'react';
import styles from '../styles/CompanyIndex.module.css';

const VisionHero = () => (
  <header className={styles.companyHero}>
    <div className={styles.heroIcon} aria-hidden="true">
      <i className="fas fa-rocket" />
    </div>
    <h1 className={styles.companyHeroTitle}>Above Strategic Narrative</h1>
    <p className={styles.companyHeroSubtitle}>Two‑Year Strategic Narrative &amp; Execution Plan</p>
    <p className={styles.visionStatement}>
      <em>Become the browser‑native control plane that sees and stops what every other security tool misses – from sophisticated phishing to gray‑area insider misuse – without changing how users work.</em>
    </p>
  </header>
);

export default VisionHero;
