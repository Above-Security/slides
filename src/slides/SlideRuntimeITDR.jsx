import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideRuntimeITDR = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">What is Runtime ITDR?</h1>
      <p className="slide-subtitle">Beyond Traditional Security Approaches</p>
    </header>

    <div className="content-section">
      {/* Definition Section */}
      <div className="executive-summary">
        <h2 className="summary-title">
          <i className="fas fa-brain"></i>
          Runtime ITDR Definition
        </h2>
        <p className="summary-text">
          Runtime Identity Threat Detection & Response focuses on <strong>post-authentication behavioral observability</strong> 
          and <strong>semantic user intent interpretation</strong> within live application sessions.
        </p>
        <p className="summary-text" style={{marginTop: '16px'}}>
          Unlike traditional ITDR that monitors access events, Runtime ITDR provides <strong>session-level visibility</strong> 
          into what users actually do inside applications, enabling detection of threats that occur after successful authentication.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="landscape-grid" style={{marginTop: '48px'}}>
        {/* Traditional Approaches */}
        <div className="landscape-card">
          <h3 className="landscape-title">
            <i className="fas fa-shield-alt"></i>
            Traditional ITDR, UEBA, DLP, SIEM
          </h3>
          
          <div style={{marginBottom: '24px'}}>
            <h4 style={{fontSize: '16px', fontWeight: '600', color: '#24292f', marginBottom: '12px'}}>Focus Areas:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-circle"></i>Authentication events</li>
              <li><i className="fas fa-circle"></i>Network traffic analysis</li>
              <li><i className="fas fa-circle"></i>File system monitoring</li>
              <li><i className="fas fa-circle"></i>Endpoint behavior</li>
            </ul>
          </div>

          <div className="blind-spots-card">
            <h4 className="blind-spots-title">Limitations:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-times"></i>No post-auth visibility</li>
              <li><i className="fas fa-times"></i>Limited application context</li>
              <li><i className="fas fa-times"></i>High false positive rates</li>
              <li><i className="fas fa-times"></i>Reactive detection</li>
            </ul>
          </div>
        </div>

        {/* Runtime ITDR */}
        <div className="landscape-card">
          <h3 className="landscape-title">
            <i className="fas fa-eye"></i>
            Runtime ITDR Approach
          </h3>
          
          <div style={{marginBottom: '24px'}}>
            <h4 style={{fontSize: '16px', fontWeight: '600', color: '#24292f', marginBottom: '12px'}}>Focus Areas:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-circle"></i>In-application behavior</li>
              <li><i className="fas fa-circle"></i>User intent analysis</li>
              <li><i className="fas fa-circle"></i>Session-level monitoring</li>
              <li><i className="fas fa-circle"></i>Semantic understanding</li>
            </ul>
          </div>

          <div style={{background: '#f0f9f4', border: '1px solid #00872b', borderRadius: '12px', padding: '20px'}}>
            <h4 style={{fontSize: '16px', fontWeight: '600', color: '#24292f', marginBottom: '12px'}}>Advantages:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-check" style={{color: '#00872b'}}></i>Real-time threat detection</li>
              <li><i className="fas fa-check" style={{color: '#00872b'}}></i>Application-aware context</li>
              <li><i className="fas fa-check" style={{color: '#00872b'}}></i>Reduced false positives</li>
              <li><i className="fas fa-check" style={{color: '#00872b'}}></i>Proactive prevention</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="key-points-grid" style={{marginTop: '48px'}}>
        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-eye"></i>
          </div>
          <h4 className="key-point-title">Behavioral Observability</h4>
          <p className="key-point-description">
            Continuous monitoring of user actions within applications to establish behavioral baselines and detect anomalies.
          </p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-brain"></i>
          </div>
          <h4 className="key-point-title">Semantic Intent</h4>
          <p className="key-point-description">
            Understanding the meaning and context behind user actions to differentiate between legitimate and malicious behavior.
          </p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h4 className="key-point-title">Session-Level Visibility</h4>
          <p className="key-point-description">
            Complete visibility into user sessions across all applications, providing comprehensive security coverage.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideRuntimeITDR;

