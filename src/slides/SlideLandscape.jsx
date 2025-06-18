import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideLandscape.module.css';

const SlideLandscape = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Competitive Landscape</h1>
      <p className="slide-subtitle">Understanding the Security Stack</p>
    </header>

    <div className={styles['competitive-landscape']}>
      <div className={styles['market-gap-section']}>
        <h3 className={styles['section-title']}>
          <i className="fas fa-crosshairs"></i>
          The Runtime Protection Gap
        </h3>
        <p className={styles['intro-text']}>
          Email security stops bad content at delivery. SaaS security flags risky settings after the fact. <br />
          Browsers enforce access policy. <strong>Above sees the threat unfold — during the session — and stops it in the moment.</strong>
        </p>
      </div>

      <div className={styles['competitor-categories']}>
        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-envelope"></i>
            <h4>Email Security</h4>
            <span className={styles['category-limitation']}>Pre-Delivery</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Abnormal Security</span>
            <span className={styles['competitor']}>Proofpoint</span>
            <span className={styles['competitor']}>Sublime</span>
          </div>
          <p className={styles['category-gap']}>Catches phishing emails, but blind once the user clicks. No visibility into LOTS, OAuth phishing, or in-session deception.</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-cloud"></i>
            <h4>SaaS Security Posture</h4>
            <span className={styles['category-limitation']}>Post-Configuration</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Valence Security</span>
            <span className={styles['competitor']}>Reco</span>
            <span className={styles['competitor']}>Grip Security</span>
            <span className={styles['competitor']}>Savvy</span>
          </div>
          <p className={styles['category-gap']}>Map risks via SaaS logs — if they exist. No real-time view. Miss active misuse, misbehavior, and gray-area threats.</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-globe"></i>
            <h4>Inline CASB</h4>
            <span className={styles['category-limitation']}>Traffic Proxy</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Netskope</span>
            <span className={styles['competitor']}>Skyhigh Security</span>
          </div>
          <p className={styles['category-gap']}>Struggles with SSL pinning. No access to DOM or real user behavior. Can’t see what the user sees or intends.</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-globe-americas"></i>
            <h4>Enterprise Browsers</h4>
            <span className={styles['category-limitation']}>Policy-Based</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Island</span>
            <span className={styles['competitor']}>Talon</span>
          </div>
          <p className={styles['category-gap']}>Govern access and usage with tight policies — but no awareness of intent, deception, or insider manipulation.</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-user-secret"></i>
            <h4>UEBA & ITDR</h4>
            <span className={styles['category-limitation']}>After the Incident</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>DTEX</span>
            <span className={styles['competitor']}>Exabeam</span>
            <span className={styles['competitor']}>Reveal Security</span>
          </div>
          <p className={styles['category-gap']}>Exabeam reacts at the SIEM layer — too late. DTEX lacks browser visibility. Reveal relies on coarse UI flows, not intent.</p>
        </div>

        <div className={`${styles['category-card']} ${styles['above-category']}`}>
          <div className={styles['category-header']}>
            <i className="fas fa-shield-alt"></i>
            <h4>Runtime ITDR</h4>
            <span className={styles['category-advantage']}>During Interaction</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={`${styles['competitor']} ${styles['above-highlight']}`}>Above Security</span>
          </div>
          <p className={styles['category-advantage-text']}>Understands behavior in context. Catches threats others miss — when it’s still possible to stop them.</p>
        </div>
      </div>

      <div className={styles['market-positioning']}>
        <h3 className={styles['positioning-title']}>Above's Unique Position</h3>
        <div className={styles['positioning-grid']}>
          <div className={styles['positioning-point']}>
            <i className="fas fa-brain"></i>
            <span>LLM Semantic Analysis</span>
          </div>
          <div className={styles['positioning-point']}>
            <i className="fas fa-clock"></i>
            <span>Real-Time Prevention</span>
          </div>
          <div className={styles['positioning-point']}>
            <i className="fas fa-puzzle-piece"></i>
            <span>Zero Infrastructure Change</span>
          </div>
          <div className={styles['positioning-point']}>
            <i className="fas fa-eye"></i>
            <span>LOTS Attack Detection</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideLandscape;