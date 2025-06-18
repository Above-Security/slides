import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideDetection = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Real-World Detection</h1>
      <p className="slide-subtitle">Evidence-Based Scenarios</p>
    </header>

    <div className="content-section">
      <div className="detection-scenarios">
        <div className="scenario-card">
          <div className="scenario-header">
            <div className="scenario-icon">
              <i className="fas fa-fish"></i>
            </div>
            <h3 className="scenario-title">Zero-Day Phishing Prevention</h3>
          </div>
          <div className="scenario-content">
            <p className="scenario-description">
              <strong>Attack:</strong> Pixel-perfect fake Office 365 login portal using new domain and SSL certificate.
            </p>
            <p className="scenario-detection">
              <strong>Detection:</strong> LLM analysis identifies malicious intent through page semantics and form behavior, despite visual similarity to legitimate site.
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
            <h3 className="scenario-title">Malicious OAuth Prevention</h3>
          </div>
          <div className="scenario-content">
            <p className="scenario-description">
              <strong>Attack:</strong> Fake "Google Drive Backup" app requests excessive permissions on lookalike consent page.
            </p>
            <p className="scenario-detection">
              <strong>Detection:</strong> Extension analyzes OAuth consent page, identifies suspicious permission scope and app legitimacy indicators.
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
              <i className="fas fa-user-times"></i>
            </div>
            <h3 className="scenario-title">Offboarding Gap Detection</h3>
          </div>
          <div className="scenario-content">
            <p className="scenario-description">
              <strong>Attack:</strong> Departing employee retains access through saved sessions or incomplete deprovisioning.
            </p>
            <p className="scenario-detection">
              <strong>Detection:</strong> Behavioral analysis identifies access patterns inconsistent with employment status and normal usage patterns.
            </p>
            <div className="scenario-outcome">
              <i className="fas fa-check"></i>
              Detects residual access during offboarding windows
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
              <strong>Attack:</strong> Marketing user accesses M&A documents in SharePoint outside normal job function.
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
