import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './LogoWatermark';
import FloatingNavigation from './FloatingNavigation';
import SlideshowContainer from './SlideshowContainer';
import EmailGate from './EmailGate';
import './FloatingNavigationIntegration.css';
import './SlideshowContainer.css';
import '../styles/layout/navigation-footer.css';
import { initializePostHog, posthogEvent, posthogSet } from '../utils/posthog';
import {
    SectionHeader,
    ContentGroup,
    HeroSection,
    CardGrid,
    IncidentCard,
    DifferentiatorCard,
    MetricCard,
    ExecutiveSummary,
    POVSection
} from './use-cases';
import './OnePager.css';

/**
 * One-Pager Component - Executive Summary Page
 * 
 * This component presents a concise, executive-level overview of Above Security
 * following one-pager best practices for CEO communication:
 * - Problem → Solution → Proof → Action structure
 * - Clear value proposition and metrics
 * - Scannable format with visual hierarchy
 * - Actionable next steps
 * 
 * Features:
 * - Reuses FICOLanding component structure and styling
 * - Company-agnostic messaging for broad appeal
 * - Slideshow functionality for presentation mode
 * - Accessible navigation and interactions
 * - Executive-focused content and metrics
 */

// One-Pager Data - Executive Summary Structure
const ONE_PAGER_DATA = {
    id: 'one-pager',
    title: 'Above Security One-Pager',
    subtitle: 'Behavioral Intelligence for Insider Protection',
    description: 'The only security platform that understands what users actually do inside applications — not just which apps they access. Prevent insider threats through real-time behavioral analysis and intelligent intervention.',
    icon: 'fas fa-shield-alt',
    color: 'var(--primary-color)',

    executiveSummary: {
        title: 'The Problem: Traditional Security Misses 80% of Insider Threats',
        description: 'Current security tools monitor network traffic and app access, but miss the behavioral context that reveals actual risk. Employees can access approved applications and still cause data breaches, compliance violations, or intellectual property theft. Above solves this with runtime behavioral intelligence.',
        keyPoints: [
            '$17.4M average annual cost of insider threats (Ponemon Institute, 2025)',
            '7,868 insider incidents reported in 2025 (up from 3,269 in 2018)',
            '81 days median time to contain an insider incident (down from 86 days in 2023)',
            '55% negligent, 25% malicious, 20% credential theft breakdown',
            '81% of organizations have or plan to implement insider risk management programs',
            '16.5% average share of IT security budgets now dedicated to IRM (up from 8.2% in 2023)',
            '65% say IRM is the only strategy that helps prevent insider-led breaches early',
            '63% report faster incident response as a result of IRM programs'
        ]
    },

    keyFeatures: [
        {
            id: 'behavioral-intelligence',
            title: 'Runtime Behavioral Intelligence',
            icon: 'fas fa-brain',
            description: 'Understand user intent and context within applications in real-time',
            details: [
                'Real-time analysis of user actions across all web applications',
                'Intent detection using AI-powered behavioral modeling',
                'Behavioral drift identification for early threat detection',
                'Session-level forensics with complete user journey reconstruction',
                'Contextual risk assessment based on actions and environment'
            ],
            example: '"Marketing manager accessing customer database at 2 AM flagged for review"',
            benefit: 'Detect insider threats 10x faster than traditional tools'
        },
        {
            id: 'real-time-intervention',
            title: 'Intelligent Real-Time Intervention',
            icon: 'fas fa-hand-paper',
            description: 'Prevent threats during active sessions through smart nudging and coaching',
            details: [
                'In-browser coaching and guidance during risky actions',
                'Real-time policy enforcement with contextual explanations',
                'User education and behavioral modification capabilities',
                'Session termination and access revocation when needed',
                'Smart recommendations for approved alternatives'
            ],
            example: '"This action appears unusual. Are you working on the Q4 analysis project?"',
            benefit: 'Prevent breaches before they happen, not hours later'
        },
        {
            id: 'comprehensive-discovery',
            title: 'Complete Application Discovery',
            icon: 'fas fa-search',
            description: 'Discover and monitor all SaaS, AI tools, and internal applications',
            details: [
                'Real-time discovery of shadow IT and approved applications',
                'AI tool detection including ChatGPT, Claude, and browser extensions',
                'OAuth risk analysis with semantic permission understanding',
                'Authentication method analysis and risk categorization',
                'Integration with identity providers and access management'
            ],
            example: '"Finance team using unauthorized AI tool for sensitive data analysis detected"',
            benefit: 'Complete visibility into your application ecosystem'
        },
        {
            id: 'compliance-automation',
            title: 'Automated Compliance & Forensics',
            icon: 'fas fa-gavel',
            description: 'Streamline compliance reporting and incident investigation',
            details: [
                'Automated audit trails with behavioral context',
                'Regulatory compliance for SOX, GDPR, HIPAA, PCI-DSS',
                'Complete session reconstruction for incident response',
                'Real-time compliance monitoring and alerting',
                'Investigation acceleration with timeline visualization'
            ],
            example: '"SOX compliance report generated automatically with user behavior evidence"',
            benefit: 'Reduce compliance overhead by 70% with automated reporting'
        }
    ],

    businessMetrics: [
        {
            id: 'threat-detection',
            metric: '10x Faster',
            description: 'Insider threat detection compared to traditional tools',
            icon: 'fas fa-tachometer-alt',
            impact: 'Reduce dwell time from months to days'
        },
        {
            id: 'false-positives',
            metric: '90% Reduction',
            description: 'In false positive alerts through behavioral context',
            icon: 'fas fa-bullseye',
            impact: 'Security teams focus on real threats'
        },
        {
            id: 'compliance-time',
            metric: '70% Less Time',
            description: 'Spent on compliance reporting and audits',
            icon: 'fas fa-clock',
            impact: 'Automated audit trails and evidence collection'
        },
        {
            id: 'deployment-speed',
            metric: '1 Week',
            description: 'From deployment to full protection coverage',
            icon: 'fas fa-rocket',
            impact: 'Immediate value with lightweight browser extension'
        }
    ],

    incidentResponseTimeline: {
        title: 'Incident Response Timeline Transformation',
        subtitle: 'From days of investigation to instant forensic clarity',
        traditional: {
            title: 'Traditional Security Investigation',
            timeline: [
                {
                    step: 1,
                    time: 'Day 1',
                    event: 'Security Incident Detected',
                    description: 'Suspicious activity flagged by monitoring tools',
                    icon: 'fas fa-exclamation-triangle',
                    status: 'problem'
                },
                {
                    step: 2,
                    time: 'Days 2-5',
                    event: 'Investigation Begins',
                    description: 'Security team attempts to reconstruct user behavior',
                    icon: 'fas fa-search',
                    status: 'problem'
                },
                {
                    step: 3,
                    time: 'Days 6-14',
                    event: 'Limited Visibility',
                    description: 'Struggling with incomplete logs and missing context',
                    icon: 'fas fa-eye-slash',
                    status: 'problem'
                },
                {
                    step: 4,
                    time: 'Week 3+',
                    event: 'Delayed Response',
                    description: 'Incomplete forensic evidence for compliance reporting',
                    icon: 'fas fa-clock',
                    status: 'problem'
                }
            ]
        },
        withAbove: {
            title: 'Above Security Investigation',
            timeline: [
                {
                    step: 1,
                    time: 'Minute 1',
                    event: 'Security Incident Detected',
                    description: 'Suspicious activity flagged with full behavioral context',
                    icon: 'fas fa-shield-alt',
                    status: 'solution'
                },
                {
                    step: 2,
                    time: 'Minute 2',
                    event: 'Complete Timeline Available',
                    description: 'Every click, navigation, and copy-paste action reconstructed',
                    icon: 'fas fa-timeline',
                    status: 'solution'
                },
                {
                    step: 3,
                    time: 'Minute 5',
                    event: 'Semantic Analysis Complete',
                    description: 'LLM understands user intent and behavioral patterns',
                    icon: 'fas fa-brain',
                    status: 'solution'
                },
                {
                    step: 4,
                    time: 'Minute 10',
                    event: 'Investigation Complete',
                    description: 'Comprehensive forensic evidence ready for compliance',
                    icon: 'fas fa-check-circle',
                    status: 'solution'
                }
            ]
        }
    },

    realWorldIncidents: [
        {
            id: 'oauth-supply-chain',
            title: 'OAuth Supply-Chain Attack on Chrome Extension',
            icon: 'fas fa-link',
            description: 'Cyberhaven Chrome Extension Breach (2024) - phishing campaign tricked developer into granting OAuth access to fake Google app',
            impact: 'Developer account takeover and malicious extension update prevented',
            attackVector: 'OAuth Consent → Developer Account Takeover → Malicious Extension Update',
            traditionalResponse: 'OAuth appeared legitimate to traditional security tools, developer had valid permissions',
            abovePrevention: 'Real-time session visibility detected unusual OAuth consent flows with excessive permissions. Behavioral anomaly flagged the OAuth scope grant to a new app outside work hours',
            severity: 'critical',
            affected: 'Chrome Web Store publisher account and enterprise user sessions',
            category: 'SaaS Access Abuse / OAuth Misuse'
        },
        {
            id: 'internal-espionage',
            title: 'Espionage by Internal Payroll Employee',
            icon: 'fas fa-user-secret',
            description: 'Rippling vs. Deel Corporate Spy Case (2023–2024) - payroll employee secretly on competitor payroll accessed sensitive systems',
            impact: 'Months of competitive intelligence theft and lateral browsing prevented',
            attackVector: 'Legitimate Payroll Access → Lateral Browsing → Competitive Intel Theft',
            traditionalResponse: 'Employee had legitimate access to systems, cross-system browsing appeared normal',
            abovePrevention: 'Role-behavior mismatch: Payroll employee searching and viewing sales opportunities. Detected cross-system access drift and search pattern anomalies in real time',
            severity: 'critical',
            affected: 'Salesforce, Google Drive, Slack - sales data and strategy',
            category: 'Cross-System Snooping / Internal Espionage'
        },
        {
            id: 'ip-theft-departure',
            title: 'Theft of IP Before Departure',
            icon: 'fas fa-briefcase',
            description: 'Waymo vs. Uber Case (Anthony Levandowski, 2017) - engineer downloaded 14,000 confidential files before joining competitor',
            impact: 'Bulk download of LIDAR designs, schematics, and roadmaps prevented',
            attackVector: 'Valid Access → Bulk Download → Exit to Competitor',
            traditionalResponse: 'Exfiltration only discovered after departure through forensic review',
            abovePrevention: 'Unusual pre-departure download volumes and off-hour access. Behavioral monitoring flags large-scale data scraping and transfer to personal cloud or USB',
            severity: 'critical',
            affected: 'Confidential LIDAR technology and self-driving car roadmaps',
            category: 'IP Theft / Exit Risk'
        },
        {
            id: 'shadow-ai-workaround',
            title: 'Shadow AI Chatbot Workaround',
            icon: 'fas fa-robot',
            description: 'Unauthorized use of AI assistant - employee circumvented blocked ChatGPT by using unapproved internal chatbot',
            impact: 'Sensitive internal content exposure to unmanaged AI systems prevented',
            attackVector: 'Blocked ChatGPT → Copy-Paste → Shadow AI',
            traditionalResponse: 'Traditional tools detected blocked AI but missed workaround through internal systems',
            abovePrevention: 'Detected risky copy-paste behavior into unknown browser apps. Triggered alert based on sensitive data pattern match and lack of app whitelisting',
            severity: 'medium',
            affected: 'Forecasts, financials, and product plans',
            category: 'Shadow AI / Data Exposure'
        }
    ],

    competitiveAdvantages: [
        {
            id: 'behavioral-context',
            capability: 'Behavioral Context',
            icon: 'fas fa-brain',
            description: 'Only solution that understands user intent and behavioral patterns',
            details: [
                'AI-powered intent analysis of user actions',
                'Behavioral baseline establishment and drift detection',
                'Contextual risk scoring based on user behavior',
                'Real-time behavioral coaching and intervention',
                'Session-level forensics with complete behavioral timeline'
            ],
            businessValue: 'Detect sophisticated threats other tools miss',
            technicalAdvantage: 'Browser-native visibility with LLM-powered behavioral analysis'
        },
        {
            id: 'immediate-response',
            capability: 'Immediate Response',
            icon: 'fas fa-bolt',
            description: 'Real-time intervention prevents threats during active sessions',
            details: [
                'In-session threat prevention and user coaching',
                'Real-time policy enforcement with contextual guidance',
                'Immediate session termination and access revocation',
                'Proactive user education and behavioral modification',
                'Smart nudging toward approved alternatives'
            ],
            businessValue: 'Prevent breaches before they happen',
            technicalAdvantage: 'Browser extension with millisecond response times'
        },
        {
            id: 'comprehensive-coverage',
            capability: 'Universal Application Coverage',
            icon: 'fas fa-globe',
            description: 'Works across all web applications without integration overhead',
            details: [
                'Agentless deployment through browser extension',
                'Works with any web application or SaaS tool',
                'No API integrations or application modifications required',
                'Immediate coverage of shadow IT and new applications',
                'Cross-application behavioral correlation and analysis'
            ],
            businessValue: 'Complete visibility without deployment complexity',
            technicalAdvantage: 'Universal browser-based monitoring and analysis'
        },
        {
            id: 'enterprise-ready',
            capability: 'Enterprise-Ready Platform',
            icon: 'fas fa-building',
            description: 'Built for enterprise scale with regulatory compliance focus',
            details: [
                'Multi-tenant architecture with role-based access controls',
                'Automated compliance reporting for major regulations',
                'Enterprise SSO integration and identity provider support',
                'Advanced analytics and custom behavioral model training',
                'Professional services and dedicated customer success'
            ],
            businessValue: 'Enterprise-grade security with compliance automation',
            technicalAdvantage: 'Scalable architecture with regulatory-aware behavioral models'
        }
    ],

    nextSteps: {
        title: 'Start Your Behavioral Intelligence Journey',
        subtitle: 'Three ways to experience Above Security today',
        options: [
            {
                id: 'pilot-program',
                title: '30-Day Pilot Program',
                description: 'Experience behavioral intelligence with a focused pilot in your most critical applications',
                icon: 'fas fa-play',
                primary: true,
                benefits: [
                    'Rapid deployment in under one week',
                    'Immediate visibility into user behavior patterns',
                    'Custom behavioral models for your environment',
                    'Dedicated customer success manager'
                ]
            },
            {
                id: 'demo-session',
                title: 'Executive Demonstration',
                description: 'See Above in action with a personalized demo using your use cases and requirements',
                icon: 'fas fa-desktop',
                primary: false,
                benefits: [
                    'Customized demo with your specific scenarios',
                    'Technical deep-dive with our security experts',
                    'ROI analysis and business case development',
                    'Integration planning and deployment roadmap'
                ]
            },
            {
                id: 'consultation',
                title: 'Strategic Security Consultation',
                description: 'Work with our team to develop a comprehensive insider protection strategy',
                icon: 'fas fa-handshake',
                primary: false,
                benefits: [
                    'Current security posture assessment',
                    'Insider threat landscape analysis',
                    'Behavioral intelligence implementation roadmap',
                    'Executive briefing and board presentation materials'
                ]
            }
        ]
    },

    industryBacking: {
        title: 'Backed by Industry Leaders',
        subtitle: 'Our advisory board includes CEOs, CISOs, and security leaders from the world\'s most innovative companies',
        advisors: [
            {
                id: 'ofer-ben-noon',
                name: 'Ofer Ben Noon',
                title: 'CEO',
                company: 'Talon (Prisma Access Browser)',
                icon: 'fas fa-user-tie'
            },
            {
                id: 'ofer-smadari',
                name: 'Ofer Smadari',
                title: 'CEO',
                company: 'Torq',
                icon: 'fas fa-user-tie'
            },
            {
                id: 'etay-bogner',
                name: 'Etay Bogner',
                title: 'GM',
                company: 'Proofpoint',
                icon: 'fas fa-user-shield'
            },
            {
                id: 'karl-mattson',
                name: 'Karl Mattson',
                title: 'CISO',
                company: 'Endor Labs',
                icon: 'fas fa-user-shield'
            },
            {
                id: 'matan-fattal',
                name: 'Matan Fattal',
                title: 'CEO',
                company: 'Ivix / Silverfort',
                icon: 'fas fa-user-tie'
            }
        ],
        investors: {
            primary: ['Merlin Ventures', 'Norwest Venture Partners'],
            additional: 'Plus directors and executives from Wiz, Island, and other leading security companies'
        }
    }
};

