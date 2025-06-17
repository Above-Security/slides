import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const slides = [
    'Above Runtime ITDR',
    'The Problem', 
    'How It Works',
    'Cyberhaven Case Study',
    'Real-World Detection',
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
                    <i className="fas fa-puzzle-piece"></i>
                  </div>
                  <h3 className="key-point-title">Browser Extension</h3>
                  <p className="key-point-description">Deployed via enterprise browser management. No agents, no SIEM integration required.</p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3 className="key-point-title">LLM Analysis</h3>
                  <p className="key-point-description">Semantic understanding of page content and user behavior to detect threats in real-time.</p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="key-point-title">Post-Auth Monitoring</h3>
                  <p className="key-point-description">Monitors what users actually do inside SaaS apps after successful authentication.</p>
                </div>
              </div>

              <div className="executive-summary">
                <h3 className="summary-title">
                  <i className="fas fa-shield-alt"></i>
                  Runtime ITDR for the SaaS Era
                </h3>
                <p className="summary-text">
                  Traditional tools monitor access. We monitor behavior. Detects insider threats, 
                  sophisticated phishing, and malicious OAuth consent that occur after authentication.
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
                    Security Stack Gap
                  </h3>
                  <p className="landscape-text">
                    IAM controls <strong>access</strong>. SIEM aggregates <strong>logs</strong>. 
                    DLP monitors <strong>files</strong>. None see what users actually <strong>do</strong> inside applications.
                  </p>
                  
                  <div className="blind-spots-card">
                    <h4 className="blind-spots-title">Undetected Threats:</h4>
                    <ul className="blind-spots-list">
                      <li><i className="fas fa-times"></i> Sophisticated phishing on fake SaaS portals</li>
                      <li><i className="fas fa-times"></i> Malicious OAuth consent manipulation</li>
                      <li><i className="fas fa-times"></i> Gradual insider data exfiltration</li>
                      <li><i className="fas fa-times"></i> Session hijacking via stolen tokens</li>
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
                        <p className="threat-description">Employee systematically downloaded customer data over months. Traditional DLP missed gradual exfiltration pattern.</p>
                      </div>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-content">
                      <div className="threat-icon oauth">
                        <i className="fab fa-google"></i>
                      </div>
                      <div className="threat-details">
                        <h4 className="threat-name">OAuth Phishing</h4>
                        <p className="threat-description">Fake apps trick users into granting permissions on lookalike consent pages. Email security can't detect this.</p>
                      </div>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-content">
                      <div className="threat-icon session">
                        <i className="fas fa-fish"></i>
                      </div>
                      <div className="threat-details">
                        <h4 className="threat-name">Zero-Day Phishing</h4>
                        <p className="threat-description">Pixel-perfect fake SaaS portals bypass traditional detection. Users enter credentials before realizing it's fake.</p>
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
              <h1 className="slide-title">How It Works</h1>
              <p className="slide-subtitle">Browser Extension + LLM Analysis</p>
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
                        <p className="tech-description">Captures user interactions and page content across any web application</p>
                      </div>
                    </div>

                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-brain"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">LLM Processing</h4>
                        <p className="tech-description">Semantic analysis converts raw events into meaningful behavioral signals</p>
                      </div>
                    </div>

                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">Real-Time Detection</h4>
                        <p className="tech-description">Prevents threats before completion: blocks phishing, stops malicious OAuth consent</p>
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
                      <p className="concept-description">LLM understands intent and context, not just patterns.</p>
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
              <h1 className="slide-title">Cyberhaven Case Study</h1>
              <p className="slide-subtitle">How We Would Have Detected It</p>
            </header>

            <div className="content-section">
              <div className="case-study-container">
                <div className="incident-overview">
                  <h3 className="incident-title">
                    <i className="fas fa-user-secret"></i>
                    What Happened (2024)
                  </h3>
                  <p className="incident-description">
                    Cyberhaven employee systematically accessed and downloaded customer data over several months. 
                    Traditional DLP failed to detect the gradual exfiltration pattern.
                  </p>
                </div>

                <div className="detection-analysis">
                  <h3 className="analysis-title">
                    <i className="fas fa-search"></i>
                    Above Detection Points
                  </h3>
                  
                  <div className="detection-timeline">
                    <div className="detection-item">
                      <div className="detection-step">1</div>
                      <div className="detection-content">
                        <h4 className="detection-title">Behavioral Baseline Deviation</h4>
                        <p className="detection-description">Employee accessing customer data outside normal job function triggers anomaly detection</p>
                      </div>
                    </div>

                    <div className="detection-item">
                      <div className="detection-step">2</div>
                      <div className="detection-content">
                        <h4 className="detection-title">Data Access Pattern Analysis</h4>
                        <p className="detection-description">LLM identifies systematic collection behavior: sequential customer record access over time</p>
                      </div>
                    </div>

                    <div className="detection-item">
                      <div className="detection-step">3</div>
                      <div className="detection-content">
                        <h4 className="detection-title">Volume Anomaly Detection</h4>
                        <p className="detection-description">Download volume significantly exceeds historical baseline for user role and department</p>
                      </div>
                    </div>

                    <div className="detection-item">
                      <div className="detection-step">4</div>
                      <div className="detection-content">
                        <h4 className="detection-title">Intent Classification</h4>
                        <p className="detection-description">Semantic analysis of page interactions indicates data collection intent, not legitimate business use</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prevention-outcome">
                  <h3 className="outcome-title">
                    <i className="fas fa-shield-alt"></i>
                    Prevention Result
                  </h3>
                  <p className="outcome-description">
                    Detection within days of pattern emergence, not months. Real-time alerting enables 
                    immediate investigation and access revocation before significant data loss.
                  </p>
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
              <h1 className="slide-title">Real-World Detection</h1>
              <p className="slide-subtitle">Evidence-Based Scenarios</p>
            </header>

            <div className="content-section">
              <div className="detection-scenarios">
                <div className="scenario-card">
                  <div className="scenario-header">
                    <div className="scenario-icon">
                      <i className="fas fa-fish"></i>
                    </div>
                    <h3 className="scenario-title">Zero-Day Phishing Prevention</h3>
                  </div>
                  <div className="scenario-content">
                    <p className="scenario-description">
                      <strong>Attack:</strong> Pixel-perfect fake Office 365 login portal using new domain and SSL certificate.
                    </p>
                    <p className="scenario-detection">
                      <strong>Detection:</strong> LLM analysis identifies malicious intent through page semantics and form behavior, 
                      despite visual similarity to legitimate site.
                    </p>
                    <div className="scenario-outcome">
                      <i className="fas fa-check-circle"></i>
                      <span>Blocks credential entry before compromise</span>
                    </div>
                  </div>
                </div>

                <div className="scenario-card">
                  <div className="scenario-header">
                    <div className="scenario-icon">
                      <i className="fas fa-key"></i>
                    </div>
                    <h3 className="scenario-title">Malicious OAuth Prevention</h3>
                  </div>
                  <div className="scenario-content">
                    <p className="scenario-description">
                      <strong>Attack:</strong> Fake "Google Drive Backup" app requests excessive permissions on lookalike consent page.
                    </p>
                    <p className="scenario-detection">
                      <strong>Detection:</strong> Extension analyzes OAuth consent page, identifies suspicious permission scope 
                      and app legitimacy indicators.
                    </p>
                    <div className="scenario-outcome">
                      <i className="fas fa-check-circle"></i>
                      <span>Prevents malicious OAuth consent before token granted</span>
                    </div>
                  </div>
                </div>

                <div className="scenario-card">
                  <div className="scenario-header">
                    <div className="scenario-icon">
                      <i className="fas fa-user-times"></i>
                    </div>
                    <h3 className="scenario-title">Offboarding Gap Detection</h3>
                  </div>
                  <div className="scenario-content">
                    <p className="scenario-description">
                      <strong>Attack:</strong> Departing employee retains access through saved sessions or incomplete deprovisioning.
                    </p>
                    <p className="scenario-detection">
                      <strong>Detection:</strong> Behavioral analysis identifies access patterns inconsistent with employment status 
                      and normal usage patterns.
                    </p>
                    <div className="scenario-outcome">
                      <i className="fas fa-check-circle"></i>
                      <span>Detects residual access during offboarding windows</span>
                    </div>
                  </div>
                </div>

                <div className="scenario-card">
                  <div className="scenario-header">
                    <div className="scenario-icon">
                      <i className="fas fa-download"></i>
                    </div>
                    <h3 className="scenario-title">Privilege Misuse Detection</h3>
                  </div>
                  <div className="scenario-content">
                    <p className="scenario-description">
                      <strong>Attack:</strong> Marketing user accesses M&A documents in SharePoint outside normal job function.
                    </p>
                    <p className="scenario-detection">
                      <strong>Detection:</strong> Cross-app behavioral analysis flags access to sensitive content 
                      inconsistent with user role and historical patterns.
                    </p>
                    <div className="scenario-outcome">
                      <i className="fas fa-check-circle"></i>
                      <span>Immediate alert for privilege misuse investigation</span>
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

      case 5:
        return (
          <div className="slide-container">
            <header className="slide-header">
              <h1 className="slide-title">Deployment</h1>
              <p className="slide-subtitle">Implementation & Limitations</p>
            </header>

            <div className="content-section">
              <div className="deployment-overview">
                <div className="deployment-method">
                  <h3 className="deployment-title">
                    <i className="fas fa-rocket"></i>
                    Deployment Model
                  </h3>
                  <div className="deployment-steps">
                    <div className="deployment-step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4 className="step-title">Browser Extension Distribution</h4>
                        <p className="step-description">Deploy via enterprise browser management (Chrome, Edge, Firefox)</p>
                      </div>
                    </div>
                    <div className="deployment-step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4 className="step-title">Cloud Backend Configuration</h4>
                        <p className="step-description">SaaS platform processes behavioral data and provides threat detection</p>
                      </div>
                    </div>
                    <div className="deployment-step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4 className="step-title">Baseline Establishment</h4>
                        <p className="step-description">Learn normal user behavior patterns across applications</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="deployment-constraints">
                  <div className="constraints-grid">
                    <div className="constraint-card supported">
                      <h4 className="constraint-header">
                        <i className="fas fa-check-circle"></i>
                        Supported Environments
                      </h4>
                      <ul className="constraint-list">
                        <li><i className="fas fa-check"></i> Managed corporate devices</li>
                        <li><i className="fas fa-check"></i> Enterprise browser policies</li>
                        <li><i className="fas fa-check"></i> Any web-based application</li>
                        <li><i className="fas fa-check"></i> Real-time threat prevention</li>
                      </ul>
                    </div>

                    <div className="constraint-card limitations">
                      <h4 className="constraint-header">
                        <i className="fas fa-exclamation-triangle"></i>
                        Current Limitations
                      </h4>
                      <ul className="constraint-list">
                        <li><i className="fas fa-times"></i> BYOD/unmanaged devices (extension removal risk)</li>
                        <li><i className="fas fa-times"></i> Native mobile applications</li>
                        <li><i className="fas fa-times"></i> Desktop applications outside browser</li>
                        <li><i className="fas fa-times"></i> Offline application usage</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="deployment-timeline">
                  <h3 className="timeline-title">
                    <i className="fas fa-clock"></i>
                    Implementation Timeline
                  </h3>
                  <div className="timeline-content">
                    <div className="timeline-item">
                      <div className="timeline-marker">Day 1</div>
                      <div className="timeline-description">Extension deployment via browser management</div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker">Week 1</div>
                      <div className="timeline-description">Baseline establishment and initial threat detection</div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker">Week 2</div>
                      <div className="timeline-description">Full behavioral analysis and anomaly detection active</div>
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
        return <div>Slide not found</div>;
    }
  };

  return (
    <div className="presentation-container">
      <div className="presentation-header">
        <button 
          className="menu-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          Menu
        </button>
        
        <div className="navigation-controls">
          <button 
            className="nav-button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ←
          </button>
          <button 
            className="nav-button"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            →
          </button>
        </div>

        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
      </div>

      {showMenu && (
        <div className="menu-overlay">
          <div className="menu-content">
            <h3 className="menu-title">Navigate to Slide</h3>
            <div className="menu-items">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className={`menu-item ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="menu-item-number">{index + 1}</span>
                  <span className="menu-item-title">{slide}</span>
                </button>
              ))}
            </div>
            <button 
              className="menu-close"
              onClick={() => setShowMenu(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <main className="slide-content">
        {renderSlide()}
      </main>
    </div>
  );
};

export default App;

