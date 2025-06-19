import React from 'react';
import SlideLayout from '../components/SlideLayout';
import styles from './SlideRuntimeITDR.module.css';

const SlideRuntimeITDR = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">What is Runtime ITDR?</h1>
      <p className="slide-subtitle">Why everything else misses the point</p>
    </header>

    <div className="content-section">
      {/* Definition Section */}
      <div className="executive-summary">
        <h2 className="summary-title">
          <i className="fas fa-brain"></i>
          What It Actually Does
        </h2>
        <p className="summary-text">
          Runtime ITDR sees what users do <strong>after they log in</strong>. It captures real user behavior inside apps — not just logs, not just alerts.
        </p>
        <p className="summary-text mt-4">
          It works by analyzing the actual session: clicks, actions, intent. If someone misuses access, steals data, masks their behavior — or falls for a phishing page that looks legitimate — you’ll know. In real time.
        </p>
        <p className="summary-text mt-4">
          This includes <strong>next-gen phishing</strong> like LOTS (Living Off Trusted Services), consent phishing, and session hijacking — attacks that bypass email security and exploit users within trusted domains.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="landscape-grid mt-12">
        {/* Traditional Approaches */}
        <div className="landscape-card">
          <h3 className="landscape-title">
            <i className="fas fa-shield-alt"></i>
            Traditional Tools (SIEM, DLP, UEBA)
          </h3>

          <div className="mb-6">
            <h4 className="focus-areas">What They Watch:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-circle"></i>Authentication logs</li>
              <li><i className="fas fa-circle"></i>Traffic patterns</li>
              <li><i className="fas fa-circle"></i>File movement</li>
              <li><i className="fas fa-circle"></i>Endpoint events</li>
            </ul>
          </div>

          <div className="blind-spots-card">
            <h4 className="blind-spots-title">What They Miss:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-times"></i>What happens inside the app</li>
              <li><i className="fas fa-times"></i>User decisions and intent</li>
              <li><i className="fas fa-times"></i>Misuse that doesn’t break a rule</li>
              <li><i className="fas fa-times"></i>Any gray-area threat</li>
            </ul>
          </div>
        </div>

        {/* Runtime ITDR */}
        <div className="landscape-card">
          <h3 className="landscape-title">
            <i className="fas fa-eye"></i>
            Runtime ITDR
          </h3>

          <div className="mb-6">
            <h4 className="focus-areas">What It Sees:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-circle"></i>Clicks, inputs, page-level actions</li>
              <li><i className="fas fa-circle"></i>What users are actually doing</li>
              <li><i className="fas fa-circle"></i>Which behaviors break trust</li>
              <li><i className="fas fa-circle"></i>Intent behind the action</li>
            </ul>
          </div>

          <div className={styles['advantages-section']}>
            <h4>Why It Matters:</h4>
            <ul className="blind-spots-list">
              <li><i className="fas fa-check text-success"></i>Catches threats after login</li>
              <li><i className="fas fa-check text-success"></i>Stops insider misuse in real time</li>
              <li><i className="fas fa-check text-success"></i>Understands apps no one else can see</li>
              <li><i className="fas fa-check text-success"></i>Flags intent — not just violations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Key Concepts */}
      <div className="key-points-grid mt-12">
        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-eye"></i>
          </div>
          <h4 className="key-point-title">Behavioral Observability</h4>
          <p className="key-point-description">
            We watch what users do — not just whether they logged in. That includes scrolls, clicks, downloads, exports, deletions, and more.
          </p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-brain"></i>
          </div>
          <h4 className="key-point-title">Intent Analysis</h4>
          <p className="key-point-description">
            Is this access reasonable? Is this normal for their role? Are they acting like themselves? We know.
          </p>
        </div>

        <div className="key-point-card">
          <div className="key-point-icon">
            <i className="fas fa-chart-line"></i>
          </div>
          <h4 className="key-point-title">Session-Level View</h4>
          <p className="key-point-description">
            No guesswork. We show what happened — not what you think happened based on logs.
          </p>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideRuntimeITDR;
