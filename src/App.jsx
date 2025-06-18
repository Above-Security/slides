import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showMenu, setShowMenu] = useState(false);

  const slides = [
    'Above Runtime ITDR',
    'The Problem', 
    'How It Works',
    'Cyberhaven Case Study',
    'Real-World Detection',
    'Deployment',
    'Competitive Landscape',
    'Above vs. Push Security',
    'Above vs. Valence Security',
    'Why Above Wins Every Sale'
  ];

  const totalSlides = 10;

  const nextSlide = () => {
    setCurrentSlide(prev => (prev < totalSlides ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev > 1 ? prev - 1 : prev));
  };

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
    setShowMenu(false);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'Escape') {
        setShowMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const renderSlide = () => {
    switch (currentSlide) {
      case 2:
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
                  <h3 className="key-point-title">LLM Page Analysis</h3>
                  <p className="key-point-description">Semantic understanding of page content and user interactions to detect malicious intent in real-time.</p>
                </div>

                <div className="key-point-card">
                  <div className="key-point-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="key-point-title">LOTS Detection</h3>
                  <p className="key-point-description">Detects Living Off Trusted Services attacks within legitimate platforms like OAuth, DocuSign, Dropbox.</p>
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

      case 2:
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
                      <li><i className="fas fa-times"></i> LOTS attacks via trusted services (OAuth, DocuSign, Dropbox)</li>
                      <li><i className="fas fa-times"></i> Sophisticated phishing on fake SaaS portals</li>
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
                        <h4 className="threat-name">LOTS OAuth Abuse</h4>
                        <p className="threat-description">Malicious apps abuse trusted OAuth pages to trick users into granting excessive permissions.</p>
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
                        <p className="tech-description">Captures page content and user interactions across any web application</p>
                      </div>
                    </div>

                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-brain"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">LLM Page Analysis</h4>
                        <p className="tech-description">Semantic analysis of page content to detect malicious intent and LOTS attacks</p>
                      </div>
                    </div>

                    <div className="tech-item">
                      <div className="tech-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="tech-content">
                        <h4 className="tech-title">Real-Time Prevention</h4>
                        <p className="tech-description">Blocks malicious actions before completion: prevents credential entry, stops OAuth consent</p>
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
                      <p className="concept-description">LLM understands page intent and context, not just patterns.</p>
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
              <h1 className="slide-title">Cyberhaven Case Study</h1>
              <p className="slide-subtitle">How OAuth Page Analysis Would Have Prevented It</p>
            </header>

            <div className="content-section">
              <div className="case-study-container">
                <div className="incident-overview">
                  <h3 className="incident-title">
                    <i className="fas fa-user-secret"></i>
                    What Happened (2024)
                  </h3>
                  <p className="incident-description">
                    Cyberhaven employee used malicious OAuth app disguised as legitimate Google service to systematically access and download customer data. 
                    Traditional security tools failed to detect the fake OAuth consent page.
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
                        <h4 className="detection-title">OAuth Page Analysis</h4>
                        <p className="detection-description">LLM analyzes OAuth consent page and detects it's not actually a legitimate Google app despite visual similarity</p>
                      </div>
                    </div>

                    <div className="detection-item">
                      <div className="detection-step">2</div>
                      <div className="detection-content">
                        <h4 className="detection-title">Permission Scope Validation</h4>
                        <p className="detection-description">Extension identifies excessive permissions requested that don't match the claimed app functionality</p>
                      </div>
                    </div>

                    <div className="detection-item">
                      <div className="detection-step">3</div>
                      <div className="detection-content">
                        <h4 className="detection-title">LOTS Attack Detection</h4>
                        <p className="detection-description">Semantic analysis recognizes Living Off Trusted Services pattern - malicious intent within trusted OAuth flow</p>
                      </div>
                    </div>

                    <div className="detection-item">
                      <div className="detection-step">4</div>
                      <div className="detection-content">
                        <h4 className="detection-title">Real-Time Prevention</h4>
                        <p className="detection-description">Blocks OAuth consent before token is granted, preventing any data access by the malicious application</p>
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
                    Attack stopped at the OAuth consent stage. No data access granted to malicious app. 
                    Zero customer data compromised through semantic understanding of page intent.
                  </p>
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
                      <strong>Detection:</strong> LLM analysis identifies malicious intent through page semantics and form behavior, despite visual similarity to legitimate site.
                    </p>
                    <div className="scenario-outcome">
                      <i className="fas fa-check"></i>
                      Blocks credential entry before compromise
                    </div>
                  </div>
                </div>

                <div className="scenario-card">
                  <div className="scenario-header">
                    <div className="scenario-icon">
                      <i className="fab fa-google"></i>
                    </div>
                    <h3 className="scenario-title">Malicious OAuth Prevention</h3>
                  </div>
                  <div className="scenario-content">
                    <p className="scenario-description">
                      <strong>Attack:</strong> Fake "Google Drive Backup" app requests excessive permissions on lookalike consent page.
                    </p>
                    <p className="scenario-detection">
                      <strong>Detection:</strong> Extension analyzes OAuth consent page, identifies suspicious permission scope and app legitimacy indicators.
                    </p>
                    <div className="scenario-outcome">
                      <i className="fas fa-check"></i>
                      Prevents malicious OAuth consent before token granted
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
                      <strong>Detection:</strong> Behavioral analysis identifies access patterns inconsistent with employment status and normal usage patterns.
                    </p>
                    <div className="scenario-outcome">
                      <i className="fas fa-check"></i>
                      Detects residual access during offboarding windows
                    </div>
                  </div>
                </div>

                <div className="scenario-card">
                  <div className="scenario-header">
                    <div className="scenario-icon">
                      <i className="fas fa-user-shield"></i>
                    </div>
                    <h3 className="scenario-title">Privilege Misuse Detection</h3>
                  </div>
                  <div className="scenario-content">
                    <p className="scenario-description">
                      <strong>Attack:</strong> Marketing user accesses M&A documents in SharePoint outside normal job function.
                    </p>
                    <p className="scenario-detection">
                      <strong>Detection:</strong> Cross-app behavioral analysis flags access to sensitive content inconsistent with user role and historical patterns.
                    </p>
                    <div className="scenario-outcome">
                      <i className="fas fa-check"></i>
                      Immediate alert for privilege misuse investigation
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
                      <h3 className="constraint-header">
                        <i className="fas fa-check-circle"></i>
                        Supported Environments
                      </h3>
                      <ul className="constraint-list">
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Managed corporate devices</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Enterprise browser policies</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Any web-based application</span>
                        </li>
                        <li>
                          <i className="fas fa-check"></i>
                          <span>Real-time threat prevention</span>
                        </li>
                      </ul>
                    </div>

                    <div className="constraint-card limitations">
                      <h3 className="constraint-header">
                        <i className="fas fa-exclamation-triangle"></i>
                        Current Limitations
                      </h3>
                      <ul className="constraint-list">
                        <li>
                          <i className="fas fa-times"></i>
                          <span>BYOD/unmanaged devices (extension removal risk)</span>
                        </li>
                        <li>
                          <i className="fas fa-times"></i>
                          <span>Native mobile applications</span>
                        </li>
                        <li>
                          <i className="fas fa-times"></i>
                          <span>Desktop applications outside browser</span>
                        </li>
                        <li>
                          <i className="fas fa-times"></i>
                          <span>Offline application usage</span>
                        </li>
                      </ul>
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
              <h1 className="slide-title">Competitive Landscape</h1>
              <p className="slide-subtitle">Understanding the Security Stack</p>
            </header>

            <div className="competitive-landscape">
              <div className="market-gap-section">
                <h3 className="section-title">
                  <i className="fas fa-crosshairs"></i>
                  The Runtime Protection Gap
                </h3>
                <p className="intro-text">
                  Email security prevents phishing at delivery. SaaS security finds misconfigurations post-deployment.<br />
                  Browser security offers policy controls.<br />
                  <strong>Above provides runtime protection during user interactions.</strong>
                </p>
              </div>

              <div className="competitor-categories">
                <div className="category-card">
                  <div className="category-header">
                    <i className="fas fa-envelope"></i>
                    <h4>Email Security</h4>
                    <span className="category-limitation">Pre-Delivery</span>
                  </div>
                  <div className="competitor-list">
                    <span className="competitor">Abnormal Security</span>
                    <span className="competitor">Proofpoint</span>
                  </div>
                  <p className="category-gap">Strong at preventing phishing emails, but misses browser-based ATO attempts</p>
                </div>

                <div className="category-card">
                  <div className="category-header">
                    <i className="fas fa-cloud"></i>
                    <h4>SaaS Security</h4>
                    <span className="category-limitation">Post-Configuration</span>
                  </div>
                  <div className="competitor-list">
                    <span className="competitor">Valence Security</span>
                    <span className="competitor">Reco AI</span>
                  </div>
                  <p className="category-gap">Excellent at finding risky configurations, but detects threats after they occur</p>
                </div>

                <div className="category-card">
                  <div className="category-header">
                    <i className="fas fa-browser"></i>
                    <h4>Browser Security</h4>
                    <span className="category-limitation">Policy-Based</span>
                  </div>
                  <div className="competitor-list">
                    <span className="competitor">Island Enterprise</span>
                    <span className="competitor">Push Security</span>
                  </div>
                  <p className="category-gap">Strong policy enforcement, but limited semantic understanding of threats</p>
                </div>

                <div className="category-card above-category">
                  <div className="category-header">
                    <i className="fas fa-shield-alt"></i>
                    <h4>Runtime ITDR</h4>
                    <span className="category-advantage">During Interaction</span>
                  </div>
                  <div className="competitor-list">
                    <span className="competitor above-highlight">Above Security</span>
                  </div>
                  <p className="category-advantage-text">Semantic understanding at the moment of user decision</p>
                </div>
              </div>

              <div className="market-positioning">
                <h3 className="positioning-title">Above's Unique Position</h3>
                <div className="positioning-grid">
                  <div className="positioning-point">
                    <i className="fas fa-brain"></i>
                    <span>LLM Semantic Analysis</span>
                  </div>
                  <div className="positioning-point">
                    <i className="fas fa-clock"></i>
                    <span>Real-Time Prevention</span>
                  </div>
                  <div className="positioning-point">
                    <i className="fas fa-puzzle-piece"></i>
                    <span>Zero Infrastructure Change</span>
                  </div>
                  <div className="positioning-point">
                    <i className="fas fa-eye"></i>
                    <span>LOTS Attack Detection</span>
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
              <h1 className="slide-title">Above vs. Push Security</h1>
              <p className="slide-subtitle">Semantic Understanding vs. Pattern Detection</p>
            </header>

            <div className="competitor-comparison">
              <div className="comparison-intro">
                <p className="intro-text">
                  Push Security offers strong browser extension-based identity protection.<br />
                  <strong>Above delivers superior semantic understanding and broader threat coverage.</strong>
                </p>
              </div>

              <div className="comparison-grid">
                <div className="comparison-section">
                  <div className="competitor-approach">
                    <h3 className="approach-title">
                      <i className="fas fa-search"></i>
                      Push Security Strengths
                    </h3>
                    <ul className="approach-list">
                      <li>Browser extension for session hijacking detection</li>
                      <li>Strong credential theft monitoring</li>
                      <li>Identity attack pattern recognition</li>
                      <li>Established SIEM/XDR integrations</li>
                      <li>Proven deployment at scale</li>
                    </ul>
                    <div className="approach-limitation">
                      <i className="fas fa-info-circle"></i>
                      <span>Focus: Pattern-based detection of known attack signatures</span>
                    </div>
                  </div>

                  <div className="above-advantage">
                    <h3 className="advantage-title">
                      <i className="fas fa-brain"></i>
                      Above's Superior Capabilities
                    </h3>
                    <ul className="advantage-list">
                      <li><strong>Semantic phishing detection</strong> across all attack vectors</li>
                      <li><strong>Session hijacking prevention</strong> with behavioral analysis</li>
                      <li><strong>LOTS detection</strong> within trusted services (DocuSign, Dropbox)</li>
                      <li><strong>Real-time user education</strong> with contextual warnings</li>
                      <li><strong>Zero-infrastructure deployment</strong> via browser extension</li>
                    </ul>
                    <div className="advantage-highlight">
                      <i className="fas fa-lightbulb"></i>
                      <span>Focus: Understanding malicious intent in legitimate contexts</span>
                    </div>
                  </div>
                </div>

                <div className="use-case-comparison">
                  <h3 className="use-case-title">ATO Scenario: Cyberhaven-Style OAuth Abuse</h3>
                  <div className="scenario-comparison">
                    <div className="push-response">
                      <h4 className="response-title">Push Security Response</h4>
                      <div className="response-steps">
                        <div className="step">
                          <i className="fas fa-check-circle"></i>
                          <span>Detects credential reuse patterns</span>
                        </div>
                        <div className="step">
                          <i className="fas fa-check-circle"></i>
                          <span>Flags suspicious login locations</span>
                        </div>
                        <div className="step neutral">
                          <i className="fas fa-question-circle"></i>
                          <span>May not detect malicious OAuth consent on legitimate Google page</span>
                        </div>
                      </div>
                      <p className="response-result neutral">Result: Strong session protection, potential OAuth gap</p>
                    </div>

                    <div className="above-response">
                      <h4 className="response-title">Above Security Response</h4>
                      <div className="response-steps">
                        <div className="step">
                          <i className="fas fa-search"></i>
                          <span>Analyzes OAuth consent page semantically</span>
                        </div>
                        <div className="step">
                          <i className="fas fa-exclamation-triangle"></i>
                          <span>Detects excessive permissions request</span>
                        </div>
                        <div className="step success">
                          <i className="fas fa-shield-alt"></i>
                          <span>Blocks malicious consent with user education</span>
                        </div>
                      </div>
                      <p className="response-result success">Result: ATO prevented at point of user decision</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="competitive-summary">
                <h3 className="summary-title">Complementary Strengths</h3>
                <p className="summary-text">
                  Push Security excels at session protection and credential monitoring. 
                  <strong>Above adds semantic understanding for consent-based attacks.</strong>
                </p>
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
              <h1 className="slide-title">Above vs. Valence Security</h1>
              <p className="slide-subtitle">Runtime Prevention vs. Configuration Management</p>
            </header>

            <div className="competitor-comparison">
              <div className="comparison-intro">
                <p className="intro-text">
                  Valence Security provides comprehensive SaaS security posture management.<br />
                  <strong>Above focuses on runtime user interaction protection.</strong>
                </p>
              </div>

              <div className="comparison-grid">
                <div className="comparison-section">
                  <div className="competitor-approach">
                    <h3 className="approach-title">
                      <i className="fas fa-cogs"></i>
                      Valence Security Strengths
                    </h3>
                    <ul className="approach-list">
                      <li>Comprehensive SaaS discovery and SSPM</li>
                      <li>Identity threat detection in SaaS environments</li>
                      <li>Risk remediation and compliance workflows</li>
                      <li>API-based monitoring and configuration scanning</li>
                      <li>Strong business user collaboration features</li>
                    </ul>
                    <div className="approach-limitation">
                      <i className="fas fa-info-circle"></i>
                      <span>Focus: Post-deployment configuration and risk management</span>
                    </div>
                  </div>

                  <div className="above-advantage">
                    <h3 className="advantage-title">
                      <i className="fas fa-shield-alt"></i>
                      Above's Runtime Focus
                    </h3>
                    <ul className="advantage-list">
                      <li><strong>Runtime protection</strong> during actual user interactions</li>
                      <li><strong>Browser-native deployment</strong> with zero API dependencies</li>
                      <li><strong>User intent analysis</strong> prevents malicious actions before they occur</li>
                      <li><strong>Real-time intervention</strong> vs. post-incident remediation</li>
                      <li><strong>Immediate deployment</strong> via browser extension</li>
                    </ul>
                    <div className="advantage-highlight">
                      <i className="fas fa-lightbulb"></i>
                      <span>Focus: Preventing threats at the moment of user interaction</span>
                    </div>
                  </div>
                </div>

                <div className="timeline-comparison">
                  <h3 className="timeline-title">ATO Timeline: OAuth Abuse in Trusted SaaS</h3>
                  <div className="timeline">
                    <div className="timeline-event">
                      <div className="timeline-marker initial"></div>
                      <div className="timeline-content">
                        <h4>T+0: Malicious OAuth App Created</h4>
                        <p>Attacker creates legitimate-looking OAuth application</p>
                        <div className="vendor-response valence">Valence: No detection (app appears legitimate)</div>
                        <div className="vendor-response above">Above: No detection (no user interaction yet)</div>
                      </div>
                    </div>

                    <div className="timeline-event">
                      <div className="timeline-marker critical"></div>
                      <div className="timeline-content">
                        <h4>T+1: User Encounters Consent Page</h4>
                        <p>Employee clicks phishing link, sees OAuth consent request</p>
                        <div className="vendor-response valence">Valence: No detection (legitimate OAuth flow)</div>
                        <div className="vendor-response above success">Above: Analyzes consent semantically, detects excessive permissions</div>
                      </div>
                    </div>

                    <div className="timeline-event">
                      <div className="timeline-marker damage"></div>
                      <div className="timeline-content">
                        <h4>T+2: User Decision Point</h4>
                        <p>Without Above: User grants consent, attacker gains access</p>
                        <div className="vendor-response valence">Valence: Still no detection (authorized access)</div>
                        <div className="vendor-response above success">Above: Blocks consent with user education</div>
                      </div>
                    </div>

                    <div className="timeline-event">
                      <div className="timeline-marker aftermath"></div>
                      <div className="timeline-content">
                        <h4>T+Hours: Data Access Begins</h4>
                        <p>Attacker uses legitimate OAuth token to access data</p>
                        <div className="vendor-response valence">Valence: Eventually detects unusual data access patterns</div>
                        <div className="vendor-response above success">Above: Attack already prevented</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="competitive-summary">
                <h3 className="summary-title">Different Problem Spaces</h3>
                <p className="summary-text">
                  Valence excels at SaaS configuration management and compliance. 
                  <strong>Above prevents malicious user actions within legitimate apps.</strong>
                </p>
                <div className="summary-stats">
                  <div className="stat">
                    <span className="stat-number">0</span>
                    <span className="stat-label">Minutes to prevent with Above</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">Hours</span>
                    <span className="stat-label">Time to detect with SSPM</span>
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
              <h1 className="slide-title">Above vs. Island Enterprise Browser</h1>
              <p className="slide-subtitle">Semantic Intelligence vs. Policy Enforcement</p>
            </header>

            <div className="competitor-comparison">
              <div className="comparison-intro">
                <p className="intro-text">
                  Island Enterprise Browser provides comprehensive browser security through policy enforcement.<br />
                  <strong>Above adds semantic intelligence to existing browsers.</strong>
                </p>
              </div>

              <div className="comparison-grid">
                <div className="deployment-comparison">
                  <div className="deployment-approach island">
                    <h3 className="approach-title">
                      <i className="fas fa-browser"></i>
                      Island's Browser Strategy
                    </h3>
                    <div className="deployment-steps">
                      <div className="step complex">
                        <i className="fas fa-download"></i>
                        <span>Deploy enterprise browser replacement</span>
                      </div>
                      <div className="step complex">
                        <i className="fas fa-users-cog"></i>
                        <span>Train employees on new browser interface</span>
                      </div>
                      <div className="step complex">
                        <i className="fas fa-tools"></i>
                        <span>Migrate browser-based workflows and bookmarks</span>
                      </div>
                      <div className="step complex">
                        <i className="fas fa-shield-alt"></i>
                        <span>Configure granular security policies</span>
                      </div>
                    </div>
                    <div className="deployment-timeline">
                      <i className="fas fa-clock"></i>
                      <span>Deployment: 3-6 months</span>
                    </div>
                  </div>

                  <div className="deployment-approach above">
                    <h3 className="approach-title">
                      <i className="fas fa-puzzle-piece"></i>
                      Above's Extension Strategy
                    </h3>
                    <div className="deployment-steps">
                      <div className="step simple">
                        <i className="fas fa-download"></i>
                        <span>Deploy browser extension via existing MDM</span>
                      </div>
                      <div className="step simple">
                        <i className="fas fa-user-check"></i>
                        <span>Zero user training required</span>
                      </div>
                      <div className="step simple">
                        <i className="fas fa-cog"></i>
                        <span>Works with existing browser workflows</span>
                      </div>
                      <div className="step simple">
                        <i className="fas fa-brain"></i>
                        <span>Intelligent threat detection with user education</span>
                      </div>
                    </div>
                    <div className="deployment-timeline">
                      <i className="fas fa-rocket"></i>
                      <span>Deployment: Same day</span>
                    </div>
                  </div>
                </div>

                <div className="capability-comparison">
                  <h3 className="capability-title">Security Approach Comparison</h3>
                  <div className="capability-grid">
                    <div className="capability-category">
                      <h4>Data Protection</h4>
                      <div className="capability-item">
                        <span className="capability-label">Island:</span>
                        <span className="capability-desc">Policy-based controls (configurable)</span>
                        <i className="fas fa-check capability-icon positive"></i>
                      </div>
                      <div className="capability-item">
                        <span className="capability-label">Above:</span>
                        <span className="capability-desc">Semantic analysis of user intent</span>
                        <i className="fas fa-check capability-icon positive"></i>
                      </div>
                    </div>

                    <div className="capability-category">
                      <h4>User Experience</h4>
                      <div className="capability-item">
                        <span className="capability-label">Island:</span>
                        <span className="capability-desc">New browser interface to learn</span>
                        <i className="fas fa-minus capability-icon neutral"></i>
                      </div>
                      <div className="capability-item">
                        <span className="capability-label">Above:</span>
                        <span className="capability-desc">Works with familiar browsers</span>
                        <i className="fas fa-check capability-icon positive"></i>
                      </div>
                    </div>

                    <div className="capability-category">
                      <h4>Threat Detection</h4>
                      <div className="capability-item">
                        <span className="capability-label">Island:</span>
                        <span className="capability-desc">Policy-based restrictions and monitoring</span>
                        <i className="fas fa-check capability-icon positive"></i>
                      </div>
                      <div className="capability-item">
                        <span className="capability-label">Above:</span>
                        <span className="capability-desc">LLM semantic threat understanding</span>
                        <i className="fas fa-check capability-icon positive"></i>
                      </div>
                    </div>

                    <div className="capability-category">
                      <h4>Deployment Speed</h4>
                      <div className="capability-item">
                        <span className="capability-label">Island:</span>
                        <span className="capability-desc">3-6 month enterprise rollout</span>
                        <i className="fas fa-minus capability-icon neutral"></i>
                      </div>
                      <div className="capability-item">
                        <span className="capability-label">Above:</span>
                        <span className="capability-desc">Same-day deployment</span>
                        <i className="fas fa-check capability-icon positive"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="use-case-example">
                  <h3 className="example-title">Use Case: Suspicious Document Download</h3>
                  <div className="example-scenario">
                    <div className="scenario-setup">
                      <p>Employee receives email with link to "urgent contract" requiring download</p>
                    </div>
                    <div className="scenario-responses">
                      <div className="response island-response">
                        <h4>Island Response</h4>
                        <div className="response-flow">
                          <div className="flow-step">
                            <i className="fas fa-cog"></i>
                            <span>Applies configured download policy</span>
                          </div>
                          <div className="flow-step">
                            <i className="fas fa-shield-alt"></i>
                            <span>May allow or block based on domain/file type</span>
                          </div>
                          <div className="flow-step">
                            <i className="fas fa-clipboard-list"></i>
                            <span>Logs activity for compliance</span>
                          </div>
                        </div>
                        <p className="response-result">Result: Policy-based decision, may miss context</p>
                      </div>
                      <div className="response above-response">
                        <h4>Above Response</h4>
                        <div className="response-flow">
                          <div className="flow-step">
                            <i className="fas fa-search"></i>
                            <span>Analyzes page content and user context</span>
                          </div>
                          <div className="flow-step success">
                            <i className="fas fa-exclamation-triangle"></i>
                            <span>Detects suspicious urgency language and sender</span>
                          </div>
                          <div className="flow-step">
                            <i className="fas fa-graduation-cap"></i>
                            <span>Educates user about phishing indicators</span>
                          </div>
                        </div>
                        <p className="response-result">Result: Context-aware protection with user education</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="competitive-summary">
                <h3 className="summary-title">Complementary Approaches</h3>
                <p className="summary-text">
                  Island provides comprehensive browser replacement with strong policy controls. 
                  <strong>Above enhances existing browsers with semantic intelligence.</strong>
                </p>
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
              <h1 className="slide-title">Why Above Wins Every Sale</h1>
              <p className="slide-subtitle">The Ultimate Competitive Advantage Matrix</p>
            </header>

            <div className="market-leadership">
              <div className="leadership-intro">
                <h3 className="intro-title">
                  <i className="fas fa-trophy"></i>
                  The CEO's Competitive Playbook
                </h3>
                <p className="intro-description">
                  Every security category has leaders. Email has Abnormal. SaaS has Valence. Browser has Island.<br />
                  <strong>Above owns Runtime ITDR - the only category that prevents attacks during user interactions.</strong>
                </p>
              </div>

              <div className="winning-matrix">
                <h3 className="matrix-title">
                  <i className="fas fa-chess-king"></i>
                  The Winning Capabilities Matrix
                </h3>
                <p className="matrix-description">
                  Each solution excels in different areas. <strong>Above uniquely dominates the most critical attack vector: runtime user interactions.</strong>
                </p>

                <div className="matrix-table">
                  <div className="matrix-cell capability-header">Capability</div>
                  <div className="matrix-cell vendor-header">Above</div>
                  <div className="matrix-cell vendor-header">Push</div>
                  <div className="matrix-cell vendor-header">Valence</div>
                  <div className="matrix-cell vendor-header">Island</div>
                  <div className="matrix-cell vendor-header">Abnormal</div>

                  <div className="matrix-cell capability-name">Runtime Phishing Prevention</div>
                  <div className="matrix-cell above-win">✅</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>

                  <div className="matrix-cell capability-name">Semantic Content Analysis</div>
                  <div className="matrix-cell above-win">✅</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>

                  <div className="matrix-cell capability-name">LOTS Detection in Trusted Services</div>
                  <div className="matrix-cell above-win">✅</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>

                  <div className="matrix-cell capability-name">Zero-Day Attack Prevention</div>
                  <div className="matrix-cell above-win">✅</div>
                  <div className="matrix-cell competitor-partial">⚠️</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-partial">⚠️</div>
                  <div className="matrix-cell competitor-partial">⚠️</div>

                  <div className="matrix-cell capability-name">Real-Time User Education</div>
                  <div className="matrix-cell above-win">✅</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>

                  <div className="matrix-cell capability-name">Session Hijacking Detection</div>
                  <div className="matrix-cell above-win">✅</div>
                  <div className="matrix-cell competitor-yes">✅</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-yes">✅</div>
                  <div className="matrix-cell competitor-no">❌</div>

                  <div className="matrix-cell capability-name">SaaS Configuration Management</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-yes">✅</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>

                  <div className="matrix-cell capability-name">Email Phishing Prevention</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-yes">✅</div>

                  <div className="matrix-cell capability-name">Browser Policy Enforcement</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-no">❌</div>
                  <div className="matrix-cell competitor-yes">✅</div>
                  <div className="matrix-cell competitor-no">❌</div>
                </div>
              </div>

              <div className="market-domination">
                <h3 className="domination-title">
                  <i className="fas fa-crown"></i>
                  Market Domination Strategy
                </h3>
                <div className="domination-grid">
                  <div className="domination-card category-creation">
                    <div className="card-icon">
                      <i className="fas fa-lightbulb"></i>
                    </div>
                    <h4>Category Creation</h4>
                    <p>Runtime ITDR is a new $12B category. Above is the category king.</p>
                  </div>
                  <div className="domination-card unique-moat">
                    <div className="card-icon">
                      <i className="fas fa-shield-alt"></i>
                    </div>
                    <h4>Defensible Moat</h4>
                    <p>LLM semantic understanding creates an unassailable competitive advantage.</p>
                  </div>
                  <div className="domination-card market-timing">
                    <div className="card-icon">
                      <i className="fas fa-rocket"></i>
                    </div>
                    <h4>Perfect Timing</h4>
                    <p>SaaS adoption explosion + AI breakthrough = Above's moment to dominate.</p>
                  </div>
                </div>
              </div>

              <div className="ceo-message">
                <div className="message-content">
                  <h3 className="message-title">
                    <i className="fas fa-quote-left"></i>
                    The Category King's Advantage
                  </h3>
                  <p className="message-text">
                    "In cybersecurity, category kings capture 70% of market value. Email security has Proofpoint. 
                    Endpoint has CrowdStrike. <strong>Runtime ITDR will have Above.</strong> 
                    Don't wait for the breach. Deploy the category leader today."
                  </p>
                  <div className="message-attribution">
                    <strong>— The Above Advantage</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="presentation-container">
      <div className="presentation-controls">
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
            disabled={currentSlide === 1}
          >
            ←
          </button>
          <span className="slide-counter">{currentSlide}/{totalSlides}</span>
          <button 
            className="nav-button"
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
          >
            →
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="menu-overlay">
          <div className="menu-content">
            <h3>Navigate to Slide</h3>
            <div className="menu-items">
              {slides.map((slide, index) => (
                <button
                  key={index + 1}
                  className={`menu-item ${currentSlide === index + 1 ? 'active' : ''}`}
                  onClick={() => goToSlide(index + 1)}
                >
                  <span className="slide-number">{index + 1}</span>
                  <span className="slide-title">{slide}</span>
                </button>
              ))}
            </div>
            <button 
              className="close-button"
              onClick={() => setShowMenu(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="slide-container">
        {renderSlide()}
      </div>
    </div>
  );
}

export default App;
