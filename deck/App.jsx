import React, { useState, useEffect } from 'react';
import './App.css';
import logoSvg from './assets/logo.svg';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const slides = [
    'Introduction',
    'Identity Threat Landscape', 
    'What is Runtime ITDR?',
    'Above Platform',
    'Key Differentiators',
    'Core Use Cases',
    'Security Stack Integration',
    'Customer Success'
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
            <div className="header">
              <h1 className="main-title">
                <svg className="logo-small" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
                </svg>
                Above
              </h1>
              <p className="subtitle">Runtime Identity Threat Detection & Response</p>
            </div>

            <div className="content-section">
              <div className="key-points-grid">
                <div className="key-point-card application-aware">
                  <div className="key-point-icon">
                    <i className="fas fa-eye"></i>
                  </div>
                  <h3 className="key-point-title">Application-Aware</h3>
                  <p className="key-point-description">First fully application-aware Runtime ITDR platform</p>
                </div>

                <div className="key-point-card real-time">
                  <div className="key-point-icon">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <h3 className="key-point-title">Real-Time</h3>
                  <p className="key-point-description">Detects misuse and insider threats in real-time</p>
                </div>

                <div className="key-point-card anti-phishing">
                  <div className="key-point-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h3 className="key-point-title">Anti-Phishing</h3>
                  <p className="key-point-description">Detects advanced phishing beyond traditional email filters</p>
                </div>
              </div>

              <div className="executive-summary">
                <h3 className="summary-title">
                  <i className="fas fa-rocket"></i>
                  Empowering Security Teams
                </h3>
                <p className="summary-text">
                  Traditional ITDR and IAM solutions fail post-authentication, focusing on access control rather than actual behavior inside applications. 
                  Above addresses this critical gap by providing real-time detection of misuse, insider threats, and sophisticated phishing attacks within 
                  SaaS and internal applications — including OAuth consent abuse, session hijacking, and browser-based social engineering that bypass 
                  conventional email-based defenses.
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
            <div className="header">
              <h1 className="main-title">The Identity Threat Landscape</h1>
              <p className="subtitle">Identity as the Primary Attack Vector</p>
            </div>

            <div className="content-section">
              <div className="landscape-grid">
                <div className="landscape-card critical-gap">
                  <h3 className="landscape-title">
                    <i className="fas fa-exclamation-triangle"></i>
                    The Critical Gap
                  </h3>
                  <p className="landscape-text">
                    Existing tools focus on <strong style={{color: '#00872b'}}>access</strong>, not actual <strong style={{color: '#0969da'}}>behavior</strong> inside apps.
                  </p>
                  <p className="landscape-text">
                    Compromised credentials alone don't tell the full story.
                  </p>
                  
                  <div className="blind-spots-card">
                    <h4 className="blind-spots-title">Traditional Security Blind Spots:</h4>
                    <ul className="blind-spots-list">
                      <li><i className="fas fa-times"></i> Post-authentication behavior</li>
                      <li><i className="fas fa-times"></i> In-application activities</li>
                      <li><i className="fas fa-times"></i> Session-level visibility</li>
                      <li><i className="fas fa-times"></i> Semantic user intent</li>
                    </ul>
                  </div>
                </div>

                <div className="landscape-card emerging-threats">
                  <h3 className="landscape-title">
                    <i className="fas fa-virus"></i>
                    Emerging Identity Threats
                  </h3>
                  
                  <div className="threat-item">
                    <div className="threat-icon oauth">
                      <i className="fab fa-google"></i>
                    </div>
                    <div className="threat-content">
                      <h4 className="threat-name">OAuth Phishing</h4>
                      <p className="threat-description">Malicious apps trick users into granting access via OAuth, bypassing traditional authentication mechanisms</p>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-icon session">
                      <i className="fas fa-user-secret"></i>
                    </div>
                    <div className="threat-content">
                      <h4 className="threat-name">Session Hijacking</h4>
                      <p className="threat-description">Attackers steal session tokens to impersonate users without re-authentication</p>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-icon shadow">
                      <i className="fas fa-cloud"></i>
                    </div>
                    <div className="threat-content">
                      <h4 className="threat-name">Shadow IT Misuse</h4>
                      <p className="threat-description">Unauthorized applications introduce security risks outside IT oversight</p>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-icon scraping">
                      <i className="fas fa-download"></i>
                    </div>
                    <div className="threat-content">
                      <h4 className="threat-name">Low-and-Slow Data Scraping</h4>
                      <p className="threat-description">Incremental data exfiltration designed to evade traditional security alerts</p>
                    </div>
                  </div>

                  <div className="threat-item">
                    <div className="threat-icon insider">
                      <i className="fas fa-user-times"></i>
                    </div>
                    <div className="threat-content">
                      <h4 className="threat-name">Insider Threats</h4>
                      <p className="threat-description">Malicious or negligent insiders misuse legitimate access to compromise data</p>
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
            <div className="header">
              <h1 className="main-title">
                <svg className="logo-small" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
                </svg>
                What is Runtime ITDR?
              </h1>
              <p className="subtitle">Revolutionary Post-Authentication Security</p>
            </div>

            <div className="content-section">
              <div className="definition-card">
                <h3 className="definition-title">
                  <i className="fas fa-cogs"></i>
                  Runtime ITDR Definition
                </h3>
                <p className="definition-text">
                  Runtime Identity Threat Detection & Response monitors and analyzes user behavior <strong style={{color: '#00872b'}}>after successful authentication</strong>, providing real-time visibility into what users actually do inside applications, not just whether they can access them.
                </p>
                
                <div className="comparison-grid">
                  <div className="comparison-item">
                    <h4 className="comparison-title">
                      <i className="fas fa-times traditional-icon"></i>
                      Traditional ITDR/UEBA/DLP
                    </h4>
                    <p className="comparison-text">Focuses on access patterns, login anomalies, and file-level monitoring. Limited visibility into application behavior.</p>
                  </div>
                  
                  <div className="comparison-item">
                    <h4 className="comparison-title">
                      <i className="fas fa-check runtime-icon"></i>
                      Runtime ITDR
                    </h4>
                    <p className="comparison-text">Monitors actual user interactions within applications, understanding semantic intent and behavioral context.</p>
                  </div>
                  
                  <div className="comparison-item">
                    <h4 className="comparison-title">
                      <i className="fas fa-times traditional-icon"></i>
                      SIEM Solutions
                    </h4>
                    <p className="comparison-text">Aggregates logs and events but lacks application-aware context and real-time behavioral analysis.</p>
                  </div>
                  
                  <div className="comparison-item">
                    <h4 className="comparison-title">
                      <i className="fas fa-check runtime-icon"></i>
                      Application-Aware
                    </h4>
                    <p className="comparison-text">Understands application workflows, user intent, and can detect subtle misuse patterns in real-time.</p>
                  </div>
                </div>
              </div>

              <div className="concepts-section">
                <h3 className="concepts-title">Essential Runtime ITDR Concepts</h3>
                <div className="concepts-grid">
                  <div className="concept-card concept-behavioral">
                    <div className="concept-icon">
                      <i className="fas fa-chart-line"></i>
                    </div>
                    <h4 className="concept-title">Post-Auth Behavioral Observability</h4>
                    <p className="concept-description">Continuous monitoring of user actions after successful login, creating behavioral baselines and detecting deviations</p>
                  </div>

                  <div className="concept-card concept-semantic">
                    <div className="concept-icon">
                      <i className="fas fa-brain"></i>
                    </div>
                    <h4 className="concept-title">Semantic User Intent Interpretation</h4>
                    <p className="concept-description">Understanding the meaning and context behind user actions, not just the technical events</p>
                  </div>

                  <div className="concept-card concept-session">
                    <div className="concept-icon">
                      <i className="fas fa-eye"></i>
                    </div>
                    <h4 className="concept-title">Session-Level Visibility</h4>
                    <p className="concept-description">Complete visibility into user sessions across applications, tracking behavior patterns and anomalies</p>
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
            <div className="header">
              <h1 className="main-title">
                <svg className="logo-small" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#00872b"/>
                </svg>
                Above Platform
              </h1>
              <p className="subtitle">Browser-Native Runtime ITDR Architecture</p>
            </div>

            <div className="content-section">
              <div className="platform-overview">
                <div className="architecture-card">
                  <h3 className="architecture-title">
                    <i className="fas fa-layer-group"></i>
                    Core Technology Stack
                  </h3>
                  
                  <div className="tech-stack-grid">
                    <div className="tech-item browser-native">
                      <div className="tech-icon">
                        <i className="fas fa-globe"></i>
                      </div>
                      <h4 className="tech-title">Browser-Native Telemetry</h4>
                      <p className="tech-description">Agentless deployment capturing semantic behavioral data directly from browser interactions</p>
                    </div>

                    <div className="tech-item llm-analysis">
                      <div className="tech-icon">
                        <i className="fas fa-brain"></i>
                      </div>
                      <h4 className="tech-title">LLM Semantic Analysis</h4>
                      <p className="tech-description">Large language models normalize and interpret user actions across any application interface</p>
                    </div>

                    <div className="tech-item real-time">
                      <div className="tech-icon">
                        <i className="fas fa-tachometer-alt"></i>
                      </div>
                      <h4 className="tech-title">Real-Time Risk Scoring</h4>
                      <p className="tech-description">Continuous behavioral analysis with instant threat detection and automated response capabilities</p>
                    </div>
                  </div>
                </div>

                <div className="capabilities-section">
                  <h3 className="capabilities-title">Platform Capabilities</h3>
                  <div className="capabilities-grid">
                    <div className="capability-card">
                      <div className="capability-header">
                        <i className="fas fa-shield-alt"></i>
                        <h4>Application-Agnostic Coverage</h4>
                      </div>
                      <p>Works across any browser-based application — commercial SaaS, internal tools, and long-tail applications</p>
                    </div>

                    <div className="capability-card">
                      <div className="capability-header">
                        <i className="fas fa-search"></i>
                        <h4>Deep Behavioral Visibility</h4>
                      </div>
                      <p>Captures user interactions, data access patterns, and workflow deviations in real-time</p>
                    </div>

                    <div className="capability-card">
                      <div className="capability-header">
                        <i className="fas fa-robot"></i>
                        <h4>Automated Response</h4>
                      </div>
                      <p>Policy enforcement, session termination, and alert generation based on risk thresholds</p>
                    </div>

                    <div className="capability-card">
                      <div className="capability-header">
                        <i className="fas fa-chart-bar"></i>
                        <h4>Compliance Monitoring</h4>
                      </div>
                      <p>Audit trail generation and regulatory compliance reporting for data access and user behavior</p>
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

      case 4:
        return (
          <div className="slide-container">
            <div className="header">
              <h1 className="main-title">Key Differentiators</h1>
              <p className="subtitle">What Sets Above Apart</p>
            </div>

            <div className="content-section">
              <div className="differentiators-grid">
                <div className="differentiator-card coverage">
                  <div className="differentiator-icon">
                    <i className="fas fa-globe-americas"></i>
                  </div>
                  <h3 className="differentiator-title">Universal Application Coverage</h3>
                  <p className="differentiator-description">
                    Application-agnostic monitoring across any browser-based interface, including long-tail and unsupported SaaS applications that traditional tools miss.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-check-circle"></i>
                    <span>Works with 100% of browser-based applications</span>
                  </div>
                </div>

                <div className="differentiator-card detection">
                  <div className="differentiator-icon">
                    <i className="fas fa-crosshairs"></i>
                  </div>
                  <h3 className="differentiator-title">Advanced Threat Detection</h3>
                  <p className="differentiator-description">
                    Real-time detection of sophisticated threats including privilege abuse, insider risk, and advanced phishing tactics that evade conventional security tools.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-check-circle"></i>
                    <span>Catches threats other tools miss</span>
                  </div>
                </div>

                <div className="differentiator-card semantic">
                  <div className="differentiator-icon">
                    <i className="fas fa-brain"></i>
                  </div>
                  <h3 className="differentiator-title">Semantic Understanding</h3>
                  <p className="differentiator-description">
                    LLM-powered semantic analysis reduces false positives by understanding user intent and context, not just raw events and patterns.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-check-circle"></i>
                    <span>Dramatically reduces alert fatigue</span>
                  </div>
                </div>

                <div className="differentiator-card deployment">
                  <div className="differentiator-icon">
                    <i className="fas fa-rocket"></i>
                  </div>
                  <h3 className="differentiator-title">Rapid Deployment</h3>
                  <p className="differentiator-description">
                    Browser-native architecture enables agentless deployment without application modifications, integrations, or lengthy implementation cycles.
                  </p>
                  <div className="differentiator-highlight">
                    <i className="fas fa-check-circle"></i>
                    <span>Deploy in days, not months</span>
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
            <div className="header">
              <h1 className="main-title">Core Use Cases</h1>
              <p className="subtitle">Real-World Detection Scenarios</p>
            </div>

            <div className="content-section">
              <div className="use-cases-grid">
                <div className="use-case-card privileged">
                  <div className="use-case-header">
                    <i className="fas fa-user-shield"></i>
                    <h3>Privileged User Misuse</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">Detect dormant admin reactivation, unauthorized data exports, and role escalation attempts</p>
                    <div className="use-case-example">
                      <strong>Detection Example:</strong> Admin downloads 10x normal data volume after 6 months of inactivity
                    </div>
                  </div>
                </div>

                <div className="use-case-card offboarding">
                  <div className="use-case-header">
                    <i className="fas fa-user-times"></i>
                    <h3>Offboarding Gaps</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">Identify stale sessions, token reuse, and shadow accounts after employee departure</p>
                    <div className="use-case-example">
                      <strong>Detection Example:</strong> Terminated employee's session remains active in Salesforce via cached tokens
                    </div>
                  </div>
                </div>

                <div className="use-case-card exfiltration">
                  <div className="use-case-header">
                    <i className="fas fa-download"></i>
                    <h3>Data Exfiltration</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">Monitor SaaS-based data theft and insider threats through behavioral analysis</p>
                    <div className="use-case-example">
                      <strong>Detection Example:</strong> User systematically accesses customer records outside their normal scope
                    </div>
                  </div>
                </div>

                <div className="use-case-card compliance">
                  <div className="use-case-header">
                    <i className="fas fa-clipboard-check"></i>
                    <h3>Compliance Monitoring</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">Generate audit trails and monitor regulatory compliance for data access patterns</p>
                    <div className="use-case-example">
                      <strong>Detection Example:</strong> GDPR violation when user accesses EU customer data without proper authorization
                    </div>
                  </div>
                </div>

                <div className="use-case-card lateral">
                  <div className="use-case-header">
                    <i className="fas fa-route"></i>
                    <h3>Lateral Movement</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">Track behavioral drift and lateral movement within SaaS ecosystems</p>
                    <div className="use-case-example">
                      <strong>Detection Example:</strong> Compromised account explores applications and data outside normal workflow
                    </div>
                  </div>
                </div>

                <div className="use-case-card phishing">
                  <div className="use-case-header">
                    <i className="fas fa-fish"></i>
                    <h3>Advanced Phishing</h3>
                  </div>
                  <div className="use-case-content">
                    <p className="use-case-description">Detect OAuth consent abuse and session hijacking beyond traditional email filters</p>
                    <div className="use-case-example">
                      <strong>Detection Example:</strong> User grants OAuth permissions to malicious app mimicking legitimate service
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

      case 6:
        return (
          <div className="slide-container">
            <div className="header">
              <h1 className="main-title">Security Stack Integration</h1>
              <p className="subtitle">Complementary to Existing Security Tools</p>
            </div>

            <div className="content-section">
              <div className="integration-overview">
                <div className="integration-card">
                  <h3 className="integration-title">
                    <i className="fas fa-puzzle-piece"></i>
                    Fills the Critical Post-Authentication Blind Spot
                  </h3>
                  <p className="integration-description">
                    Above complements existing security infrastructure by providing the missing layer of post-authentication behavioral visibility that no other tool covers.
                  </p>
                </div>

                <div className="integrations-grid">
                  <div className="tool-integration iam">
                    <div className="tool-header">
                      <i className="fas fa-key"></i>
                      <h4>IAM & PAM</h4>
                    </div>
                    <div className="tool-content">
                      <p className="tool-description">Extends identity management with runtime behavior monitoring</p>
                      <div className="integration-benefit">
                        <i className="fas fa-plus"></i>
                        <span>Adds post-login visibility to access controls</span>
                      </div>
                    </div>
                  </div>

                  <div className="tool-integration siem">
                    <div className="tool-header">
                      <i className="fas fa-chart-line"></i>
                      <h4>SIEM & SOAR</h4>
                    </div>
                    <div className="tool-content">
                      <p className="tool-description">Provides high-fidelity, actionable insights for SOC analysts</p>
                      <div className="integration-benefit">
                        <i className="fas fa-plus"></i>
                        <span>Reduces manual investigations and false positives</span>
                      </div>
                    </div>
                  </div>

                  <div className="tool-integration dlp">
                    <div className="tool-header">
                      <i className="fas fa-shield-alt"></i>
                      <h4>DLP & CASB</h4>
                    </div>
                    <div className="tool-content">
                      <p className="tool-description">Enhances data protection with behavioral context and intent analysis</p>
                      <div className="integration-benefit">
                        <i className="fas fa-plus"></i>
                        <span>Detects data misuse beyond policy violations</span>
                      </div>
                    </div>
                  </div>

                  <div className="tool-integration ueba">
                    <div className="tool-header">
                      <i className="fas fa-user-check"></i>
                      <h4>UEBA & XDR</h4>
                    </div>
                    <div className="tool-content">
                      <p className="tool-description">Adds application-aware behavioral analysis to user monitoring</p>
                      <div className="integration-benefit">
                        <i className="fas fa-plus"></i>
                        <span>Provides semantic understanding of user actions</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="deployment-info">
                  <h3 className="deployment-title">Deployment & Response</h3>
                  <div className="deployment-grid">
                    <div className="deployment-item">
                      <i className="fas fa-clock"></i>
                      <h4>Real-Time Response</h4>
                      <p>Automated policy enforcement and session termination based on risk thresholds</p>
                    </div>
                    <div className="deployment-item">
                      <i className="fas fa-plug"></i>
                      <h4>API Integration</h4>
                      <p>Seamless integration with existing security orchestration and response platforms</p>
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

      case 7:
        return (
          <div className="slide-container">
            <div className="header">
              <h1 className="main-title">Customer Success</h1>
              <p className="subtitle">Deployment Timeline & Operational Benefits</p>
            </div>

            <div className="content-section">
              <div className="success-overview">
                <div className="timeline-section">
                  <h3 className="timeline-title">
                    <i className="fas fa-calendar-alt"></i>
                    Typical Deployment Timeline
                  </h3>
                  <div className="timeline-grid">
                    <div className="timeline-item">
                      <div className="timeline-marker week1"></div>
                      <h4>Week 1-2</h4>
                      <p>Initial deployment and configuration</p>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker week3"></div>
                      <h4>Week 3-4</h4>
                      <p>Baseline establishment and tuning</p>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-marker week5"></div>
                      <h4>Week 5-6</h4>
                      <p>Full production monitoring and alerting</p>
                    </div>
                  </div>
                </div>

                <div className="benefits-section">
                  <h3 className="benefits-title">Operational Benefits</h3>
                  <div className="benefits-grid">
                    <div className="benefit-card coverage">
                      <div className="benefit-icon">
                        <i className="fas fa-eye"></i>
                      </div>
                      <h4 className="benefit-title">Enhanced Visibility</h4>
                      <p className="benefit-description">Complete visibility into user behavior across all browser-based applications</p>
                    </div>

                    <div className="benefit-card detection">
                      <div className="benefit-icon">
                        <i className="fas fa-search"></i>
                      </div>
                      <h4 className="benefit-title">Improved Detection</h4>
                      <p className="benefit-description">Identify threats and policy violations that traditional tools miss</p>
                    </div>

                    <div className="benefit-card response">
                      <div className="benefit-icon">
                        <i className="fas fa-tachometer-alt"></i>
                      </div>
                      <h4 className="benefit-title">Faster Response</h4>
                      <p className="benefit-description">Real-time alerting and automated response capabilities</p>
                    </div>

                    <div className="benefit-card compliance">
                      <div className="benefit-icon">
                        <i className="fas fa-clipboard-check"></i>
                      </div>
                      <h4 className="benefit-title">Compliance Assurance</h4>
                      <p className="benefit-description">Comprehensive audit trails and regulatory compliance reporting</p>
                    </div>
                  </div>
                </div>

                <div className="coverage-metrics">
                  <h3 className="metrics-title">Coverage Metrics</h3>
                  <div className="metrics-grid">
                    <div className="metric-item">
                      <div className="metric-value">100%</div>
                      <div className="metric-label">SaaS Surface Monitored</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">Real-Time</div>
                      <div className="metric-label">Threat Detection</div>
                    </div>
                    <div className="metric-item">
                      <div className="metric-value">Zero</div>
                      <div className="metric-label">Agent Deployment</div>
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
      <div className="navigation">
        <button 
          className="menu-button"
          onClick={() => setShowMenu(!showMenu)}
        >
          Menu
        </button>
        
        <div className="slide-info">
          <svg className="nav-logo" viewBox="0 0 2011 1566" xmlns="http://www.w3.org/2000/svg">
            <path d="M2011 1566L1201 173L506 1391L301 1390L1105 0L900 2L0 1563L605 1561L1205 527L1710 1392L1503 1389L1204 869L1105 1045L1405 1562L2011 1566Z" fill="#24292f"/>
          </svg>
          <span>Above Runtime ITDR</span>
        </div>
        
        <div className="slide-counter">
          {currentSlide + 1} / {slides.length}
        </div>
        
        <div className="nav-controls">
          <button onClick={prevSlide} disabled={currentSlide === 0}>←</button>
          <button onClick={nextSlide} disabled={currentSlide === slides.length - 1}>→</button>
        </div>
      </div>

      {showMenu && (
        <div className="menu-overlay" onClick={() => setShowMenu(false)}>
          <div className="menu-content" onClick={(e) => e.stopPropagation()}>
            <h3>Navigate to Slide</h3>
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

      <div className="slide-content">
        {renderSlide()}
      </div>
    </div>
  );
};

export default App;

