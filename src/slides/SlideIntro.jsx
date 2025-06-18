import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideIntro.module.css';

const SlideIntro = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">
        <svg className="logo-small" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
          <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
        </svg>
        Above
      </h1>
      <p className="slide-subtitle">Runtime Identity Threat Detection &amp; Response</p>
    </header>

    <div className="content-section">
      <div className={styles.keyPointsGrid}>
        <div className={styles.keyPointCard}>
          <div className={styles.keyPointIcon}>
            <i className="fas fa-puzzle-piece"></i>
          </div>
          <h3 className={styles.keyPointTitle}>Browser Extension</h3>
          <p className={styles.keyPointDescription}>Deployed via enterprise browser management. No agents, no SIEM integration required.</p>
        </div>

        <div className={styles.keyPointCard}>
          <div className={styles.keyPointIcon}>
            <i className="fas fa-brain"></i>
          </div>
          <h3 className={styles.keyPointTitle}>LLM Page Analysis</h3>
          <p className={styles.keyPointDescription}>Semantic understanding of page content and user interactions to detect malicious intent in real-time.</p>
        </div>

        <div className={styles.keyPointCard}>
          <div className={styles.keyPointIcon}>
            <i className="fas fa-eye"></i>
          </div>
          <h3 className={styles.keyPointTitle}>LOTS Detection</h3>
          <p className={styles.keyPointDescription}>Detects Living Off Trusted Services attacks within legitimate platforms like OAuth, DocuSign, Dropbox.</p>
        </div>
      </div>

      <div className={styles.executiveSummary}>
        <h3 className={styles.summaryTitle}>
          <i className="fas fa-shield-alt"></i>
          Runtime ITDR for the SaaS Era
        </h3>
        <p className={styles.summaryText}>
          Traditional tools monitor access. We monitor behavior. Detects insider threats,
          sophisticated phishing, and malicious OAuth consent that occur after authentication.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideIntro;
