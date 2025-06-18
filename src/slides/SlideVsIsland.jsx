import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideVsIsland.module.css';

const SlideVsIsland = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Above vs. Island Enterprise Browser</h1>
      <p className="slide-subtitle">Semantic Intelligence vs. Policy Enforcement</p>
    </header>

    <div className="competitor-comparison">
      <div className="comparison-intro">
        <p className="intro-text">
          Island Enterprise Browser provides comprehensive browser security through policy enforcement.<br />
          <strong>Above adds semantic intelligence to existing browsers.</strong>
        </p>
      </div>

      <div className="comparison-grid">
        <div className={styles['deployment-comparison']}>
          <div className={styles['deployment-approach']}>
            <h3 className="approach-title">
              <i className="fas fa-browser"></i>
              Island's Browser Strategy
            </h3>
            <div className={styles['deployment-steps']}>
              <div className={`${styles['step']} ${styles['complex']}`}>
                <i className="fas fa-download"></i>
                <span>Deploy enterprise browser replacement</span>
              </div>
              <div className={`${styles['step']} ${styles['complex']}`}>
                <i className="fas fa-users-cog"></i>
                <span>Train employees on new browser interface</span>
              </div>
              <div className={`${styles['step']} ${styles['complex']}`}>
                <i className="fas fa-tools"></i>
                <span>Migrate browser-based workflows and bookmarks</span>
              </div>
              <div className={`${styles['step']} ${styles['complex']}`}>
                <i className="fas fa-shield-alt"></i>
                <span>Configure granular security policies</span>
              </div>
            </div>
            <div className={styles['deployment-timeline']}>
              <i className="fas fa-clock"></i>
              <span>Deployment: 3-6 months</span>
            </div>
          </div>

          <div className={`${styles['deployment-approach']} ${styles['above']}`}>
            <h3 className="approach-title">
              <i className="fas fa-puzzle-piece"></i>
              Above's Extension Strategy
            </h3>
            <div className={styles['deployment-steps']}>
              <div className={`${styles['step']} ${styles['simple']}`}>
                <i className="fas fa-download"></i>
                <span>Deploy browser extension via existing MDM</span>
              </div>
              <div className={`${styles['step']} ${styles['simple']}`}>
                <i className="fas fa-user-check"></i>
                <span>Zero user training required</span>
              </div>
              <div className={`${styles['step']} ${styles['simple']}`}>
                <i className="fas fa-cog"></i>
                <span>Works with existing browser workflows</span>
              </div>
              <div className={`${styles['step']} ${styles['simple']}`}>
                <i className="fas fa-brain"></i>
                <span>Intelligent threat detection with user education</span>
              </div>
            </div>
            <div className={styles['deployment-timeline']}>
              <i className="fas fa-rocket"></i>
              <span>Deployment: Same day</span>
            </div>
          </div>
        </div>

        <div className={styles['capability-comparison']}>
          <h3 className={styles['capability-title']}>Security Approach Comparison</h3>
          <div className={styles['capability-grid']}>
            <div className={styles['capability-category']}>
              <h4>Data Protection</h4>
              <div className={styles['capability-item']}>
                <span className={styles['capability-label']}>Island:</span>
                <span className={styles['capability-desc']}>Policy-based controls (configurable)</span>
                <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
              </div>
              <div className={styles['capability-item']}>
                <span className={styles['capability-label']}>Above:</span>
                <span className={styles['capability-desc']}>Semantic analysis of user intent</span>
                <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
              </div>
            </div>

            <div className={styles['capability-category']}>
              <h4>User Experience</h4>
              <div className={styles['capability-item']}>
                <span className={styles['capability-label']}>Island:</span>
                <span className={styles['capability-desc']}>New browser interface to learn</span>
                <i className={`fas fa-minus ${styles['capability-icon']} ${styles['neutral']}`}></i>
              </div>
              <div className={styles['capability-item']}>
                <span className={styles['capability-label']}>Above:</span>
                <span className={styles['capability-desc']}>Works with familiar browsers</span>
                <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
              </div>
            </div>

            <div className={styles['capability-category']}>
              <h4>Threat Detection</h4>
              <div className={styles['capability-item']}>
                <span className={styles['capability-label']}>Island:</span>
                <span className={styles['capability-desc']}>Policy-based restrictions and monitoring</span>
                <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
              </div>
              <div className={styles['capability-item']}>
                <span className={styles['capability-label']}>Above:</span>
                <span className={styles['capability-desc']}>LLM semantic threat understanding</span>
                <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
              </div>
            </div>

            <div className={styles['capability-category']}>
              <h4>Deployment Speed</h4>
              <div className={styles['capability-item']}>
                <span className={styles['capability-label']}>Island:</span>
                <span className={styles['capability-desc']}>3-6 month enterprise rollout</span>
                <i className={`fas fa-minus ${styles['capability-icon']} ${styles['neutral']}`}></i>
              </div>
              <div className={styles['capability-item']}>
                <span className={styles['capability-label']}>Above:</span>
                <span className={styles['capability-desc']}>Same-day deployment</span>
                <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['use-case-example']}>
          <h3 className={styles['example-title']}>Use Case: Suspicious Document Download</h3>
          <div className={styles['example-scenario']}>
            <div className={styles['scenario-setup']}>
              <p>Employee receives email with link to "urgent contract" requiring download</p>
            </div>
            <div className={styles['scenario-responses']}>
              <div className={styles['response']}>
                <h4>Island Response</h4>
                <div className={styles['response-flow']}>
                  <div className={styles['flow-step']}>
                    <i className="fas fa-cog"></i>
                    <span>Applies configured download policy</span>
                  </div>
                  <div className={styles['flow-step']}>
                    <i className="fas fa-shield-alt"></i>
                    <span>May allow or block based on domain/file type</span>
                  </div>
                  <div className={styles['flow-step']}>
                    <i className="fas fa-clipboard-list"></i>
                    <span>Logs activity for compliance</span>
                  </div>
                </div>
                <p className={styles['response-result']}>Result: Policy-based decision, may miss context</p>
              </div>
              <div className={`${styles['response']} ${styles['above-response']}`}>
                <h4>Above Response</h4>
                <div className={styles['response-flow']}>
                  <div className={styles['flow-step']}>
                    <i className="fas fa-search"></i>
                    <span>Analyzes page content and user context</span>
                  </div>
                  <div className={`${styles['flow-step']} ${styles['success']}`}>
                    <i className="fas fa-exclamation-triangle"></i>
                    <span>Detects suspicious urgency language and sender</span>
                  </div>
                  <div className={styles['flow-step']}>
                    <i className="fas fa-graduation-cap"></i>
                    <span>Educates user about phishing indicators</span>
                  </div>
                </div>
                <p className={styles['response-result']}>Result: Context-aware protection with user education</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="competitive-summary">
        <h3 className="summary-title">Complementary Approaches</h3>
        <p className="summary-text">
          Island provides comprehensive browser replacement with strong policy controls.
          <strong>Above enhances existing browsers with semantic intelligence.</strong>
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideVsIsland;
