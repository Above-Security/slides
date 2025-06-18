import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideProblem.module.css';

const SlideProblem = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">The Identity Threat Landscape</h1>
      <p className="slide-subtitle">Identity as the Primary Attack Vector</p>
    </header>

    <div className="content-section">
      <div className={styles['landscape-grid']}>
        <div className={styles['landscape-card']}>
          <h3 className={styles['landscape-title']}>
            <i className="fas fa-exclamation-triangle"></i>
            The Critical Gap
          </h3>
          <p className={styles['landscape-text']}>
            Existing tools focus on <strong>access</strong>, not actual <strong>behavior</strong> inside apps.
          </p>
          <p className={`${styles['landscape-text']} mt-3`}>
            Compromised credentials alone don't tell the full story.
          </p>

          <div className={styles['blind-spots-card']}>
            <h4 className={styles['blind-spots-title']}>Traditional Security Blind Spots:</h4>
            <ul className={styles['blind-spots-list']}>
              <li><i className="fas fa-times"></i> Post-authentication behavior</li>
              <li><i className="fas fa-times"></i> In-application activities</li>
              <li><i className="fas fa-times"></i> Session-level visibility</li>
              <li><i className="fas fa-times"></i> Semantic user intent</li>
            </ul>
          </div>
        </div>

        <div className={styles['landscape-card']}>
          <h3 className={styles['landscape-title']}>
            <i className="fas fa-crosshairs"></i>
            Emerging Identity Threats
          </h3>

          <div className={styles['threat-item']}>
            <div className={styles['threat-content']}>
              <div className={`${styles['threat-icon']} ${styles['oauth']}`}>
                <i className="fab fa-google"></i>
              </div>
              <div className={styles['threat-details']}>
                <h4 className={styles['threat-name']}>OAuth Phishing</h4>
                <p className={styles['threat-description']}>Malicious apps trick users into granting access via OAuth, bypassing traditional authentication mechanisms</p>
              </div>
            </div>
          </div>

          <div className={styles['threat-item']}>
            <div className={styles['threat-content']}>
              <div className={`${styles['threat-icon']} ${styles['session']}`}>
                <i className="fas fa-key"></i>
              </div>
              <div className={styles['threat-details']}>
                <h4 className={styles['threat-name']}>Session Hijacking</h4>
                <p className={styles['threat-description']}>Attackers steal session tokens to impersonate users without re-authentication</p>
              </div>
            </div>
          </div>

          <div className={styles['threat-item']}>
            <div className={styles['threat-content']}>
              <div className={`${styles['threat-icon']} ${styles['insider']}`}>
                <i className="fas fa-user-times"></i>
              </div>
              <div className={styles['threat-details']}>
                <h4 className={styles['threat-name']}>Low-and-Slow Data Scraping</h4>
                <p className={styles['threat-description']}>Incremental data exfiltration designed to evade traditional security alerts</p>
              </div>
            </div>
          </div>

          <div className={styles['threat-item']}>
            <div className={styles['threat-content']}>
              <div className={`${styles['threat-icon']} ${styles['insider']}`}>
                <i className="fas fa-user-secret"></i>
              </div>
              <div className={styles['threat-details']}>
                <h4 className={styles['threat-name']}>Insider Threats</h4>
                <p className={styles['threat-description']}>Malicious or negligent insiders misuse legitimate access to compromise data</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideProblem;

