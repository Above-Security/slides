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
import '../styles/InsiderThreat.css';

/**
 * InsiderThreat Use Case Component - Comprehensive Insider Protection
 * 
 * This component is completely self-contained with its own:
 * - Data structure (embedded) - enhanced with real-world use case scenarios
 * - Styling (InsiderThreat.css)
 * - Analytics tracking
 * - Error handling
 * - Navigation logic
 * 
 * Features:
 * - 4 real-world insider protection scenarios from actual use cases
 * - Executive summary with key business challenges
 * - Real-world incidents with impact analysis
 * - Traditional tool gaps analysis
 * - Above differentiators and capabilities
 * - Business impact metrics
 * - Compliance alignment
 * - Strategic fit analysis
 * - POV success criteria with timeline
 * - Human-centric security positioning
 * - Focus on "protection" rather than "threat" language
 */

// Comprehensive Insider Protection Data - Enterprise Grade
const INSIDER_PROTECTION_DATA = {
    id: 'insider-protection',
    title: 'Insider Protection',
    subtitle: 'Post-auth browser visibility for human-centric security',
    description: 'Real-time detection and response to insider threats through browser-based monitoring of user behavior across all SaaS applications, with semantic understanding of intent and context.',
    icon: 'fas fa-user-shield',
    color: 'var(--brand-primary)',

    executiveSummary: {
        title: 'Executive Summary',
        description: 'Most security tools focus on getting in. But today\'s biggest risks come after login. According to Verizon\'s DBIR and IBM X-Force, 68%+ of breaches involve a human element. Many aren\'t "hacks" — they\'re gray-area misuse by insiders: scraping data before departure, using unsanctioned AI tools, or exporting financial records without technically violating policy. Above provides a human-centric approach that educates and guides users through real-time engagement, understanding the full spectrum of insider threats from curiosity-driven boundary testing to sophisticated espionage.',
        keyPoints: [
            'Visibility ends after login - SIEM, DLP, CASB stop at the door',
            'SaaS, shadow AI, and long-tail apps are blind spots',
            'Traditional tools can\'t detect intent, motives, or behavioral drift',
            'Above provides educational nudging and justification requests in real-time',
            'Comprehensive coverage from personal use violations to complex espionage patterns',
            'Human-centric approach focuses on protection and education, not punishment'
        ]
    },

    realWorldIncidents: [
        {
            id: 'notion-session-reuse',
            title: 'Notion Session After IdP Offboarding',
            icon: 'fas fa-user-clock',
            description: 'Contractor deprovisioned in Rippling but continued accessing Notion using saved session cookies. No alert fired in IdP or CASB.',
            impact: 'Continued access to sensitive company data post-termination',
            attackVector: 'Stale session cookies → Notion access → Data exposure',
            abovePrevention: 'Above detected stale session reuse in real-time, correlating with IdP offboarding events',
            severity: 'critical',
            affected: 'Terminated contractors',
            category: 'Offboarding Drift'
        },
        {
            id: 'confluence-financial-export',
            title: 'Confluence Export of Financial Data',
            icon: 'fas fa-file-export',
            description: 'Deel contractor exported invoices incrementally via valid actions over several days. DLP missed gradual data extraction.',
            impact: 'Financial data exfiltration through legitimate user actions',
            attackVector: 'Legitimate access → Incremental exports → Data theft',
            abovePrevention: 'Above flagged behavioral drift after two suspicious sessions through semantic analysis, prompting HR investigation and policy clarification',
            severity: 'high',
            affected: 'Financial records',
            category: 'Behavioral Drift'
        },
        {
            id: 'oauth-unsanctioned-apps',
            title: 'OAuth Grants to Unapproved Apps',
            icon: 'fas fa-link',
            description: 'Employee granted OAuth permissions to unsanctioned third-party applications, creating shadow IT data exposure risks.',
            impact: 'Shadow IT data exposure through unauthorized app permissions',
            attackVector: 'OAuth consent → Unsanctioned app → Data access',
            abovePrevention: 'Real-time OAuth grant monitoring with application risk assessment, policy correlation, and user education about app risks with justification requests',
            severity: 'medium',
            affected: 'Corporate data',
            category: 'SaaS Misuse'
        },
        {
            id: 'genai-sensitive-data',
            title: 'Sensitive Data into GenAI Tools',
            icon: 'fas fa-robot',
            description: 'Engineer pasted proprietary code and customer data into ChatGPT for debugging assistance, violating data handling policies.',
            impact: 'IP and customer data exposure through AI tool misuse',
            attackVector: 'Code debugging → ChatGPT → Data exposure',
            abovePrevention: 'Above detects sensitive data patterns in real-time, provides contextual nudge with approved alternatives, and requests justification for AI tool usage',
            severity: 'high',
            affected: 'Proprietary code and customer data',
            category: 'AI & Extension Misuse'
        }
    ],

    traditionalToolGaps: [
        {
            tool: 'SIEM',
            limitation: 'Stops at login - no visibility into post-auth SaaS behavior',
            coverage: '25%'
        },
        {
            tool: 'DLP',
            limitation: 'Misses gradual data extraction and intent-based behavior',
            coverage: '30%'
        },
        {
            tool: 'CASB',
            limitation: 'API-based visibility misses browser-native interactions',
            coverage: '35%'
        },
        {
            tool: 'IdP/SSO',
            limitation: 'Session management gaps allow stale credential reuse',
            coverage: '40%'
        },
        {
            tool: 'UBA/UEBA',
            limitation: 'Retrospective analysis - detection after damage is done',
            coverage: '30%'
        },
        {
            tool: 'EDR',
            limitation: 'No insight into SaaS app behavior or user intent',
            coverage: '20%'
        }
    ],

    aboveDifferentiators: [
        {
            capability: 'Real-Time User Engagement & Nudging',
            description: 'Interactive in-browser guidance that educates users about policy violations in real-time, with justification requests for context',
            icon: 'fas fa-hand-point-right'
        },
        {
            capability: 'Comprehensive Threat Motive Analysis',
            description: 'Deep understanding of insider threat motives from curiosity to espionage, covering all 22 motive categories in the insider threat matrix',
            icon: 'fas fa-brain'
        },
        {
            capability: 'Educational Policy Enforcement',
            description: 'Focus on teaching users why actions are risky rather than punitive blocking, with contextual explanations and alternative suggestions',
            icon: 'fas fa-graduation-cap'
        },
        {
            capability: 'Behavioral Pattern Recognition',
            description: 'Advanced detection of means and methods across all threat categories - from boundary testing to sophisticated espionage techniques',
            icon: 'fas fa-search'
        },
        {
            capability: 'Human-Centric Protection Framework',
            description: 'From "Insider Threat" to "Insider Protection" - helping users make better decisions while maintaining security',
            icon: 'fas fa-heart'
        },
        {
            capability: 'Multi-Vector Coverage',
            description: 'Monitors everything from excessive personal use to sophisticated data exfiltration, understanding both technical means and human motivations',
            icon: 'fas fa-network-wired'
        }
    ],

    businessImpact: {
        metrics: [
            {
                metric: 'Mean Time to Detection (MTTD)',
                before: 'Hours to days (if detected)',
                after: '<15 minutes',
                improvement: '99%'
            },
            {
                metric: 'User education & policy compliance',
                before: 'Reactive training after incidents',
                after: 'Real-time guidance and justification',
                improvement: '85%'
            },
            {
                metric: 'SaaS app coverage',
                before: '~40% (API-dependent)',
                after: '>95% including unsanctioned',
                improvement: '137%'
            },
            {
                metric: 'False positive rate',
                before: '15-20% (rule-based)',
                after: '<2% (semantic analysis)',
                improvement: '90%'
            }
        ]
    },

    complianceAlignment: [
        {
            framework: 'NIST Cybersecurity Framework',
            coverage: 'Continuous monitoring and response to insider threats',
            icon: 'fas fa-certificate'
        },
        {
            framework: 'Zero Trust Architecture',
            coverage: 'Never trust, always verify - even for authenticated users',
            icon: 'fas fa-lock'
        },
        {
            framework: 'SOC 2 Type II',
            coverage: 'Comprehensive audit trails of user behavior and policy enforcement',
            icon: 'fas fa-shield-alt'
        },
        {
            framework: 'GDPR/Data Protection',
            coverage: 'Data handling monitoring and breach prevention',
            icon: 'fas fa-gavel'
        }
    ],

    strategicAlignment: {
        title: 'Strategic Security Stack Enhancement',
        benefits: [
            'Augments existing tools rather than replacing them',
            'Provides visibility where SIEM, DLP, and CASB have gaps',
            'Enables proactive protection vs. reactive detection',
            'Reduces dependency on log-based correlation'
        ]
    },

    povSuccess: {
        timeline: '2 Weeks to Prove Value',
        timelineDescription: 'Structured proof-of-value demonstrating real insider protection capabilities',

        phases: [
            {
                phase: 'Foundation',
                duration: 'Days 1-3',
                color: '#08872B',
                title: 'Deploy & Baseline',
                description: 'Setup Above extension and establish comprehensive security baseline.',
                keyMilestones: [
                    'Deploy Above extension via MDM (<1 day)',
                    'Auto-learn normal behavior per role/app',
                    'Begin real-time monitoring across SaaS applications',
                    'Establish baseline metrics for insider risk'
                ],
                deliverable: 'Baseline Report',
                stakeholders: 'IT, Security Team'
            },
            {
                phase: 'Validation',
                duration: 'Days 4-10',
                color: '#1F7A3A',
                title: 'Live Detection & Analysis',
                description: 'Monitor real insider behaviors and validate Above effectiveness.',
                keyMilestones: [
                    'Detect OAuth grants to unapproved apps',
                    'Monitor for behavioral drift and policy violations',
                    'Test real-time user education and nudging',
                    'Validate cross-app behavior correlation'
                ],
                deliverable: 'Detection Report',
                stakeholders: 'Security Operations'
            },
            {
                phase: 'Business Case',
                duration: 'Days 11-14',
                color: '#0D5421',
                title: 'ROI Analysis & Decision',
                description: 'Compile comprehensive business case and integration assessment.',
                keyMilestones: [
                    'Demonstrate visibility gaps filled',
                    'Show integration with existing security stack',
                    'Quantify risk reduction and efficiency gains',
                    'Present executive summary and recommendations'
                ],
                deliverable: 'Business Case',
                stakeholders: 'CISO, Executives'
            }
        ],

        coreMetrics: [
            'OAuth grants to unapproved apps detected',
            'Stale session reuse after offboarding flagged',
            'Behavioral drift patterns identified',
            'GenAI data exposure incidents prevented'
        ],
        executiveOutcomes: [
            'Evidence of post-login visibility gaps filled',
            'Demonstrated human-centric security approach with user engagement',
            'Quantified insider risk reduction through education and prevention',
            'Clear ROI on insider protection investment with reduced incidents'
        ],
        buyingTriggers: [
            'Recent insider incident or near-miss',
            'Compliance requirement for insider monitoring',
            'Strategic initiative to reduce human risk factors'
        ]
    }
};

