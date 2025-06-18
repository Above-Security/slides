import React from 'react';
import SlideLayout from '../components/SlideLayout';

/**
 * Above Intro Slide — highlighting precise runtime ITDR and in-browser phishing prevention.
 */
const SlideIntro = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">
        <div className="brand-container">
          <svg className="logo-small" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
            <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#000000" />
          </svg>
          <span className="brand-name">Above</span>
        </div>
      </h1>
      <p className="slide-subtitle">Runtime Identity Threat Detection &amp; Response</p>
    </header>

    <div className="content-section">
      <div className="key-points-grid">
        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-puzzle-piece"></i>
          </div>
          <h3 className="key-point-title">Browser-Native Deployment</h3>
          <p className="key-point-description">Deployed as a lightweight Chrome extension—no agents, no log integrations, no traffic steering.</p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-user-shield"></i>
          </div>
          <h3 className="key-point-title">In-Browser Phishing Prevention</h3>
          <p className="key-point-description">Stops credential harvesting, rogue OAuth consent, and UI-based deception at the point of interaction.</p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-eye"></i>
          </div>
          <h3 className="key-point-title">Post-Auth Misuse Detection</h3>
          <p className="key-point-description">Detects insider threats and gray-area misuse by interpreting user behavior across SaaS apps in real time.</p>
        </div>
      </div>

      <div className="executive-summary">
        <h3 className="summary-title">
          <i className="fas fa-shield-alt"></i>
          The Above Advantage
        </h3>
        <p className="summary-text">
          Traditional <strong>ITDR</strong> and <strong>IAM</strong> solutions fail post-authentication, focusing on access control rather than actual behavior inside applications.
          <br />
          <strong>Above</strong> addresses this critical gap by providing real-time detection of misuse, insider threats, and sophisticated phishing attacks within SaaS and internal applications — including OAuth consent abuse, session hijacking, and browser-based social engineering that bypass conventional email-based defenses.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideIntro;
