import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideIntro.module.css';
// Note: Common styles like key-points-grid, executive-summary are now in shared-slide-components.css

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
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="key-point-title">What Above Does</h3>
          <p className="key-point-description">Runtime ITDR that sees user behavior inside applications — detecting threats that bypass traditional security controls.</p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-user-secret"></i>
          </div>
          <h3 className="key-point-title">Core Problems We Address</h3>
          <p className="key-point-description">Insider misuse, credential harvesting, session hijacking, and OAuth abuse that happen inside trusted applications.</p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-brain"></i>
          </div>
          <h3 className="key-point-title">Why It Matters</h3>
          <p className="key-point-description">Traditional tools miss post-auth threats. We bridge the gap with real-time behavioral analysis and intent detection.</p>
        </div>
      </div>

      <div className="executive-summary">
        <h3 className="summary-title">
          <i className="fas fa-exclamation-triangle"></i>
          The Identity Threat Gap
        </h3>
        <p className="summary-text">
          <strong>80% of breaches happen after authentication</strong> — when users are already inside your apps. Traditional ITDR, DLP, and UEBA tools watch logs and traffic, but they can't see what users actually do inside applications.
        </p>
        <p className="summary-text mt-4">
          <strong>Above</strong> is ITDR but with post-authentication visibility. We detect insider threats, credential harvesting, and misuse in real-time by understanding user behavior and intent — not just access patterns.
        </p>
        <p className="summary-text mt-4">
          Unlike traditional ITDR that relies on logs and alerts, Above works directly in the browser to capture real user behavior. We deploy as an extension across any web application — no API integrations, no traffic steering, no SIEM dependency.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideIntro;
