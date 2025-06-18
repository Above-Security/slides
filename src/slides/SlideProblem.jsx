import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideProblem = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">The Problem</h1>
      <p className="slide-subtitle">Post-Authentication Blind Spot</p>
    </header>

    <div className="content-section">
      <div className="landscape-grid">
        <div className="landscape-card">
          <h3 className="landscape-title">
            <i className="fas fa-exclamation-triangle"></i>
            Security Stack Gap
          </h3>
          <p className="landscape-text">
            IAM controls <strong>access</strong>. SIEM aggregates <strong>logs</strong>.
            DLP monitors <strong>files</strong>. None see what users actually <strong>do</strong> inside applications.
          </p>

          <div className="blind-spots-card">
            <h4 className="blind-spots-title">Undetected Threats:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-times"></i> Sophisticated phishing campaigns targeting authenticated users</li>
              <li><i className="fas fa-times"></i> Advanced social engineering via trusted platforms</li>
              <li><i className="fas fa-times"></i> Gradual insider data exfiltration</li>
              <li><i className="fas fa-times"></i> Session hijacking via stolen tokens</li>
            </ul>
          </div>
        </div>

        <div className="landscape-card">
          <h3 className="landscape-title">
            <i className="fas fa-bug"></i>
            Sophisticated Phishing Examples
          </h3>

          <div className="threat-item">
            <div className="threat-content">
              <div className="threat-icon insider">
                <i className="fas fa-user-secret"></i>
              </div>
              <div className="threat-details">
                <h4 className="threat-name">Cyberhaven Incident (2024)</h4>
                <p className="threat-description">Employee systematically downloaded customer data over months. Traditional DLP missed gradual exfiltration pattern.</p>
              </div>
            </div>
          </div>

          <div className="threat-item">
            <div className="threat-content">
              <div className="threat-icon oauth">
                <i className="fab fa-google"></i>
              </div>
              <div className="threat-details">
                <h4 className="threat-name">LOTS OAuth Phishing</h4>
                <p className="threat-description">Sophisticated campaigns abuse trusted OAuth flows and legitimate services to bypass traditional email security.</p>
              </div>
            </div>
          </div>

          <div className="threat-item">
            <div className="threat-content">
              <div className="threat-icon session">
                <i className="fas fa-fish"></i>
              </div>
              <div className="threat-details">
                <h4 className="threat-name">Zero-Day Phishing Portals</h4>
                <p className="threat-description">Pixel-perfect fake SaaS portals using advanced evasion techniques that bypass traditional detection methods.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideProblem;
