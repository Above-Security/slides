import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/LogoWatermark';
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
            title: 'SaaS Misuse',
            icon: 'fas fa-user-slash',
            description: 'Employee exports customer financial data from Salesforce incrementally before departure',
            impact: 'Financial data exfiltration and regulatory violations',
            attackVector: 'Legitimate access → incremental data exports → data theft',
            obsidianResponse: 'No visibility into export behavior within sanctioned applications',
            abovePrevention: 'Behavioral drift detection flags unusual export patterns, triggers investigation and policy enforcement',
            severity: 'high',
            affected: 'Customer financial records',
            category: 'Data Exfiltration'
        },
        {
            id: 'insider-drift',
            title: 'Insider Drift',
            icon: 'fas fa-user-clock',
            description: 'Finance director begins accessing unusual systems and exporting data incrementally',
            impact: 'Major financial data breach and insider threat escalation',
            attackVector: 'Legitimate access → behavioral changes → systematic data collection',
            obsidianResponse: 'No behavioral analysis capabilities - only app access tracking',
            abovePrevention: 'Intent analysis detects pattern changes, provides early warning system with contextual alerts',
            severity: 'critical',
            affected: 'Financial systems',
            category: 'Insider Threat'
        },
        {
            id: 'shadow-ai',
            title: 'Shadow AI',
            icon: 'fas fa-robot',
            description: 'Analyst copies customer PII into ChatGPT for data analysis assistance',
            impact: 'Regulatory violations and data exposure to unauthorized AI systems',
            attackVector: 'Productivity tool usage → sensitive data exposure → compliance violation',
            obsidianResponse: 'Can block access to ChatGPT but cannot analyze data exposure risk',
            abovePrevention: 'Detects sensitive data patterns in real-time, provides coaching and secure alternatives',
            severity: 'high',
            affected: 'Customer PII',
            category: 'Shadow AI Usage'
        },
        {
            id: 'insider-protection',
            title: 'Post-Termination Access',
            icon: 'fas fa-user-shield',
            description: 'Contractor maintains access to financial systems after termination via session cookies',
            impact: 'Continued access to sensitive data post-termination',
            attackVector: 'Stale session cookies → continued access → data exposure',
            obsidianResponse: 'No session-level visibility after IdP offboarding',
            abovePrevention: 'Detects stale session reuse, correlates with HR systems, immediate session termination',
            severity: 'critical',
            affected: 'Financial systems',
            category: 'Offboarding Drift'
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
        title: 'Ready to See the Difference?',
        subtitle: 'Experience runtime behavioral intelligence for yourself',
        options: [
            {
                id: 'demo',
                title: 'Schedule Demo',
                description: 'See Above in action with FICO-specific use cases and behavioral analysis',
                cta: 'Book Demo',
                icon: 'fas fa-calendar',
                primary: true,
                benefits: [
                    'Live behavioral analysis demonstration',
                    'FICO-specific use case walkthrough',
                    'Comparison with existing tools',
                    'Q&A with technical experts'
                ]
            },
            {
                id: 'pov',
                title: 'Start Proof of Value',
                description: '2-week structured POV with measurable outcomes and clear success criteria',
                cta: 'Start POV',
                icon: 'fas fa-flask',
                primary: false,
                benefits: [
                    'Live deployment in your environment',
                    'Real behavioral analysis of your users',
                    'Quantified business impact assessment',
                    'Executive-ready business case'
                ]
            },
            {
                id: 'comparison',
                title: 'Download Comparison',
                description: 'Detailed technical and business comparison: Above vs. Obsidian Security',
                cta: 'Download PDF',
                icon: 'fas fa-download',
                primary: false,
                benefits: [
                    'Feature-by-feature comparison',
                    'ROI analysis and business case',
                    'Technical architecture details',
                    'Implementation roadmap'
                ]
            }
        ]
    }
};

