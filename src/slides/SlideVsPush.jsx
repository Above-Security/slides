import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideVsPush.module.css';

const SlideVsPush = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Above vs. Push Security</h1>
      <p className="slide-subtitle">Semantic Understanding vs. Pattern Recognition</p>
    </header>

    <div className="competitor-comparison">
      <div className="comparison-intro">
        <p className="intro-text">
          Push Security delivers effective protection for credential-based identity threats through browser extension telemetry.<br />
          <strong>Above goes further — by understanding intent, behavior, and context in real time.</strong>
        </p>
      </div>

      <div className="comparison-grid">
        <div className="comparison-section">
          <div className="competitor-approach">
            <h3 className="approach-title">
              <i className="fas fa-search"></i>
              Push Security Strengths
            </h3>
            <ul className="approach-list">
              <li>Browser-based detection of session hijacking and token theft</li>
              <li>Strong on credential compromise prevention</li>
              <li>Solid integrations with SIEM/XDR tools</li>
              <li>Lightweight deployment footprint</li>
              <li>Focused identity protection use cases</li>
            </ul>
            <div className="approach-limitation">
              <i className="fas fa-info-circle"></i>
              <span>Pattern-matching model — blind to unknown or subtle intent-based threats</span>
            </div>
          </div>

          <div className="above-advantage">
            <h3 className="advantage-title">
              <i className="fas fa-brain"></i>
              Above's Runtime Advantage
            </h3>
            <ul className="advantage-list">
              <li><strong>LLM-driven phishing detection</strong> — detects consent phishing, spoofed OAuth, AiTM</li>
              <li><strong>Behavioral deviation</strong> from user norms and role expectations</li>
              <li><strong>Cross-app session tracing</strong> to identify lateral movement and gray-area abuse</li>
              <li><strong>Real-time user guidance</strong> and block on intent-confirmed threats</li>
              <li><strong>Visibility into any SaaS or web app</strong> — even those with no API or logs</li>
            </ul>
            <div className="advantage-highlight">
              <i className="fas fa-lightbulb"></i>
              <span>Understands what the user sees — and what they intend to do</span>
            </div>
          </div>
        </div>

        <div className={styles['use-case-comparison']}>
          <h3 className={styles['use-case-title']}>Real-World Use Case: OAuth Consent Phish</h3>
          <div className={styles['scenario-comparison']}>
            <div className={styles['push-response']}>
              <h4 className={styles['response-title']}>Push Security Response</h4>
              <div className={styles['response-steps']}>
                <div className={styles['step']}>
                  <i className="fas fa-check-circle"></i>
                  <span>Detects credential reuse and token theft</span>
                </div>
                <div className={styles['step']}>
                  <i className="fas fa-check-circle"></i>
                  <span>Flags logins from suspicious locations</span>
                </div>
                <div className={`${styles['step']} ${styles['neutral']}`}> 
                  <i className="fas fa-question-circle"></i>
                  <span>May miss legitimate-looking OAuth app with malicious intent</span>
                </div>
              </div>
              <p className={`${styles['response-result']} ${styles['neutral']}`}>Result: Strong identity protection, but limited semantic detection</p>
            </div>

            <div className={styles['above-response']}>
              <h4 className={styles['response-title']}>Above Security Response</h4>
              <div className={styles['response-steps']}>
                <div className={styles['step']}>
                  <i className="fas fa-search"></i>
                  <span>Analyzes page structure and app identity with LLM</span>
                </div>
                <div className={styles['step']}>
                  <i className="fas fa-exclamation-triangle"></i>
                  <span>Flags scope mismatches and branding deception</span>
                </div>
                <div className={`${styles['step']} ${styles['success']}`}>
                  <i className="fas fa-shield-alt"></i>
                  <span>Stops OAuth consent before it’s granted</span>
                </div>
              </div>
              <p className={`${styles['response-result']} ${styles['success']}`}>Result: Threat neutralized before access is granted</p>
            </div>
          </div>
        </div>
      </div>

      <div className="competitive-summary">
        <h3 className="summary-title">Positioning</h3>
        <p className="summary-text">
          Push Security addresses session integrity and credential threats well. 
          <strong>
            <br/>Above expands the perimeter — understanding context, intent, and semantics to prevent unseen attacks in real time.</strong>
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideVsPush;