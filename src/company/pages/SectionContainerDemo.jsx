import React, { useEffect } from 'react';
import SectionContainer from '../../components/SectionContainer';
import FloatingTOC from '../../components/FloatingTOC';
import { initializeClarity, clarityEvent } from '../../utils/clarity';
import './SectionContainerDemo.css';

/**
 * SectionContainerDemo - Preview of styled section containers
 * 
 * Features:
 * - Three demo sections with different variants
 * - Integration with FloatingTOC
 * - Real narrative content structure
 * - Entrance animations and design token showcase
 */
const SectionContainerDemo = () => {
  useEffect(() => {
    try {
      initializeClarity();
      clarityEvent('section_container_demo_view');
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }, []);

  // TOC sections configuration
  const tocSections = [
    { id: 'vision', title: 'Vision Statement', level: 1 },
    { id: 'go-to-market', title: 'Year-1 Go-to-Market', level: 1 },
    { id: 'pov-playbook', title: 'PoV & Success Playbook', level: 1 },
    { id: 'metrics', title: 'Metrics That Matter', level: 1 },
    { id: 'positioning', title: 'Replace vs Enhance', level: 1 }
  ];

  return (
    <div className="section-demo-container">
      <FloatingTOC sections={tocSections} />
      
      <div className="demo-content">
        <header className="demo-header">
          <h1>SectionContainer Component Showcase</h1>
          <p className="demo-subtitle">Branded, animated content sections with design token integration</p>
        </header>

        {/* Vision Section - High priority with clean styling */}
        <SectionContainer
          id="vision"
          title="0. Vision in One Sentence"
          variant="vision"
          priority="high"
        >
          <div>
            <p>
              <em>Become the browser‑native control plane that sees and stops what every other security tool misses – from sophisticated phishing to gray‑area insider misuse – without changing how users work.</em>
            </p>
            <div>
              <p>This foundational vision drives every product decision, architectural choice, and go-to-market strategy. It represents our commitment to seamless security that enhances rather than disrupts user workflows.</p>
              
              <h3>Strategic Positioning</h3>
              <p>We occupy the unique intersection of <strong>browser security</strong>, <strong>user behavior analytics</strong>, and <strong>zero-friction deployment</strong> – a space no incumbent can easily replicate due to technical and go-to-market constraints.</p>
            </div>
          </div>
        </SectionContainer>

        {/* Go-to-Market Section - Executive variant with high priority */}
        <SectionContainer
          id="go-to-market"
          title="1 | YEAR‑1 GO‑TO‑MARKET STRATEGY"
          variant="executive"
          priority="high"
        >
          <div className="section-intro">
            <p><strong>Executive Summary:</strong> Our comprehensive go-to-market strategy focuses on rapid customer acquisition through a proven land-and-expand model, targeting cloud-native organizations with sophisticated security requirements and demonstrable ROI within the first quarter.</p>
          </div>

          <div className="content-grid">
            <div className="strategy-pillar">
              <h3>Sales Motion & Customer Acquisition</h3>
              <p>Three-phase approach designed for predictable revenue growth:</p>
              <ul>
                <li><strong>Land (1‑500 seats):</strong> Direct founder‑led sales with SecOps champions focusing on immediate phishing prevention value</li>
                <li><strong>Expand (500‑5,000 seats):</strong> CISO engagement with comprehensive telemetry and SOC workflow integration</li>
                <li><strong>Scale (5,000+ seats):</strong> Channel partnerships for enterprise deployment with full platform capabilities</li>
              </ul>
            </div>

            <div className="strategy-pillar">
              <h3>Product Packaging & Pricing</h3>
              <p>Tiered offering structure supporting 300%+ expansion revenue:</p>
              <ol>
                <li><strong>Starter ($8/user/month):</strong> PhishGuard core with user coaching and basic reporting</li>
                <li><strong>Growth ($18/user/month):</strong> + ScopeLens telemetry with SIEM integration and advanced analytics</li>
                <li><strong>Platform ($32/user/month):</strong> + Runtime Insider Protection with insider threat detection and forensic workflows</li>
              </ol>
            </div>

            <div className="strategy-pillar">
              <h3>Market Narrative & Positioning</h3>
              <p>Our differentiated positioning in the security landscape:</p>
              <blockquote>
                <em>"Email gateways catch &lt;40% of initial phish. Everything else starts in the browser – we stop it <strong>and</strong> give you post‑auth forensics the instant you need them."</em>
              </blockquote>
              <p>This narrative directly addresses the two largest gaps in current security stacks: <strong>post-delivery phishing</strong> and <strong>insider threat visibility</strong>.</p>
            </div>
          </div>

          <div className="success-metrics">
            <h3>Year-1 Success Metrics</h3>
            <div className="metrics-grid">
              <div className="metric">
                <strong>$2.4M ARR</strong>
                <span>150 customers, avg $16K ACV</span>
              </div>
              <div className="metric">
                <strong>130% NRR</strong>
                <span>Driven by seat expansion + tier upgrades</span>
              </div>
              <div className="metric">
                <strong>&lt;6 month</strong>
                <span>Average sales cycle (pilot to purchase)</span>
              </div>
              <div className="metric">
                <strong>95%+ retention</strong>
                <span>Product stickiness via workflow integration</span>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* PoV Playbook Section - Default variant */}
        <SectionContainer
          id="pov-playbook"
          title="2 | YEAR‑1 POV & SUCCESS PLAYBOOK"
          variant="default"
        >
          <div className="playbook-intro">
            <p className="emphasis-text">
              <em>We get one shot to prove value in less than a monthly sprint. The buyer has five other pilots in flight — we must be the one that actually finishes.</em>
            </p>
          </div>

          <div className="playbook-structure">
            <h3>3-Week Proof of Value Framework</h3>
            <p>Our structured approach ensures consistent pilot success across diverse customer environments:</p>

            <div className="timeline-overview">
              <div className="timeline-phase">
                <h4>Prep Phase (-5 → 0 days)</h4>
                <p>Foundation setting with minimal customer friction. Contract execution, stakeholder alignment, and success criteria definition.</p>
              </div>

              <div className="timeline-phase">
                <h4>Week 1: Instrument</h4>
                <p>Complete deployment across pilot fleet with zero performance impact. Daily touchpoints ensure smooth rollout.</p>
              </div>

              <div className="timeline-phase">
                <h4>Week 2: Observe</h4>
                <p>Passive detection mode reveals unknown risks and near-miss incidents while building confidence in platform capabilities.</p>
              </div>

              <div className="timeline-phase">
                <h4>Week 3: Act & Coach</h4>
                <p>Active protection demonstrates user coaching effectiveness and SOC workflow acceleration. Executive presentation closes with business case.</p>
              </div>
            </div>

            <div className="success-metrics">
              <h4>Pass/Fail Criteria</h4>
              <p>Clear, measurable thresholds eliminate ambiguity in pilot evaluation:</p>
              <ul>
                <li><strong>Phish Prevention:</strong> &gt;90% blocked (fail: &lt;70%)</li>
                <li><strong>User Acceptance:</strong> &lt;2% override rate (fail: ≥5%)</li>
                <li><strong>Analyst Efficiency:</strong> ≥30% faster triage (fail: &lt;10%)</li>
                <li><strong>Deployment Effort:</strong> ≤4 hours total (fail: &gt;8h)</li>
              </ul>
            </div>
          </div>
        </SectionContainer>

        {/* Metrics Section - Executive variant */}
        <SectionContainer
          id="metrics"
          title="3 | METRICS THAT MATTER (LAND → EXPAND)"
          variant="executive"
        >
          <div className="metrics-overview">
            <p>Core performance indicators that drive our land-and-expand model, focusing on demonstrable value delivery and customer expansion opportunities.</p>
          </div>

          <div className="metrics-table">
            <div className="metric-row header-row">
              <div className="metric-cell">Dimension</div>
              <div className="metric-cell">KPI</div>
              <div className="metric-cell">Baseline Pain</div>
              <div className="metric-cell">Win Condition</div>
            </div>
            
            <div className="metric-row">
              <div className="metric-cell"><strong>Phish Prevention</strong></div>
              <div className="metric-cell">% Consent/OAuth phish blocked pre‑credential</div>
              <div className="metric-cell">Unknown</div>
              <div className="metric-cell success">&gt;90% of events</div>
            </div>
            
            <div className="metric-row">
              <div className="metric-cell"><strong>User Coaching</strong></div>
              <div className="metric-cell">Override‑after‑coaching rate</div>
              <div className="metric-cell">N/A</div>
              <div className="metric-cell success">&lt;2%</div>
            </div>
            
            <div className="metric-row">
              <div className="metric-cell"><strong>IR Efficiency</strong></div>
              <div className="metric-cell">Analyst triage time per phish incident</div>
              <div className="metric-cell warning">45 min</div>
              <div className="metric-cell success">&lt;15 min</div>
            </div>
            
            <div className="metric-row">
              <div className="metric-cell"><strong>Visibility Lift</strong></div>
              <div className="metric-cell">Net‑new SaaS apps surfaced</div>
              <div className="metric-cell">?</div>
              <div className="metric-cell success">+20% in 30d</div>
            </div>
            
            <div className="metric-row">
              <div className="metric-cell"><strong>Deployment Friction</strong></div>
              <div className="metric-cell">Support tickets per 1,000 users</div>
              <div className="metric-cell">–</div>
              <div className="metric-cell success">&lt;0.5</div>
            </div>
          </div>
        </SectionContainer>

        {/* Positioning Section - Default variant */}
        <SectionContainer
          id="positioning"
          title="4 | REPLACE vs ENHANCE – POSITIONING"
          variant="default"
        >
          <div className="positioning-intro">
            <p>Strategic market positioning that maximizes adoption while minimizing competitive friction. Our differentiated approach focuses on enhancement over replacement to accelerate sales cycles.</p>
          </div>

          <div className="positioning-grid">
            <div className="positioning-item enhance">
              <h3>Secure Email Gateway</h3>
              <div className="stance">Enhance</div>
              <p className="talk-track"><em>"…we catch what slips after the click."</em></p>
              <p className="risk"><strong>Risk:</strong> Duplication worries – show pass‑through integration</p>
            </div>

            <div className="positioning-item augment">
              <h3>CASB / SSE</h3>
              <div className="stance">Augment now, muzzle later (Year‑2)</div>
              <p className="talk-track"><em>"…CASB sees traffic; we see intent in the UI. Eventually we can enforce same policies without PAC files."</em></p>
              <p className="risk"><strong>Risk:</strong> Must not appear as direct rip‑and‑replace too early</p>
            </div>

            <div className="positioning-item supersede">
              <h3>Push Security</h3>
              <div className="stance">Supersede</div>
              <p className="talk-track"><em>"Push v2 = us + detection + coaching + SIEM timelines."</em></p>
              <p className="risk"><strong>Risk:</strong> Need proof on richer detections</p>
            </div>

            <div className="positioning-item alternative">
              <h3>Enterprise Browser</h3>
              <div className="stance">Lightweight alt</div>
              <p className="talk-track"><em>"Same runtime control without forcing browser swap."</em></p>
              <p className="risk"><strong>Risk:</strong> Browser replacement vendors will spread FUD on extension bypass – have answer</p>
            </div>
          </div>
        </SectionContainer>

        <div className="demo-footer">
          <p>SectionContainer components provide consistent branding, typography, and motion across all content sections.</p>
        </div>
      </div>
    </div>
  );
};

export default SectionContainerDemo;
