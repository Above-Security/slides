import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
import '../styles/PhishingDetection.css';

/**
 * PhishingDetection Use Case Component - Completely Independent
 * 
 * This component is completely self-contained with its own:
 * - Data structure (embedded)
 * - Styling (PhishingDetection.css)
 * - Analytics tracking
 * - Error handling
 * - Navigation logic
 * 
 * Features:
 * - 4 detailed phishing attack scenarios
 * - 99.7% detection rate metrics
 * - Real-world attack vectors and Above's detection methods
 * - Comprehensive technique and indicator mapping
 * - Specialized phishing detection content
 */

// Comprehensive Modern Phishing Prevention Data - Enterprise Grade
const COMPREHENSIVE_PHISHING_DATA = {
    id: 'comprehensive-phishing-prevention',
    title: 'Comprehensive Phishing Prevention',
    subtitle: 'Beyond Email, Beyond LOTS — Runtime Protection Against Modern Threats',
    description: 'Advanced phishing operates inside trusted environments using OAuth flows, productivity apps, and legitimate workflows. Above\'s runtime ITDR prevents these threats during live user interaction where no log or rule-based tool can intervene.',
    icon: 'fas fa-shield-virus',
    color: 'var(--brand-primary)',
    
    executiveSummary: {
        title: 'Executive Summary',
        description: 'Modern phishing is no longer about spoofed domains and bad grammar. Today\'s attackers operate inside trusted environments—leveraging OAuth flows, productivity apps, browser extensions, and legitimate-looking workflows to bypass traditional security controls.',
        keyPoints: [
            'Living Off Trusted Services (LOTS) attacks',
            'Nested phishing flows in legitimate apps',
            'App-embedded deception techniques',
            'Adversary-in-the-Middle (AiTM) bypassing MFA',
            'Non-email vectors (Slack, WhatsApp, Dropbox)'
        ]
    },

    realWorldIncidents: [
        {
            id: 'cyberhaven-2024',
            title: 'Cyberhaven Incident (2024)',
            icon: 'fab fa-chrome',
            description: 'Compromised OAuth token via phishing led to malicious Chrome extension update distributed to 400K+ users.',
            impact: 'Credential theft, session hijacking, ad account compromise',
            attackVector: 'OAuth token compromise → Chrome extension → mass distribution',
            abovePrevention: 'Runtime OAuth scope analysis would detect permission escalation and block malicious consent',
            severity: 'critical',
            affected: '400,000+ users',
            category: 'Browser Extension Supply Chain'
        },
        {
            id: 'docusign-oauth',
            title: 'DocuSign-Embedded OAuth Phishing',
            icon: 'fas fa-file-signature',
            description: 'Real DocuSign email with document linking to third-party OAuth screen impersonating Box or Google Drive.',
            impact: 'High-privilege scope grants to malicious apps',
            attackVector: 'Legitimate email → document link → deceptive OAuth consent',
            abovePrevention: 'Semantic analysis detects brand impersonation and scope/app name mismatches',
            severity: 'high',
            affected: 'Enterprise users',
            category: 'Document Workflow Hijacking'
        },
        {
            id: 'slack-payload',
            title: 'Slack/Teams IM-Driven Payloads',
            icon: 'fab fa-slack',
            description: 'Phishing payloads distributed via trusted Slack or Teams messages linking to deceptive OAuth consent screens.',
            impact: 'Workspace compromise and data exfiltration',
            attackVector: 'Internal messaging → trusted link → malicious OAuth flow',
            abovePrevention: 'Real-time consent screen analysis prevents deceptive permission grants',
            severity: 'high',
            affected: 'Internal teams',
            category: 'Internal Communication Compromise'
        },
        {
            id: 'aitm-session',
            title: 'Adversary-in-the-Middle Session Hijacking',
            icon: 'fas fa-user-secret',
            description: 'Attacker intercepts session tokens via fake MFA or proxy-based attacks, bypassing traditional MFA protections.',
            impact: 'Full session access without credential theft',
            attackVector: 'Proxy interception → session token theft → MFA bypass',
            abovePrevention: 'Session flow validation and UI context verification detects AiTM attempts',
            severity: 'critical',
            affected: 'MFA-protected accounts',
            category: 'Session Token Theft'
        }
    ],

    traditionalToolGaps: [
        {
            tool: 'Email Security',
            limitation: 'Blocks known bad email links, blind to IM/Slack/Drive-based phishing',
            coverage: '20%'
        },
        {
            tool: 'IAM / MFA',
            limitation: 'OAuth grants bypass login controls and AiTM hijacks bypass MFA',
            coverage: '30%'
        },
        {
            tool: 'CASB / DLP',
            limitation: 'Operate post-session or on APIs, blind to DOM & UX deception',
            coverage: '40%'
        },
        {
            tool: 'EDR',
            limitation: 'No insight into browser extension behaviors or SaaS flows',
            coverage: '25%'
        },
        {
            tool: 'SIEM',
            limitation: 'Detects events only after logs are generated, delayed response',
            coverage: '35%'
        },
        {
            tool: 'SSPM',
            limitation: 'Sees posture, not behavior. Can\'t see nested intent deception',
            coverage: '30%'
        }
    ],

    aboveDifferentiators: [
        {
            capability: 'Live UI Parsing',
            description: 'Parses and interprets live user interfaces (DOM, URL, branding, OAuth scopes)',
            icon: 'fas fa-search-plus'
        },
        {
            capability: 'Pre-Consent Detection',
            description: 'Flags deceptive in-session events before consent is given',
            icon: 'fas fa-hand-paper'
        },
        {
            capability: 'Semantic Analysis',
            description: 'Detects semantic mismatches (app name vs permissions requested)',
            icon: 'fas fa-brain'
        },
        {
            capability: 'AiTM Prevention',
            description: 'Intercepts AiTM attempts by validating session flow consistency',
            icon: 'fas fa-shield-check'
        },
        {
            capability: 'Real-time Blocking',
            description: 'Blocks malicious actions in real time with user education',
            icon: 'fas fa-stop-circle'
        },
        {
            capability: 'Zero Backend Dependency',
            description: 'Requires no backend logs or API telemetry for operation',
            icon: 'fas fa-lightning-bolt'
        }
    ],

    businessImpact: {
        metrics: [
            {
                metric: 'Time to detect phishing via trusted services',
                before: '3–24 hours (if detected)',
                after: 'Instantaneous (pre-consent)',
                improvement: '99.9%'
            },
            {
                metric: '% of targeted users clicking deceptive consent',
                before: '~30% (industry avg)',
                after: '<1% with real-time blocking',
                improvement: '96.7%'
            },
            {
                metric: 'Time to deploy protections',
                before: 'Weeks (CASB, DLP)',
                after: '<1 day (extension)',
                improvement: '99%'
            },
            {
                metric: 'Security tool consolidation',
                before: '6-8 point solutions',
                after: '3-4 with Above runtime layer',
                improvement: '40%'
            }
        ]
    },

    complianceAlignment: [
        {
            framework: 'NIST Cybersecurity Framework',
            coverage: 'Full session-level behavioral telemetry and real-time response',
            icon: 'fas fa-certificate'
        },
        {
            framework: 'Zero Trust Architecture',
            coverage: 'True Zero Trust enforcement at the user decision point',
            icon: 'fas fa-lock'
        },
        {
            framework: 'GDPR Audit Trails',
            coverage: 'Complete evidence logs of blocked phishing attempts',
            icon: 'fas fa-gavel'
        },
        {
            framework: 'SOC 2 Type II',
            coverage: 'User coaching logs for security awareness training',
            icon: 'fas fa-shield-alt'
        }
    ],

    strategicAlignment: {
        title: 'Strategic Security Stack Enhancement',
        benefits: [
            'Complements email security with browser-session protection',
            'Bridges IAM and CASB gaps in SaaS-native workflows',
            'Enables true Zero Trust enforcement at user decision points',
            'Reduces dependency on log-based SIEM/SSPM correlation'
        ]
    },

    povSuccess: {
        timeline: '2 Weeks to Prove Value',
        timelineDescription: 'Structured proof-of-value with clear milestones and measurable outcomes',
        
        // Executive-focused timeline with detailed business activities
        phases: [
            {
                phase: 'Foundation',
                duration: 'Days 1-3',
                color: '#08872B',
                title: 'Deploy & Baseline',
                description: 'Setup Above extension and establish comprehensive security baseline with existing tools.',
                keyMilestones: [
                    'Deploy Above extension across pilot user group (<1 day)',
                    'Establish baseline metrics for phishing susceptibility',
                    'Configure real-time monitoring and alerting',
                    'Begin live detection and behavioral analysis'
                ],
                deliverable: 'Security Assessment',
                stakeholders: 'IT, Security Team'
            },
            {
                phase: 'Validation',
                duration: 'Days 4-10',
                color: '#1F7A3A',
                title: 'Live Testing & Analysis',
                description: 'Monitor real threats, test capabilities, and validate Above effectiveness vs existing tools.',
                keyMilestones: [
                    'Test user coaching and in-context guidance',
                    'Compare detection capabilities vs existing tools',
                    'Mid-week stakeholder review and tuning',
                    'Conduct advanced threat simulations and testing'
                ],
                deliverable: 'Capability Report',
                stakeholders: 'Security Operations'
            },
            {
                phase: 'Business Case',
                duration: 'Days 11-14',
                color: '#0D5421',
                title: 'ROI Analysis & Decision',
                description: 'Validate integrations, assess scalability, and compile comprehensive business case.',
                keyMilestones: [
                    'Validate SIEM/SSPM integration and workflow improvements',
                    'Assess compliance and audit readiness capabilities',
                    'Compile comprehensive business case and ROI analysis',
                    'Present findings to executive stakeholders and make go/no-go recommendation'
                ],
                deliverable: 'Business Case',
                stakeholders: 'CISO, Executives'
            }
        ],

        // Legacy simple timeline for backward compatibility
        week1: {
            title: 'Week 1: Foundation & Active Monitoring',
            activities: [
                'Deploy Above extension across pilot user group (<1 day)',
                'Establish baseline metrics for phishing susceptibility',
                'Configure real-time monitoring and alerting',
                'Begin live detection and behavioral analysis',
                'Test user coaching and in-context guidance',
                'Compare detection capabilities vs existing tools',
                'Mid-week stakeholder review and tuning'
            ]
        },
        week2: {
            title: 'Week 2: Advanced Testing & Business Case',
            activities: [
                'Conduct advanced threat simulations and testing',
                'Validate SIEM/SSPM integration and workflow improvements',
                'Assess compliance and audit readiness capabilities',
                'Test scalability and enterprise deployment readiness',
                'Compile comprehensive business case and ROI analysis',
                'Present findings to executive stakeholders',
                'Make final go/no-go recommendation'
            ]
        },
        coreMetrics: [
            'Block rate of live phishing consent attempts in real SaaS environments',
            '% of risky user interactions flagged before credential/token exposure',
            'Reduction in dependency on log-based SIEM/SSPM correlation',
            'Successful rollout in <1 day across representative SaaS app set'
        ],
        executiveOutcomes: [
            'Evidence that Above plugs IAM, CASB, and DLP visibility gaps',
            'Alignment with Zero Trust mandates and risk management dashboards',
            'Reduced downstream alert load in SIEM and SecOps tools',
            'Demonstrated compliance coverage (NIST 800-207, ISO 27001, SOC 2)'
        ],
        buyingTriggers: [
            'SOC/Audit team highlights visibility gaps in SaaS sessions',
            'Phishing incident postmortem finds unlogged or misattributed consent',
            'Strategic move to consolidate inline security stack'
        ]
    }
};

