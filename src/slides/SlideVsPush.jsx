import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideVsPush = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Above vs. Push Security</h1>
      <p className="slide-subtitle">Semantic Understanding vs. Pattern Detection</p>
    </header>

    <div className="competitor-comparison">
      <div className="comparison-intro">
        <p className="intro-text">
          Push Security offers strong browser extension-based identity protection.<br />
          <strong>Above delivers superior semantic understanding and broader threat coverage.</strong>
        </p>
      </div>

      <div className="comparison-grid">
        <div className="comparison-section">
          <div className="competitor-approach">
            <h3 className="approach-title">
              <i className="fas fa-search"></i>
              Push Security Strengths
            </h3>
            <ul className="approach-list">
              <li>Browser extension for session hijacking detection</li>
              <li>Strong credential theft monitoring</li>
              <li>Identity attack pattern recognition</li>
              <li>Established SIEM/XDR integrations</li>
              <li>Proven deployment at scale</li>
            </ul>
            <div className="approach-limitation">
              <i className="fas fa-info-circle"></i>
              <span>Focus: Pattern-based detection of known attack signatures</span>
            </div>
          </div>

          <div className="above-advantage">
            <h3 className="advantage-title">
              <i className="fas fa-brain"></i>
              Above's Superior Capabilities
            </h3>
            <ul className="advantage-list">
              <li><strong>Semantic phishing detection</strong> across all attack vectors</li>
              <li><strong>Session hijacking prevention</strong> with behavioral analysis</li>
              <li><strong>LOTS detection</strong> within trusted services (DocuSign, Dropbox)</li>
              <li><strong>Real-time user education</strong> with contextual warnings</li>
              <li><strong>Zero-infrastructure deployment</strong> via browser extension</li>
            </ul>
            <div className="advantage-highlight">
              <i className="fas fa-lightbulb"></i>
              <span>Focus: Understanding malicious intent in legitimate contexts</span>
            </div>
          </div>
        </div>

        <div className="use-case-comparison">
          <h3 className="use-case-title">ATO Scenario: Cyberhaven-Style OAuth Abuse</h3>
          <div className="scenario-comparison">
            <div className="push-response">
              <h4 className="response-title">Push Security Response</h4>
              <div className="response-steps">
                <div className="step">
                  <i className="fas fa-check-circle"></i>
                  <span>Detects credential reuse patterns</span>
                </div>
                <div className="step">
                  <i className="fas fa-check-circle"></i>
                  <span>Flags suspicious login locations</span>
                </div>
                <div className="step neutral">
                  <i className="fas fa-question-circle"></i>
                  <span>May not detect malicious OAuth consent on legitimate Google page</span>
                </div>
              </div>
              <p className="response-result neutral">Result: Strong session protection, potential OAuth gap</p>
            </div>

            <div className="above-response">
              <h4 className="response-title">Above Security Response</h4>
              <div className="response-steps">
                <div className="step">
                  <i className="fas fa-search"></i>
                  <span>Analyzes OAuth consent page semantically</span>
                </div>
                <div className="step">
                  <i className="fas fa-exclamation-triangle"></i>
                  <span>Detects excessive permissions request</span>
                </div>
                <div className="step success">
                  <i className="fas fa-shield-alt"></i>
                  <span>Blocks malicious consent with user education</span>
                </div>
              </div>
              <p className="response-result success">Result: ATO prevented at point of user decision</p>
            </div>
          </div>
        </div>
      </div>

      <div className="competitive-summary">
        <h3 className="summary-title">Complementary Strengths</h3>
        <p className="summary-text">
          Push Security excels at session protection and credential monitoring.
          <strong>Above adds semantic understanding for consent-based attacks.</strong>
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideVsPush;
