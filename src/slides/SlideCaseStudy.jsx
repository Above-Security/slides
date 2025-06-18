import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideCaseStudy.module.css';

const SlideCaseStudy = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Cyberhaven Case Study</h1>
      <p className="slide-subtitle">How OAuth Page Analysis Would Have Prevented It</p>
    </header>

    <div className="content-section">
      <div className={styles['case-study-container']}>
        <div className={styles['incident-overview']}>
          <h3 className={styles['incident-title']}>
            <i className="fas fa-user-secret"></i>
            What Happened (2024)
          </h3>
          <p className={styles['incident-description']}>
            Cyberhaven employee used malicious OAuth app disguised as legitimate Google service to systematically access and download customer data.
            Traditional security tools failed to detect the fake OAuth consent page.
          </p>
        </div>

        <div className={styles['detection-analysis']}>
          <h3 className={styles['analysis-title']}>
            <i className="fas fa-search"></i>
            Above Detection Points
          </h3>

          <div className={styles['detection-timeline']}>
            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>1</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>OAuth Page Analysis</h4>
                <p className={styles['detection-description']}>LLM analyzes OAuth consent page and detects it's not actually a legitimate Google app despite visual similarity</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>2</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>Permission Scope Validation</h4>
                <p className={styles['detection-description']}>Extension identifies excessive permissions requested that don't match the claimed app functionality</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>3</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>LOTS Attack Detection</h4>
                <p className={styles['detection-description']}>Semantic analysis recognizes Living Off Trusted Services pattern - malicious intent within trusted OAuth flow</p>
              </div>
            </div>

            <div className={styles['detection-item']}>
              <div className={styles['detection-step']}>4</div>
              <div className={styles['detection-content']}>
                <h4 className={styles['detection-title']}>Real-Time Prevention</h4>
                <p className={styles['detection-description']}>Blocks OAuth consent before token is granted, preventing any data access by the malicious application</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['prevention-outcome']}>
          <h3 className={styles['outcome-title']}>
            <i className="fas fa-shield-alt"></i>
            Prevention Result
          </h3>
          <p className={styles['outcome-description']}>
            Attack stopped at the OAuth consent stage. No data access granted to malicious app.
            Zero customer data compromised through semantic understanding of page intent.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideCaseStudy;
