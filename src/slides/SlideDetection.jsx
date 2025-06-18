import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideDetection = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Real-World Detection</h1>
      <p className="slide-subtitle">Sophisticated Phishing Prevention</p>
    </header>

    <div className="content-section">
      <div className="detection-scenarios">
        <div className="scenario-card">
          <div className="scenario-header">
            <div className="scenario-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3 className="scenario-title">Advanced Phishing Portal Detection</h3>
          </div>
          <div className="scenario-content">
            <p className="scenario-description">
              <strong>Attack:</strong> Pixel-perfect fake Office 365 login portal using new domain, valid SSL certificate, and advanced evasion techniques.
            </p>
            <p className="scenario-detection">
              <strong>Detection:</strong> LLM analysis identifies malicious intent through page semantics, form behavior, and contextual anomalies despite visual similarity.
            </p>
            <div className="scenario-outcome">
              <i className="fas fa-check"></i>
              Blocks credential entry before compromise
            </div>
          </div>
        </div>

        <div className="scenario-card">
          <div className="scenario-header">
            <div className="scenario-icon">
              <i className="fab fa-google"></i>
            </div>
            <h3 className="scenario-title">LOTS OAuth Phishing Prevention</h3>
          </div>
          <div className="scenario-content">
            <p className="scenario-description">
              <strong>Attack:</strong> Sophisticated campaign using fake "Google Drive Backup" app with lookalike consent pages and excessive permission requests.
            </p>
            <p className="scenario-detection">
              <strong>Detection:</strong> Runtime analysis of OAuth consent flows, app legitimacy verification, and permission scope assessment in real-time.
            </p>
            <div className="scenario-outcome">
              <i className="fas fa-check"></i>
              Prevents malicious OAuth consent before token granted
            </div>
          </div>
        </div>

        <div className="scenario-card">
          <div className="scenario-header">
            <div className="scenario-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3 className="scenario-title">Business Email Compromise Detection</h3>
          </div>
          <div className="scenario-content">
            <p className="scenario-description">
              <strong>Attack:</strong> Sophisticated BEC campaign using compromised executive accounts to request wire transfers through legitimate email platforms.
            </p>
            <p className="scenario-detection">
              <strong>Detection:</strong> Behavioral analysis identifies unusual communication patterns and financial request anomalies within email applications.
            </p>
            <div className="scenario-outcome">
              <i className="fas fa-check"></i>
              Flags suspicious financial requests for review
            </div>
          </div>
        </div>

        <div className="scenario-card">
          <div className="scenario-header">
            <div className="scenario-icon">
              <i className="fas fa-user-shield"></i>
            </div>
            <h3 className="scenario-title">Privilege Misuse Detection</h3>
          </div>
          <div className="scenario-content">
            <p className="scenario-description">
              <strong>Attack:</strong> Marketing user accesses M&A documents in SharePoint outside normal job function after sophisticated social engineering.
            </p>
            <p className="scenario-detection">
              <strong>Detection:</strong> Cross-app behavioral analysis flags access to sensitive content inconsistent with user role and historical patterns.
            </p>
            <div className="scenario-outcome">
              <i className="fas fa-check"></i>
              Immediate alert for privilege misuse investigation
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideDetection;
