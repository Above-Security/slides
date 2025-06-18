import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideCaseStudy.module.css';

const SlideCaseStudy2 = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Rippling–Deel Espionage Case</h1>
      <p className="slide-subtitle">When Access Isn't the Problem — Intent Is</p>
    </header>

    <div className="content-section">
      <div className={styles['case-study-container']}>
        <div className={styles['incident-overview']}>
          <h3 className={styles['incident-title']}>
            <i className="fas fa-user-secret"></i>
            What Happened
          </h3>
          <p className={styles['incident-description']}>
            A Rippling payroll employee allegedly acted as a corporate mole, exfiltrating competitor data to Deel for months using Slack, search tools, and browser-based access. Traditional controls saw valid sessions — but not malicious intent.
          </p>
        </div>

        <div className={styles['detection-analysis']}>
          <h3 className={styles['analysis-title']}>
            <i className="fas fa-search"></i>
            What Above Would Have Caught
          </h3>

          <div className={styles['detection-timeline']}>
            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>1</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>Role Misalignment</h4>
                <p className={styles['detection-description']}>Access to sensitive pipeline and strategy docs flagged as inconsistent with payroll role — elevated early as lateral access risk.</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>2</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>Cross-App Search Correlation</h4>
                <p className={styles['detection-description']}>Slack searches for "Deel" across multiple days and devices surfaced as outliers from peer behavior.</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>3</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>Intent-Based Drift Detection</h4>
                <p className={styles['detection-description']}>User actions within browser apps showed consistent interest in competitor data and finance systems — semantic drift flagged as espionage pattern.</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>4</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>Exfiltration Indicators</h4>
                <p className={styles['detection-description']}>Unusual download and copy behavior surfaced inside apps not covered by DLP — flagged in session and contained.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['prevention-outcome']}>
          <h3 className={styles['outcome-title']}>
            <i className="fas fa-shield-alt"></i>
            Result: Insider Stopped Before Impact
          </h3>
          <p className={styles['outcome-description']}>
            Above would have alerted security teams months earlier — when behavior drifted, not just when the honeypot fired. Real-time session-level visibility turns subtle misuse into actionable intelligence.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideCaseStudy2;
