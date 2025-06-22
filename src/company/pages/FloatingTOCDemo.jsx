import React, { useEffect } from 'react';
import FloatingTOC from '../../components/FloatingTOC';
import { initializeClarity, clarityEvent } from '../../utils/clarity';
import './FloatingTOCDemo.css';

/**
 * FloatingTOCDemo - Test page for the FloatingTOC component
 * 
 * Features:
 * - Realistic strategic content sections
 * - Proper section IDs for TOC navigation
 * - Content that demonstrates scroll behavior
 * - Mobile-responsive layout
 */
const FloatingTOCDemo = () => {
  useEffect(() => {
    try {
      initializeClarity();
      clarityEvent('floating_toc_demo_view');
    } catch (error) {
      console.warn('Analytics initialization failed:', error);
    }
  }, []);

  // TOC sections configuration
  const tocSections = [
    { id: 'vision', title: 'Vision Statement', level: 1 },
    { id: 'go-to-market', title: 'Year-1 Go-to-Market', level: 1 },
    { id: 'sales-motion', title: 'How We Sell', level: 2 },
    { id: 'packages', title: 'What We Sell', level: 2 },
    { id: 'icp', title: 'Ideal Customer Profile', level: 2 },
    { id: 'pov-playbook', title: 'PoV & Success Playbook', level: 1 },
    { id: 'guardrails', title: 'PoV Guard-Rails', level: 2 },
    { id: 'success-kpis', title: 'Success KPIs', level: 2 },
    { id: 'metrics', title: 'Metrics That Matter', level: 1 },
    { id: 'positioning', title: 'Replace vs Enhance', level: 1 },
    { id: 'roadmap', title: 'Year-2 Expansion Roadmap', level: 1 },
    { id: 'hypotheses', title: 'Deal-Critical Hypotheses', level: 1 },
    { id: 'value-proof', title: 'Proving Value Without Attacks', level: 1 },
    { id: 'risks', title: 'Critical Risks', level: 1 },
    { id: 'executive-summary', title: 'Executive Summary', level: 1 }
  ];

  return (
    <div className="toc-demo-container">
      <FloatingTOC sections={tocSections} />
      
      <div className="demo-content">
        <header className="demo-header">
          <h1>Above Strategic Narrative</h1>
          <p className="demo-subtitle">Two‑Year Strategic Narrative & Execution Plan</p>
        </header>

        <section id="vision" className="demo-section">
          <h2>Vision Statement</h2>
          <div className="vision-content">
            <p className="vision-statement">
              <em>Become the browser‑native control plane that sees and stops what every other security tool misses – from sophisticated phishing to gray‑area insider misuse – without changing how users work.</em>
            </p>
          </div>
        </section>

        <section id="go-to-market" className="demo-section">
          <h2>1 | YEAR‑1 GO‑TO‑MARKET (0‑12 Months)</h2>
          
          <div id="sales-motion" className="demo-subsection">
            <h3>1.1 How We Sell (Motion)</h3>
            <div className="content-block">
              <p>Our sales motion focuses on land-and-expand strategy with three distinct phases:</p>
              <ul>
                <li><strong>Land (1‑500 seats):</strong> Direct founder‑led sales targeting SecOps teams</li>
                <li><strong>Expand (500‑5,000 seats):</strong> CISO engagement with telemetry bundle</li>
                <li><strong>Scale (5,000‑50,000 seats):</strong> MSSP & VAR co‑sell for enterprise</li>
              </ul>
              <div className="narrative-hook">
                <strong>Narrative hook:</strong> <em>"Email gateways catch &lt;40% of initial phish. Everything else starts in the browser – we stop it <strong>and</strong> give you post‑auth forensics the instant you need them."</em>
              </div>
            </div>
          </div>

          <div id="packages" className="demo-subsection">
            <h3>1.2 What We Sell (Packages)</h3>
            <div className="content-block">
              <ol>
                <li><strong>Starter (PhishGuard)</strong> – real‑time phishing soft‑block & coaching (Chrome Extension only)</li>
                <li><strong>Growth (PhishGuard + ScopeLens)</strong> – adds full browser telemetry export to SIEM/XDR</li>
                <li><strong>Platform (Runtime ITDR)</strong> – unlocks Year‑2 detections (privilege misuse, insider drift)</li>
              </ol>
              <div className="critical-stance">
                <strong>Critical stance:</strong> Don't attempt full insider detections in Year‑1 – "visibility first" avoids promise/delivery gap.
              </div>
            </div>
          </div>

          <div id="icp" className="demo-subsection">
            <h3>1.3 Ideal Customer Profile (Beach‑head)</h3>
            <div className="content-block">
              <ul>
                <li><strong>Size:</strong> 500‑5,000 employees (fast buy cycles, material ARR)</li>
                <li><strong>Profile:</strong> Cloud‑native, Google Workspace / M365, heavy SaaS</li>
                <li><strong>Pain triggers:</strong> Recent AitM/OAuth phish scare, overworked IR team</li>
                <li><strong>Tech stack fit:</strong> Okta or Entra ID, CrowdStrike, Splunk/Chronicle</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="pov-playbook" className="demo-section">
          <h2>2 | YEAR‑1 POV & SUCCESS PLAYBOOK</h2>
          <div className="playbook-intro">
            <em>We get one shot to prove value in less than a monthly sprint. The buyer has five other pilots in flight — we must be the one that actually finishes.</em>
          </div>

          <div id="guardrails" className="demo-subsection">
            <h3>2.1 PoV Guard‑Rails (3 Weeks Total)</h3>
            <div className="content-block">
              <p>Structured 3-week proof-of-value with clear objectives and exit criteria:</p>
              <ul>
                <li><strong>Prep (-5 → 0 days):</strong> Contract signed, admins briefed, KPIs frozen</li>
                <li><strong>Week 1 – Instrument:</strong> 100% pilot fleet coverage, zero UX regression</li>
                <li><strong>Week 2 – Observe:</strong> Surface unknown unknowns, near-miss phish</li>
                <li><strong>Week 3 – Act & Coach:</strong> Prove coaching effectiveness, SOC efficiency</li>
              </ul>
            </div>
          </div>

          <div id="success-kpis" className="demo-subsection">
            <h3>2.2 Success KPIs & Pass‑Fail Gates</h3>
            <div className="content-block">
              <p>Clear success metrics with defined pass/fail thresholds:</p>
              <ul>
                <li><strong>Phish blocking:</strong> &gt;90% pass, &lt;70% fail</li>
                <li><strong>SaaS discovery:</strong> ≥20% increase pass, &lt;10% fail</li>
                <li><strong>User override rate:</strong> &lt;2% pass, ≥5% fail</li>
                <li><strong>Analyst efficiency:</strong> ≥30% faster pass, &lt;10% fail</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="metrics" className="demo-section">
          <h2>3 | METRICS THAT MATTER (LAND → EXPAND)</h2>
          <div className="content-block">
            <p>Key performance indicators that drive expansion revenue:</p>
            <ul>
              <li><strong>Phish Prevention:</strong> % Consent/OAuth phish blocked pre‑credential</li>
              <li><strong>User Coaching:</strong> Override‑after‑coaching rate</li>
              <li><strong>IR Efficiency:</strong> Analyst triage time per incident</li>
              <li><strong>Visibility Lift:</strong> Net‑new SaaS apps surfaced</li>
            </ul>
          </div>
        </section>

        <section id="positioning" className="demo-section">
          <h2>4 | REPLACE vs ENHANCE – POSITIONING</h2>
          <div className="content-block">
            <p>Strategic positioning against incumbent security tools:</p>
            <ul>
              <li><strong>Secure Email Gateway:</strong> Enhance – "we catch what slips after the click"</li>
              <li><strong>CASB/SSE:</strong> Augment now, muzzle later (Year‑2)</li>
              <li><strong>Push Security:</strong> Supersede – "Push v2 = us + detection + coaching"</li>
              <li><strong>Enterprise Browser:</strong> Lightweight alternative</li>
            </ul>
          </div>
        </section>

        <section id="roadmap" className="demo-section">
          <h2>5 | YEAR‑2 EXPANSION ROADMAP (12‑24 Months)</h2>
          <div className="content-block">
            <p>Progressive capability expansion with new revenue streams:</p>
            <ul>
              <li><strong>Q1‑Q2:</strong> Insider heat‑map (behavioral drift scoring)</li>
              <li><strong>Q2‑Q3:</strong> Real‑time policy actions (block mass export)</li>
              <li><strong>Q3‑Q4:</strong> API tie‑ins to ZTNA/IdP for session control</li>
              <li><strong>Q4:</strong> BYOD lightweight agent (Edge + unmanaged Chrome)</li>
            </ul>
          </div>
        </section>

        <section id="hypotheses" className="demo-section">
          <h2>6 | DEAL‑CRITICAL HYPOTHESES & HOW WE TEST</h2>
          <div className="content-block">
            <p>Key assumptions that must be validated in Year 1:</p>
            <ul>
              <li><strong>User tolerance:</strong> &lt;1% uninstall rate in pilot</li>
              <li><strong>IR acceleration:</strong> Analysts quote ≥30% faster RCA</li>
              <li><strong>Browser coverage:</strong> 80% managed fleet stays Chrome‑family</li>
            </ul>
          </div>
        </section>

        <section id="value-proof" className="demo-section">
          <h2>7 | IF NO ATTACKS DURING POV – PROVING VALUE</h2>
          <div className="content-block">
            <p>Alternative value demonstration when no real attacks occur:</p>
            <ol>
              <li><strong>Near‑miss Evidence:</strong> Flagged consent pages, password‑reuse prompts</li>
              <li><strong>Visibility Delta:</strong> Quantified SaaS & extension inventory</li>
              <li><strong>Investigation Drill:</strong> Historic incident replay comparison</li>
              <li><strong>Red‑Team Voucher:</strong> Post‑purchase simulation guarantee</li>
            </ol>
            <div className="blunt-message">
              <em>"If in 14 days we don't surface anything you find useful, we deserve to lose."</em>
            </div>
          </div>
        </section>

        <section id="risks" className="demo-section">
          <h2>8 | CRITICAL RISKS & COUNTER‑MEASURES</h2>
          <div className="content-block">
            <ul>
              <li><strong>Extension removal/evasion:</strong> Detect uninstall, auto‑re‑enroll via MDM</li>
              <li><strong>Privacy objections:</strong> On‑device redaction, EU data‑center option</li>
              <li><strong>"Yet another console" fatigue:</strong> Ship Splunk/Sentinel apps Day‑1</li>
            </ul>
          </div>
        </section>

        <section id="executive-summary" className="demo-section">
          <h2>9 | EXECUTIVE SUMMARY (TL;DR)</h2>
          <div className="content-block">
            <ul>
              <li><em>Land fast</em> with phishing prevention & coaching (ROI in &lt;14 days)</li>
              <li><em>Expand</em> by monetizing unique browser telemetry</li>
              <li><em>Dominate</em> by adding real‑time insider threat prevention</li>
            </ul>
            <div className="final-statement">
              <strong>Above</strong> becomes the lightweight, deploy‑anywhere runtime layer that <strong>starts</strong> where IAM ends and <strong>finishes</strong> what CASB & email security can't.
            </div>
          </div>
        </section>

        <div className="demo-footer">
          <p>End of strategic narrative document</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingTOCDemo;
