import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideIntro = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">
        <svg className="logo-small" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
          <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
        </svg>
        Above
      </h1>
      <p className="slide-subtitle">Runtime Identity Threat Detection &amp; Response</p>
    </header>

    <div className="content-section">
      <div className="key-points-grid">
        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-puzzle-piece"></i>
          </div>
          <h3 className="key-point-title">Browser Extension</h3>
          <p className="key-point-description">Deployed via enterprise browser management. No agents, no SIEM integration required.</p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-brain"></i>
          </div>
          <h3 className="key-point-title">LLM Page Analysis</h3>
          <p className="key-point-description">Semantic understanding of page content and user interactions to detect malicious intent in real-time.</p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-eye"></i>
          </div>
          <h3 className="key-point-title">LOTS Detection</h3>
          <p className="key-point-description">Detects Living Off Trusted Services attacks within legitimate platforms like OAuth, DocuSign, Dropbox.</p>
        </div>
      </div>

      <div className="executive-summary">
        <h3 className="summary-title">
          <i className="fas fa-shield-alt"></i>
          Runtime ITDR for the SaaS Era
        </h3>
        <p className="summary-text">
          Traditional tools monitor access. We monitor behavior. Detects insider threats,
          sophisticated phishing, and malicious OAuth consent that occur after authentication.
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideIntro;
