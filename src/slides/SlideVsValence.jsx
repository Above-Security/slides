import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideVsValence.module.css';

const SlideVsValence = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Above vs. Valence / Grip / Reco</h1>
      <p className="slide-subtitle">Runtime Prevention vs. Posture Auditing</p>
    </header>

    <div className="competitor-comparison">
      <div className="comparison-intro">
        <p className="intro-text">
          Valence helps security teams identify SaaS misconfigurations and third-party exposure through API-based posture monitoring.<br />
          <strong>Above prevents live user-driven threats — where posture tools can’t see and logs don’t exist.</strong>
        </p>
      </div>

      <div className="comparison-grid">
        <div className="comparison-section">
          <div className="competitor-approach">
            <h3 className="approach-title">
              <i className="fas fa-cogs"></i>
              Valence Security Strengths
            </h3>
            <ul className="approach-list">
              <li>SaaS misconfig and over-permission visibility</li>
              <li>Third-party OAuth app monitoring</li>
              <li>API-driven alerting and remediation</li>
              <li>Useful for audits, GRC, and security hygiene</li>
              <li>Surface-level exposure insight via log access</li>
            </ul>
            <div className="approach-limitation">
              <i className="fas fa-info-circle"></i>
              <span>Blind to runtime behavior, user intent, and semantic phishing — if logs aren’t available, nothing is seen</span>
            </div>
          </div>

          <div className="above-advantage">
            <h3 className="advantage-title">
              <i className="fas fa-shield-alt"></i>
              Above's Runtime Advantage
            </h3>
            <ul className="advantage-list">
              <li><strong>Sees what the user sees</strong> — full DOM + interface awareness</li>
              <li><strong>Stops LOTS and consent phishing</strong> in-session</li>
              <li><strong>No dependency on SaaS APIs or audit logs</strong></li>
              <li><strong>Prevents privilege misuse</strong> by understanding behavior in context</li>
              <li><strong>Deploys in minutes</strong> — browser-native, no integration work</li>
            </ul>
            <div className="advantage-highlight">
              <i className="fas fa-lightbulb"></i>
              <span>Designed for runtime gray-area threats posture tools can’t reach</span>
            </div>
          </div>
        </div>

        <div className={styles['timeline-comparison']}>
          <h3 className={styles['timeline-title']}>OAuth Phishing Timeline</h3>
          <div className={styles['timeline']}>
            <div className={styles['timeline-event']}>
              <div className={`${styles['timeline-marker']} ${styles['initial']}`}></div>
              <div className={styles['timeline-content']}>
                <h4>T+0: Malicious OAuth App Created</h4>
                <p>App appears clean, uses trusted cloud identity provider</p>
                <div className={`${styles['vendor-response']} ${styles['valence']}`}>Valence: No detection — no config risk or API flag</div>
                <div className={`${styles['vendor-response']} ${styles['above']}`}>Above: Passive — no user activity yet</div>
              </div>
            </div>

            <div className={styles['timeline-event']}>
              <div className={`${styles['timeline-marker']} ${styles['critical']}`}></div>
              <div className={styles['timeline-content']}>
                <h4>T+1: User Views Consent Page</h4>
                <p>Above analyzes interface and permission scopes in real time</p>
                <div className={`${styles['vendor-response']} ${styles['valence']}`}>Valence: Still clean — OAuth app not flagged in config</div>
                <div className={`${styles['vendor-response']} ${styles['above']} ${styles['success']}`}>Above: Detects deception, warns user before they click</div>
              </div>
            </div>

            <div className={styles['timeline-event']}>
              <div className={`${styles['timeline-marker']} ${styles['damage']}`}></div>
              <div className={styles['timeline-content']}>
                <h4>T+2: Consent Granted</h4>
                <p>Attacker now has persistent access via OAuth token</p>
                <div className={`${styles['vendor-response']} ${styles['valence']}`}>Valence: May alert later — if logs surface anomaly</div>
                <div className={`${styles['vendor-response']} ${styles['above']} ${styles['success']}`}>Above: Blocked before consent — threat neutralized</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="competitive-summary">
        <h3 className="summary-title">Not Competing — Completing</h3>
        <p className="summary-text">
          Valence gives posture context. <br /><strong>Above gives real-time protection during the user session.</strong>
        </p>
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-number">0</span>
            <span className="stat-label">Minutes to stop ATO with Above</span>
          </div>
          <div className="stat">
            <span className="stat-number">6+</span>
            <span className="stat-label">Hours average detection delay via API logs</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideVsValence;