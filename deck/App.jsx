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
              <p className="slide-subtitle">Specific Detection Scenarios</p>
            </header>

            <div className="content-section">
              <div className="use-cases-grid">
                <div className="use-case-card">
                  <div className="use-case-header">
                    <i className="fas fa-user-times"></i>
                    <h3>Terminated Employee Detection</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Employee terminated but cached tokens/sessions remain active
                    </p>
                    <div className="use-case-example">
                      <strong>Detection:</strong> Session activity continues after HR system shows termination date
                    </div>
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-header">
                    <i className="fas fa-database"></i>
                    <h3>Cyberhaven-Style Data Theft</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Employee systematically accesses customer data outside normal role
                    </p>
                    <div className="use-case-example">
                      <strong>Detection:</strong> Support agent accessing enterprise customer records, downloading contact lists
                    </div>
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-header">
                    <i className="fas fa-crown"></i>
                    <h3>Privilege Escalation</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> User gains admin privileges through social engineering or system exploit
                    </p>
                    <div className="use-case-example">
                      <strong>Detection:</strong> Standard user suddenly performing admin functions: user creation, permission changes
                    </div>
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-header">
                    <i className="fas fa-mobile-alt"></i>
                    <h3>Compromised OAuth App</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Legitimate OAuth app gets compromised, starts accessing data beyond original scope
                    </p>
                    <div className="use-case-example">
                      <strong>Detection:</strong> Calendar integration app suddenly accessing email, contacts, file storage
                    </div>
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-header">
                    <i className="fas fa-clock"></i>
                    <h3>After-Hours Anomalies</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Unusual activity patterns indicating compromised accounts
                    </p>
                    <div className="use-case-example">
                      <strong>Detection:</strong> Accounting user accessing payroll data at 3 AM from new location
                    </div>
                  </div>
                </div>

                <div className="use-case-card">
                  <div className="use-case-header">
                    <i className="fas fa-balance-scale"></i>
                    <h3>Compliance Violations</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">
                      <strong>Scenario:</strong> Data access violating regulatory requirements (GDPR, HIPAA, SOX)
                    </p>
                    <div className="use-case-example">
                      <strong>Detection:</strong> US employee accessing EU customer data without proper data processing agreement
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
              <p className="slide-subtitle">Implementation & Integration</p>
            </header>

            <div className="content-section">
              <div className="success-overview">
                <div className="timeline-section">
                  <h3 className="timeline-title">
                    <i className="fas fa-rocket"></i>
                    Deployment Process
                  </h3>
                  <div className="timeline-grid">
                    <div className="timeline-item">
                      <div className="timeline-marker">1</div>
                      <div className="timeline-content">
                        <h4>Browser Extension Rollout</h4>
                        <p>Deploy via existing MDM/GPO infrastructure. No application changes required.</p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-marker">2</div>
                      <div className="timeline-content">
                        <h4>Baseline Establishment</h4>
                        <p>2-4 weeks learning normal user behavior patterns across applications.</p>
                      </div>
                    </div>

                    <div className="timeline-item">
                      <div className="timeline-marker">3</div>
                      <div className="timeline-content">
                        <h4>Detection Tuning</h4>
                        <p>Adjust sensitivity based on organizational risk tolerance and false positive feedback.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="integration-overview">
                  <div className="integrations-grid">
                    <div className="tool-integration">
                      <div className="tool-header">
                        <i className="fas fa-chart-bar"></i>
                        <h4>SIEM Integration</h4>
                      </div>
                      <div className="tool-content">
                        <p className="tool-description">JSON alerts via REST API or syslog. Enriched with user context and behavioral analysis.</p>
                        <div className="integration-benefit">
                          <i className="fas fa-check"></i>
                          Reduces analyst investigation time
                        </div>
                      </div>
                    </div>

                    <div className="tool-integration">
                      <div className="tool-header">
                        <i className="fas fa-shield-alt"></i>
                        <h4>SOAR Playbooks</h4>
                      </div>
                      <div className="tool-content">
                        <p className="tool-description">Automated response triggers: session termination, account lockout, manager notification.</p>
                        <div className="integration-benefit">
                          <i className="fas fa-check"></i>
                          Immediate threat containment
                        </div>
                      </div>
                    </div>

                    <div className="tool-integration">
                      <div className="tool-header">
                        <i className="fas fa-key"></i>
                        <h4>Identity Providers</h4>
                      </div>
                      <div className="tool-content">
                        <p className="tool-description">Correlates behavioral anomalies with identity events: role changes, group membership.</p>
                        <div className="integration-benefit">
                          <i className="fas fa-check"></i>
                          Enhanced context for investigations
                        </div>
                      </div>
                    </div>

                    <div className="tool-integration">
                      <div className="tool-header">
                        <i className="fas fa-clipboard-check"></i>
                        <h4>Compliance Reporting</h4>
                      </div>
                      <div className="tool-content">
                        <p className="tool-description">Automated audit trails for SOX, GDPR, HIPAA compliance requirements.</p>
                        <div className="integration-benefit">
                          <i className="fas fa-check"></i>
                          Simplified regulatory compliance
                        </div>
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

      default:
        return <div>Slide not found</div>;
    }
  };

  return (
    <div className="app">
      <div className="header">
        <button className="menu-btn" onClick={() => setShowMenu(true)}>
          <div className="menu-icon"></div>
          Menu
        </button>
        
        <div className="brand">
          <svg className="brand-logo" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
            <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
          </svg>
          Above Presentation
        </div>
        
        <div className="slide-counter">{currentSlide + 1} / {slides.length}</div>
        
        <div className="nav-controls">
          <button 
            className="nav-btn" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ‹
          </button>
          <button 
            className="nav-btn" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            ›
          </button>
        </div>
      </div>

      <div className="slide-content">
        {renderSlide()}
      </div>

      {showMenu && (
        <div className="menu-overlay" onClick={() => setShowMenu(false)}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <div className="menu-header">
              <h3>Slides</h3>
              <button className="menu-close" onClick={() => setShowMenu(false)}>×</button>
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

