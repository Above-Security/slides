import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideCaseStudy.module.css';

const SlideCaseStudy = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Cyberhaven Incident</h1>
      <p className="slide-subtitle">What Traditional Tools Missed — and What We Would Have Caught</p>
    </header>

    <div className="content-section">
      <div className={styles['case-study-container']}>
        <div className={styles['incident-overview']}>
          <h3 className={styles['incident-title']}>
            <i className="fas fa-user-secret"></i>
            What Happened
          </h3>
          <p className={styles['incident-description']}>
            A Cyberhaven developer was phished with a fake Google OAuth page. They unknowingly authorized a malicious app, which pushed a trojanized Chrome extension update to thousands of users.
            Email filters missed it. EDR missed it. SIEM missed it. Because the page looked legit — but wasn’t.
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
                <h4 className={styles['detection-title']}>OAuth Page Deep Inspection</h4>
                <p className={styles['detection-description']}>LLM parses page content and layout — identifies mismatched branding and suspicious issuer identity.</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>2</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>Scope Mismatch Alert</h4>
                <p className={styles['detection-description']}>Flags permission scopes that don't align with the app’s stated purpose — classic indicator of OAuth abuse.</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>3</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>LOTS Pattern Recognition</h4>
                <p className={styles['detection-description']}>Detects Living Off Trusted Services: fake OAuth inside trusted domain flow, designed to exploit user trust post-auth.</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>4</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>Consent Interruption</h4>
                <p className={styles['detection-description']}>Blocks token issuance before the app is granted access — cutting off the attack midstream.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['prevention-outcome']}>
          <h3 className={styles['outcome-title']}>
            <i className="fas fa-shield-alt"></i>
            Result: No Compromise
          </h3>
          <p className={styles['outcome-description']}>
            The threat is stopped before access is granted. No data is exposed. Above turns what would've been a mass compromise into a blocked request — based entirely on what was rendered, not what was logged.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideCaseStudy;