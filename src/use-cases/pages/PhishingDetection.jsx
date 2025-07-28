import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import FloatingNavigation from '../../components/FloatingNavigation';
import '../../components/FloatingNavigationIntegration.css';
import '../../styles/layout/navigation-footer.css';
import { initializePostHog, posthogEvent, posthogSet } from '../../utils/posthog';
import {
    SectionHeader,
    ContentGroup,
    HeroSection,
    CardGrid,
    IncidentCard,
    ToolGapCard,
    DifferentiatorCard,
    MetricCard,
    ExecutiveSummary,
    POVSection
} from '../../components/use-cases';
import '../styles/PhishingDetection-clean.css';

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
    description: 'Advanced phishing operates inside trusted environments using OAuth flows, productivity apps, and legitimate workflows. Above\'s Runtime Insider Protection prevents these threats during live user interaction where no log or rule-based tool can intervene.',
    icon: 'fas fa-shield',
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
            icon: 'fas fa-file-alt',
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
            icon: 'fas fa-search'
        },
        {
            capability: 'Pre-Consent Detection',
            description: 'Flags deceptive in-session events before consent is given',
            icon: 'fas fa-hand'
        },
        {
            capability: 'Semantic Analysis',
            description: 'Detects semantic mismatches (app name vs permissions requested)',
            icon: 'fas fa-brain'
        },
        {
            capability: 'AiTM Prevention',
            description: 'Intercepts AiTM attempts by validating session flow consistency',
            icon: 'fas fa-shield'
        },
        {
            capability: 'Real-time Blocking',
            description: 'Blocks malicious actions in real time with user education',
            icon: 'fas fa-stop-circle'
        },
        {
            capability: 'Zero Backend Dependency',
            description: 'Requires no backend logs or API telemetry for operation',
            icon: 'fas fa-bolt'
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
            // Initialize PostHog tracking for this specific use case
            initializePostHog();
            posthogEvent('comprehensive_phishing_prevention_view');
            posthogSet({ page_type: 'comprehensive_phishing_prevention' });
            posthogSet({ use_case: 'comprehensive-phishing-prevention' });
            console.log('Comprehensive Phishing Prevention component loaded with analytics');
        } catch (error) {
            console.warn('Analytics initialization failed in Comprehensive Phishing Prevention:', error);
        }
    }, []);

    const handleIncidentClick = (incidentId) => {
        try {
            posthogEvent('phishing_incident_clicked', { incident: incidentId });
            console.log(`Phishing incident clicked: ${incidentId}`);
        } catch (error) {
            console.warn('Analytics tracking failed in Comprehensive Phishing Prevention:', error);
        }
    };

    const handleToolGapClick = (toolName) => {
        try {
            posthogEvent('tool_gap_analyzed', { tool: toolName });
            console.log(`Tool gap analyzed: ${toolName}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    const handleDifferentiatorClick = (capability) => {
        try {
            posthogEvent('above_differentiator_viewed', { capability });
            console.log(`Above differentiator viewed: ${capability}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>Comprehensive Phishing Prevention - Above Security Use Cases</title>
            <meta name="description" content="Advanced phishing operates inside trusted environments using OAuth flows, productivity apps, and legitimate workflows. Above's Runtime Insider Protection prevents these threats during live user interaction where no log or rule-based tool can intervene." />
            <meta name="keywords" content="phishing prevention, LOTS attacks, OAuth abuse, AiTM, runtime security, browser protection" />

            <div className="comprehensive-phishing-container" data-testid="comprehensive-phishing">
                {/* Floating Navigation */}
                <FloatingNavigation />

                <div className="comprehensive-phishing-content">
                    {/* Header */}
                    <HeroSection
                        title={COMPREHENSIVE_PHISHING_DATA.title}
                        subtitle={COMPREHENSIVE_PHISHING_DATA.subtitle}
                        description={COMPREHENSIVE_PHISHING_DATA.description}
                        icon={COMPREHENSIVE_PHISHING_DATA.icon}
                        accentColor={COMPREHENSIVE_PHISHING_DATA.color}
                        className="comprehensive-phishing-header"
                    />

                    <main>
                        <ContentGroup id="problem-definition">
                            {/* Executive Summary */}
                            <ExecutiveSummary
                                summary={COMPREHENSIVE_PHISHING_DATA.executiveSummary}
                                variant="dark"
                            />

                            {/* Real-World Incidents */}
                            <section className="real-world-incidents" role="region" aria-labelledby="incidents-heading">
                                <SectionHeader
                                    id="incidents-heading"
                                    title="Real-World Phishing Incidents"
                                    icon="fas fa-exclamation-triangle"
                                    description="Examples of advanced phishing attacks that bypass traditional security controls"
                                />
                                <div className="incidents-grid">
                                    {COMPREHENSIVE_PHISHING_DATA.realWorldIncidents.map((incident) => (
                                        <IncidentCard
                                            key={incident.id}
                                            incident={incident}
                                            onClick={handleIncidentClick}
                                        />
                                    ))}
                                </div>
                            </section>
                        </ContentGroup> {/* End Problem Definition */}

                        <ContentGroup id="solution-analysis">
                            {/* Traditional Tool Gaps */}
                            <section className="tool-gaps" role="region" aria-labelledby="tool-gaps-heading">
                                <SectionHeader
                                    id="tool-gaps-heading"
                                    title="Why Traditional Tools Miss Modern Phishing"
                                    icon="fas fa-exclamation-circle"
                                    description="Coverage gaps in existing security solutions against advanced phishing techniques"
                                />
                                <CardGrid className="tool-gaps-grid">
                                    {COMPREHENSIVE_PHISHING_DATA.traditionalToolGaps.map((tool, index) => (
                                        <ToolGapCard
                                            key={index}
                                            tool={tool}
                                            onClick={handleToolGapClick}
                                        />
                                    ))}
                                </CardGrid>
                            </section>

                            {/* Above Differentiators */}
                            <section className="above-differentiators" role="region" aria-labelledby="differentiators-heading">
                                <SectionHeader
                                    id="differentiators-heading"
                                    title="Why Above Is Different"
                                    icon="fas fa-rocket"
                                    description="Above operates as a lightweight browser-based runtime agent with unique capabilities"
                                />
                                <CardGrid className="differentiators-grid">
                                    {COMPREHENSIVE_PHISHING_DATA.aboveDifferentiators.map((diff, index) => (
                                        <DifferentiatorCard
                                            key={index}
                                            differentiator={diff}
                                            onClick={handleDifferentiatorClick}
                                        />
                                    ))}
                                </CardGrid>
                            </section>
                        </ContentGroup> {/* End Solution Analysis */}

                        <ContentGroup id="business-value">
                            {/* Business Impact Metrics */}
                            <section className="business-impact" role="region" aria-labelledby="business-impact-heading">
                                <SectionHeader
                                    id="business-impact-heading"
                                    title="Business Impact"
                                    icon="fas fa-chart-line"
                                    description="Quantified improvements in security posture and operational efficiency"
                                />
                                <div className="business-metrics-grid">
                                    {COMPREHENSIVE_PHISHING_DATA.businessImpact.metrics.map((metric, index) => (
                                        <MetricCard key={index} metric={metric} />
                                    ))}
                                </div>
                            </section>

                            {/* Compliance & Strategic Alignment */}
                            <section className="compliance-strategic" role="region" aria-labelledby="compliance-heading">
                                <SectionHeader
                                    id="compliance-heading"
                                    title="Compliance & Strategic Alignment"
                                    icon="fas fa-certificate"
                                />
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
                        </ContentGroup> {/* End Business Value */}

                        {/* IV. IMPLEMENTATION */}
                        <ContentGroup id="implementation">
                            {/* POV Success Criteria */}
                            <section className="pov-success" role="region" aria-labelledby="pov-heading">
                                <div className="section-header">
                                    <h2 id="pov-heading" className="section-title">
                                        <i className="fas fa-bullseye"></i>
                                        What a Successful POV Looks Like
                                    </h2>
                                    <div className="timeline-hero">
                                        <h3 className="timeline-title">{COMPREHENSIVE_PHISHING_DATA.povSuccess.timeline}</h3>
                                        <p className="timeline-description">{COMPREHENSIVE_PHISHING_DATA.povSuccess.timelineDescription}</p>
                                    </div>
                                </div>

                                {/* Executive Horizontal Timeline */}
                                <div className="timeline">
                                    <div className="timeline-phases-container">
                                        {COMPREHENSIVE_PHISHING_DATA.povSuccess.phases.map((phase, index) => (
                                            <div key={index} className="timeline-phase" style={{
                                                '--phase-color': phase.color,
                                                '--phase-color-rgb': phase.color === '#08872B' ? '8, 135, 43' :
                                                    phase.color === '#1F7A3A' ? '31, 122, 58' : '13, 84, 33'
                                            }}>
                                                <div className="phase-number">{index + 1}</div>
                                                <div className="phase-content">
                                                    <div>
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
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Metrics Grid */}
                                <div className="pov-grid">
                                    <POVSection
                                        title="Core Metrics"
                                        items={COMPREHENSIVE_PHISHING_DATA.povSuccess.coreMetrics}
                                    />
                                    <POVSection
                                        title="Executive Outcomes"
                                        items={COMPREHENSIVE_PHISHING_DATA.povSuccess.executiveOutcomes}
                                    />
                                    <POVSection
                                        title="CISO Buying Triggers"
                                        items={COMPREHENSIVE_PHISHING_DATA.povSuccess.buyingTriggers}
                                    />
                                </div>
                            </section>
                        </ContentGroup> {/* End Implementation */}

                        {/* V. CALL TO ACTION */}
                        <ContentGroup id="call-to-action">
                            {/* Summary Call-to-Action */}
                            <section className="summary-cta" role="region" aria-labelledby="summary-heading">
                                <div className="cta-gradient-background"></div>
                                <div className="cta-content">
                                    <h2 id="summary-heading">Advanced Phishing Is No Longer a Domain Problem</h2>
                                    <p className="cta-description">
                                        It's an interface deception problem. LOTS, OAuth scams, AiTM takeovers, and embedded phishing attacks exploit trusted environments that traditional tools can't see.
                                    </p>
                                    <div className="cta-highlight">
                                        <h3>Above is the only Runtime Insider Protection platform capable of flagging and blocking phishing attacks from within trusted apps, before consent or access is granted.</h3>
                                        <p className="cta-tagline">
                                            <strong>Runtime semantic analysis. Pre-consent blocking. Zero infrastructure changes.</strong>
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </ContentGroup> {/* End Call to Action */}
                    </main>

                    {/* Navigation Footer */}
                    <footer className="navigation-footer multi-link">
                        <Link to="/use-cases" className="nav-link secondary">
                            <i className="fas fa-arrow-left"></i>
                            Back to Use Cases
                        </Link>
                        <Link to="/slides/1" className="nav-link primary">
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
