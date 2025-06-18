import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideDetection.module.css';

const SlideDetection = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Real-World Detection</h1>
      <p className="slide-subtitle">Where Runtime Visibility Changes the Outcome</p>
    </header>

    <div className="content-section">
      <div className={styles['detection-scenarios']}>
        <div className={styles['scenario-card']}>
          <div className={styles['scenario-header']}>
            <div className={styles['scenario-icon']}>
              <i className="fas fa-fish"></i>
            </div>
            <h3 className={styles['scenario-title']}>Fake Microsoft Login Page (AiTM Phish)</h3>
          </div>
          <div className={styles['scenario-content']}>
            <p className={styles['scenario-description']}>
              <strong>Attack:</strong> Attacker sends link to pixel-perfect fake Microsoft login hosted on compromised SharePoint subdomain. Uses AiTM kit to harvest credentials + session cookies.
            </p>
            <p className={styles['scenario-detection']}>
              <strong>Detection:</strong> Above flags form structure and JavaScript behavior inconsistent with legitimate login flow — semantic model detects spoofed branding and session token theft pattern.
            </p>
            <div className={styles['scenario-outcome']}>
              <i className="fas fa-check"></i>
              Session blocked before credentials submitted
            </div>
          </div>
        </div>

        <div className={styles['scenario-card']}>
          <div className={styles['scenario-header']}>
            <div className={styles['scenario-icon']}>
              <i className="fab fa-google"></i>
            </div>
            <h3 className={styles['scenario-title']}>Consent Phishing via OAuth (LOTS)</h3>
          </div>
          <div className={styles['scenario-content']}>
            <p className={styles['scenario-description']}>
              <strong>Attack:</strong> Attacker sends fake “Google Workspace Backup” OAuth app with Google branding. App asks for Gmail read/send + Drive access.
            </p>
            <p className={styles['scenario-detection']}>
              <strong>Detection:</strong> Above detects mismatch between app identity, permissions requested, and consent screen branding — LOTS signature pattern flagged.
            </p>
            <div className={styles['scenario-outcome']}>
              <i className="fas fa-check"></i>
              OAuth token request blocked before consent
            </div>
          </div>
        </div>

        <div className={styles['scenario-card']}>
          <div className={styles['scenario-header']}>
            <div className={styles['scenario-icon']}>
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <h3 className={styles['scenario-title']}>Account Takeover via Shared Cookie</h3>
          </div>
          <div className={styles['scenario-content']}>
            <p className={styles['scenario-description']}>
              <strong>Attack:</strong> Attacker reuses session cookie from shared browser profile to access internal CRM without triggering MFA.
            </p>
            <p className={styles['scenario-detection']}>
              <strong>Detection:</strong> Above detects behavioral mismatch with historical user — different location, click cadence, app navigation pattern triggers identity drift model.
            </p>
            <div className={styles['scenario-outcome']}>
              <i className="fas fa-check"></i>
              Session terminated before data access
            </div>
          </div>
        </div>

        <div className={styles['scenario-card']}>
          <div className={styles['scenario-header']}>
            <div className={styles['scenario-icon']}>
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 className={styles['scenario-title']}>Privileged Misuse by Insider</h3>
          </div>
          <div className={styles['scenario-content']}>
            <p className={styles['scenario-description']}>
              <strong>Attack:</strong> Departing finance exec accesses acquisition documents across multiple apps two days before exit.
            </p>
            <p className={styles['scenario-detection']}>
              <strong>Detection:</strong> Above correlates cross-app access behavior, detects deviation from peer role norms, and flags intent mismatch.
            </p>
            <div className={styles['scenario-outcome']}>
              <i className="fas fa-check"></i>
              Real-time alert triggered with full session trace
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideDetection;
