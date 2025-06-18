import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideMarketLeadership.module.css';

const SlideMarketLeadership = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Capability Comparison</h1>
      <p className="slide-subtitle">Runtime ITDR vs. Traditional Security</p>
    </header>

    <div className={styles['market-leadership']}>
      <div className={styles['leadership-intro']}>
        <h3 className={styles['intro-title']}>
          <i className="fas fa-chart-bar"></i>
          Security Capability Matrix
        </h3>
        <p className={styles['intro-text']}>
          Each solution excels in different areas.
          <strong>Above uniquely provides runtime semantic understanding for ATO prevention.</strong>
        </p>
      </div>

      <div className={styles['market-matrix']}>
        <div className={styles['matrix-table']}>
          <div className={styles['matrix-header']}>
            <div className={`${styles['matrix-cell']} ${styles['capability-header']}`}>Capability</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Above</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Push</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Valence</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Island</div>
            <div className={`${styles['matrix-cell']} ${styles['vendor-header']}`}>Abnormal</div>
          </div>

          <div className={styles['matrix-row']}>
            <div className={`${styles['matrix-cell']} ${styles['capability']}`}>Runtime Phishing Prevention</div>
            <div className={`${styles['matrix-cell']} ${styles['above-cell']}`}>✅</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
          </div>

          <div className={styles['matrix-row']}>
            <div className={`${styles['matrix-cell']} ${styles['capability']}`}>Session Hijacking Detection</div>
            <div className={`${styles['matrix-cell']} ${styles['above-cell']}`}>✅</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>✅</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>✅</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
          </div>

          <div className={styles['matrix-row']}>
            <div className={`${styles['matrix-cell']} ${styles['capability']}`}>Semantic Content Analysis</div>
            <div className={`${styles['matrix-cell']} ${styles['above-cell']}`}>✅</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
          </div>

          <div className={styles['matrix-row']}>
            <div className={`${styles['matrix-cell']} ${styles['capability']}`}>SaaS Configuration Management</div>
            <div className={`${styles['matrix-cell']} ${styles['above-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>✅</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
          </div>

          <div className={styles['matrix-row']}>
            <div className={`${styles['matrix-cell']} ${styles['capability']}`}>Email Phishing Prevention</div>
            <div className={`${styles['matrix-cell']} ${styles['above-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>✅</div>
          </div>

          <div className={styles['matrix-row']}>
            <div className={`${styles['matrix-cell']} ${styles['capability']}`}>Browser Policy Enforcement</div>
            <div className={`${styles['matrix-cell']} ${styles['above-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>✅</div>
            <div className={`${styles['matrix-cell']} ${styles['competitor-cell']}`}>❌</div>
          </div>
        </div>
      </div>

      <div className={styles['market-opportunity']}>
        <h3 className={styles['opportunity-title']}>CISO Use Cases by Solution</h3>
        <div className={styles['opportunity-breakdown']}>
          <div className={styles['opportunity-segment']}>
            <div className={styles['segment-header']}>
              <i className="fas fa-user-shield"></i>
              <h4>Account Takeover (ATO)</h4>
            </div>
            <div className={styles['use-case-coverage']}>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Above:</span>
                <span className={`${styles['coverage']} ${styles['strong']}`}>Complete runtime protection</span>
              </div>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Push:</span>
                <span className={`${styles['coverage']} ${styles['strong']}`}>Session hijacking detection</span>
              </div>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Others:</span>
                <span className={`${styles['coverage']} ${styles['weak']}`}>Limited runtime protection</span>
              </div>
            </div>
          </div>

          <div className={styles['opportunity-segment']}>
            <div className={styles['segment-header']}>
              <i className="fas fa-envelope-open-text"></i>
              <h4>Phishing</h4>
            </div>
            <div className={styles['use-case-coverage']}>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Abnormal:</span>
                <span className={`${styles['coverage']} ${styles['strong']}`}>Email-based phishing</span>
              </div>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Above:</span>
                <span className={`${styles['coverage']} ${styles['strong']}`}>Browser-based phishing</span>
              </div>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Others:</span>
                <span className={`${styles['coverage']} ${styles['weak']}`}>Limited phishing coverage</span>
              </div>
            </div>
          </div>

          <div className={styles['opportunity-segment']}>
            <div className={styles['segment-header']}>
              <i className="fas fa-user-secret"></i>
              <h4>Insider Threats</h4>
            </div>
            <div className={styles['use-case-coverage']}>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Valence:</span>
                <span className={`${styles['coverage']} ${styles['strong']}`}>SaaS misconfigurations</span>
              </div>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Above:</span>
                <span className={`${styles['coverage']} ${styles['strong']}`}>Malicious user actions</span>
              </div>
              <div className={styles['coverage-item']}>
                <span className={styles['solution']}>Others:</span>
                <span className={`${styles['coverage']} ${styles['weak']}`}>Post-incident detection</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['leadership-summary']}>
        <h3 className={styles['summary-title']}>Complementary Security Stack</h3>
        <div className={styles['winning-factors']}>
          <div className={styles['winning-factor']}>
            <i className="fas fa-puzzle-piece"></i>
            <h4>Stack Integration</h4>
            <p>Above complements existing security tools</p>
          </div>
          <div className={styles['winning-factor']}>
            <i className="fas fa-clock"></i>
            <h4>Runtime Focus</h4>
            <p>Unique position in preventing ATO at user decision point</p>
          </div>
          <div className={styles['winning-factor']}>
            <i className="fas fa-brain"></i>
            <h4>Semantic Understanding</h4>
            <p>LLM analysis of user intent and page content</p>
          </div>
          <div className={styles['winning-factor']}>
            <i className="fas fa-rocket"></i>
            <h4>Rapid Deployment</h4>
            <p>Browser extension deployment in hours, not months</p>
          </div>
        </div>
      </div>

      <div className={styles['call-to-action']}>
        <h3 className={styles['cta-title']}>The Runtime Protection Layer</h3>
        <p className={styles['cta-text']}>
          Traditional security tools excel at their core functions.
          <strong>Above fills the runtime protection gap that no other solution addresses.</strong>
        </p>
      </div>
    </div>
  </SlideLayout>
);

export default SlideMarketLeadership;
