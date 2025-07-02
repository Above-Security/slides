import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideProblem.module.css';

const SlideProblem = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">The Post-Login Blind Spot</h1>
      <p className="slide-subtitle">Critical Gaps in SaaS Security Visibility</p>
    </header>

    <div className="content-section">
      <div className={styles['landscape-grid']}>
        <div className={styles['landscape-card']}>
          <h3 className={styles['landscape-title']}>
            <i className="fas fa-eye-slash"></i>
            The Visibility Gap
          </h3>
          <p className={styles['landscape-text']}>
            Existing tools focus on <strong>access control</strong>, not actual <strong>behavior</strong> inside SaaS apps.
          </p>
          <p className={`${styles['landscape-text']} mt-3`}>
            Most risks today occur <em>after</em> login — where traditional security tools go blind.
          </p>

          <div className={styles['blind-spots-card']}>
            <h4 className={styles['blind-spots-title']}>What You Can't See Today:</h4>
            <ul className={styles['blind-spots-list']}>
              <li><i className="fas fa-times"></i> What users do after login</li>
              <li><i className="fas fa-times"></i> Risky app authorizations</li>
              <li><i className="fas fa-times"></i> Session behavior patterns</li>
              <li><i className="fas fa-times"></i> Employee mistakes in real-time</li>
            </ul>
          </div>
        </div>

        <div className={styles['landscape-card']}>
          <h3 className={styles['landscape-title']}>
            <i className="fas fa-users"></i>
            Critical Use Cases
          </h3>

          <div className={styles['threat-item']}>
            <div className={styles['threat-content']}>
              <div className={`${styles['threat-icon']} ${styles['oauth']}`}>
                <i className="fas fa-key"></i>
              </div>
              <div className={styles['threat-details']}>
                <h4 className={styles['threat-name']}>OAuth Abuse & Risky Apps</h4>
                <p className={styles['threat-description']}>
                  Employees connect suspicious third-party apps to corporate accounts — visibility into what apps users are authorizing and their permissions.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['threat-item']}>
            <div className={styles['threat-content']}>
              <div className={`${styles['threat-icon']} ${styles['session']}`}>
                <i className="fas fa-user-clock"></i>
              </div>
              <div className={styles['threat-details']}>
                <h4 className={styles['threat-name']}>Offboarding Drift</h4>
                <p className={styles['threat-description']}>
                  Open sessions persist after employee departure — a major concern for CISOs who need to track active sessions post-departure.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['threat-item']}>
            <div className={styles['threat-content']}>
              <div className={`${styles['threat-icon']} ${styles['insider']}`}>
                <i className="fas fa-robot"></i>
              </div>
              <div className={styles['threat-details']}>
                <h4 className={styles['threat-name']}>Shadow AI & SaaS Usage</h4>
                <p className={styles['threat-description']}>
                  Employees copy-paste sensitive data into ChatGPT, Grammarly, or other AI tools — creating data leakage risks.
                </p>
              </div>
            </div>
          </div>

          <div className={styles['threat-item']}>
            <div className={styles['threat-content']}>
              <div className={`${styles['threat-icon']} ${styles['insider']}`}>
                <i className="fas fa-timeline"></i>
              </div>
              <div className={styles['threat-details']}>
                <h4 className={styles['threat-name']}>Incident Investigation</h4>
                <p className={styles['threat-description']}>
                  When incidents occur, security teams need session timelines to reconstruct user behavior and understand what happened.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideProblem;