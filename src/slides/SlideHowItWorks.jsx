import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideHowItWorks.module.css';

const SlideHowItWorks = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">How It Works</h1>
      <p className="slide-subtitle">Browser Extension + LLM Page Analysis</p>
    </header>

    <div className="content-section">
      <div className={styles['platform-overview']}>
        <div className={styles['architecture-card']}>
          <h3 className={styles['architecture-title']}>
            <i className="fas fa-cogs"></i>
            Technical Architecture
          </h3>

          <div className={styles['tech-stack-grid']}>
            <div className={styles['tech-item']}>
              <div className={styles['tech-icon']}>
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <div className={styles['tech-content']}>
                <h4 className={styles['tech-title']}>Browser Extension</h4>
                <p className={styles['tech-description']}>Captures page content and user interactions across any web application in real-time</p>
              </div>
            </div>

            <div className={styles['tech-item']}>
              <div className={styles['tech-icon']}>
                <i className="fas fa-brain"></i>
              </div>
              <div className={styles['tech-content']}>
                <h4 className={styles['tech-title']}>LLM Page Analysis</h4>
                <p className={styles['tech-description']}>Semantic analysis of page content to detect sophisticated phishing attempts and malicious intent</p>
              </div>
            </div>

            <div className={styles['tech-item']}>
              <div className={styles['tech-icon']}>
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className={styles['tech-content']}>
                <h4 className={styles['tech-title']}>Real-Time Prevention</h4>
                <p className={styles['tech-description']}>Blocks sophisticated attacks before completion: prevents credential entry, stops malicious OAuth consent</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles['concepts-section']}>
          <h3 className={styles['concepts-title']}>Key Differentiators</h3>
          <div className={styles['concepts-grid']}>
            <div className={styles['concept-card']}>
              <div className={styles['concept-icon']}>
                <i className="fas fa-layer-group"></i>
              </div>
              <h4 className={styles['concept-title']}>App-Agnostic</h4>
              <p className={styles['concept-description']}>Works with any app. No API integration required.</p>
            </div>

            <div className={styles['concept-card']}>
              <div className={styles['concept-icon']}>
                <i className="fas fa-clock"></i>
              </div>
              <h4 className={styles['concept-title']}>Instant Deployment</h4>
              <p className={styles['concept-description']}>Days to deploy via browser management. Sends alerts to existing SIEM/SOAR platforms.</p>
            </div>

            <div className={styles['concept-card']}>
              <div className={styles['concept-icon']}>
                <i className="fas fa-search"></i>
              </div>
              <h4 className={styles['concept-title']}>Semantic Understanding</h4>
              <p className={styles['concept-description']}>LLM understands user intent and page context, bridging gaps that ITDR, DLP, and UEBA miss in real-world scenarios.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideHowItWorks;
