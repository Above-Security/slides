import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../components/LogoWatermark';
import FloatingNavigation from '../../components/FloatingNavigation';
import '../../components/FloatingNavigationIntegration.css';
import '../../styles/layout/navigation-footer.css';
import { initializeClarity, clarityEvent, claritySet } from '../../utils/clarity';
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
import '../styles/CISOBusinessCase.css';

/**
 * CISO Business Case Component - Runtime Identity & Insider Protection Platform
 * 
 * This component presents a comprehensive business case for CISOs to evaluate
 * Above Security's platform against traditional SaaS security vendors.
 * 
 * Features:
 * - Strategic value proposition vs competitors
 * - Detailed differentiation from Obsidian/Grip/Reco
 * - ROI calculations and success metrics
 * - Implementation timeline and business case
 */

// Comprehensive CISO Business Case Data
const CISO_BUSINESS_CASE_DATA = {
    id: 'ciso-business-case',
    title: 'Above Security: Runtime Identity & Insider Protection Platform',
    subtitle: 'Beyond Shadow App Discovery: Behavioral Intelligence for CISOs',
    description: 'While others tell you WHICH shadow SaaS and AI apps users access, Above tells you WHAT they\'re doing inside those apps — and WHY it\'s risky. We provide runtime behavioral intelligence that goes beyond app inventory to deliver true insider protection through intent analysis and real-time intervention.',
    icon: 'fas fa-chart-line',
    color: 'var(--brand-primary)',

    executiveSummary: {
        title: 'What We Do',
        description: 'Above delivers runtime behavioral intelligence inside SaaS applications — going beyond shadow app discovery to understand user intent and prevent risky actions in real-time. While competitors tell you WHICH unauthorized apps users access, Above tells you WHAT they\'re doing inside those apps and WHY it\'s risky.',
        keyPoints: [
            'Behavioral intelligence in shadow SaaS & AI tools — not just discovery',
            'Real-time intervention during risky actions — not just app blocking',
            'Intent analysis within unauthorized applications — understand the "why"',
            'Session-level forensics — complete user journey reconstruction',
            'Semantic data protection — contextual awareness of exposure risk'
        ]
    },

    howWeDoIt: {
        title: 'How We Do It',
        sections: [
            {
                title: 'Browser-Native Intelligence',
                description: 'Above deploys as a lightweight browser extension that captures user interactions across all web applications. No traffic proxying, no infrastructure changes, no API integrations required.',
                icon: 'fas fa-globe'
            },
            {
                title: 'LLM-Powered Analysis',
                description: 'Our platform uses large language models to semantically understand user intent and context, detecting sophisticated threats like pixel-perfect phishing pages, malicious OAuth applications, behavioral drift patterns, and data exfiltration attempts.',
                icon: 'fas fa-brain'
            },
            {
                title: 'Real-Time Prevention',
                description: 'Unlike log-based tools that detect threats hours or days later, Above prevents attacks during active sessions — blocking credential theft, stopping malicious app authorizations, and alerting on insider misuse in real-time.',
                icon: 'fas fa-shield-alt'
            }
        ]
    },

    successMetrics: {
        title: '90-Day Deployment Timeline',
        phases: [
            {
                phase: 'Deploy',
                timeline: 'Day 1',
                outcome: 'Extension live on Chrome-managed fleet',
                color: '#08872B'
            },
            {
                phase: 'Discover',
                timeline: 'Week 1',
                outcome: 'Complete inventory of shadow SaaS/AI usage',
                color: '#1F7A3A'
            },
            {
                phase: 'Detect',
                timeline: 'Week 2',
                outcome: 'First behavioral drift alerts and OAuth discoveries',
                color: '#0D5421'
            },
            {
                phase: 'Operationalize',
                timeline: 'Month 3',
                outcome: 'Integrated with SIEM/SOAR, reduced incident response time',
                color: '#052F14'
            }
        ],
        measurableOutcomes: [
            {
                metric: 'Mean time to detection for insider events',
                before: '3-24 hours',
                after: '<15 minutes',
                improvement: '95% faster'
            },
            {
                metric: 'Post-offboarding sessions detected',
                before: '<10%',
                after: '>90%',
                improvement: '9x improvement'
            },
            {
                metric: 'Security incident investigation time',
                before: '4-8 hours',
                after: '2-4 hours',
                improvement: '50% reduction'
            },
            {
                metric: 'Shadow SaaS and AI tool visibility',
                before: 'No visibility',
                after: 'Complete visibility',
                improvement: '100% coverage'
            },
            {
                metric: 'False positive rate',
                before: '15-30%',
                after: '<2%',
                improvement: '90% reduction'
            }
        ]
    },

    competitiveDifferentiation: {
        title: 'Why We Win vs. Shadow SaaS/AI Detection Tools',
        subtitle: 'The Critical Difference vs. Obsidian/Reco/Grip',
        comparisonTable: [
            {
                category: 'Discovery',
                traditional: 'WHICH shadow apps users access',
                above: 'WHAT users do inside shadow apps',
                advantage: 'Behavioral intelligence vs. app inventory'
            },
            {
                category: 'Analysis',
                traditional: 'App lists and access patterns',
                above: 'User intent and risk context',
                advantage: 'Understanding WHY behavior is risky'
            },
            {
                category: 'Protection',
                traditional: 'Block/allow at access level',
                above: 'Real-time intervention during risky actions',
                advantage: 'Behavioral prevention vs. blanket blocking'
            },
            {
                category: 'Intelligence',
                traditional: 'Static app categorization',
                above: 'Dynamic user behavior analysis',
                advantage: 'Adaptive risk assessment'
            }
        ],
        specificCompetitors: [
            {
                category: 'Shadow SaaS Discovery',
                competitors: 'Browser extension for app discovery and blocking',
                above: 'Browser extension plus behavioral analysis of shadow app usage'
            },
            {
                category: 'Shadow AI Detection',
                competitors: 'Identifies unauthorized AI tools and blocks access',
                above: 'Analyzes sensitive data exposure and intent within AI tools'
            },
            {
                category: 'Real-time Prevention',
                competitors: 'Blocks access to unauthorized applications',
                above: 'Prevents risky actions within authorized and unauthorized apps'
            },
            {
                category: 'Risk Assessment',
                competitors: 'App-level risk scoring based on categories',
                above: 'User behavior risk scoring based on actual actions and intent'
            },
            {
                category: 'Insider Protection',
                competitors: 'Policy violations and access control enforcement',
                above: 'Behavioral drift detection and intent-based threat identification'
            },
            {
                category: 'Investigation Support',
                competitors: 'App usage logs and access reports',
                above: 'Complete session timeline reconstruction with behavioral context'
            },
            {
                category: 'Data Protection',
                competitors: 'DLP rules applied at app access points',
                above: 'Semantic understanding of data sensitivity in real-time context'
            },
            {
                category: 'Long-tail Coverage',
                competitors: 'Limited to known app signatures and domains',
                above: 'Universal coverage of any web application through browser observation'
            },
            {
                category: 'False Positive Rate',
                competitors: 'High alerts due to blanket policy enforcement',
                above: 'Low alerts through contextual behavioral understanding'
            }
        ],
        traditionalToolMisses: [
            {
                gap: 'Behavioral context in shadow apps',
                description: 'WHAT users do inside unauthorized tools, not just WHICH tools they access',
                icon: 'fas fa-user-secret'
            },
            {
                gap: 'Intent analysis in AI tools',
                description: 'Understanding WHY AI usage is risky, not just detecting usage',
                icon: 'fas fa-brain'
            },
            {
                gap: 'Real-time behavioral intervention',
                description: 'Preventing risky actions during sessions, not just blocking apps',
                icon: 'fas fa-shield-alt'
            },
            {
                gap: 'Semantic data understanding',
                description: 'Contextual awareness of data sensitivity and exposure risk',
                icon: 'fas fa-eye'
            },
            {
                gap: 'User-centric risk assessment',
                description: 'Individual behavioral patterns vs. blanket policy enforcement',
                icon: 'fas fa-user-check'
            },
            {
                gap: 'Session-level forensics',
                description: 'Complete user journey reconstruction for incident investigation',
                icon: 'fas fa-search'
            }
        ]
    },

    strategicVision: {
        title: 'Strategic Vision: Runtime Identity Protection',
        marketOpportunity: {
            title: 'The Market Opportunity',
            description: '68% of breaches involve a human element — yet most security tools focus on infrastructure, not user behavior. Above creates the runtime identity protection category, addressing the $13B+ ITDR market with a fundamentally different approach.',
            phases: [
                {
                    phase: 'Phase 1',
                    timeline: '2025-2027',
                    focus: 'Runtime insider protection'
                },
                {
                    phase: 'Phase 2',
                    timeline: '2027-2029',
                    focus: 'Adaptive identity controls'
                },
                {
                    phase: 'Phase 3',
                    timeline: '2029+',
                    focus: 'Unified workforce risk platform'
                }
            ]
        },
        beyondSaasSecurity: {
            title: 'Beyond SaaS Security',
            description: 'While competitors focus on app inventory and configuration, Above builds the foundation for comprehensive workforce risk management'
        }
    },

    businessCase: {
        title: 'Business Case Summary',
        strategicValue: [
            {
                value: 'Fill the visibility gap',
                description: 'Bridge between authentication and application usage',
                icon: 'fas fa-eye'
            },
            {
                value: 'Prevent incidents',
                description: 'Stop threats rather than just detect them after damage occurs',
                icon: 'fas fa-shield'
            },
            {
                value: 'Reduce tool sprawl',
                description: 'Replace multiple point solutions with behavioral intelligence',
                icon: 'fas fa-layer-group'
            },
            {
                value: 'Future-proof security',
                description: 'Runtime protection that scales with SaaS adoption',
                icon: 'fas fa-rocket'
            }
        ],
        operationalBenefits: [
            {
                benefit: 'Faster incident response',
                description: 'Complete session timelines',
                icon: 'fas fa-clock'
            },
            {
                benefit: 'Reduced false positives',
                description: 'Through semantic understanding',
                icon: 'fas fa-filter'
            },
            {
                benefit: 'No infrastructure changes',
                description: 'Required for deployment',
                icon: 'fas fa-server'
            },
            {
                benefit: 'Immediate value',
                description: 'From day-one discovery and protection',
                icon: 'fas fa-bolt'
            }
        ],
        roiCalculation: [
            {
                item: 'Prevent one major insider incident',
                value: '5-10x annual platform cost',
                type: 'prevention'
            },
            {
                item: 'Reduce investigation time by 50%',
                value: 'Analyst productivity gains',
                type: 'efficiency'
            },
            {
                item: 'Eliminate redundant tools',
                value: 'Cost consolidation opportunities',
                type: 'consolidation'
            },
            {
                item: 'Accelerate compliance',
                value: 'Reduced audit and remediation costs',
                type: 'compliance'
            }
        ]
    },

    whyNow: {
        title: 'Why Now?',
        threatLandscape: [
            {
                threat: 'AI-powered attacks',
                description: 'Bypassing traditional email security',
                icon: 'fas fa-robot'
            },
            {
                threat: 'Insider threats',
                description: 'Increasing with remote work and economic uncertainty',
                icon: 'fas fa-user-times'
            },
            {
                threat: 'SaaS sprawl',
                description: 'Creating ungoverned risk across organizations',
                icon: 'fas fa-expand-arrows-alt'
            },
            {
                threat: 'Regulatory requirements',
                description: 'Demanding better behavioral monitoring',
                icon: 'fas fa-gavel'
            }
        ],
        technologyReadiness: [
            {
                tech: 'Browser-native deployment',
                description: 'Enables universal coverage',
                icon: 'fas fa-globe'
            },
            {
                tech: 'LLM analysis',
                description: 'Provides semantic understanding at scale',
                icon: 'fas fa-brain'
            },
            {
                tech: 'Real-time prevention',
                description: 'Stops attacks before completion',
                icon: 'fas fa-stop'
            },
            {
                tech: 'Zero-trust architecture',
                description: 'Demands runtime identity protection',
                icon: 'fas fa-lock'
            }
        ]
    }
};

