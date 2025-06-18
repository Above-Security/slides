import React from 'react';
import SlideLayout from '../components/SlideLayout';

const SlideHowItWorks = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">How It Works</h1>
      <p className="slide-subtitle">Browser Extension + LLM Page Analysis</p>
    </header>

    <div className="content-section">
      <div className="platform-overview">
        <div className="architecture-card">
          <h3 className="architecture-title">
            <i className="fas fa-cogs"></i>
            Technical Architecture
          </h3>

          <div className="tech-stack-grid">
            <div className="tech-item">
              <div className="tech-icon">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <div className="tech-content">
                <h4 className="tech-title">Browser Extension</h4>
                <p className="tech-description">Captures page content and user interactions across any web application in real-time</p>
              </div>
            </div>

            <div className="tech-item">
              <div className="tech-icon">
                <i className="fas fa-brain"></i>
              </div>
              <div className="tech-content">
                <h4 className="tech-title">LLM Page Analysis</h4>
                <p className="tech-description">Semantic analysis of page content to detect sophisticated phishing attempts and malicious intent</p>
              </div>
            </div>

            <div className="tech-item">
              <div className="tech-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="tech-content">
                <h4 className="tech-title">Real-Time Prevention</h4>
                <p className="tech-description">Blocks sophisticated attacks before completion: prevents credential entry, stops malicious OAuth consent</p>
              </div>
            </div>
          </div>
        </div>

        <div className="concepts-section">
          <h3 className="concepts-title">Key Differentiators</h3>
          <div className="concepts-grid">
            <div className="concept-card">
              <div className="concept-icon">
                <i className="fas fa-layer-group"></i>
              </div>
              <h4 className="concept-title">App-Agnostic</h4>
              <p className="concept-description">Works with any browser-based app. No API integration required.</p>
            </div>

            <div className="concept-card">
              <div className="concept-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h4 className="concept-title">Instant Deployment</h4>
              <p className="concept-description">Days to deploy via browser management. No SIEM integration.</p>
            </div>

            <div className="concept-card">
              <div className="concept-icon">
                <i className="fas fa-search"></i>
              </div>
              <h4 className="concept-title">Semantic Understanding</h4>
              <p className="concept-description">LLM understands page intent and context, detecting sophisticated evasion techniques.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default SlideHowItWorks;
