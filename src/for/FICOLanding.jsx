import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/LogoWatermark';
import FloatingNavigation from '../components/FloatingNavigation';
import '../components/FloatingNavigationIntegration.css';
import '../styles/layout/navigation-footer.css';
import { initializeClarity, clarityEvent, claritySet } from '../utils/clarity';
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
} from '../components/use-cases';
import './styles/FICOLanding.css';

/**
 * FICO Landing Page Component - Targeted Marketing Page
 * 
 * This component presents a compelling case for FICO to choose Above Security
 * over Obsidian Security, highlighting our unique runtime behavioral intelligence
 * capabilities that go beyond traditional shadow app discovery.
 * 
 * Features:
 * - Problem → Product → Proof narrative structure
 * - Interactive carousel showcasing key use cases
 * - Customer testimonials and proof points
 * - Direct comparison with Obsidian Security
 * - Clear value proposition and CTAs
 * - Accessible navigation without FloatingNavigation
 * - Follows PhishingDetection.jsx patterns and brand guidelines
 */

// FICO-Specific Landing Page Data - Following PhishingDetection.jsx structure
const FICO_LANDING_DATA = {
    id: 'fico-landing',
    title: 'Runtime Identity Protection for FICO',
    subtitle: 'Beyond Shadow App Discovery: Behavioral Intelligence for Financial Services',
    description: 'While Obsidian tells you WHICH shadow apps users access, Above tells you WHAT they\'re doing inside those apps — and WHY it\'s risky. Get behavioral intelligence that matters for financial services compliance and insider protection.',
    icon: 'fas fa-university',
    color: 'var(--fico-primary)',

    executiveSummary: {
        title: 'The Critical Difference: Runtime Behavioral Intelligence',
        description: 'Traditional SaaS security tools like Obsidian focus on app discovery and blocking. Above goes deeper — analyzing user behavior inside applications to understand intent, detect drift, and prevent threats in real-time. For financial services, this means better compliance, faster incident response, and protection against insider threats that other tools miss.',
        keyPoints: [
            'Real-time behavioral analysis inside SaaS applications',
            'Intent detection and behavioral drift identification',
            'Session-level forensics and complete user journey reconstruction',
            'Regulatory compliance automation (SOX, GDPR, PCI-DSS)',
            'Insider threat protection with contextual awareness',
            'OAuth risk analysis with semantic permission understanding'
        ]
    },

    navigation: {
        sections: [
            { id: 'hero', title: 'Overview', icon: 'fas fa-home' },
            { id: 'problem', title: 'The Challenge', icon: 'fas fa-exclamation-triangle' },
            { id: 'solution', title: 'Our Solution', icon: 'fas fa-shield-alt' },
            { id: 'use-cases', title: 'Use Cases', icon: 'fas fa-tasks' },
            { id: 'proof', title: 'Customer Proof', icon: 'fas fa-chart-line' },
            { id: 'comparison', title: 'vs Obsidian', icon: 'fas fa-balance-scale' },
            { id: 'next-steps', title: 'Get Started', icon: 'fas fa-arrow-right' }
        ]
    },

    realWorldIncidents: [
        {
            id: 'phishing-fallout',
            title: 'Phishing Fallout',
            icon: 'fas fa-fish',
            description: 'CFO receives legitimate-looking DocuSign email linking to OAuth consent screen impersonating Box',
            impact: 'Credential theft and access to sensitive financial data',
            attackVector: 'Legitimate email → document link → deceptive OAuth consent',
            obsidianResponse: 'No detection - legitimate email and OAuth flow appears normal',
            abovePrevention: 'Semantic analysis detects brand impersonation in OAuth consent screen, blocks malicious permission grant in real-time',
            severity: 'critical',
            affected: 'C-level executives',
            category: 'Advanced Phishing'
        },
        {
            id: 'saas-misuse',
            title: 'Cross-Department Access',
            icon: 'fas fa-user-slash',
            description: 'Payroll employee accesses CRM opportunities data outside their role scope',
            impact: 'Unauthorized access to sensitive sales data and potential compliance violations',
            attackVector: 'Legitimate credentials → cross-department access → sensitive data exposure',
            obsidianResponse: 'No visibility into behavioral context - only sees app access is allowed',
            abovePrevention: 'Real-time nudge asking employee to justify cross-department access, escalates if no valid business reason provided',
            severity: 'medium',
            affected: 'Sales opportunity data',
            category: 'Access Governance'
        },
        {
            id: 'ai-shadow-bypass',
            title: 'Shadow AI Bypass',
            icon: 'fas fa-robot',
            description: 'Finance analyst copies sensitive customer data into Amazon.com\'s AI chatbot to bypass company AI restrictions',
            impact: 'Data exposure to unauthorized AI systems and compliance violations',
            attackVector: 'Blocked company AI → Amazon.com AI chatbot workaround → data exposure',
            obsidianResponse: 'Detects company AI is blocked but misses Amazon.com AI chatbot workaround and actual data exposure',
            abovePrevention: 'Runtime monitoring detects copy-paste behavior with sensitive data patterns, provides real-time nudge to use approved AI tools',
            severity: 'high',
            affected: 'Customer financial data',
            category: 'AI Shadow Usage'
        },
        {
            id: 'incident-response',
            title: 'Incident Response Timeline',
            icon: 'fas fa-clock',
            description: 'Security team needs to reconstruct user behavior during a suspected data breach incident',
            impact: 'Delayed incident response and incomplete forensic evidence for compliance reporting',
            attackVector: 'Security incident → investigation needed → limited visibility into user actions',
            obsidianResponse: 'Basic app access logs only - no detailed user behavior or intent context',
            abovePrevention: 'Complete timeline reconstruction: clicks, navigations, copy-paste actions, semantic analysis of user intent, and behavioral patterns for comprehensive incident response',
            severity: 'high',
            affected: 'Incident investigation process',
            category: 'Digital Forensics'
        }
    ],

    traditionalToolGaps: [
        {
            id: 'obsidian-gaps',
            tool: 'Obsidian Security',
            limitation: 'App discovery without behavioral context - cannot detect intent or behavioral drift patterns',
            coverage: '35%'
        },
        {
            id: 'casb-gaps',
            tool: 'CASB Solutions',
            limitation: 'API-dependent with limited session visibility - no real-time intervention during risky actions',
            coverage: '45%'
        },
        {
            id: 'dlp-gaps',
            tool: 'Traditional DLP',
            limitation: 'Content-focused without behavioral context - cannot understand user intent behind data actions',
            coverage: '40%'
        },
        {
            id: 'siem-gaps',
            tool: 'SIEM/SOAR',
            limitation: 'Reactive log-based detection - misses real-time behavioral threats and user intent',
            coverage: '30%'
        }
    ],

    aboveDifferentiators: [
        {
            id: 'behavioral-intelligence',
            capability: 'Runtime Behavioral Intelligence',
            icon: 'fas fa-brain',
            description: 'Beyond app discovery - understand user intent and behavior patterns',
            details: [
                'Real-time analysis of user interactions across all web applications',
                'Intent detection using semantic analysis and behavioral modeling',
                'Behavioral drift identification for early threat detection',
                'Session-level forensics with complete user journey reconstruction',
                'Contextual risk assessment based on user actions and environment'
            ],
            businessValue: 'Detect threats that other tools miss through behavioral analysis',
            technicalAdvantage: 'Browser-native visibility with LLM-powered intent analysis'
        },
        {
            id: 'real-time-intervention',
            capability: 'Real-Time Intervention',
            icon: 'fas fa-hand-paper',
            description: 'Prevent threats during active sessions, not hours later',
            details: [
                'In-browser coaching and guidance during risky actions',
                'Real-time policy enforcement with contextual explanations',
                'Session termination and access revocation capabilities',
                'Immediate alerting with actionable context for security teams',
                'User education and behavioral modification in real-time'
            ],
            businessValue: 'Prevent breaches before they happen through real-time intervention',
            technicalAdvantage: 'Browser extension with immediate response capabilities'
        },
        {
            id: 'session-forensics',
            capability: 'Complete Session Forensics',
            icon: 'fas fa-search',
            description: 'Reconstruct user sessions with full behavioral context',
            details: [
                'Complete timeline reconstruction of user activities',
                'Session-level analysis with intent and risk scoring',
                'Behavioral pattern correlation across multiple sessions',
                'Investigation acceleration with contextual evidence',
                'Compliance reporting with detailed audit trails'
            ],
            businessValue: 'Faster incident response with complete behavioral context',
            technicalAdvantage: 'Comprehensive session capture and analysis capabilities'
        },
        {
            id: 'financial-compliance',
            capability: 'Financial Services Compliance',
            icon: 'fas fa-gavel',
            description: 'Built for financial services regulatory requirements',
            details: [
                'SOX 404 compliance with behavioral monitoring',
                'PCI-DSS audit trails with session-level evidence',
                'GDPR compliance with data handling visibility',
                'Regulatory reporting automation with behavioral insights',
                'Insider trading prevention with behavioral analysis'
            ],
            businessValue: 'Simplified compliance with automated behavioral monitoring',
            technicalAdvantage: 'Regulatory-aware behavioral analysis and reporting'
        }
    ],

    businessImpact: {
        title: 'Measurable Business Impact',
        metrics: [
            {
                metric: 'Mean Time to Detection (MTTD)',
                before: '3-24 hours',
                after: '<15 minutes',
                improvement: '95% faster',
                description: 'Real-time behavioral analysis vs. log-based detection'
            },
            {
                metric: 'Investigation Time',
                before: '4-8 hours per incident',
                after: '1-2 hours per incident',
                improvement: '70% reduction',
                description: 'Complete session forensics vs. log correlation'
            },
            {
                metric: 'False Positive Rate',
                before: '15-30%',
                after: '<2%',
                improvement: '90% reduction',
                description: 'Behavioral context vs. rule-based detection'
            },
            {
                metric: 'Insider Threat Detection',
                before: '<10% detected',
                after: '>90% detected',
                improvement: '9x improvement',
                description: 'Behavioral drift analysis vs. policy violations'
            },
            {
                metric: 'Compliance Audit Prep',
                before: '2-4 weeks',
                after: '2-3 days',
                improvement: '85% reduction',
                description: 'Automated behavioral reporting vs. manual evidence collection'
            }
        ]
    },

    comparisonChart: {
        title: 'Above vs. Obsidian: Feature Comparison',
        subtitle: 'Why Above wins for financial services',
        features: [
            {
                feature: 'Shadow App Discovery',
                obsidian: 'Yes - App inventory and risk categorization',
                above: 'Yes - Plus behavioral analysis within apps',
                winner: 'above',
                impact: 'Understand not just WHICH apps, but WHAT users do inside them'
            },
            {
                feature: 'Real-time Intervention',
                obsidian: 'No - Detection and blocking only',
                above: 'Yes - Prevents risky actions during sessions',
                winner: 'above',
                impact: 'Stop threats before they become breaches'
            },
            {
                feature: 'Behavioral Analysis',
                obsidian: 'Limited - App usage patterns only',
                above: 'Advanced - Intent and context analysis',
                winner: 'above',
                impact: 'Detect sophisticated insider threats through behavioral drift'
            },
            {
                feature: 'Session Forensics',
                obsidian: 'No - App-level logs only',
                above: 'Yes - Complete session reconstruction',
                winner: 'above',
                impact: 'Faster incident response with complete context'
            },
            {
                feature: 'OAuth Risk Analysis',
                obsidian: 'Basic - App categorization',
                above: 'Advanced - Semantic permission analysis',
                winner: 'above',
                impact: 'Understand the risk of specific OAuth grants'
            },
            {
                feature: 'Insider Threat Detection',
                obsidian: 'No - Policy violations only',
                above: 'Yes - Behavioral drift and intent analysis',
                winner: 'above',
                impact: 'Early detection before policy violations occur'
            },
            {
                feature: 'Financial Compliance',
                obsidian: 'Limited - General compliance features',
                above: 'Specialized - Financial services focus',
                winner: 'above',
                impact: 'Built for SOX, PCI-DSS, and financial regulations'
            },
            {
                feature: 'Deployment Complexity',
                obsidian: 'Medium - Browser extension with configuration',
                above: 'Low - Lightweight browser extension',
                winner: 'above',
                impact: 'Faster deployment with immediate value'
            }
        ]
    },

    customerProof: {
        title: 'Customer Success Stories',
        subtitle: 'Real results from financial services customers',
        testimonial: {
            quote: 'Above gave us visibility we never had before. We discovered that 40% of our OAuth grants were to high-risk applications, and we were able to prevent a major data breach by detecting behavioral drift 3 weeks before our traditional tools would have caught it.',
            author: 'CISO, Fortune 500 Financial Services Company',
            company: 'Fortune 500 Financial Services',
            results: [
                { metric: 'Detection Speed', improvement: '95% faster than traditional tools' },
                { metric: 'False Positives', improvement: '90% reduction' },
                { metric: 'Investigation Time', improvement: '70% reduction' },
                { metric: 'Shadow App Visibility', improvement: '100% coverage' }
            ]
        },
        caseStudy: {
            title: 'Case Study: Preventing Financial Data Breach',
            scenario: 'A departing employee began systematically exporting customer financial data from Salesforce over a 3-week period before their departure.',
            challenge: 'Traditional DLP and CASB tools missed the gradual data exfiltration because the employee used legitimate access and stayed within normal export volumes per session.',
            solution: 'Above\'s behavioral analysis detected the pattern of systematic data collection and flagged the behavioral drift after the second week.',
            outcome: 'Security team investigated and prevented the data breach 1 week before the employee\'s departure, protecting 50,000+ customer financial records.',
            impact: 'Prevented regulatory fines, customer notification requirements, and reputational damage'
        }
    },

    povSuccess: {
        timeline: '2 Weeks to Prove Value',
        timelineDescription: 'Structured proof-of-value with clear milestones and measurable outcomes',
        phases: [
            {
                phase: 'Foundation',
                duration: 'Days 1-3',
                color: 'var(--fico-primary)',
                title: 'Deploy & Baseline',
                description: 'Setup Above extension and establish comprehensive security baseline.',
                keyMilestones: [
                    'Deploy Above extension across pilot user group (<1 day)',
                    'Establish baseline metrics for behavioral analysis',
                    'Configure real-time monitoring and alerting',
                    'Begin live behavioral analysis and OAuth monitoring'
                ],
                deliverable: 'Security Baseline Report',
                stakeholders: 'IT, Security Team'
            },
            {
                phase: 'Validation',
                duration: 'Days 4-10',
                color: 'var(--fico-primary-dark)',
                title: 'Live Analysis & Comparison',
                description: 'Monitor real behavior, test capabilities, and validate Above effectiveness.',
                keyMilestones: [
                    'Analyze user behavioral patterns and drift detection',
                    'Compare detection capabilities vs Obsidian and existing tools',
                    'Test session forensics and investigation workflows',
                    'Validate compliance reporting and audit trail generation'
                ],
                deliverable: 'Capability Analysis Report',
                stakeholders: 'Security Operations, Compliance'
            },
            {
                phase: 'Business Case',
                duration: 'Days 11-14',
                color: 'var(--fico-success)',
                title: 'ROI Analysis & Decision',
                description: 'Validate integrations, assess scalability, and compile business case.',
                keyMilestones: [
                    'Validate SIEM/SOAR integration and workflow improvements',
                    'Assess compliance automation and audit readiness',
                    'Compile ROI analysis with quantified business impact',
                    'Present findings and recommendations to executive team'
                ],
                deliverable: 'Executive Business Case',
                stakeholders: 'CISO, Executives, Compliance'
            }
        ]
    },

    nextSteps: {
        title: 'Ready to Partner with Us?',
        subtitle: 'Join forces with Above Security as our premier design partner',
        options: [
            {
                id: 'design-partner',
                title: 'Become Our Design Partner',
                description: 'Work directly with our team to build the future of insider protection specifically for FICO\'s needs',
                icon: 'fas fa-handshake',
                primary: true,
                benefits: [
                    'Direct collaboration with Above\'s engineering team',
                    'Priority development of FICO-specific features',
                    'Exclusive access to cutting-edge behavioral intelligence',
                    'Co-creation of insider protection solutions'
                ]
            },
            {
                id: 'dedicated-team',
                title: 'Dedicated Security Team',
                description: 'We become your extended insider protection team, fully focused on FICO\'s security priorities',
                icon: 'fas fa-users',
                primary: false,
                benefits: [
                    'Above team works as extension of FICO security',
                    'Weekly strategy sessions and threat analysis',
                    'Custom behavioral models for financial services',
                    'Immediate response to emerging threats'
                ]
            },
            {
                id: 'strategic-priority',
                title: 'Our Top Priority',
                description: 'FICO becomes Above\'s most important customer with dedicated resources and attention',
                icon: 'fas fa-star',
                primary: false,
                benefits: [
                    'FICO-first development roadmap',
                    'Executive-level strategic partnership',
                    'Influence on product direction and features',
                    'Preferred partner status for all initiatives'
                ]
            }
        ]
    }
};

