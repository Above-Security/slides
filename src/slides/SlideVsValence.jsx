import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideVsValence = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Above vs. Valence Security</h1>
      <p className="slide-subtitle">Runtime Prevention vs. Configuration Management</p>
    </header>

    <div className="competitor-comparison">
      <div className="comparison-intro">
        <p className="intro-text">
          Valence Security provides comprehensive SaaS security posture management.<br />
          <strong>Above focuses on runtime user interaction protection.</strong>
        </p>
      </div>

      <div className="comparison-grid">
        <div className="comparison-section">
          <div className="competitor-approach">
            <h3 className="approach-title">
              <i className="fas fa-cogs"></i>
              Valence Security Strengths
            </h3>
            <ul className="approach-list">
              <li>Comprehensive SaaS discovery and SSPM</li>
              <li>Identity threat detection in SaaS environments</li>
              <li>Risk remediation and compliance workflows</li>
              <li>API-based monitoring and configuration scanning</li>
              <li>Strong business user collaboration features</li>
            </ul>
            <div className="approach-limitation">
              <i className="fas fa-info-circle"></i>
              <span>Focus: Post-deployment configuration and risk management</span>
            </div>
          </div>

          <div className="above-advantage">
            <h3 className="advantage-title">
              <i className="fas fa-shield-alt"></i>
              Above's Runtime Focus
            </h3>
            <ul className="advantage-list">
              <li><strong>Runtime protection</strong> during actual user interactions</li>
              <li><strong>Browser-native deployment</strong> with zero API dependencies</li>
              <li><strong>User intent analysis</strong> prevents malicious actions before they occur</li>
              <li><strong>Real-time intervention</strong> vs. post-incident remediation</li>
              <li><strong>Immediate deployment</strong> via browser extension</li>
            </ul>
            <div className="advantage-highlight">
              <i className="fas fa-lightbulb"></i>
              <span>Focus: Preventing threats at the moment of user interaction</span>
            </div>
          </div>
        </div>

        <div className="timeline-comparison">
          <h3 className="timeline-title">ATO Timeline: OAuth Abuse in Trusted SaaS</h3>
          <div className="timeline">
            <div className="timeline-event">
              <div className="timeline-marker initial"></div>
              <div className="timeline-content">
                <h4>T+0: Malicious OAuth App Created</h4>
                <p>Attacker creates legitimate-looking OAuth application</p>
                <div className="vendor-response valence">Valence: No detection (app appears legitimate)</div>
                <div className="vendor-response above">Above: No detection (no user interaction yet)</div>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-marker critical"></div>
              <div className="timeline-content">
                <h4>T+1: User Encounters Consent Page</h4>
                <p>Employee clicks phishing link, sees OAuth consent request</p>
                <div className="vendor-response valence">Valence: No detection (legitimate OAuth flow)</div>
                <div className="vendor-response above success">Above: Analyzes consent semantically, detects excessive permissions</div>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-marker damage"></div>
              <div className="timeline-content">
                <h4>T+2: User Decision Point</h4>
                <p>Without Above: User grants consent, attacker gains access</p>
                <div className="vendor-response valence">Valence: Still no detection (authorized access)</div>
                <div className="vendor-response above success">Above: Blocks consent with user education</div>
              </div>
            </div>

            <div className="timeline-event">
              <div className="timeline-marker aftermath"></div>
              <div className="timeline-content">
                <h4>T+Hours: Data Access Begins</h4>
                <p>Attacker uses legitimate OAuth token to access data</p>
                <div className="vendor-response valence">Valence: Eventually detects unusual data access patterns</div>
                <div className="vendor-response above success">Above: Attack already prevented</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="competitive-summary">
        <h3 className="summary-title">Different Problem Spaces</h3>
        <p className="summary-text">
          Valence excels at SaaS configuration management and compliance.
          <strong>Above prevents malicious user actions within legitimate apps.</strong>
        </p>
        <div className="summary-stats">
          <div className="stat">
            <span className="stat-number">0</span>
            <span className="stat-label">Minutes to prevent with Above</span>
          </div>
          <div className="stat">
            <span className="stat-number">Hours</span>
            <span className="stat-label">Time to detect with SSPM</span>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideVsValence;