const InsiderThreat = () => {
    useEffect(() => {
        try {
            // Initialize Clarity tracking for this specific use case
            initializeClarity();
            clarityEvent('insider_protection_view');
            claritySet('page_type', 'insider_protection');
            claritySet('use_case', 'insider-protection');
            console.log('Insider Protection component loaded with analytics');
        } catch (error) {
            console.warn('Analytics initialization failed in Insider Protection:', error);
        }
    }, []);

    const handleIncidentClick = (incidentId) => {
        try {
            clarityEvent('insider_incident_clicked', { incident: incidentId });
            console.log(`Insider incident clicked: ${incidentId}`);
        } catch (error) {
            console.warn('Analytics tracking failed in Insider Protection:', error);
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
            <title>{INSIDER_PROTECTION_DATA.title} - Above Security Use Cases</title>
            <meta name="description" content={INSIDER_PROTECTION_DATA.description} />
            <meta name="keywords" content="insider threat, insider protection, Runtime Insider Protection, behavioral analysis, post-auth monitoring" />

            <div className="insider-protection-container" data-testid="insider-protection">
                {/* Floating Navigation */}
                <FloatingNavigation />
                
                <div className="insider-protection-content">
                    {/* Header */}
                    <HeroSection 
                        title={INSIDER_PROTECTION_DATA.title}
                        subtitle={INSIDER_PROTECTION_DATA.subtitle}
                        description={INSIDER_PROTECTION_DATA.description}
                        icon={INSIDER_PROTECTION_DATA.icon}
                        accentColor={INSIDER_PROTECTION_DATA.color}
                        className="insider-protection-header"
                    />

                    <main>
                        <ContentGroup id="problem-definition">
                            {/* Executive Summary */}
                            <ExecutiveSummary 
                                summary={INSIDER_PROTECTION_DATA.executiveSummary}
                                variant="dark"
                            />

                            {/* Real-World Incidents */}
                            <section className="real-world-incidents" role="region" aria-labelledby="incidents-heading">
                                <SectionHeader
                                    id="incidents-heading"
                                    title="Real-World Insider Protection Incidents"
                                    icon="fas fa-exclamation-triangle"
                                    description="Examples of insider threats that bypass traditional security controls"
                                />
                                <div className="incidents-grid">
                                    {INSIDER_PROTECTION_DATA.realWorldIncidents.map((incident) => (
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
                                    title="Why Traditional Tools Miss Insider Threats"
                                    icon="fas fa-exclamation-circle"
                                    description="Coverage gaps in existing security solutions against insider threats"
                                />
                                <CardGrid className="tool-gaps-grid">
                                    {INSIDER_PROTECTION_DATA.traditionalToolGaps.map((tool, index) => (
                                        <ToolGapCard
                                            key={index}
                                            tool={tool}
                                            onClick={handleToolGapClick}
                                        />
                                    ))}
                                </CardGrid>
                            </section>

                            {/* Insider Threat Matrix Coverage */}
                            <section className="threat-matrix-coverage" role="region" aria-labelledby="matrix-heading">
                                <SectionHeader
                                    id="matrix-heading"
                                    title="Complete Insider Threat Matrix Coverage"
                                    icon="fas fa-chess-board"
                                    description="Above understands and detects the full spectrum of insider threat motives, means, and methods"
                                />
                                <div className="matrix-coverage-grid">
                                    <div className="coverage-category">
                                        <h3><i className="fas fa-heart"></i> Motives Covered</h3>
                                        <p>From innocent curiosity to sophisticated espionage:</p>
                                        <ul>
                                            <li><strong>Boundary Testing:</strong> Curiosity-driven policy testing</li>
                                            <li><strong>Personal Gain:</strong> Financial motivation and competitive advantage</li>
                                            <li><strong>Resentment:</strong> Vindictive actions and revenge-motivated behavior</li>
                                            <li><strong>Espionage:</strong> Systematic intelligence gathering for competitors</li>
                                            <li><strong>Ideology:</strong> Mission-driven data targeting and activist behavior</li>
                                            <li><strong>Third-party Collusion:</strong> External coordination and financial motivation</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="coverage-category">
                                        <h3><i className="fas fa-tools"></i> Methods Detected</h3>
                                        <p>Comprehensive detection across all attack vectors:</p>
                                        <ul>
                                            <li><strong>Data Staging:</strong> Bulk data organization and preparation</li>
                                            <li><strong>Circumventing Controls:</strong> Security bypass attempts</li>
                                            <li><strong>Media Capture:</strong> Screenshots and screen recording</li>
                                            <li><strong>Position Seeking:</strong> Strategic role positioning for access</li>
                                            <li><strong>Privilege Escalation:</strong> Unauthorized access expansion</li>
                                            <li><strong>Social Engineering:</strong> Internal influence and manipulation</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="coverage-category">
                                        <h3><i className="fas fa-graduation-cap"></i> User Engagement</h3>
                                        <p>Educational approach that protects and guides:</p>
                                        <ul>
                                            <li><strong>Real-time Nudging:</strong> In-browser guidance when risks are detected</li>
                                            <li><strong>Justification Requests:</strong> Context gathering for policy violations</li>
                                            <li><strong>Educational Explanations:</strong> Why actions are risky and what alternatives exist</li>
                                            <li><strong>Progressive Enforcement:</strong> Escalating responses based on behavior patterns</li>
                                            <li><strong>Contextual Alternatives:</strong> Suggesting approved tools and workflows</li>
                                            <li><strong>Policy Clarification:</strong> Real-time education about security policies</li>
                                        </ul>
                                    </div>
                                </div>
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
                                    {INSIDER_PROTECTION_DATA.aboveDifferentiators.map((diff, index) => (
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
                                    {INSIDER_PROTECTION_DATA.businessImpact.metrics.map((metric, index) => (
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
                                            {INSIDER_PROTECTION_DATA.complianceAlignment.map((item, index) => (
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
                                        <h3>{INSIDER_PROTECTION_DATA.strategicAlignment.title}</h3>
                                        <ul className="strategic-benefits">
                                            {INSIDER_PROTECTION_DATA.strategicAlignment.benefits.map((benefit, index) => (
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

                        {/* Implementation */}
                        <ContentGroup id="implementation">
                            {/* POV Success Criteria */}
                            <section className="pov-success" role="region" aria-labelledby="pov-heading">
                                <div className="section-header">
                                    <h2 id="pov-heading" className="section-title">
                                        <i className="fas fa-bullseye"></i>
                                        What a Successful POV Looks Like
                                    </h2>
                                    <div className="timeline-hero">
                                        <h3 className="timeline-title">{INSIDER_PROTECTION_DATA.povSuccess.timeline}</h3>
                                        <p className="timeline-description">{INSIDER_PROTECTION_DATA.povSuccess.timelineDescription}</p>
                                    </div>
                                </div>

                                {/* Executive Horizontal Timeline */}
                                <div className="timeline">
                                    <div className="timeline-phases-container">
                                        {INSIDER_PROTECTION_DATA.povSuccess.phases.map((phase, index) => (
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
                                        items={INSIDER_PROTECTION_DATA.povSuccess.coreMetrics}
                                    />
                                    <POVSection 
                                        title="Executive Outcomes"
                                        items={INSIDER_PROTECTION_DATA.povSuccess.executiveOutcomes}
                                    />
                                    <POVSection 
                                        title="CISO Buying Triggers"
                                        items={INSIDER_PROTECTION_DATA.povSuccess.buyingTriggers}
                                    />
                                </div>
                            </section>
                        </ContentGroup> {/* End Implementation */}

                        {/* Call to Action */}
                        <ContentGroup id="call-to-action">
                            {/* Summary Call-to-Action */}
                            <section className="summary-cta" role="region" aria-labelledby="summary-heading">
                                <div className="cta-gradient-background"></div>
                                <div className="cta-content">
                                    <h2 id="summary-heading">From "Insider Threat" to "Insider Protection"</h2>
                                    <p className="cta-description">
                                        Most insider risk isn't malicious — it's users trying to get work done, the wrong way. Above provides the visibility and context needed to protect both your organization and your people.
                                    </p>
                                    <div className="cta-highlight">
                                        <h3>Above is the only Runtime Insider Protection platform capable of detecting and preventing insider threats in real-time, with human-centric protection rather than punishment.</h3>
                                        <p className="cta-tagline">
                                            <strong>Post-auth visibility. Behavioral analysis. Human-centric protection.</strong>
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

export default InsiderThreat;
