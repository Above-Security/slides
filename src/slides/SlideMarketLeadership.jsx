import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideMarketLeadership.module.css';
import {Logo} from '../components/LogoWatermark';

const SlideMarketLeadership = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Capability Comparison</h1>
      <p className="slide-subtitle">Runtime ITDR vs. Traditional Security</p>
    </header>

    <div className={styles['market-leadership']}>
      <div className={styles['leadership-intro']}>
        <h3 className={styles['intro-title']}>
          <i className="fas fa-chart-bar"></i>
          Security Capability Matrix
        </h3>
        <p className={styles['intro-text']}>
          Each category addresses a different layer of risk — access control, misconfiguration, detection, and response.
          <strong>Above uniquely covers the runtime behavioral layer left exposed by every other vendor.</strong>
        </p>
      </div>

      <div className={styles['market-matrix']}>
        <div className={styles['matrix-table']}>
          <div className={styles['matrix-header']}>
            <div className={`${styles['matrix-cell']} ${styles['capability-header']}`}>Capability</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}><Logo /> Above</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Push</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Valence</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Island</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Abnormal</div>
          </div>

          {[
            ['Real-Time Session Threat Detection (Runtime ITDR)', '✅', '✅', '❌', '❌', '❌'],
            ['Post-authentication User Behavior Visibility', '✅', '✅', '❌', '❌', '❌'],
            ['Browser-Based Phishing Detection (AiTM, Consent)', '✅', '❌', '❌', '❌', '❌'],
            ['High-Fidelity Insider Threat Prevention', '✅', '❌', '❌', '❌', '❌'],
            ['Misuse of Legitimate SaaS Tools', '✅', '❌', '❌', '❌', '❌'],
            ['Third-Party OAuth Abuse Coverage', '✅', '❌', '❌', '❌', '❌'],
            ['Risky SaaS & Shadow App Discovery', '✅', '❌', '✅', '❌', '❌'],
            ['Session Hijacking Detection', '✅', '✅', '❌', '✅', '❌'],
            ['Prevention of Credential Misuse in-session', '✅', '❌', '❌', '❌', '❌'],
            ['SaaS Misconfig Detection & Remediation', '❌', '❌', '✅', '❌', '❌'],
            ['Email-Based Phishing Detection', '❌', '❌', '❌', '❌', '✅'],
            ['Policy Enforcement in Managed Browser', '❌', '❌', '❌', '✅', '❌']
          ].map(([capability, a, p, v, i, ab], idx) => (
            <div className={styles['matrix-row']} key={idx}>
              <div className={`${styles['matrix-cell']} ${styles['capability']}`}>{capability}</div>
              <div className={`${styles['matrix-cell']} ${styles['above-cell']}`}>{a}</div>
              <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>{p}</div>
              <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>{v}</div>
              <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>{i}</div>
              <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>{ab}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles['leadership-summary']}>
        <h3 className={styles['summary-title']}>Where Above Leads</h3>
        <div className={styles['winning-factors']}>
          <div className={styles['winning-factor']}>
            <i className="fas fa-eye"></i>
            <h4>In-session Visibility</h4>
            <p>Sees user behavior inside apps — not just login metadata or API logs</p>
          </div>
          <div className={styles['winning-factor']}>
            <i className="fas fa-lock"></i>
            <h4>Prevention at Point-of-Action</h4>
            <p>Stops misuse before tokens are granted or data is accessed</p>
          </div>
          <div className={styles['winning-factor']}>
            <i className="fas fa-clock"></i>
            <h4>Real-Time Detection</h4>
            <p>Responds to live user behavior — not hours later in SIEM logs</p>
          </div>
          <div className={styles['winning-factor']}>
            <i className="fas fa-rocket"></i>
            <h4>Zero Infrastructure</h4>
            <p>No proxy, no traffic reroute, no new browser</p>
          </div>
        </div>
      </div>

      <div className={styles['call-to-action']}>
        <h3 className={styles['cta-title']}>The Missing Layer in the Identity Stack</h3>
        <p className={styles['cta-text']}>
          IAM governs access. SSPM secures configs. Email gateways block phishing at the edge.
          <br /><strong>Above covers the last mile — what users do in-session after they authenticate.</strong>
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideMarketLeadership;
