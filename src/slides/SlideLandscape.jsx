import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideLandscape.module.css';

const SlideLandscape = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Tool Consolidation Opportunity</h1>
      <p className="slide-subtitle">Replace 2-3 Point Solutions with Above</p>
    </header>

    <div className={styles['competitive-landscape']}>
      <div className={styles['market-gap-section']}>
        <h3 className={styles['section-title']}>
          <i className="fas fa-layer-group"></i>
          The Consolidation Advantage
        </h3>
        <p className={styles['intro-text']}>
          Email security stops bad content at delivery. SaaS security flags risky settings after the fact. 
          Browsers enforce access policy. <strong>Above sees user behavior in real-time — during the session — and provides guidance in the moment.</strong>
        </p>
        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'var(--bg-success)', borderRadius: '8px', border: '2px solid var(--brand-primary)' }}>
          <h4 style={{ color: 'var(--brand-primary)', marginBottom: '12px' }}>
            <i className="fas fa-trophy"></i> Replace Multiple Tools
          </h4>
          <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>
            "If I can replace Cyberhaven + something else with this, I'm in." — Leon, F500 CISO Advisor
          </p>
        </div>
      </div>

      <div className={styles['competitor-categories']}>
        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-database"></i>
            <h4>Data Loss Prevention</h4>
            <span className={styles['category-limitation']}>Reactive Alerts</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Cyberhaven</span>
            <span className={styles['competitor']}>Microsoft Purview</span>
            <span className={styles['competitor']}>Forcepoint</span>
          </div>
          <p className={styles['category-gap']}>Flag data movement after it happens. Miss shadow AI usage, copy-paste to unapproved tools, and real-time user guidance opportunities.</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-cloud"></i>
            <h4>SaaS Security Posture</h4>
            <span className={styles['category-limitation']}>Configuration Focus</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Valence Security</span>
            <span className={styles['competitor']}>Reco</span>
            <span className={styles['competitor']}>Grip Security</span>
          </div>
          <p className={styles['category-gap']}>Map risks via SaaS logs — if they exist. No real-time view of user behavior, OAuth abuse, or active session context.</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-chart-line"></i>
            <h4>User Behavior Analytics</h4>
            <span className={styles['category-limitation']}>Log-Based Analysis</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Exabeam</span>
            <span className={styles['competitor']}>Securonix</span>
            <span className={styles['competitor']}>DTEX</span>
          </div>
          <p className={styles['category-gap']}>Analyze patterns from logs and events. Miss in-session behavior, user intent, and session timelines needed for investigations.</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-globe-americas"></i>
            <h4>Enterprise Browsers</h4>
            <span className={styles['category-limitation']}>Policy-Based</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Island</span>
            <span className={styles['competitor']}>Prisma Access Browser</span>
          </div>
          <p className={styles['category-gap']}>Govern access and usage with tight policies — but no awareness of intent, deception, or insider manipulation.</p>
        </div>

        <div className={`${styles['category-card']} ${styles['above-category']}`}>
          <div className={styles['category-header']}>
            <i className="fas fa-shield-alt"></i>
            <h4>Insider Protection Platform</h4>
            <span className={styles['category-advantage']}>Real-Time Guidance</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={`${styles['competitor']} ${styles['above-highlight']}`}>Above Security</span>
          </div>
          <p className={styles['category-advantage-text']}>Guide users to avoid mistakes with real-time visibility after login. Help employees rather than punish them.</p>
        </div>
      </div>

      <div className={styles['market-positioning']}>
        <h3 className={styles['positioning-title']}>Above's Unique Position</h3>
        <div className={styles['positioning-grid']}>
          <div className={styles['positioning-point']}>
            <i className="fas fa-eye"></i>
            <span>Post-Login Visibility</span>
          </div>
          <div className={styles['positioning-point']}>
            <i className="fas fa-hand-paper"></i>
            <span>Real-Time Nudges</span>
          </div>
          <div className={styles['positioning-point']}>
            <i className="fas fa-puzzle-piece"></i>
            <span>Zero Infrastructure Change</span>
          </div>
          <div className={styles['positioning-point']}>
            <i className="fas fa-timeline"></i>
            <span>Session Timeline Reconstruction</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideLandscape;