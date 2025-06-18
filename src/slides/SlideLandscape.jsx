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
          Email security prevents phishing at delivery. SaaS security finds misconfigurations post-deployment.<br />
          Browser security offers policy controls. <strong>Above provides runtime protection during user interactions.</strong>
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
          </div>
          <p className={styles['category-gap']}>Strong at preventing phishing emails, but misses browser-based ATO attempts</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-cloud"></i>
            <h4>SaaS Security</h4>
            <span className={styles['category-limitation']}>Post-Configuration</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Valence Security</span>
            <span className={styles['competitor']}>Reco AI</span>
          </div>
          <p className={styles['category-gap']}>Excellent at finding risky configurations, but detects threats after they occur</p>
        </div>

        <div className={styles['category-card']}>
          <div className={styles['category-header']}>
            <i className="fas fa-browser"></i>
            <h4>Browser Security</h4>
            <span className={styles['category-limitation']}>Policy-Based</span>
          </div>
          <div className={styles['competitor-list']}>
            <span className={styles['competitor']}>Island Enterprise</span>
            <span className={styles['competitor']}>Push Security</span>
          </div>
          <p className={styles['category-gap']}>Strong policy enforcement, but limited semantic understanding of threats</p>
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
          <p className={styles['category-advantage-text']}>Semantic understanding at the moment of user decision</p>
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