const FICOLanding = () => {
    const [activeUseCase, setActiveUseCase] = useState('phishing-fallout');

    useEffect(() => {
        initializeClarity();
        clarityEvent('fico_landing_page_view');
        claritySet('page_type', 'fico_landing');
    }, []);

    const handleIncidentClick = (incidentId) => {
        clarityEvent('fico_incident_view', { incident: incidentId });
    };

    const handleToolGapClick = (toolName) => {
        clarityEvent('fico_tool_gap_view', { tool: toolName });
    };

    const handleDifferentiatorClick = (capability) => {
        clarityEvent('fico_differentiator_view', { capability });
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>{FICO_LANDING_DATA.title} - Above Security for FICO</title>
            <meta name="description" content={FICO_LANDING_DATA.description} />
            <meta name="keywords" content="FICO, financial services security, behavioral intelligence, insider threat, OAuth security" />

            <div className="fico-landing-container" data-testid="fico-landing">
                <div className="fico-landing-content">
                    {/* Enhanced Header Section */}
                    <header className="fico-landing-header-section">
                        <Link
                            to="/"
                            className="logo-container"
                            onClick={() => clarityEvent('logo_clicked_from_fico_landing')}
                            aria-label="Navigate to Above Security homepage"
                        >
                            <Logo className="fico-landing-logo" />
                        </Link>
                    </header>

                    {/* Header */}
                    <HeroSection
                        title={FICO_LANDING_DATA.title}
                        subtitle={FICO_LANDING_DATA.subtitle}
                        description={FICO_LANDING_DATA.description}
                        icon={FICO_LANDING_DATA.icon}
                        accentColor={FICO_LANDING_DATA.color}
                        className="fico-landing-header"
                    />

                    <main>
                        <ContentGroup id="problem-definition">
                            {/* Executive Summary */}
                            <ExecutiveSummary
                                summary={FICO_LANDING_DATA.executiveSummary}
                                variant="dark"
                            />

                            {/* Real-World Incidents */}
                            <section className="real-world-incidents" role="region" aria-labelledby="incidents-heading">
                                <SectionHeader
                                    id="incidents-heading"
                                    title="Critical Use Cases for Financial Services"
                                    icon="fas fa-exclamation-circle"
                                    description="Real-world scenarios where Above provides unique value"
                                />

                                <CardGrid>
                                    {FICO_LANDING_DATA.realWorldIncidents.map((incident) => (
                                        <IncidentCard
                                            key={incident.id}
                                            incident={incident}
                                            onClick={handleIncidentClick}
                                        />
                                    ))}
                                </CardGrid>
                            </section>
                        </ContentGroup>

                        <ContentGroup id="solution-analysis">
                            {/* Traditional Tool Gaps */}
                            <section className="tool-gaps" role="region" aria-labelledby="tool-gaps-heading">
                                <SectionHeader
                                    id="tool-gaps-heading"
                                    title="Why Traditional Tools Fall Short"
                                    icon="fas fa-exclamation-triangle"
                                    description="Critical gaps in existing security solutions"
                                />
                                <CardGrid className="tool-gaps-grid">
                                    {FICO_LANDING_DATA.traditionalToolGaps.map((tool, index) => (
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
                                    title="Above's Unique Advantages"
                                    icon="fas fa-star"
                                    description="What makes Above different from Obsidian and other tools"
                                />
                                <CardGrid className="differentiators-grid">
                                    {FICO_LANDING_DATA.aboveDifferentiators.map((differentiator) => (
                                        <DifferentiatorCard
                                            key={differentiator.id}
                                            differentiator={differentiator}
                                            onClick={handleDifferentiatorClick}
                                        />
                                    ))}
                                </CardGrid>
                            </section>
                        </ContentGroup>

                        <ContentGroup id="comparison-analysis">
                            {/* Comparison Chart */}
                            <section className="comparison-chart" role="region" aria-labelledby="comparison-heading">
                                <SectionHeader
                                    id="comparison-heading"
                                    title={FICO_LANDING_DATA.comparisonChart.title}
                                    icon="fas fa-balance-scale"
                                    description={FICO_LANDING_DATA.comparisonChart.subtitle}
                                />

                                <div className="comparison-table">
                                    <div className="table-header">
                                        <div>Feature</div>
                                        <div>Obsidian Security</div>
                                        <div>Above Security</div>
                                    </div>
                                    {FICO_LANDING_DATA.comparisonChart.features.map((feature, index) => (
                                        <div key={index} className="table-row">
                                            <div className="category">
                                                <h4>{feature.feature}</h4>
                                                <p className="feature-impact">{feature.impact}</p>
                                            </div>
                                            <div className="traditional">
                                                <p>{feature.obsidian}</p>
                                            </div>
                                            <div className={`above ${feature.winner === 'above' ? 'winner' : ''}`}>
                                                <p>{feature.above}</p>
                                                {feature.winner === 'above' && (
                                                    <i className="fas fa-crown winner-icon"></i>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </ContentGroup>

                        <ContentGroup id="next-steps">
                            {/* Next Steps */}
                            <section className="next-steps" role="region" aria-labelledby="next-steps-heading">
                                <SectionHeader
                                    id="next-steps-heading"
                                    title={FICO_LANDING_DATA.nextSteps.title}
                                    icon="fas fa-arrow-right"
                                    description={FICO_LANDING_DATA.nextSteps.subtitle}
                                />

                                <div className="next-steps-grid">
                                    {FICO_LANDING_DATA.nextSteps.options.map((option) => (
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
                        </ContentGroup>
                    </main>
                </div>

                {/* Footer */}
                <footer className="landing-footer">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <Logo />
                            <span>Above Security</span>
                        </div>
                        <div className="footer-links">
                            <Link to="/use-cases" className="footer-link">Use Cases</Link>
                            <Link to="/slides" className="footer-link">Company Deck</Link>
                            <a href="mailto:hello@above.ai" className="footer-link">Contact</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 Above Security. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default FICOLanding;