const CISOBusinessCase = () => {
    useEffect(() => {
        try {
            // Initialize analytics
            initializeClarity();
            
            // Set user properties for this specific use case
            claritySet('page_type', 'ciso_business_case');
            claritySet('content_category', 'business_case');
            claritySet('user_intent', 'evaluation');
            
            // Track page view
            clarityEvent('ciso_business_case_viewed', {
                timestamp: new Date().toISOString(),
                user_type: 'ciso_evaluation'
            });
            
            console.log('CISO Business Case analytics initialized');
        } catch (error) {
            console.warn('Analytics initialization failed:', error);
        }
    }, []);

    const handleMetricClick = (metric) => {
        try {
            clarityEvent('business_metric_viewed', { metric });
            console.log(`Business metric viewed: ${metric}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    const handleCompetitorClick = (competitor) => {
        try {
            clarityEvent('competitor_comparison_viewed', { competitor });
            console.log(`Competitor comparison viewed: ${competitor}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    const handleROIClick = (item) => {
        try {
            clarityEvent('roi_item_viewed', { item });
            console.log(`ROI item viewed: ${item}`);
        } catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    };

    return (
        <>
            {/* Document Head Metadata */}
            <title>{CISO_BUSINESS_CASE_DATA.title} - Above Security Business Case</title>
            <meta name="description" content={CISO_BUSINESS_CASE_DATA.description} />
            <meta name="keywords" content="CISO business case, runtime ITDR, insider protection, SaaS security, behavioral analysis" />

            <div className="ciso-business-case-container" data-testid="ciso-business-case">
                {/* Floating Navigation */}
                <FloatingNavigation />
                
                <div className="ciso-business-case-content">
                    {/* Header */}
                    <HeroSection 
                        title={CISO_BUSINESS_CASE_DATA.title}
                        subtitle={CISO_BUSINESS_CASE_DATA.subtitle}
                        description={CISO_BUSINESS_CASE_DATA.description}
                        icon={CISO_BUSINESS_CASE_DATA.icon}
                        accentColor={CISO_BUSINESS_CASE_DATA.color}
                        className="ciso-business-case-header"
                    />

                    <main>
                        <ContentGroup id="what-we-do">
                            {/* Executive Summary */}
                            <ExecutiveSummary 
                                summary={CISO_BUSINESS_CASE_DATA.executiveSummary}
                                variant="dark"
                            />

                            {/* How We Do It */}
                            <section className="how-we-do-it" role="region" aria-labelledby="how-heading">
                                <SectionHeader
                                    id="how-heading"
                                    title={CISO_BUSINESS_CASE_DATA.howWeDoIt.title}
                                    icon="fas fa-cogs"
                                    description="Three-pillar approach to runtime identity protection"
                                />
                                <CardGrid className="how-we-do-it-grid">
                                    {CISO_BUSINESS_CASE_DATA.howWeDoIt.sections.map((section, index) => (
                                        <div key={index} className="how-we-do-it-card">
                                            <div className="card-icon">
                                                <i className={section.icon}></i>
                                            </div>
                                            <div className="card-content">
                                                <h3>{section.title}</h3>
                                                <p>{section.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </CardGrid>
                            </section>
                        </ContentGroup> {/* End What We Do */}

                        <ContentGroup id="success-metrics">
                            {/* Success Metrics */}
                            <section className="success-metrics" role="region" aria-labelledby="success-heading">
                                <SectionHeader
                                    id="success-heading"
                                    title="What Success Looks Like"
                                    icon="fas fa-trophy"
                                    description="Measurable outcomes and deployment timeline"
                                />

                                {/* Timeline */}
                                <div className="deployment-timeline">
                                    <h3>{CISO_BUSINESS_CASE_DATA.successMetrics.title}</h3>
                                    <div className="timeline-phases">
                                        {CISO_BUSINESS_CASE_DATA.successMetrics.phases.map((phase, index) => (
                                            <div key={index} className="timeline-phase" style={{'--phase-color': phase.color}}>
                                                <div className="phase-header">
                                                    <span className="phase-number">{index + 1}</span>
                                                    <h4>{phase.phase}</h4>
                                                    <span className="phase-timeline">{phase.timeline}</span>
                                                </div>
                                                <p className="phase-outcome">{phase.outcome}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Measurable Outcomes */}
                                <div className="measurable-outcomes">
                                    <h3>Measurable Outcomes</h3>
                                    <div className="outcomes-grid">
                                        {CISO_BUSINESS_CASE_DATA.successMetrics.measurableOutcomes.map((outcome, index) => (
                                            <MetricCard
                                                key={index}
                                                metric={outcome}
                                                onClick={handleMetricClick}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </ContentGroup> {/* End Success Metrics */}

                        <ContentGroup id="competitive-differentiation">
                            {/* Competitive Differentiation */}
                            <section className="competitive-differentiation" role="region" aria-labelledby="competitive-heading">
                                <SectionHeader
                                    id="competitive-heading"
                                    title={CISO_BUSINESS_CASE_DATA.competitiveDifferentiation.title}
                                    icon="fas fa-chess"
                                    description="How Above's behavioral intelligence differs from shadow app discovery tools"
                                />

                                {/* Fundamental Difference Table */}
                                <div className="fundamental-difference">
                                    <h3>{CISO_BUSINESS_CASE_DATA.competitiveDifferentiation.subtitle}</h3>
                                    <div className="comparison-table">
                                        <div className="table-header">
                                            <div>Approach</div>
                                            <div>Obsidian/Reco/Grip Approach</div>
                                            <div>Above Security</div>
                                        </div>
                                        {CISO_BUSINESS_CASE_DATA.competitiveDifferentiation.comparisonTable.map((row, index) => (
                                            <div key={index} className="table-row">
                                                <div className="category">{row.category}</div>
                                                <div className="traditional">{row.traditional}</div>
                                                <div className="above">{row.above}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Specific Competitor Comparison */}
                                <div className="specific-competitors">
                                    <h3>Direct Feature Comparison vs. Obsidian/Reco/Grip</h3>
                                    <div className="competitor-comparison-table">
                                        <div className="table-header">
                                            <div>Category</div>
                                            <div>Obsidian/Reco/Grip</div>
                                            <div>Above Security</div>
                                        </div>
                                        {CISO_BUSINESS_CASE_DATA.competitiveDifferentiation.specificCompetitors.map((row, index) => (
                                            <div key={index} className="table-row" onClick={() => handleCompetitorClick(row.category)}>
                                                <div className="category">{row.category}</div>
                                                <div className="competitors">{row.competitors}</div>
                                                <div className="above">{row.above}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* What Traditional Tools Miss */}
                                <div className="traditional-tool-gaps">
                                    <h3>What Shadow App Discovery Tools Miss</h3>
                                    <CardGrid className="gaps-grid">
                                        {CISO_BUSINESS_CASE_DATA.competitiveDifferentiation.traditionalToolMisses.map((gap, index) => (
                                            <div key={index} className="gap-card">
                                                <div className="gap-icon">
                                                    <i className={gap.icon}></i>
                                                </div>
                                                <div className="gap-content">
                                                    <h4>{gap.gap}</h4>
                                                    <p>{gap.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardGrid>
                                </div>
                            </section>
                        </ContentGroup> {/* End Competitive Differentiation */}

                        <ContentGroup id="strategic-vision">
                            {/* Strategic Vision */}
                            <section className="strategic-vision" role="region" aria-labelledby="vision-heading">
                                <SectionHeader
                                    id="vision-heading"
                                    title={CISO_BUSINESS_CASE_DATA.strategicVision.title}
                                    icon="fas fa-eye"
                                    description="Long-term market opportunity and platform evolution"
                                />

                                {/* Market Opportunity */}
                                <div className="market-opportunity">
                                    <h3>{CISO_BUSINESS_CASE_DATA.strategicVision.marketOpportunity.title}</h3>
                                    <p>{CISO_BUSINESS_CASE_DATA.strategicVision.marketOpportunity.description}</p>
                                    
                                    <div className="vision-phases">
                                        {CISO_BUSINESS_CASE_DATA.strategicVision.marketOpportunity.phases.map((phase, index) => (
                                            <div key={index} className="vision-phase">
                                                <h4>{phase.phase}</h4>
                                                <span className="phase-timeline">{phase.timeline}</span>
                                                <p>{phase.focus}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Beyond SaaS Security */}
                                <div className="beyond-saas">
                                    <h3>{CISO_BUSINESS_CASE_DATA.strategicVision.beyondSaasSecurity.title}</h3>
                                    <p>{CISO_BUSINESS_CASE_DATA.strategicVision.beyondSaasSecurity.description}</p>
                                </div>
                            </section>
                        </ContentGroup> {/* End Strategic Vision */}

                        <ContentGroup id="business-case">
                            {/* Business Case Summary */}
                            <section className="business-case-summary" role="region" aria-labelledby="business-case-heading">
                                <SectionHeader
                                    id="business-case-heading"
                                    title={CISO_BUSINESS_CASE_DATA.businessCase.title}
                                    icon="fas fa-chart-line"
                                    description="Strategic value, operational benefits, and ROI calculation"
                                />

                                {/* Strategic Value */}
                                <div className="strategic-value">
                                    <h3>Strategic Value</h3>
                                    <CardGrid className="value-grid">
                                        {CISO_BUSINESS_CASE_DATA.businessCase.strategicValue.map((value, index) => (
                                            <div key={index} className="value-card">
                                                <div className="value-icon">
                                                    <i className={value.icon}></i>
                                                </div>
                                                <div className="value-content">
                                                    <h4>{value.value}</h4>
                                                    <p>{value.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardGrid>
                                </div>

                                {/* Operational Benefits */}
                                <div className="operational-benefits">
                                    <h3>Operational Benefits</h3>
                                    <CardGrid className="benefits-grid">
                                        {CISO_BUSINESS_CASE_DATA.businessCase.operationalBenefits.map((benefit, index) => (
                                            <div key={index} className="benefit-card">
                                                <div className="benefit-icon">
                                                    <i className={benefit.icon}></i>
                                                </div>
                                                <div className="benefit-content">
                                                    <h4>{benefit.benefit}</h4>
                                                    <p>{benefit.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardGrid>
                                </div>

                                {/* ROI Calculation */}
                                <div className="roi-calculation">
                                    <h3>ROI Calculation</h3>
                                    <div className="roi-grid">
                                        {CISO_BUSINESS_CASE_DATA.businessCase.roiCalculation.map((roi, index) => (
                                            <div key={index} className={`roi-card roi-${roi.type}`} onClick={() => handleROIClick(roi.item)}>
                                                <h4>{roi.item}</h4>
                                                <p>{roi.value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </ContentGroup> {/* End Business Case */}

                        <ContentGroup id="why-now">
                            {/* Why Now */}
                            <section className="why-now" role="region" aria-labelledby="why-now-heading">
                                <SectionHeader
                                    id="why-now-heading"
                                    title={CISO_BUSINESS_CASE_DATA.whyNow.title}
                                    icon="fas fa-clock"
                                    description="The threat landscape and technology readiness converge"
                                />

                                {/* Threat Landscape */}
                                <div className="threat-landscape">
                                    <h3>The Threat Landscape is Evolving</h3>
                                    <CardGrid className="threats-grid">
                                        {CISO_BUSINESS_CASE_DATA.whyNow.threatLandscape.map((threat, index) => (
                                            <div key={index} className="threat-card">
                                                <div className="threat-icon">
                                                    <i className={threat.icon}></i>
                                                </div>
                                                <div className="threat-content">
                                                    <h4>{threat.threat}</h4>
                                                    <p>{threat.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardGrid>
                                </div>

                                {/* Technology Readiness */}
                                <div className="technology-readiness">
                                    <h3>The Technology is Ready</h3>
                                    <CardGrid className="tech-grid">
                                        {CISO_BUSINESS_CASE_DATA.whyNow.technologyReadiness.map((tech, index) => (
                                            <div key={index} className="tech-card">
                                                <div className="tech-icon">
                                                    <i className={tech.icon}></i>
                                                </div>
                                                <div className="tech-content">
                                                    <h4>{tech.tech}</h4>
                                                    <p>{tech.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </CardGrid>
                                </div>
                            </section>
                        </ContentGroup> {/* End Why Now */}

                        {/* Call to Action */}
                        <ContentGroup id="call-to-action">
                            <section className="summary-cta" role="region" aria-labelledby="summary-heading">
                                <div className="cta-gradient-background"></div>
                                <div className="cta-content">
                                    <h2 id="summary-heading">The future of identity security is runtime. Above is that future.</h2>
                                    <p className="cta-description">
                                        68% of breaches involve a human element — yet most security tools focus on infrastructure, not user behavior. Above provides the runtime visibility and protection that traditional tools can't deliver.
                                    </p>
                                    <div className="cta-highlight">
                                        <h3>Ready to see what your users are really doing after they log in?</h3>
                                        <p className="cta-tagline">
                                            <strong>Runtime behavioral intelligence. Real-time prevention. Zero infrastructure changes.</strong>
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

export default CISOBusinessCase;
