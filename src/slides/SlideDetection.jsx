import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideDetection.module.css';

const SlideDetection = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Real-Time User Protection</h1>
      <p className="slide-subtitle">Guiding Users to Avoid Mistakes</p>
      
      {/* Compliance Banner */}
      <div style={{ 
        marginTop: '16px', 
        padding: '12px 20px', 
        backgroundColor: 'var(--brand-primary)', 
        borderRadius: '8px', 
        color: 'white',
        textAlign: 'center'
      }}>
        <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>
          <i className="fas fa-award" style={{ marginRight: '8px', color: '#FFD700' }}></i>
          Every scenario generates audit-grade documentation for SOX 404, SOC 2, GDPR & PCI DSS compliance
        </span>
      </div>
    </header>

    <div className="content-section">
      <div className={styles['detection-scenarios']}>
        <div className={styles['scenario-card']}>
          <div className={styles['scenario-header']}>
            <div className={styles['scenario-icon']}>
              <i className="fas fa-key"></i>
            </div>
            <h3 className={styles['scenario-title']}>OAuth Abuse & Risky App Authorization</h3>
          </div>
          <div className={styles['scenario-content']}>
            <p className={styles['scenario-description']}>
              <strong>Scenario:</strong> Employee connects suspicious "Google Workspace Backup" OAuth app asking for Gmail read/send + Drive access. App appears legitimate but requests excessive permissions.
            </p>
            <p className={styles['scenario-detection']}>
              <strong>Protection:</strong> Above detects mismatch between app identity and permissions requested. Real-time nudge warns user about potential risks and suggests verification steps.
            </p>
            <div className={styles['scenario-outcome']}>
              <i className="fas fa-shield-alt"></i>
              User guided to verify app legitimacy before granting access
            </div>
            
            {/* Compliance Badge */}
            <div style={{ 
              marginTop: '12px', 
              padding: '8px', 
              backgroundColor: 'var(--bg-success)', 
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--brand-primary)',
              textAlign: 'center'
            }}>
              📋 SOX 404.B.1 & SOC 2 CC6.1 Controls
            </div>
          </div>
        </div>

        <div className={styles['scenario-card']}>
          <div className={styles['scenario-header']}>
            <div className={styles['scenario-icon']}>
              <i className="fas fa-robot"></i>
            </div>
            <h3 className={styles['scenario-title']}>Shadow AI & SaaS Data Leakage</h3>
          </div>
          <div className={styles['scenario-content']}>
            <p className={styles['scenario-description']}>
              <strong>Scenario:</strong> Employee copies customer data from Salesforce and pastes it into ChatGPT to generate a proposal template, not realizing sensitive information is being shared.
            </p>
            <p className={styles['scenario-detection']}>
              <strong>Protection:</strong> Above detects copy-paste patterns from secured apps to unapproved AI tools. Real-time nudge suggests approved alternatives and data handling guidelines.
            </p>
            <div className={styles['scenario-outcome']}>
              <i className="fas fa-shield-alt"></i>
              User guided to approved AI tools with data protection
            </div>
            
            {/* Compliance Badge */}
            <div style={{ 
              marginTop: '12px', 
              padding: '8px', 
              backgroundColor: 'var(--bg-success)', 
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--brand-primary)',
              textAlign: 'center'
            }}>
              🔐 GDPR Art. 32.1(d) & PCI DSS 7.1.1
            </div>
          </div>
        </div>

        <div className={styles['scenario-card']}>
          <div className={styles['scenario-header']}>
            <div className={styles['scenario-icon']}>
              <i className="fas fa-user-clock"></i>
            </div>
            <h3 className={styles['scenario-title']}>Offboarding Drift Detection</h3>
          </div>
          <div className={styles['scenario-content']}>
            <p className={styles['scenario-description']}>
              <strong>Scenario:</strong> Employee officially departed but still has active sessions in Salesforce, Slack, and Google Workspace. HR completed offboarding but browser sessions persist.
            </p>
            <p className={styles['scenario-detection']}>
              <strong>Protection:</strong> Above tracks active sessions post-departure and provides real-time alerts to security teams with detailed session timelines for immediate action.
            </p>
            <div className={styles['scenario-outcome']}>
              <i className="fas fa-shield-alt"></i>
              Security team alerted with session details for immediate termination
            </div>
            
            {/* Compliance Badge */}
            <div style={{ 
              marginTop: '12px', 
              padding: '8px', 
              backgroundColor: 'var(--bg-success)', 
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--brand-primary)',
              textAlign: 'center'
            }}>
              🚪 NIST CSF & ISO 27001 Access Controls
            </div>
          </div>
        </div>

        <div className={styles['scenario-card']}>
          <div className={styles['scenario-header']}>
            <div className={styles['scenario-icon']}>
              <i className="fas fa-timeline"></i>
            </div>
            <h3 className={styles['scenario-title']}>Session Timeline for Investigations</h3>
          </div>
          <div className={styles['scenario-content']}>
            <p className={styles['scenario-description']}>
              <strong>Scenario:</strong> Security team needs to reconstruct user behavior during a data breach incident. Traditional logs show access events but miss the user's actual actions and intent.
            </p>
            <p className={styles['scenario-detection']}>
              <strong>Protection:</strong> Above provides complete session timelines showing what users actually did inside applications — reconstructing the full story for incident response.
            </p>
            <div className={styles['scenario-outcome']}>
              <i className="fas fa-shield-alt"></i>
              Complete behavioral timeline delivered for forensic analysis
            </div>
            
            {/* Compliance Badge */}
            <div style={{ 
              marginTop: '12px', 
              padding: '8px', 
              backgroundColor: 'var(--bg-success)', 
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: 'var(--brand-primary)',
              textAlign: 'center'
            }}>
              📊 SOX 404 & SOC 2 Audit Documentation
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideDetection;
