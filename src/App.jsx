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
                  <p className="key-point-description">Monitors user behavior inside SaaS applications after successful login</p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <i className="fas fa-puzzle-piece"></i>
                  </div>
                  <h3 className="key-point-title">Browser Extension Deployment</h3>
                  <p className="key-point-description">Agentless architecture deployed as browser extension across any web application</p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3 className="key-point-title">LLM Page Analysis</h3>
                  <p className="key-point-description">Semantic understanding of user interactions and page content to detect threats</p>
                </div>
              </div>

              <div className="executive-summary">
                <h3 className="summary-title">
                  <i className="fas fa-shield-alt"></i>
                  The Gap We Fill
                </h3>
                <p className="summary-text">
                  Traditional security tools monitor access but not behavior. Above detects misuse, insider threats, 
                  and sophisticated phishing attacks that occur after authentication — the blind spot where most damage happens.
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
                      <li><i className="fas fa-times"></i> Sophisticated phishing on fake SaaS portals</li>
                      <li><i className="fas fa-times"></i> Malicious OAuth consent manipulation</li>
                      <li><i className="fas fa-times"></i> Insider data access pattern anomalies</li>
                      <li><i className="fas fa-times"></i> Session hijacking and token abuse</li>
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
                        <h4 className="threat-name">Malicious OAuth Consent</h4>
                        <p className="threat-description">Fake apps trick users into granting OAuth permissions on lookalike login pages. Browser extension prevents consent to malicious apps.</p>
                      </div>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-content">
                      <div className="threat-icon session">
                        <i className="fas fa-fish"></i>
                      </div>
                      <div className="threat-details">
                        <h4 className="threat-name">Sophisticated Phishing</h4>
                        <p className="threat-description">Zero-day phishing kits create pixel-perfect fake SaaS portals. LLM page analysis detects malicious intent before credentials are entered.</p>
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
              <p className="slide-subtitle">Browser Extension with LLM Analysis</p>
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
                        <i className="fas fa-puzzle-piece"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">Browser Extension Deployment</h4>
                        <p className="tech-description">Lightweight extension captures user interactions and page content across any web application</p>
                      </div>
                    </div>

                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-brain"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">LLM Page Analysis</h4>
                        <p className="tech-description">Semantic analysis of page content and user interactions to detect malicious intent and phishing attempts</p>
                      </div>
                    </div>

                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">Behavioral Baseline & Detection</h4>
                        <p className="tech-description">Establishes normal patterns, flags deviations: unusual data access, privilege changes, suspicious interactions</p>
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
                      <h4 className="concept-title">Real-Time Prevention</h4>
                      <p className="concept-description">Prevents malicious actions before they complete - blocks phishing, stops malicious OAuth consent</p>
                    </div>

                    <div className="concept-card">
                      <div className="concept-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <h4 className="concept-title">Semantic Understanding</h4>
                      <p className="concept-description">LLM analysis understands page intent and user behavior context, not just patterns</p>
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
                    <i className="fas fa-fish"></i>
                  </div>
                  <h3 className="differentiator-title">Sophisticated Phishing Prevention</h3>
                  <p className="differentiator-description">
                    LLM analysis detects zero-day phishing kits and fake SaaS portals by understanding page intent and content semantics.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-search"></i>
                    Example: Pixel-perfect fake SharePoint login detected before credentials entered
                  </div>
                </div>

                <div className="differentiator-card">
                  <div className="differentiator-icon">
                    <i className="fas fa-key"></i>
                  </div>
                  <h3 className="differentiator-title">Malicious OAuth Prevention</h3>
                  <p className="differentiator-description">
                    Prevents users from granting OAuth consent to malicious applications by analyzing app legitimacy and requested permissions.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-search"></i>
                    Example: Fake "Google Drive" app requesting excessive permissions blocked at consent
                  </div>
                </div>

                <div className="differentiator-card">
                  <div className="differentiator-icon">
                    <i className="fas fa-user-shield"></i>
                  </div>
                  <h3 className="differentiator-title">Insider Threat Detection</h3>
                  <p className="differentiator-description">
                    Detects gradual privilege escalation, unusual data access volumes, and behavioral drift indicating malicious intent.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-search"></i>
                    Example: Marketing user accessing M&A documents in SharePoint outside normal role
                  </div>
                </div>

                <div className="differentiator-card">
                  <div className="differentiator-icon">
                    <i className="fas fa-download"></i>
                  </div>
                  <h3 className="differentiator-title">Data Exfiltration Patterns</h3>
                  <p className="differentiator-description">
                    Tracks systematic data collection patterns that evade traditional DLP through low-and-slow techniques.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-search"></i>
                    Example: Employee downloading customer records gradually over weeks before resignation
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
                  <div className="use-case-header">
                    <div className="use-case-icon">
                      <i className="fas fa-fish"></i>
                    </div>
                    <h3 className="use-case-title">Cyberhaven-Style Prevention</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Employee systematically accesses customer data outside normal job function.
                    </p>
                    <p className="use-case-detection">
                      <strong>Detection:</strong> LLM analysis identifies unusual data access patterns and semantic understanding of page content reveals systematic collection behavior.
                    </p>
                    <div className="use-case-outcome">
                      <i className="fas fa-check-circle"></i>
                      <span>Prevents gradual exfiltration before damage occurs</span>
                    </div>
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-header">
                    <div className="use-case-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <h3 className="use-case-title">Zero-Day Phishing Protection</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Sophisticated phishing kit creates pixel-perfect fake Office 365 login portal.
                    </p>
                    <p className="use-case-detection">
                      <strong>Detection:</strong> Browser extension analyzes page semantics with LLM, detects malicious intent despite visual similarity to legitimate site.
                    </p>
                    <div className="use-case-outcome">
                      <i className="fas fa-check-circle"></i>
                      <span>Blocks credential entry before compromise</span>
                    </div>
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-header">
                    <div className="use-case-icon">
                      <i className="fas fa-key"></i>
                    </div>
                    <h3 className="use-case-title">Malicious OAuth Prevention</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Fake application requests OAuth permissions mimicking legitimate Google Drive integration.
                    </p>
                    <p className="use-case-detection">
                      <strong>Detection:</strong> Extension analyzes OAuth consent page, identifies suspicious permission requests and app legitimacy indicators.
                    </p>
                    <div className="use-case-outcome">
                      <i className="fas fa-check-circle"></i>
                      <span>Prevents malicious OAuth consent before token granted</span>
                    </div>
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-header">
                    <div className="use-case-icon">
                      <i className="fas fa-user-times"></i>
                    </div>
                    <h3 className="use-case-title">Offboarding Gap Detection</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Departing employee retains access to SaaS applications through saved sessions or incomplete deprovisioning.
                    </p>
                    <p className="use-case-detection">
                      <strong>Detection:</strong> Behavioral analysis identifies access patterns inconsistent with employment status and normal usage.
                    </p>
                    <div className="use-case-outcome">
                      <i className="fas fa-check-circle"></i>
                      <span>Detects residual access during offboarding windows</span>
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
              <p className="slide-subtitle">Technical Implementation & Integration</p>
            </header>

            <div className="content-section">
              <div className="deployment-overview">
                <div className="deployment-section">
                  <h3 className="deployment-title">
                    <i className="fas fa-rocket"></i>
                    Deployment Model
                  </h3>
                  <div className="deployment-grid">
                    <div className="deployment-item">
                      <div className="deployment-icon">
                        <i className="fas fa-puzzle-piece"></i>
                      </div>
                      <div className="deployment-content">
                        <h4 className="deployment-name">Browser Extension</h4>
                        <p className="deployment-description">Lightweight extension deployed via enterprise browser management (Chrome, Edge, Firefox)</p>
                      </div>
                    </div>

                    <div className="deployment-item">
                      <div className="deployment-icon">
                        <i className="fas fa-cloud"></i>
                      </div>
                      <div className="deployment-content">
                        <h4 className="deployment-name">Cloud-Native Backend</h4>
                        <p className="deployment-description">SaaS platform processes behavioral data and provides real-time threat detection</p>
                      </div>
                    </div>

                    <div className="deployment-item">
                      <div className="deployment-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="deployment-content">
                        <h4 className="deployment-name">Privacy-Preserving</h4>
                        <p className="deployment-description">Captures behavioral metadata and page semantics, not sensitive data content</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="integration-section">
                  <h3 className="integration-title">Integration & Limitations</h3>
                  <div className="integration-grid">
                    <div className="integration-card supported">
                      <h4 className="integration-header">
                        <i className="fas fa-check-circle"></i>
                        Supported Environments
                      </h4>
                      <ul className="integration-list">
                        <li><i className="fas fa-check"></i> Managed corporate devices</li>
                        <li><i className="fas fa-check"></i> Enterprise browser policies</li>
                        <li><i className="fas fa-check"></i> Any web-based SaaS application</li>
                        <li><i className="fas fa-check"></i> Internal web applications</li>
                        <li><i className="fas fa-check"></i> Real-time threat prevention</li>
                      </ul>
                    </div>

                    <div className="integration-card limitations">
                      <h4 className="integration-header">
                        <i className="fas fa-exclamation-triangle"></i>
                        Current Limitations
                      </h4>
                      <ul className="integration-list">
                        <li><i className="fas fa-times"></i> BYOD/unmanaged devices (extension removal risk)</li>
                        <li><i className="fas fa-times"></i> Native mobile applications</li>
                        <li><i className="fas fa-times"></i> Desktop applications outside browser</li>
                        <li><i className="fas fa-times"></i> Post-OAuth token monitoring</li>
                        <li><i className="fas fa-times"></i> Offline application usage</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="value-prop-section">
                  <h3 className="value-prop-title">
                    <i className="fas fa-target"></i>
                    Strategic Value
                  </h3>
                  <div className="value-props">
                    <div className="value-prop">
                      <i className="fas fa-clock"></i>
                      <span><strong>Rapid Deployment:</strong> Days, not months - no SIEM integration required</span>
                    </div>
                    <div className="value-prop">
                      <i className="fas fa-eye"></i>
                      <span><strong>Universal Coverage:</strong> Works with any browser-based application</span>
                    </div>
                    <div className="value-prop">
                      <i className="fas fa-brain"></i>
                      <span><strong>Semantic Detection:</strong> Understands intent, not just patterns</span>
                    </div>
                    <div className="value-prop">
                      <i className="fas fa-shield-alt"></i>
                      <span><strong>Real-Time Prevention:</strong> Stops threats before damage occurs</span>
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

