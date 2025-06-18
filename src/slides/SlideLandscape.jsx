import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideLandscape = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Competitive Landscape</h1>
      <p className="slide-subtitle">Understanding the Security Stack</p>
    </header>

    <div className="competitive-landscape">
      <div className="market-gap-section">
        <h3 className="section-title">
          <i className="fas fa-crosshairs"></i>
          The Runtime Protection Gap
        </h3>
        <p className="intro-text">
          Email security prevents phishing at delivery. SaaS security finds misconfigurations post-deployment.<br />
          Browser security offers policy controls. <strong>Above provides runtime protection during user interactions.</strong>
        </p>
      </div>

      <div className="competitor-categories">
        <div className="category-card">
          <div className="category-header">
            <i className="fas fa-envelope"></i>
            <h4>Email Security</h4>
            <span className="category-limitation">Pre-Delivery</span>
          </div>
          <div className="competitor-list">
            <span className="competitor">Abnormal Security</span>
            <span className="competitor">Proofpoint</span>
          </div>
          <p className="category-gap">Strong at preventing phishing emails, but misses browser-based ATO attempts</p>
        </div>

        <div className="category-card">
          <div className="category-header">
            <i className="fas fa-cloud"></i>
            <h4>SaaS Security</h4>
            <span className="category-limitation">Post-Configuration</span>
          </div>
          <div className="competitor-list">
            <span className="competitor">Valence Security</span>
            <span className="competitor">Reco AI</span>
          </div>
          <p className="category-gap">Excellent at finding risky configurations, but detects threats after they occur</p>
        </div>

        <div className="category-card">
          <div className="category-header">
            <i className="fas fa-browser"></i>
            <h4>Browser Security</h4>
            <span className="category-limitation">Policy-Based</span>
          </div>
          <div className="competitor-list">
            <span className="competitor">Island Enterprise</span>
            <span className="competitor">Push Security</span>
          </div>
          <p className="category-gap">Strong policy enforcement, but limited semantic understanding of threats</p>
        </div>

        <div className="category-card above-category">
          <div className="category-header">
            <i className="fas fa-shield-alt"></i>
            <h4>Runtime ITDR</h4>
            <span className="category-advantage">During Interaction</span>
          </div>
          <div className="competitor-list">
            <span className="competitor above-highlight">Above Security</span>
          </div>
          <p className="category-advantage-text">Semantic understanding at the moment of user decision</p>
        </div>
      </div>

      <div className="market-positioning">
        <h3 className="positioning-title">Above's Unique Position</h3>
        <div className="positioning-grid">
          <div className="positioning-point">
            <i className="fas fa-brain"></i>
            <span>LLM Semantic Analysis</span>
          </div>
          <div className="positioning-point">
            <i className="fas fa-clock"></i>
            <span>Real-Time Prevention</span>
          </div>
          <div className="positioning-point">
            <i className="fas fa-puzzle-piece"></i>
            <span>Zero Infrastructure Change</span>
          </div>
          <div className="positioning-point">
            <i className="fas fa-eye"></i>
            <span>LOTS Attack Detection</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideLandscape;
