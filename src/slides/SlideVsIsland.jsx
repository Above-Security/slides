import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideVsIsland.module.css';

const SlideVsIsland = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Above vs. Island Enterprise Browser</h1>
      <p className="slide-subtitle">Behavioral Intelligence vs. Policy Enforcement</p>
    </header>

    <div className="competitor-comparison">
      <div className="comparison-intro">
        <p className="intro-text">
          Island enforces usage policy through a controlled browser environment.<br />
          <strong>Above enables real-time detection of subtle behavioral threats in the browsers users already trust and use.</strong>
        </p>
      </div>

      <div className={styles['deployment-comparison']}>
        <div className={styles['deployment-approach']}>
          <h3 className="approach-title">
            <i className="fas fa-globe"></i>
            Island's Browser Strategy
          </h3>
          <div className={styles['deployment-steps']}>
            <div className={`${styles['step']} ${styles['complex']}`}>
              <i className="fas fa-download"></i>
              <span>Replace existing browsers with Island</span>
            </div>
            <div className={`${styles['step']} ${styles['complex']}`}>
              <i className="fas fa-users-cog"></i>
              <span>Train users on a new browser UI</span>
            </div>
            <div className={`${styles['step']} ${styles['complex']}`}>
              <i className="fas fa-tools"></i>
              <span>Reconfigure bookmarks, workflows, extensions</span>
            </div>
            <div className={`${styles['step']} ${styles['complex']}`}>
              <i className="fas fa-shield-alt"></i>
              <span>Define and enforce granular policies</span>
            </div>
          </div>
          <div className={styles['deployment-timeline']}>
            <i className="fas fa-clock"></i>
            <span>Deployment: Months</span>
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
              <span>Deploy lightweight browser extension</span>
            </div>
            <div className={`${styles['step']} ${styles['simple']}`}>
              <i className="fas fa-user-check"></i>
              <span>No change to browser UI or user behavior</span>
            </div>
            <div className={`${styles['step']} ${styles['simple']}`}>
              <i className="fas fa-brain"></i>
              <span>LLM-driven analysis of in-session activity</span>
            </div>
            <div className={`${styles['step']} ${styles['simple']}`}>
              <i className="fas fa-shield-alt"></i>
              <span>Blocks threats based on intent, not rules</span>
            </div>
          </div>
          <div className={styles['deployment-timeline']}>
            <i className="fas fa-rocket"></i>
            <span>Deployment: Same day</span>
          </div>
        </div>
      </div>

      <div className={styles['capability-comparison']}>
        <h3 className={styles['capability-title']}>Detection vs. Control</h3>
        <div className={styles['capability-grid']}>
          <div className={styles['capability-category']}>
            <h4>Threat Visibility</h4>
            <div className={styles['capability-item']}>
              <span className={styles['capability-label']}>Island:</span>
              <span className={styles['capability-desc']}>Sees browser events, lacks semantic interpretation</span>
              <i className={`fas fa-minus ${styles['capability-icon']} ${styles['neutral']}`}></i>
            </div>
            <div className={styles['capability-item']}>
              <span className={styles['capability-label']}>Above:</span>
              <span className={styles['capability-desc']}>Understands user intent and threat context</span>
              <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
            </div>
          </div>

          <div className={styles['capability-category']}>
            <h4>User Disruption</h4>
            <div className={styles['capability-item']}>
              <span className={styles['capability-label']}>Island:</span>
              <span className={styles['capability-desc']}>Requires browser migration</span>
              <i className={`fas fa-times ${styles['capability-icon']} ${styles['negative']}`}></i>
            </div>
            <div className={styles['capability-item']}>
              <span className={styles['capability-label']}>Above:</span>
              <span className={styles['capability-desc']}>Invisible to user, no UI change</span>
              <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
            </div>
          </div>

          <div className={styles['capability-category']}>
            <h4>Threat Prevention</h4>
            <div className={styles['capability-item']}>
              <span className={styles['capability-label']}>Island:</span>
              <span className={styles['capability-desc']}>Blocks based on static policies</span>
              <i className={`fas fa-minus ${styles['capability-icon']} ${styles['neutral']}`}></i>
            </div>
            <div className={styles['capability-item']}>
              <span className={styles['capability-label']}>Above:</span>
              <span className={styles['capability-desc']}>Blocks based on dynamic understanding of behavior</span>
              <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
            </div>
          </div>

          <div className={styles['capability-category']}>
            <h4>Deployment Speed</h4>
            <div className={styles['capability-item']}>
              <span className={styles['capability-label']}>Island:</span>
              <span className={styles['capability-desc']}>Multi-month rollout + change management</span>
              <i className={`fas fa-times ${styles['capability-icon']} ${styles['negative']}`}></i>
            </div>
            <div className={styles['capability-item']}>
              <span className={styles['capability-label']}>Above:</span>
              <span className={styles['capability-desc']}>Rolls out in hours with zero disruption</span>
              <i className={`fas fa-check ${styles['capability-icon']} ${styles['positive']}`}></i>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['use-case-example']}>
        <h3 className={styles['example-title']}>Use Case: Privilege Misuse Over Time</h3>
        <div className={styles['example-scenario']}>
          <div className={styles['scenario-setup']}>
            <p>A salesperson nearing resignation spends weeks viewing closed-won opportunities they don’t own, competitor contracts, and comp plans in Salesforce.</p>
          </div>
          <div className={styles['scenario-responses']}>
            <div className={styles['response']}>
              <h4>Island Response</h4>
              <div className={styles['response-flow']}>
                <div className={styles['flow-step']}>
                  <i className="fas fa-cog"></i>
                  <span>Policy may block bulk exports or high-risk domains</span>
                </div>
                <div className={styles['flow-step']}>
                  <i className="fas fa-clipboard-list"></i>
                  <span>Activity logged for later review</span>
                </div>
              </div>
              <p className={styles['response-result']}>Result: Misses intent-driven misuse that stays inside policy</p>
            </div>
            <div className={`${styles['response']} ${styles['above-response']}`}>
              <h4>Above Response</h4>
              <div className={styles['response-flow']}>
                <div className={styles['flow-step']}>
                  <i className="fas fa-search"></i>
                  <span>Analyzes user navigation and access patterns</span>
                </div>
                <div className={styles['flow-step']}>
                  <i className="fas fa-user-clock"></i>
                  <span>Flags out-of-role behavior across sessions</span>
                </div>
                <div className={styles['flow-step']}>
                  <i className="fas fa-shield-alt"></i>
                  <span>Surfaces escalating risk for security and HR</span>
                </div>
              </div>
              <p className={styles['response-result']}>Result: Early detection of slow-burn insider threat</p>
            </div>
          </div>
        </div>
      </div>

      <div className="competitive-summary">
        <h3 className="summary-title">Where Policy Ends, Intent Begins</h3>
        <p className="summary-text">
          Island enforces what users can do. <br /><strong>Above understands what they’re trying to do — and stops the risk before it unfolds.</strong>
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideVsIsland;