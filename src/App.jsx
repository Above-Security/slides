import React, { useState, useEffect } from 'react';
import '../deck/App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const slides = [
    {
      id: 'intro',
      title: 'Above',
      subtitle: 'Runtime Identity Threat Detection & Response',
      content: (
        <div className="slide-content">
          <div className="intro-grid">
            <div className="intro-card">
              <i className="fas fa-shield-alt"></i>
              <h3>First Application-Aware Runtime ITDR</h3>
              <p>Detects identity misuse inside SaaS and internal applications post-authentication</p>
            </div>
            <div className="intro-card">
              <i className="fas fa-eye"></i>
              <h3>Real-Time Behavioral Analysis</h3>
              <p>Browser-native semantic understanding of user actions across any web application</p>
            </div>
            <div className="intro-card">
              <i className="fas fa-brain"></i>
              <h3>LLM-Powered Detection</h3>
              <p>Normalizes raw browser events into semantic actions for accurate threat detection</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'problem',
      title: 'The Problem',
      subtitle: 'Identity as the Primary Attack Vector',
      content: (
        <div className="slide-content">
          <div className="problem-grid">
            <div className="problem-card">
              <i className="fas fa-user-secret"></i>
              <h3>Cyberhaven Incident (2024)</h3>
              <p>Employee systematically downloaded customer data over months. Traditional tools missed the gradual escalation pattern.</p>
            </div>
            <div className="problem-card">
              <i className="fas fa-key"></i>
              <h3>OAuth App Abuse</h3>
              <p>Legitimate consent leads to scope creep. Apps gain excessive permissions, then misuse access patterns.</p>
            </div>
            <div className="problem-card">
              <i className="fas fa-cookie-bite"></i>
              <h3>Session Token Theft</h3>
              <p>Malware/phishing steals session cookies. Attackers operate within legitimate sessions, bypassing MFA.</p>
            </div>
            <div className="problem-card">
              <i className="fas fa-clock"></i>
              <h3>After-Hours Anomalies</h3>
              <p>Admin accounts dormant for 6 months suddenly download 50x normal data volumes at 3 AM.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'approach',
      title: 'Technical Approach',
      subtitle: 'Browser-Native Behavioral Telemetry',
      content: (
        <div className="slide-content">
          <div className="approach-grid">
            <div className="approach-card">
              <i className="fas fa-puzzle-piece"></i>
              <h3>Browser Extension Deployment</h3>
              <p>Deployed via MDM/GPO. Captures semantic user interactions across any browser-based application.</p>
            </div>
            <div className="approach-card">
              <i className="fas fa-robot"></i>
              <h3>LLM Normalization Engine</h3>
              <p>Converts raw DOM events into semantic actions: "downloaded customer list", "accessed admin panel".</p>
            </div>
            <div className="approach-card">
              <i className="fas fa-chart-line"></i>
              <h3>Behavioral Baseline</h3>
              <p>Establishes normal patterns per user/role. Detects deviations in access patterns and data volumes.</p>
            </div>
            <div className="approach-card">
              <i className="fas fa-link"></i>
              <h3>SIEM/SOAR Integration</h3>
              <p>Real-time alerts to existing security stack. Automated response capabilities for immediate containment.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'detection',
      title: 'Detection Capabilities',
      subtitle: 'Specific Technical Examples',
      content: (
        <div className="slide-content">
          <div className="detection-grid">
            <div className="detection-card">
              <i className="fas fa-download"></i>
              <h3>Data Exfiltration</h3>
              <p>User downloads 500 customer records vs. normal 10/day baseline. Triggered across Salesforce, internal CRM, file shares.</p>
            </div>
            <div className="detection-card">
              <i className="fas fa-user-cog"></i>
              <h3>Privilege Escalation</h3>
              <p>Standard user suddenly accesses admin functions. Detected via semantic understanding of UI interactions.</p>
            </div>
            <div className="detection-card">
              <i className="fas fa-clock"></i>
              <h3>Temporal Anomalies</h3>
              <p>Account inactive 6 months, then 3 AM bulk operations. Cross-references with HR systems for terminated employees.</p>
            </div>
            <div className="detection-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Geographic Inconsistencies</h3>
              <p>Session tokens used from impossible geographic locations within short timeframes.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'use-cases',
      title: 'Real-World Use Cases',
      subtitle: 'Evidence-Based Detection Scenarios',
      content: (
        <div className="slide-content">
          <div className="use-cases-grid">
            <div className="use-case-card">
              <i className="fas fa-user-times"></i>
              <h3>Terminated Employee Detection</h3>
              <p>Session analysis reveals continued access post-termination. Immediate account lockdown and access audit.</p>
            </div>
            <div className="use-case-card">
              <i className="fas fa-balance-scale"></i>
              <h3>Compliance Violations</h3>
              <p>GDPR/HIPAA/SOX violations detected via semantic analysis of data access patterns and retention policies.</p>
            </div>
            <div className="use-case-card">
              <i className="fas fa-share-alt"></i>
              <h3>Unauthorized Data Sharing</h3>
              <p>Detects copy/paste of sensitive data to external applications or unusual sharing patterns.</p>
            </div>
            <div className="use-case-card">
              <i className="fas fa-exclamation-triangle"></i>
              <h3>Insider Risk Indicators</h3>
              <p>Behavioral changes preceding incidents: increased access frequency, unusual data exploration patterns.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'deployment',
      title: 'Deployment',
      subtitle: 'Technical Implementation',
      content: (
        <div className="slide-content">
          <div className="deployment-grid">
            <div className="deployment-card">
              <i className="fas fa-cogs"></i>
              <h3>Browser Extension</h3>
              <p>Deployed via MDM (Intune, JAMF) or GPO. Works across Chrome, Edge, Firefox. No application modifications required.</p>
            </div>
            <div className="deployment-card">
              <i className="fas fa-database"></i>
              <h3>Data Processing</h3>
              <p>Local semantic analysis, encrypted telemetry. GDPR/CCPA compliant data handling with configurable retention.</p>
            </div>
            <div className="deployment-card">
              <i className="fas fa-plug"></i>
              <h3>Integration Points</h3>
              <p>REST APIs for SIEM, SOAR, identity providers. Webhook support for real-time alerting and automated response.</p>
            </div>
            <div className="deployment-card">
              <i className="fas fa-tachometer-alt"></i>
              <h3>Performance Impact</h3>
              <p>< 2% CPU overhead, < 50MB memory footprint. Designed for enterprise-scale deployment across thousands of users.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showMenu) return;
      
      switch(e.key) {
        case 'ArrowRight':
        case ' ':
          if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
          }
          break;
        case 'ArrowLeft':
          if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
          }
          break;
        case 'Escape':
          setShowMenu(!showMenu);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, showMenu, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="presentation">
      <div className="slide">
        <div className="slide-header">
          <h1>{slides[currentSlide].title}</h1>
          <h2>{slides[currentSlide].subtitle}</h2>
          <div className="slide-border"></div>
        </div>
        
        {slides[currentSlide].content}
        
        <div className="slide-footer">
          <div className="logo-watermark">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <span>Above Security</span>
          </div>
          
          <div className="slide-counter">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>

      <div className="navigation">
        <button 
          className="nav-btn prev" 
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <button 
          className="nav-btn menu" 
          onClick={() => setShowMenu(!showMenu)}
        >
          <i className="fas fa-bars"></i>
        </button>
        
        <button 
          className="nav-btn next" 
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      {showMenu && (
        <div className="menu-overlay">
          <div className="menu">
            <div className="menu-header">
              <h3>Slide Navigation</h3>
              <button onClick={() => setShowMenu(false)}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="menu-items">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`menu-item ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="slide-number">{index + 1}</span>
                  <span className="slide-title">{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