const PhishingDetection = () => {
    useEffect(() => {
        try {
            // Initialize Clarity tracking for this specific use case
            initializeClarity();
            clarityEvent('comprehensive_phishing_prevention_view');
            claritySet('page_type', 'comprehensive_phishing_prevention');
            claritySet('use_case', 'comprehensive-phishing-prevention');
            console.log('Comprehensive Phishing Prevention component loaded with analytics');
        } catch (error) {
            console.warn('Analytics initialization failed in Comprehensive Phishing Prevention:', error);
        }
    }, []);

    const handleIncidentClick = (incidentId) => {
        try {
            clarityEvent('phishing_incident_clicked', { incident: incidentId });
            console.log(`Phishing incident clicked: ${incidentId}`);
        } catch (error) {
            console.warn('Analytics tracking failed in Comprehensive Phishing Prevention:', error);
        }
    };

    const handleToolGapClick = (toolName) => {
        try {
            clarityEvent('tool_gap_analyzed', { tool: toolName });
            console.log(`Tool gap analyzed: ${toolName}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    const handleDifferentiatorClick = (capability) => {
        try {
            clarityEvent('above_differentiator_viewed', { capability });
            console.log(`Above differentiator viewed: ${capability}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>{COMPREHENSIVE_PHISHING_DATA.title} - Above Security Use Cases</title>
            <meta name="description" content={COMPREHENSIVE_PHISHING_DATA.description} />
            <meta name="keywords" content="phishing prevention, LOTS attacks, OAuth abuse, AiTM, runtime security, browser protection" />

            <div className="comprehensive-phishing-container" data-testid="comprehensive-phishing">
                <div className="comprehensive-phishing-content">
                    {/* Header */}
                    <header className="comprehensive-phishing-header">
                        <Link to="/use-cases" className="back-link">
                            <i className="fas fa-arrow-left"></i>
                            Back to Use Cases
                        </Link>

                        <div className="comprehensive-hero" style={{ '--accent-color': COMPREHENSIVE_PHISHING_DATA.color }}>
                            <div className="hero-gradient-background"></div>
                            <div className="hero-content">
                                <div className="hero-icon">
                                    <i className={COMPREHENSIVE_PHISHING_DATA.icon}></i>
                                </div>
                                <h1 className="hero-title">{COMPREHENSIVE_PHISHING_DATA.title}</h1>
                                <p className="hero-subtitle">{COMPREHENSIVE_PHISHING_DATA.subtitle}</p>
                                <p className="hero-description">{COMPREHENSIVE_PHISHING_DATA.description}</p>
                            </div>
                        </div>
                    </header>

                    <main>
                        {/* Executive Summary */}
                        <section className="executive-summary" role="region" aria-labelledby="executive-summary-heading">
                            <div className="section-header">
                                <h2 id="executive-summary-heading" className="section-title">
                                    <i className="fas fa-star"></i>
                                    {COMPREHENSIVE_PHISHING_DATA.executiveSummary.title}
                                </h2>
                            </div>
                            <div className="executive-content">
                                <p className="executive-description">{COMPREHENSIVE_PHISHING_DATA.executiveSummary.description}</p>
                                <div className="key-points-grid">
                                    {COMPREHENSIVE_PHISHING_DATA.executiveSummary.keyPoints.map((point, index) => (
                                        <div key={index} className="key-point-card">
                                            <i className="fas fa-check-circle"></i>
                                            <span>{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Real-World Incidents */}
                        <section className="real-world-incidents" role="region" aria-labelledby="incidents-heading">
                            <div className="section-header">
                                <h2 id="incidents-heading" className="section-title">
                                    <i className="fas fa-exclamation-triangle"></i>
                                    Real-World Phishing Incidents
                                </h2>
                                <p className="section-description">Examples of advanced phishing attacks that bypass traditional security controls</p>
                            </div>
                            <div className="incidents-grid">
                                {COMPREHENSIVE_PHISHING_DATA.realWorldIncidents.map((incident) => (
                                    <div
                                        key={incident.id}
                                        className={`incident-card ${incident.severity}`}
                                        onClick={() => handleIncidentClick(incident.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleIncidentClick(incident.id);
                                            }
                                        }}
                                        aria-label={`View details for ${incident.title} incident`}
                                    >
                                        <div className="incident-header">
                                            <div className="incident-icon">
                                                <i className={incident.icon}></i>
                                            </div>
                                            <div className="incident-title-section">
                                                <h3 className="incident-title">{incident.title}</h3>
                                                <div className="incident-meta">
                                                    <span className={`severity-badge ${incident.severity}`}>
                                                        {incident.severity.toUpperCase()}
                                                    </span>
                                                    <span className="affected-count">{incident.affected}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="incident-content">
                                            <p className="incident-description">{incident.description}</p>
                                            
                                            <div className="incident-details">
                                                <div className="detail-section">
                                                    <h4>Attack Vector</h4>
                                                    <p>{incident.attackVector}</p>
                                                </div>

                                                <div className="detail-section">
                                                    <h4>Impact</h4>
                                                    <p className="impact-text">{incident.impact}</p>
                                                </div>

                                                <div className="detail-section above-prevention">
                                                    <h4>Above Prevention</h4>
                                                    <p>{incident.abovePrevention}</p>
                                                </div>
                                            </div>

                                            <div className="incident-category">
                                                <span className="category-tag">{incident.category}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Traditional Tool Gaps */}
                        <section className="tool-gaps" role="region" aria-labelledby="tool-gaps-heading">
                            <div className="section-header">
                                <h2 id="tool-gaps-heading" className="section-title">
                                    <i className="fas fa-exclamation-circle"></i>
                                    Why Traditional Tools Miss Modern Phishing
                                </h2>
                                <p className="section-description">Coverage gaps in existing security solutions against advanced phishing techniques</p>
                            </div>
                            <div className="tool-gaps-grid">
                                {COMPREHENSIVE_PHISHING_DATA.traditionalToolGaps.map((tool, index) => (
                                    <div
                                        key={index}
                                        className="tool-gap-card"
                                        onClick={() => handleToolGapClick(tool.tool)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleToolGapClick(tool.tool);
                                            }
                                        }}
                                    >
                                        <div className="tool-gap-header">
                                            <h3 className="tool-name">{tool.tool}</h3>
                                            <div className="coverage-indicator">
                                                <div className="coverage-bar">
                                                    <div 
                                                        className="coverage-fill" 
                                                        style={{ width: tool.coverage }}
                                                    ></div>
                                                </div>
                                                <span className="coverage-percentage">{tool.coverage}</span>
                                            </div>
                                        </div>
                                        <p className="tool-limitation">{tool.limitation}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Above Differentiators */}
                        <section className="above-differentiators" role="region" aria-labelledby="differentiators-heading">
                            <div className="section-header">
                                <h2 id="differentiators-heading" className="section-title">
                                    <i className="fas fa-rocket"></i>
                                    Why Above Is Different
                                </h2>
                                <p className="section-description">Above operates as a lightweight browser-based runtime agent with unique capabilities</p>
                            </div>
                            <div className="differentiators-grid">
                                {COMPREHENSIVE_PHISHING_DATA.aboveDifferentiators.map((diff, index) => (
                                    <div
                                        key={index}
                                        className="differentiator-card"
                                        onClick={() => handleDifferentiatorClick(diff.capability)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                handleDifferentiatorClick(diff.capability);
                                            }
                                        }}
                                    >
                                        <div className="differentiator-icon">
                                            <i className={diff.icon}></i>
                                        </div>
                                        <h3 className="differentiator-title">{diff.capability}</h3>
                                        <p className="differentiator-description">{diff.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Business Impact Metrics */}
                        <section className="business-impact" role="region" aria-labelledby="business-impact-heading">
                            <div className="section-header">
                                <h2 id="business-impact-heading" className="section-title">
                                    <i className="fas fa-chart-line"></i>
                                    Business Impact
                                </h2>
                                <p className="section-description">Quantified improvements in security posture and operational efficiency</p>
                            </div>
                            <div className="business-metrics-grid">
                                {COMPREHENSIVE_PHISHING_DATA.businessImpact.metrics.map((metric, index) => (
                                    <div key={index} className="business-metric-card">
                                        <h3 className="metric-title">{metric.metric}</h3>
                                        <div className="metric-comparison">
                                            <div className="before-after">
                                                <div className="before">
                                                    <span className="label">Before</span>
                                                    <span className="value">{metric.before}</span>
                                                </div>
                                                <i className="fas fa-arrow-right"></i>
                                                <div className="after">
                                                    <span className="label">After</span>
                                                    <span className="value">{metric.after}</span>
                                                </div>
                                            </div>
                                            <div className="improvement">
                                                <span className="improvement-value">{metric.improvement}</span>
                                                <span className="improvement-label">improvement</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Compliance & Strategic Alignment */}
                        <section className="compliance-strategic" role="region" aria-labelledby="compliance-heading">
                            <div className="section-header">
                                <h2 id="compliance-heading" className="section-title">
                                    <i className="fas fa-certificate"></i>
                                    Compliance & Strategic Alignment
                                </h2>
                            </div>
                            <div className="compliance-strategic-grid">
                                <div className="compliance-section">
                                    <h3>Compliance Frameworks</h3>
                                    <div className="compliance-items">
                                        {COMPREHENSIVE_PHISHING_DATA.complianceAlignment.map((item, index) => (
                                            <div key={index} className="compliance-item">
                                                <div className="compliance-icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="compliance-content">
                                                    <h4>{item.framework}</h4>
                                                    <p>{item.coverage}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="strategic-section">
                                    <h3>{COMPREHENSIVE_PHISHING_DATA.strategicAlignment.title}</h3>
                                    <ul className="strategic-benefits">
                                        {COMPREHENSIVE_PHISHING_DATA.strategicAlignment.benefits.map((benefit, index) => (
                                            <li key={index}>
                                                <i className="fas fa-check"></i>
                                                {benefit}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* POV Success Criteria */}
                        <section className="pov-success" role="region" aria-labelledby="pov-heading">
                            <div className="section-header">
                                <h2 id="pov-heading" className="section-title">
                                    <i className="fas fa-target"></i>
                                    What a Successful POV Looks Like
                                </h2>
                                <div className="pov-timeline-hero">
                                    <h3 className="timeline-title">{COMPREHENSIVE_PHISHING_DATA.povSuccess.timeline}</h3>
                                    <p className="timeline-description">{COMPREHENSIVE_PHISHING_DATA.povSuccess.timelineDescription}</p>
                                </div>
                            </div>
                            
                            {/* Executive Horizontal Timeline */}
                            <div className="pov-timeline">
                                <div className="timeline-phases-container">
                                    {COMPREHENSIVE_PHISHING_DATA.povSuccess.phases.map((phase, index) => (
                                        <div key={index} className="timeline-phase" style={{'--phase-color': phase.color}}>
                                            <div className="phase-number">{index + 1}</div>
                                            <div className="phase-content">
                                                <div className="phase-header">
                                                    <h3 className="phase-title">{phase.title}</h3>
                                                    <span className="phase-duration">{phase.duration}</span>
                                                </div>
                                                <p className="phase-description">{phase.description}</p>
                                                <div className="phase-milestones">
                                                    <h4>Key Milestones</h4>
                                                    <ul>
                                                        {phase.keyMilestones.map((milestone, milestoneIndex) => (
                                                            <li key={milestoneIndex}>{milestone}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className="phase-footer">
                                                    <div className="deliverable">
                                                        <strong>Deliverable:</strong> {phase.deliverable}
                                                    </div>
                                                    <div className="stakeholders">
                                                        <strong>Stakeholders:</strong> {phase.stakeholders}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Metrics Grid */}
                            <div className="pov-grid">
                                <div className="pov-section">
                                    <h3>Core Metrics</h3>
                                    <ul>
                                        {COMPREHENSIVE_PHISHING_DATA.povSuccess.coreMetrics.map((metric, index) => (
                                            <li key={index}>{metric}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pov-section">
                                    <h3>Executive Outcomes</h3>
                                    <ul>
                                        {COMPREHENSIVE_PHISHING_DATA.povSuccess.executiveOutcomes.map((outcome, index) => (
                                            <li key={index}>{outcome}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="pov-section">
                                    <h3>CISO Buying Triggers</h3>
                                    <ul>
                                        {COMPREHENSIVE_PHISHING_DATA.povSuccess.buyingTriggers.map((trigger, index) => (
                                            <li key={index}>{trigger}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Summary Call-to-Action */}
                        <section className="summary-cta" role="region" aria-labelledby="summary-heading">
                            <div className="cta-gradient-background"></div>
                            <div className="cta-content">
                                <h2 id="summary-heading">Advanced Phishing Is No Longer a Domain Problem</h2>
                                <p className="cta-description">
                                    It's an interface deception problem. LOTS, OAuth scams, AiTM takeovers, and embedded phishing attacks exploit trusted environments that traditional tools can't see.
                                </p>
                                <div className="cta-highlight">
                                    <h3>Above is the only runtime ITDR platform capable of flagging and blocking phishing attacks from within trusted apps, before consent or access is granted.</h3>
                                    <p className="cta-tagline">
                                        <strong>Runtime semantic analysis. Pre-consent blocking. Zero infrastructure changes.</strong>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </main>

                    {/* Navigation Footer */}
                    <footer className="comprehensive-phishing-navigation">
                        <Link to="/use-cases" className="nav-link secondary">
                            <i className="fas fa-grid-2"></i>
                            All Use Cases
                        </Link>

                        <Link to="/slide/1" className="nav-link primary">
                            View Full Presentation
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default PhishingDetection;
