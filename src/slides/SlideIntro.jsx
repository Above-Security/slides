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
      <p className="slide-subtitle">Insider Protection &amp; SaaS Behavior Visibility</p>
    </header>

    <div className="content-section">
      <div className="key-points-grid">
        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <h3 className="key-point-title">What Above Does</h3>
          <p className="key-point-description">Real-time visibility after login — protecting employees from mistakes and guiding secure behavior inside SaaS applications.</p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-user-shield"></i>
          </div>
          <h3 className="key-point-title">Core Problems We Address</h3>
          <p className="key-point-description">OAuth abuse, offboarding drift, shadow AI usage, and risky app authorizations that happen after authentication.</p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-eye"></i>
          </div>
          <h3 className="key-point-title">Why It Matters</h3>
          <p className="key-point-description">This is the first tool that tells you what's happening after login — with real-time guidance instead of reactive punishment.</p>
        </div>
      </div>

      <div className="executive-summary">
        <h3 className="summary-title">
          <i className="fas fa-eye"></i>
          Visibility After Login
        </h3>
        <p className="summary-text">
          <strong>80% of breaches happen after authentication</strong> — when users are already inside your apps. Traditional security tools watch logs and traffic, but they can't see what users actually do inside applications.
        </p>
        <p className="summary-text mt-4">
          <strong>Above provides insider protection</strong> with post-authentication visibility. We guide users to avoid mistakes and protect sensitive data in real-time — helping employees rather than punishing them.
        </p>
        <p className="summary-text mt-4">
          Above works directly in the browser to capture real user behavior and provide in-browser nudges. We deploy as an extension across any web application — no API integrations, no traffic steering, no SIEM dependency.
        </p>
        
        {/* Call to Action */}
        <div className="slide-cta">
          <a href="/#/insider-threat-matrix" className="cta-button">
            <i className="fas fa-shield-alt"></i>
            Explore Insider Threat Matrix
          </a>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideIntro;