const OnePager = () => {
    const [activeUseCase, setActiveUseCase] = useState('oauth-supply-chain');
    const [isSlideshow, setIsSlideshow] = useState(false);

    useEffect(() => {
        initializePostHog();
        posthogEvent('one_pager_view');
        posthogSet({ page_type: 'one_pager' });
    }, []);

    const handleToggleSlideshow = () => {
        setIsSlideshow(!isSlideshow);
        posthogEvent('one_pager_slideshow_toggle', { mode: !isSlideshow ? 'slideshow' : 'normal' });
    };

    const handleIncidentClick = (incidentId) => {
        posthogEvent('one_pager_incident_view', { incident: incidentId });
    };

    const handleAdvantageClick = (capability) => {
        posthogEvent('one_pager_advantage_view', { capability });
    };

    const handleEmailSubmitted = (email) => {
        posthogEvent('one_pager_email_submitted', {
            page: 'one_pager',
            email_domain: email.split('@')[1]
        });
        posthogSet({ one_pager_access_granted: true });
    };

    // Define slide configuration for slideshow mode
    const slideConfig = [
        { title: 'Above Security One-Pager', index: 0 },
        { title: 'The Problem: Traditional Security Misses 80% of Insider Threats', index: 1 },
        { title: 'Solution: Behavioral Intelligence Platform', index: 2 },
        { title: 'Business Impact & Metrics', index: 3 },
        { title: 'Incident Response Timeline Transformation', index: 4 },
        { title: 'Proof: Real-World Success Stories', index: 5 },
        { title: 'Competitive Advantages', index: 6 },
        { title: 'Backed by Industry Leaders', index: 7 },
        { title: 'Start Your Behavioral Intelligence Journey', index: 8 }
    ];

    return (
        <EmailGate onEmailSubmitted={handleEmailSubmitted}>
            {/* Document Head Metadata */}
            <title>{ONE_PAGER_DATA.title} - Executive Summary</title>
            <meta name="description" content={ONE_PAGER_DATA.description} />
            <meta name="keywords" content="insider threat protection, behavioral intelligence, enterprise security, SaaS security" />

            <div className={`one-pager-container ${isSlideshow ? 'slideshow-mode' : ''}`} data-testid="one-pager">
                {/* Slideshow Toggle Button */}
                {!isSlideshow && (
                    <button
                        className="slideshow-toggle-btn"
                        onClick={handleToggleSlideshow}
                        aria-label="Show as slideshow"
                        title="Transform page into slideshow"
                    >
                        <i className="fas fa-play"></i>
                        Show as Slideshow
                    </button>
                )}

                <SlideshowContainer
                    isSlideshow={isSlideshow}
                    onToggleSlideshow={handleToggleSlideshow}
                    slideConfig={slideConfig}
                    className="one-pager-content"
                >
                    {/* Slide 1: Header Section */}
                    <div className="slide-section" data-slide="header">
                        <header className="one-pager-header-section">
                            <Link
                                to="/"
                                className="logo-container"
                                onClick={() => posthogEvent('logo_clicked_from_one_pager')}
                                aria-label="Navigate to Above Security homepage"
                            >
                                <Logo className="one-pager-logo" />
                            </Link>
                        </header>

                        <HeroSection
                            title={ONE_PAGER_DATA.title}
                            subtitle={ONE_PAGER_DATA.subtitle}
                            description={ONE_PAGER_DATA.description}
                            icon={ONE_PAGER_DATA.icon}
                            accentColor={ONE_PAGER_DATA.color}
                            className="one-pager-header"
                        />
                    </div>

                    {/* Slide 2: Problem Statement */}
                    <div className="slide-section" data-slide="problem">
                        <ExecutiveSummary
                            summary={ONE_PAGER_DATA.executiveSummary}
                            variant="light"
                        />
                    </div>

                    {/* Slide 3: Solution - Key Features */}
                    <div className="slide-section" data-slide="solution">
                        <section className="solution-features" role="region" aria-labelledby="solution-heading">
                            <SectionHeader
                                id="solution-heading"
                                title="Solution: Behavioral Intelligence Platform"
                                icon="fas fa-lightbulb"
                                description="Four core capabilities that revolutionize insider threat protection"
                            />

                            <div className="features-showcase">
                                {ONE_PAGER_DATA.keyFeatures.map((feature, index) => (
                                    <div key={feature.id} className="feature-showcase-card" data-index={index}>
                                        <div className="feature-showcase-header">
                                            <div className="feature-showcase-icon">
                                                <i className={feature.icon}></i>
                                            </div>
                                            <div className="feature-showcase-title">
                                                <h3>{feature.title}</h3>
                                                <p className="feature-showcase-description">{feature.description}</p>
                                            </div>
                                        </div>

                                        <div className="feature-showcase-content">
                                            <div className="feature-showcase-details">
                                                {feature.details.map((detail, idx) => (
                                                    <div key={idx} className="feature-detail-item">
                                                        <span className="detail-bullet"></span>
                                                        <span className="detail-text">{detail}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {feature.example && (
                                                <div className="feature-example">
                                                    <div className="example-label">Example:</div>
                                                    <div className="example-text">{feature.example}</div>
                                                </div>
                                            )}

                                            <div className="feature-showcase-benefit">
                                                <div className="benefit-icon">
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <div className="benefit-text">{feature.benefit}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Slide 4: Business Metrics */}
                    <div className="slide-section" data-slide="metrics">
                        <section className="business-metrics" role="region" aria-labelledby="metrics-heading">
                            <SectionHeader
                                id="metrics-heading"
                                title="Business Impact & Metrics"
                                icon="fas fa-chart-line"
                                description="Quantifiable business value from behavioral intelligence"
                            />

                            <CardGrid className="metrics-grid">
                                {ONE_PAGER_DATA.businessMetrics.map((metric) => (
                                    <div key={metric.id} className="business-metric-card">
                                        <div className="metric-icon">
                                            <i className={metric.icon}></i>
                                        </div>
                                        <h3 className="metric-title">{metric.metric}</h3>
                                        <p className="metric-description">{metric.description}</p>
                                        <div className="metric-impact">
                                            <i className="fas fa-check-circle"></i>
                                            <span>{metric.impact}</span>
                                        </div>
                                    </div>
                                ))}
                            </CardGrid>
                        </section>
                    </div>

                    {/* Slide 4.5: Incident Response Timeline */}
                    <div className="slide-section" data-slide="timeline">
                        <section className="incident-response-timeline" role="region" aria-labelledby="timeline-heading">
                            <SectionHeader
                                id="timeline-heading"
                                title={ONE_PAGER_DATA.incidentResponseTimeline.title}
                                icon="fas fa-stopwatch"
                                description={ONE_PAGER_DATA.incidentResponseTimeline.subtitle}
                            />

                            <div className="timeline-comparison">
                                {/* Traditional Timeline */}
                                <div className="timeline-track traditional">
                                    <div className="timeline-header">
                                        <h3 className="timeline-title">{ONE_PAGER_DATA.incidentResponseTimeline.traditional.title}</h3>
                                        <div className="timeline-duration">14+ Days</div>
                                    </div>
                                    <div className="timeline-container">
                                        <div className="timeline-line traditional-line"></div>
                                        {ONE_PAGER_DATA.incidentResponseTimeline.traditional.timeline.map((step) => (
                                            <div key={step.step} className="timeline-step traditional-step">
                                                <div className="timeline-marker">
                                                    <i className={step.icon}></i>
                                                </div>
                                                <div className="timeline-content">
                                                    <div className="timeline-time">{step.time}</div>
                                                    <div className="timeline-event">{step.event}</div>
                                                    <div className="timeline-description">{step.description}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* VS Divider */}
                                <div className="timeline-divider">
                                    <div className="vs-badge">VS</div>
                                </div>

                                {/* Above Timeline */}
                                <div className="timeline-track above-solution">
                                    <div className="timeline-header">
                                        <h3 className="timeline-title">{ONE_PAGER_DATA.incidentResponseTimeline.withAbove.title}</h3>
                                        <div className="timeline-duration">10 Minutes</div>
                                    </div>
                                    <div className="timeline-container">
                                        <div className="timeline-line above-line"></div>
                                        {ONE_PAGER_DATA.incidentResponseTimeline.withAbove.timeline.map((step) => (
                                            <div key={step.step} className="timeline-step above-step">
                                                <div className="timeline-marker">
                                                    <i className={step.icon}></i>
                                                </div>
                                                <div className="timeline-content">
                                                    <div className="timeline-time">{step.time}</div>
                                                    <div className="timeline-event">{step.event}</div>
                                                    <div className="timeline-description">{step.description}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Slide 5: Proof - Real-World Incidents */}
                    <div className="slide-section" data-slide="proof">
                        <section className="real-world-incidents" role="region" aria-labelledby="incidents-heading">
                            <SectionHeader
                                id="incidents-heading"
                                title="Proof: Real-World Success Stories"
                                icon="fas fa-shield-alt"
                                description="How behavioral intelligence prevents actual insider threats"
                            />

                            <CardGrid>
                                {ONE_PAGER_DATA.realWorldIncidents.map((incident) => (
                                    <IncidentCard
                                        key={incident.id}
                                        incident={incident}
                                        onClick={handleIncidentClick}
                                    />
                                ))}
                            </CardGrid>
                        </section>
                    </div>

                    {/* Slide 6: Competitive Advantages */}
                    <div className="slide-section" data-slide="advantages">
                        <section className="competitive-advantages" role="region" aria-labelledby="advantages-heading">
                            <SectionHeader
                                id="advantages-heading"
                                title="Competitive Advantages"
                                icon="fas fa-trophy"
                                description="Why Above Security leads the market in behavioral intelligence"
                            />

                            <CardGrid className="advantages-grid">
                                {ONE_PAGER_DATA.competitiveAdvantages.map((advantage) => (
                                    <DifferentiatorCard
                                        key={advantage.id}
                                        differentiator={advantage}
                                        onClick={handleAdvantageClick}
                                    />
                                ))}
                            </CardGrid>
                        </section>
                    </div>

                    {/* Slide 7: Industry Backing */}
                    <div className="slide-section" data-slide="industry-backing">
                        <section className="industry-backing" role="region" aria-labelledby="backing-heading">
                            <SectionHeader
                                id="backing-heading"
                                title={ONE_PAGER_DATA.industryBacking.title}
                                icon="fas fa-handshake"
                                description={ONE_PAGER_DATA.industryBacking.subtitle}
                            />

                            {/* Investors */}
                            <div className="investors-section">
                                <h3 className="investors-title">Investment Partners</h3>
                                <div className="investors-content">
                                    <div className="primary-investors">
                                        {ONE_PAGER_DATA.industryBacking.investors.primary.map((investor, index) => (
                                            <span key={index} className="investor-name">
                                                {investor}
                                                {index < ONE_PAGER_DATA.industryBacking.investors.primary.length - 1 && ' & '}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="additional-investors">
                                        {ONE_PAGER_DATA.industryBacking.investors.additional}
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Slide 8: Next Steps */}
                    <div className="slide-section" data-slide="next-steps">
                        <section className="next-steps" role="region" aria-labelledby="next-steps-heading">
                            <SectionHeader
                                id="next-steps-heading"
                                title={ONE_PAGER_DATA.nextSteps.title}
                                icon="fas fa-arrow-right"
                                description={ONE_PAGER_DATA.nextSteps.subtitle}
                            />

                            <div className="next-steps-grid">
                                {ONE_PAGER_DATA.nextSteps.options.map((option) => (
                                    <div key={option.id} className={`next-step-card ${option.primary ? 'primary' : ''}`}>
                                        <div className="next-step-icon">
                                            <i className={option.icon}></i>
                                        </div>
                                        <div className="next-step-content">
                                            <h3>{option.title}</h3>
                                            <p>{option.description}</p>
                                            <ul className="next-step-benefits">
                                                {option.benefits.map((benefit, index) => (
                                                    <li key={index}>{benefit}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </SlideshowContainer>
            </div>
        </EmailGate>
    );
};

export default OnePager;