const FICOLanding = () => {
    const [activeUseCase, setActiveUseCase] = useState('phishing-fallout');
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        initializeClarity();
        clarityEvent('fico_landing_page_view');
        claritySet('page_type', 'fico_landing');
    }, []);

    // Scroll to section functionality
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
            clarityEvent('fico_navigation_click', { section: sectionId });
        }
    };

    // Intersection Observer for active section tracking
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        FICO_LANDING_DATA.navigation.sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="fico-landing-container">
            {/* In-page Navigation */}
            <nav className="fico-page-nav" role="navigation" aria-label="Page navigation">
                <div className="fico-nav-container">
                    <div className="fico-nav-brand">
                        <Logo />
                        <span className="fico-nav-title">Above for FICO</span>
                    </div>
                    <div className="fico-nav-sections">
                        {FICO_LANDING_DATA.navigation.sections.map((section) => (
                            <button
                                key={section.id}
                                className={`fico-nav-item ${activeSection === section.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(section.id)}
                                aria-label={`Navigate to ${section.title}`}
                            >
                                <i className={section.icon} aria-hidden="true"></i>
                                <span>{section.title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="fico-nav-cta">
                        <button 
                            className="btn btn-primary"
                            onClick={() => clarityEvent('fico_demo_request', { location: 'nav' })}
                        >
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="fico-hero">
                <div className="hero-gradient-background">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <i className="fas fa-shield-alt"></i>
                            Trusted by Fortune 500 Financial Services
                        </div>
                        <h1 className="hero-title">{FICO_LANDING_DATA.title}</h1>
                        <p className="hero-subtitle">{FICO_LANDING_DATA.subtitle}</p>
                        <p className="hero-description">{FICO_LANDING_DATA.description}</p>
                        <div className="hero-ctas">
                            <button 
                                className="btn btn-primary btn-lg"
                                onClick={() => {
                                    clarityEvent('fico_demo_request', { location: 'hero' });
                                    scrollToSection('next-steps');
                                }}
                            >
                                <i className="fas fa-calendar"></i>
                                Schedule Demo
                            </button>
                            <button 
                                className="btn btn-secondary btn-lg"
                                onClick={() => scrollToSection('comparison')}
                            >
                                <i className="fas fa-balance-scale"></i>
                                View Comparison
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <main>
                {/* Executive Summary */}
                <section id="problem" className="executive-summary">
                    <ExecutiveSummary
                        summary={FICO_LANDING_DATA.executiveSummary}
                        variant="light"
                    />
                </section>

                {/* Real-World Incidents */}
                <section id="use-cases" className="real-world-incidents">
                    <SectionHeader
                        title="Critical Use Cases for Financial Services"
                        subtitle="Real-world scenarios where Above provides unique value"
                        icon="fas fa-exclamation-circle"
                    />
                    
                    <div className="use-case-tabs">
                        {FICO_LANDING_DATA.realWorldIncidents.map((incident) => (
                            <button
                                key={incident.id}
                                className={`use-case-tab ${activeUseCase === incident.id ? 'active' : ''}`}
                                onClick={() => {
                                    setActiveUseCase(incident.id);
                                    clarityEvent('fico_use_case_view', { case: incident.id });
                                }}
                            >
                                <i className={incident.icon}></i>
                                <span>{incident.title}</span>
                            </button>
                        ))}
                    </div>

                    <CardGrid>
                        {FICO_LANDING_DATA.realWorldIncidents
                            .filter(incident => incident.id === activeUseCase)
                            .map((incident) => (
                                <IncidentCard
                                    key={incident.id}
                                    incident={incident}
                                />
                            ))}
                    </CardGrid>
                </section>

                {/* Traditional Tool Gaps */}
                <section id="solution" className="traditional-tool-gaps">
                    <SectionHeader
                        title="Why Traditional Tools Fall Short"
                        subtitle="Critical gaps in existing security solutions"
                        icon="fas fa-exclamation-triangle"
                    />
                    
                    <CardGrid>
                        {FICO_LANDING_DATA.traditionalToolGaps.map((gap) => (
                            <ToolGapCard
                                key={gap.id}
                                tool={gap}
                            />
                        ))}
                    </CardGrid>
                </section>

                {/* Above Differentiators */}
                <section className="above-differentiators">
                    <SectionHeader
                        title="Above's Unique Advantages"
                        subtitle="What makes Above different from Obsidian and other tools"
                        icon="fas fa-star"
                    />
                    
                    <CardGrid>
                        {FICO_LANDING_DATA.aboveDifferentiators.map((differentiator) => (
                            <DifferentiatorCard
                                key={differentiator.id}
                                differentiator={differentiator}
                            />
                        ))}
                    </CardGrid>
                </section>

                {/* Business Impact */}
                <section className="business-impact">
                    <SectionHeader
                        title={FICO_LANDING_DATA.businessImpact.title}
                        subtitle="Quantified outcomes from Above deployment"
                        icon="fas fa-chart-line"
                    />
                    
                    <CardGrid>
                        {FICO_LANDING_DATA.businessImpact.metrics.map((metric, index) => (
                            <MetricCard
                                key={index}
                                metric={metric}
                            />
                        ))}
                    </CardGrid>
                </section>

                {/* Customer Proof */}
                <section id="proof" className="customer-proof">
                    <SectionHeader
                        title={FICO_LANDING_DATA.customerProof.title}
                        subtitle={FICO_LANDING_DATA.customerProof.subtitle}
                        icon="fas fa-quote-left"
                    />
                    
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <div className="testimonial-quote">
                                <i className="fas fa-quote-left"></i>
                                <p>{FICO_LANDING_DATA.customerProof.testimonial.quote}</p>
                            </div>
                            <div className="testimonial-author">
                                <span className="author-name">{FICO_LANDING_DATA.customerProof.testimonial.author}</span>
                                <span className="author-company">{FICO_LANDING_DATA.customerProof.testimonial.company}</span>
                            </div>
                        </div>
                        <div className="testimonial-results">
                            {FICO_LANDING_DATA.customerProof.testimonial.results.map((result, index) => (
                                <div key={index} className="result-metric">
                                    <span className="result-label">{result.metric}</span>
                                    <span className="result-value">{result.improvement}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="case-study-card">
                        <h3>{FICO_LANDING_DATA.customerProof.caseStudy.title}</h3>
                        <div className="case-study-content">
                            <div className="case-study-section">
                                <h4>Scenario</h4>
                                <p>{FICO_LANDING_DATA.customerProof.caseStudy.scenario}</p>
                            </div>
                            <div className="case-study-section">
                                <h4>Challenge</h4>
                                <p>{FICO_LANDING_DATA.customerProof.caseStudy.challenge}</p>
                            </div>
                            <div className="case-study-section">
                                <h4>Solution</h4>
                                <p>{FICO_LANDING_DATA.customerProof.caseStudy.solution}</p>
                            </div>
                            <div className="case-study-section">
                                <h4>Outcome</h4>
                                <p>{FICO_LANDING_DATA.customerProof.caseStudy.outcome}</p>
                            </div>
                            <div className="case-study-impact">
                                <h4>Business Impact</h4>
                                <p>{FICO_LANDING_DATA.customerProof.caseStudy.impact}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparison Chart */}
                <section id="comparison" className="comparison-chart">
                    <SectionHeader
                        title={FICO_LANDING_DATA.comparisonChart.title}
                        subtitle={FICO_LANDING_DATA.comparisonChart.subtitle}
                        icon="fas fa-balance-scale"
                    />
                    
                    <div className="comparison-table">
                        <div className="comparison-header">
                            <div className="comparison-feature">Feature</div>
                            <div className="comparison-obsidian">Obsidian Security</div>
                            <div className="comparison-above">Above Security</div>
                        </div>
                        {FICO_LANDING_DATA.comparisonChart.features.map((feature, index) => (
                            <div key={index} className="comparison-row">
                                <div className="comparison-feature">
                                    <h4>{feature.feature}</h4>
                                    <p className="feature-impact">{feature.impact}</p>
                                </div>
                                <div className="comparison-obsidian">
                                    <p>{feature.obsidian}</p>
                                </div>
                                <div className={`comparison-above ${feature.winner === 'above' ? 'winner' : ''}`}>
                                    <p>{feature.above}</p>
                                    {feature.winner === 'above' && (
                                        <i className="fas fa-crown winner-icon"></i>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* POV Success Timeline */}
                <section className="pov-timeline">
                    <SectionHeader
                        title={FICO_LANDING_DATA.povSuccess.timeline}
                        subtitle={FICO_LANDING_DATA.povSuccess.timelineDescription}
                        icon="fas fa-calendar-alt"
                    />
                    <div className="pov-phases">
                        {FICO_LANDING_DATA.povSuccess.phases.map((phase, index) => (
                            <div key={index} className="pov-phase">
                                <div className="phase-header">
                                    <h3>{phase.title}</h3>
                                    <span className="phase-duration">{phase.duration}</span>
                                </div>
                                <p className="phase-description">{phase.description}</p>
                                <div className="phase-milestones">
                                    <h4>Key Milestones:</h4>
                                    <ul>
                                        {phase.keyMilestones.map((milestone, idx) => (
                                            <li key={idx}>{milestone}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="phase-deliverable">
                                    <strong>Deliverable:</strong> {phase.deliverable}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Next Steps */}
                <section id="next-steps" className="next-steps">
                    <SectionHeader
                        title={FICO_LANDING_DATA.nextSteps.title}
                        subtitle={FICO_LANDING_DATA.nextSteps.subtitle}
                        icon="fas fa-arrow-right"
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
                                <button 
                                    className={`btn ${option.primary ? 'btn-primary' : 'btn-secondary'}`}
                                    onClick={() => clarityEvent('fico_cta_click', { 
                                        action: option.cta, 
                                        location: 'next-steps' 
                                    })}
                                >
                                    {option.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="fico-footer">
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
    );
};

export default FICOLanding;