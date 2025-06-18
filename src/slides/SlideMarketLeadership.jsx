import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideMarketLeadership = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Capability Comparison</h1>
      <p className="slide-subtitle">Runtime ITDR vs. Traditional Security</p>
    </header>

    <div className="market-leadership">
      <div className="leadership-intro">
        <h3 className="intro-title">
          <i className="fas fa-chart-bar"></i>
          Security Capability Matrix
        </h3>
        <p className="intro-text">
          Each solution excels in different areas.
          <strong>Above uniquely provides runtime semantic understanding for ATO prevention.</strong>
        </p>
      </div>

      <div className="market-matrix">
        <div className="matrix-table">
          <div className="matrix-header">
            <div className="matrix-cell capability-header">Capability</div>
            <div className="matrix-cell vendor-header">Above</div>
            <div className="matrix-cell vendor-header">Push</div>
            <div className="matrix-cell vendor-header">Valence</div>
            <div className="matrix-cell vendor-header">Island</div>
            <div className="matrix-cell vendor-header">Abnormal</div>
          </div>

          <div className="matrix-row">
            <div className="matrix-cell capability">Runtime Phishing Prevention</div>
            <div className="matrix-cell above-cell">✅</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
          </div>

          <div className="matrix-row">
            <div className="matrix-cell capability">Session Hijacking Detection</div>
            <div className="matrix-cell above-cell">✅</div>
            <div className="matrix-cell competitor-cell">✅</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">✅</div>
            <div className="matrix-cell competitor-cell">❌</div>
          </div>

          <div className="matrix-row">
            <div className="matrix-cell capability">Semantic Content Analysis</div>
            <div className="matrix-cell above-cell">✅</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
          </div>

          <div className="matrix-row">
            <div className="matrix-cell capability">SaaS Configuration Management</div>
            <div className="matrix-cell above-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">✅</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
          </div>

          <div className="matrix-row">
            <div className="matrix-cell capability">Email Phishing Prevention</div>
            <div className="matrix-cell above-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">✅</div>
          </div>

          <div className="matrix-row">
            <div className="matrix-cell capability">Browser Policy Enforcement</div>
            <div className="matrix-cell above-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">❌</div>
            <div className="matrix-cell competitor-cell">✅</div>
            <div className="matrix-cell competitor-cell">❌</div>
          </div>
        </div>
      </div>

      <div className="market-opportunity">
        <h3 className="opportunity-title">CISO Use Cases by Solution</h3>
        <div className="opportunity-breakdown">
          <div className="opportunity-segment">
            <div className="segment-header">
              <i className="fas fa-user-shield"></i>
              <h4>Account Takeover (ATO)</h4>
            </div>
            <div className="use-case-coverage">
              <div className="coverage-item">
                <span className="solution">Above:</span>
                <span className="coverage strong">OAuth consent analysis</span>
              </div>
              <div className="coverage-item">
                <span className="solution">Push:</span>
                <span className="coverage strong">Session hijacking detection</span>
              </div>
              <div className="coverage-item">
                <span className="solution">Others:</span>
                <span className="coverage weak">Limited runtime protection</span>
              </div>
            </div>
          </div>

          <div className="opportunity-segment">
            <div className="segment-header">
              <i className="fas fa-envelope-open-text"></i>
              <h4>Phishing</h4>
            </div>
            <div className="use-case-coverage">
              <div className="coverage-item">
                <span className="solution">Abnormal:</span>
                <span className="coverage strong">Email-based phishing</span>
              </div>
              <div className="coverage-item">
                <span className="solution">Above:</span>
                <span className="coverage strong">Browser-based phishing</span>
              </div>
              <div className="coverage-item">
                <span className="solution">Others:</span>
                <span className="coverage weak">Limited phishing coverage</span>
              </div>
            </div>
          </div>

          <div className="opportunity-segment">
            <div className="segment-header">
              <i className="fas fa-user-secret"></i>
              <h4>Insider Threats</h4>
            </div>
            <div className="use-case-coverage">
              <div className="coverage-item">
                <span className="solution">Valence:</span>
                <span className="coverage strong">SaaS misconfigurations</span>
              </div>
              <div className="coverage-item">
                <span className="solution">Above:</span>
                <span className="coverage strong">Malicious user actions</span>
              </div>
              <div className="coverage-item">
                <span className="solution">Others:</span>
                <span className="coverage weak">Post-incident detection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="leadership-summary">
        <h3 className="summary-title">Complementary Security Stack</h3>
        <div className="winning-factors">
          <div className="winning-factor">
            <i className="fas fa-puzzle-piece"></i>
            <h4>Stack Integration</h4>
            <p>Above complements existing security tools</p>
          </div>
          <div className="winning-factor">
            <i className="fas fa-clock"></i>
            <h4>Runtime Focus</h4>
            <p>Unique position in preventing ATO at user decision point</p>
          </div>
          <div className="winning-factor">
            <i className="fas fa-brain"></i>
            <h4>Semantic Understanding</h4>
            <p>LLM analysis of user intent and page content</p>
          </div>
          <div className="winning-factor">
            <i className="fas fa-rocket"></i>
            <h4>Rapid Deployment</h4>
            <p>Browser extension deployment in hours, not months</p>
          </div>
        </div>
      </div>

      <div className="call-to-action">
        <h3 className="cta-title">The Runtime Protection Layer</h3>
        <p className="cta-text">
          Traditional security tools excel at their core functions.
          <strong>Above fills the runtime protection gap that no other solution addresses.</strong>
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideMarketLeadership;
