import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/LogoWatermark';
import FloatingNavigation from '../components/FloatingNavigation';
import SlideshowContainer from '../components/SlideshowContainer';
import '../components/FloatingNavigationIntegration.css';
import '../components/SlideshowContainer.css';
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
 * - Slideshow functionality with modular SlideshowContainer
 * - Accessible navigation without FloatingNavigation
 * - Follows PhishingDetection.jsx patterns and brand guidelines
 */

// FICO-Specific Landing Page Data - Following PhishingDetection.jsx structure
const FICO_LANDING_DATA = {
    id: 'fico-landing',
    title: 'Runtime Insider Protection for FICO',
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

    keyFeatures: [
        {
            id: 'saas-discovery',
            title: 'SaaS & Internal App Discovery',
            icon: 'fas fa-search',
            description: 'Comprehensive visibility into all applications and authentication methods',
            details: [
                'Real-time discovery of SaaS applications and internal web apps',
                'Authentication method analysis (SSO, OAuth, direct login)',
                'Shadow IT identification with risk categorization',
                'Access pattern analysis and user behavior mapping',
                'Integration with identity providers and access management systems'
            ],
            example: '"Employee accessing Notion via personal account instead of corporate SSO detected"',
            benefit: 'Complete application visibility with authentication context'
        },
        {
            id: 'shadow-ai',
            title: 'Shadow AI Discovery',
            icon: 'fas fa-robot',
            description: 'Detect and monitor unauthorized AI tool usage across your organization',
            details: [
                'Detection of AI chatbots and generative AI tools (ChatGPT, Claude, etc.)',
                'Monitoring of AI browser extensions and plugins',
                'Analysis of data inputs to AI systems',
                'Policy enforcement for approved AI tools',
                'Risk assessment of AI-generated content and decisions'
            ],
            example: '"Finance analyst copying customer data to unauthorized chatbot inside Amazon.com detected and blocked"',
            benefit: 'Prevent data exposure through unauthorized AI tools'
        },
        {
            id: 'oauth-discovery',
            title: '3rd Party OAuth Discovery',
            icon: 'fas fa-key',
            description: 'Deep analysis of OAuth permissions and third-party app integrations',
            details: [
                'Semantic analysis of OAuth permission requests',
                'Detection of deceptive or malicious OAuth applications',
                'Monitoring of granted permissions and scope analysis',
                'Brand impersonation detection in OAuth flows',
                'Risk scoring based on requested permissions and app reputation'
            ],
            example: '"Malicious app requesting excessive Gmail permissions flagged during OAuth flow"',
            benefit: 'Prevent OAuth-based attacks and unauthorized data access'
        },
        {
            id: 'phishing-prevention',
            title: 'Advanced Phishing Prevention',
            icon: 'fas fa-shield-alt',
            description: 'Real-time protection against sophisticated phishing attacks',
            details: [
                'Real-time URL and domain analysis during browsing',
                'Detection of credential harvesting attempts',
                'Brand impersonation and lookalike domain identification',
                'Behavioral analysis to detect social engineering attempts',
                'Integration with email security for comprehensive protection'
            ],
            example: '"Fake Microsoft login page detected and blocked before credential entry"',
            benefit: 'Stop phishing attacks before credentials are compromised'
        },
        {
            id: 'intelligent-nudging',
            title: 'Intelligent User Nudging',
            icon: 'fas fa-lightbulb',
            description: 'Real-time guidance and intervention to redirect users to approved alternatives',
            details: [
                'Contextual messaging when users access blocked applications',
                'Smart recommendations for approved corporate alternatives',
                'Educational pop-ups explaining security policies and risks',
                'User justification requests for unusual access patterns',
                'Behavioral coaching to improve security awareness',
                'Seamless redirection to compliant tools and workflows'
            ],
            benefit: 'Transform security friction into positive user education',
            example: '"This app is blocked. Use Microsoft Teams instead." or "Justify why you need access to this external tool."'
        }
    ],

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
    const [isSlideshow, setIsSlideshow] = useState(false);

    useEffect(() => {
        initializePostHog();
        posthogEvent('fico_landing_page_view');
        posthogSet({page_type: 'fico_landing'});
    }, []);

    const handleToggleSlideshow = () => {
        setIsSlideshow(!isSlideshow);
        posthogEvent('fico_slideshow_toggle', { mode: !isSlideshow ? 'slideshow' : 'normal' });
    };

    const handleIncidentClick = (incidentId) => {
        posthogEvent('fico_incident_view', { incident: incidentId });
    };

    const handleDifferentiatorClick = (capability) => {
        posthogEvent('fico_differentiator_view', { capability });
    };

    // Define slide configuration for slideshow mode
    const slideConfig = [
        { title: 'Runtime Insider Protection for FICO', index: 0 },
        { title: 'The Critical Difference: Behavioral Intelligence', index: 1 },
        { title: 'Key Platform Features', index: 2 },
        { title: 'Critical Use Cases for Financial Services', index: 3 },
        { title: "Above's Unique Advantages", index: 4 },
        { title: 'Above vs. Obsidian: Feature Comparison', index: 5 },
        { title: 'Ready to Partner with Us?', index: 6 }
    ];

    return (
        <>
            {/* Document Head Metadata */}
            <title>{FICO_LANDING_DATA.title} - Above Security for FICO</title>
            <meta name="description" content={FICO_LANDING_DATA.description} />
            <meta name="keywords" content="FICO, financial services security, behavioral intelligence, insider threat, OAuth security" />

            <div className={`fico-landing-container ${isSlideshow ? 'slideshow-mode' : ''}`} data-testid="fico-landing">
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
                    className="fico-landing-content"
                >
                    {/* Slide 1: Header Section */}
                    <div className="slide-section" data-slide="header">
                        <header className="fico-landing-header-section">
                            <Link
                                to="/"
                                className="logo-container"
                                onClick={() => posthogEvent('logo_clicked_from_fico_landing')}
                                aria-label="Navigate to Above Security homepage"
                            >
                                <Logo className="fico-landing-logo" />
                            </Link>
                        </header>

                        <HeroSection
                            title={FICO_LANDING_DATA.title}
                            subtitle={FICO_LANDING_DATA.subtitle}
                            description={FICO_LANDING_DATA.description}
                            icon={FICO_LANDING_DATA.icon}
                            accentColor={FICO_LANDING_DATA.color}
                            className="fico-landing-header"
                        />
                    </div>

                    {/* Slide 2: Executive Summary */}
                    <div className="slide-section" data-slide="executive-summary">
                        <ExecutiveSummary
                            summary={FICO_LANDING_DATA.executiveSummary}
                            variant="dark"
                        />
                    </div>

                    {/* Slide 3: Key Platform Features */}
                    <div className="slide-section" data-slide="key-features">
                        <section className="key-features" role="region" aria-labelledby="features-heading">
                            <SectionHeader
                                id="features-heading"
                                title="Platform Overview"
                                icon="fas fa-rocket"
                                description="Core capabilities that power next-generation insider protection"
                            />

                            <div className="features-showcase">
                                {FICO_LANDING_DATA.keyFeatures.map((feature, index) => (
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

                    {/* Slide 4: Real-World Incidents */}
                    <div className="slide-section" data-slide="use-cases">
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
                    </div>

                    {/* Slide 5: Above Differentiators */}
                    <div className="slide-section" data-slide="differentiators">
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
                    </div>

                    {/* Slide 6: Comparison Chart */}
                    <div className="slide-section" data-slide="comparison">
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
                    </div>

                    {/* Slide 7: Next Steps */}
                    <div className="slide-section" data-slide="next-steps">
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
                    </div>

                    {/* Footer (always visible) */}
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
                </SlideshowContainer>
            </div>
        </>
    );
};

export default FICOLanding;