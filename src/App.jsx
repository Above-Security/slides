import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const slides = [
    'Above Runtime ITDR',
    'The Problem', 
    'Technical Approach',
    'Detection Capabilities',
    'Real-World Use Cases',
    'Deployment'
  ];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return (
          <div className="slide-container">
            <header className="slide-header">
              <h1 className="slide-title">
                <svg className="logo-small" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
                </svg>
                Above
              </h1>
              <p className="slide-subtitle">Runtime Identity Threat Detection & Response</p>
            </header>

            <div className="content-section">
              <div className="key-points-grid">
                <div className="key-point-card">
                  <div className="key-point-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="key-point-title">Post-Authentication Monitoring</h3>
                  <p className="key-point-description">Monitors user behavior inside applications after successful login</p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <h3 className="key-point-title">Browser-Native Deployment</h3>
                  <p className="key-point-description">Agentless architecture works across any web application</p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3 className="key-point-title">Semantic Analysis</h3>
                  <p className="key-point-description">LLM-powered understanding of user intent and context</p>
                </div>
              </div>

              <div className="executive-summary">
                <h3 className="summary-title">
                  <i className="fas fa-shield-alt"></i>
                  The Gap We Fill
                </h3>
                <p className="summary-text">
                  Traditional security tools monitor access but not behavior. Above detects misuse, insider threats, 
                  and advanced attacks that occur after authentication — the blind spot where most damage happens.
                </p>
              </div>
            </div>

            <svg className="logo-watermark" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
              <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
            </svg>
          </div>
        );

      case 1:
        return (
          <div className="slide-container">
            <header className="slide-header">
              <h1 className="slide-title">The Problem</h1>
              <p className="slide-subtitle">Post-Authentication Blind Spot</p>
            </header>

            <div className="content-section">
              <div className="landscape-grid">
                <div className="landscape-card">
                  <h3 className="landscape-title">
                    <i className="fas fa-exclamation-triangle"></i>
                    Current Tools Miss the Mark
                  </h3>
                  <p className="landscape-text">
                    IAM controls <strong>access</strong>. SIEM aggregates <strong>logs</strong>. 
                    DLP monitors <strong>files</strong>. None see what users actually <strong>do</strong> inside applications.
                  </p>
                  
                  <div className="blind-spots-card">
                    <h4 className="blind-spots-title">Undetected Behaviors:</h4>
                    <ul className="blind-spots-list">
                      <li><i className="fas fa-times"></i> Privilege escalation within apps</li>
                      <li><i className="fas fa-times"></i> Data access pattern anomalies</li>
                      <li><i className="fas fa-times"></i> Session hijacking and token abuse</li>
                      <li><i className="fas fa-times"></i> OAuth consent manipulation</li>
                    </ul>
                  </div>
                </div>

                <div className="landscape-card">
                  <h3 className="landscape-title">
                    <i className="fas fa-bug"></i>
                    Real Attack Examples
                  </h3>
                  
                  <div className="threat-item">
                    <div className="threat-content">
                      <div className="threat-icon insider">
                        <i className="fas fa-user-secret"></i>
                      </div>
                      <div className="threat-details">
                        <h4 className="threat-name">Cyberhaven Incident (2024)</h4>
                        <p className="threat-description">Employee systematically accessed and downloaded customer data over months. Traditional DLP missed gradual exfiltration pattern.</p>
                      </div>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-content">
                      <div className="threat-icon oauth">
                        <i className="fab fa-google"></i>
                      </div>
                      <div className="threat-details">
                        <h4 className="threat-name">OAuth App Abuse</h4>
                        <p className="threat-description">Malicious apps gain legitimate OAuth consent, then access data beyond intended scope. Email security can't detect this.</p>
                      </div>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-content">
                      <div className="threat-icon session">
                        <i className="fas fa-key"></i>
                      </div>
                      <div className="threat-details">
                        <h4 className="threat-name">Session Token Theft</h4>
                        <p className="threat-description">Attackers steal session cookies via malware or phishing, impersonate users without triggering MFA.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <svg className="logo-watermark" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
              <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
            </svg>
          </div>
        );

      case 2:
        return (
          <div className="slide-container">
            <header className="slide-header">
              <h1 className="slide-title">Technical Approach</h1>
              <p className="slide-subtitle">Browser-Native Behavioral Telemetry</p>
            </header>

            <div className="content-section">
              <div className="platform-overview">
                <div className="architecture-card">
                  <h3 className="architecture-title">
                    <i className="fas fa-cogs"></i>
                    How It Works
                  </h3>

                  <div className="tech-stack-grid">
                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-globe"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">Browser Extension Deployment</h4>
                        <p className="tech-description">Captures semantic user interactions: clicks, form fills, navigation patterns, data access</p>
                      </div>
                    </div>

                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-brain"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">LLM Normalization Engine</h4>
                        <p className="tech-description">Converts raw browser events into semantic actions: "downloaded customer list", "escalated privileges"</p>
                      </div>
                    </div>

                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">Behavioral Baseline & Anomaly Detection</h4>
                        <p className="tech-description">Establishes normal patterns, flags deviations: unusual data volume, off-hours access, privilege changes</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="concepts-section">
                  <h3 className="concepts-title">Key Technical Differentiators</h3>
                  <div className="concepts-grid">
                    <div className="concept-card">
                      <div className="concept-icon">
                        <i className="fas fa-layer-group"></i>
                      </div>
                      <h4 className="concept-title">Application-Agnostic</h4>
                      <p className="concept-description">Works with any browser-based app without API integration or vendor cooperation</p>
                    </div>

                    <div className="concept-card">
                      <div className="concept-icon">
                        <i className="fas fa-clock"></i>
                      </div>
                      <h4 className="concept-title">Real-Time Processing</h4>
                      <p className="concept-description">Sub-second detection and alerting for immediate threat response</p>
                    </div>

                    <div className="concept-card">
                      <div className="concept-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h4 className="concept-title">Privacy-Preserving</h4>
                      <p className="concept-description">Captures behavioral metadata, not sensitive data content</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <svg className="logo-watermark" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
              <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
            </svg>
          </div>
        );

      case 3:
        return (
          <div className="slide-container">
            <header className="slide-header">
              <h1 className="slide-title">Detection Capabilities</h1>
              <p className="slide-subtitle">What We Catch That Others Miss</p>
            </header>

            <div className="content-section">
              <div className="differentiators-grid">
                <div className="differentiator-card">
                  <div className="differentiator-icon">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <h3 className="differentiator-title">Insider Threat Patterns</h3>
                  <p className="differentiator-description">
                    Detects gradual privilege escalation, unusual data access volumes, and behavioral drift indicating malicious intent.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-search"></i>
                    Example: Admin account dormant 6 months suddenly downloads 50x normal data volume
                  </div>
                </div>

                <div className="differentiator-card">
                  <div className="differentiator-icon">
                    <i className="fas fa-key"></i>
                  </div>
                  <h3 className="differentiator-title">Session Hijacking</h3>
                  <p className="differentiator-description">
                    Identifies stolen session tokens through behavioral inconsistencies: location, timing, interaction patterns.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-search"></i>
                    Example: User session continues after device goes offline, different browser fingerprint
                  </div>
                </div>

                <div className="differentiator-card">
                  <div className="differentiator-icon">
                    <i className="fas fa-fish"></i>
                  </div>
                  <h3 className="differentiator-title">OAuth Abuse</h3>
                  <p className="differentiator-description">
                    Monitors OAuth app behavior post-consent, detecting scope creep and unauthorized data access.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-search"></i>
                    Example: "Calendar app" granted read access starts downloading contact lists
                  </div>
                </div>

                <div className="differentiator-card">
                  <div className="differentiator-icon">
                    <i className="fas fa-download"></i>
                  </div>
                  <h3 className="differentiator-title">Data Exfiltration</h3>
                  <p className="differentiator-description">
                    Tracks systematic data collection patterns that evade traditional DLP through low-and-slow techniques.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-search"></i>
                    Example: Employee accessing customer records outside normal job function over weeks
                  </div>
                </div>
              </div>
            </div>

            <svg className="logo-watermark" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
              <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
            </svg>
          </div>
        );

      case 4:
        return (
          <div className="slide-container">
            <header className="slide-header">
              <h1 className="slide-title">Real-World Use Cases</h1>
              <p className="slide-subtitle">Evidence-Based Detection Scenarios</p>
            </header>

            <div className="content-section">
              <div className="use-cases-grid">
                <div className="use-case-card">
                  <div className="use-case-icon">
                    <i className="fas fa-user-times"></i>
                  </div>
                  <h3 className="use-case-title">Terminated Employee Detection</h3>
                  <p className="use-case-description">
                    Identifies when terminated employees continue accessing systems via shared accounts or stolen credentials.
                  </p>
                  <div className="use-case-method">
                    <strong>Detection Method:</strong> Session analysis reveals access patterns inconsistent with current employee roster
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-icon">
                    <i className="fas fa-user-cog"></i>
                  </div>
                  <h3 className="use-case-title">Privilege Escalation</h3>
                  <p className="use-case-description">
                    Catches users gaining elevated permissions through social engineering or system vulnerabilities.
                  </p>
                  <div className="use-case-method">
                    <strong>Detection Method:</strong> Behavioral analysis flags sudden access to restricted resources or admin functions
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-icon">
                    <i className="fas fa-balance-scale"></i>
                  </div>
                  <h3 className="use-case-title">Compliance Violations</h3>
                  <p className="use-case-description">
                    Monitors for GDPR, HIPAA, SOX violations through unauthorized data access or retention policy breaches.
                  </p>
                  <div className="use-case-method">
                    <strong>Detection Method:</strong> Semantic understanding of data types and access patterns against compliance rules
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-icon">
                    <i className="fas fa-moon"></i>
                  </div>
                  <h3 className="use-case-title">After-Hours Anomalies</h3>
                  <p className="use-case-description">
                    Detects suspicious activity during non-business hours, weekends, or holidays when oversight is minimal.
                  </p>
                  <div className="use-case-method">
                    <strong>Detection Method:</strong> Time-based behavioral baselines identify unusual access patterns outside normal work hours
                  </div>
                </div>
              </div>
            </div>

            <svg className="logo-watermark" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
              <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
            </svg>
          </div>
        );

      case 5:
        return (
          <div className="slide-container">
            <header className="slide-header">
              <h1 className="slide-title">Deployment</h1>
              <p className="slide-subtitle">Technical Implementation & Integration</p>
            </header>

            <div className="content-section">
              <div className="deployment-overview">
                <div className="deployment-card">
                  <h3 className="deployment-title">
                    <i className="fas fa-rocket"></i>
                    Implementation Process
                  </h3>

                  <div className="deployment-steps">
                    <div className="deployment-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4 className="step-title">Browser Extension Deployment</h4>
                        <p className="step-description">Deploy via MDM/GPO to all managed devices. No application-specific configuration required.</p>
                      </div>
                    </div>

                    <div className="deployment-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4 className="step-title">Baseline Establishment</h4>
                        <p className="step-description">2-week learning period to establish normal behavioral patterns for each user and application.</p>
                      </div>
                    </div>

                    <div className="deployment-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4 className="step-title">Integration & Alerting</h4>
                        <p className="step-description">Connect to SIEM, SOAR, and identity providers. Configure alert thresholds and response workflows.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="integration-section">
                  <h3 className="integration-title">Technical Integrations</h3>
                  <div className="integration-grid">
                    <div className="integration-card">
                      <div className="integration-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h4 className="integration-name">SIEM Platforms</h4>
                      <p className="integration-description">Splunk, QRadar, Sentinel, Chronicle</p>
                    </div>

                    <div className="integration-card">
                      <div className="integration-icon">
                        <i className="fas fa-cogs"></i>
                      </div>
                      <h4 className="integration-name">SOAR Tools</h4>
                      <p className="integration-description">Phantom, Demisto, Swimlane</p>
                    </div>

                    <div className="integration-card">
                      <div className="integration-icon">
                        <i className="fas fa-id-card"></i>
                      </div>
                      <h4 className="integration-name">Identity Providers</h4>
                      <p className="integration-description">Azure AD, Okta, Ping, Auth0</p>
                    </div>

                    <div className="integration-card">
                      <div className="integration-icon">
                        <i className="fas fa-bell"></i>
                      </div>
                      <h4 className="integration-name">Alerting</h4>
                      <p className="integration-description">Slack, Teams, PagerDuty, Email</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <svg className="logo-watermark" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
              <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
            </svg>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="app">
      <header className="header">
        <button className="menu-btn" onClick={() => setShowMenu(true)}>
          <div className="menu-icon"></div>
          Menu
        </button>
        
        <div className="brand">
          <svg className="brand-logo" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
            <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
          </svg>
          Above Security
        </div>

        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>

        <div className="nav-controls">
          <button 
            className="nav-btn" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ←
          </button>
          <button 
            className="nav-btn" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            →
          </button>
        </div>
      </header>

      <main className="slide-content">
        {renderSlide()}
      </main>

      {showMenu && (
        <div className="menu-overlay" onClick={() => setShowMenu(false)}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <h3>Slides</h3>
              <button className="menu-close" onClick={() => setShowMenu(false)}>
                ×
              </button>
            </div>
            <div className="menu-items">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className={`menu-item ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="slide-number">{index + 1}</span>
                  <span className="slide-title">{slide}</span>
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

