import React from 'react';
import { Logo } from '../components/LogoWatermark';
import './InsiderThreatDeck.css';

const InsiderThreatDeck = () => {
  return (
    <div className="insider-threat-deck">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-header">
            <div className="company-logo company-logo-centered">
              <Logo />
            </div>
            <h1 className="hero-title">
              Above
            </h1>
            <p className="hero-subtitle main-subheader">
              The #1 Insider Protection Platform for SaaS, Web, and Desktop
            </p>
            <p className="hero-subtitle">
              Purpose-built to close the user behavior blind spot
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="deck-container">
        
        {/* See What Everyone Else Misses */}
        <section className="content-section vision-section">
          <div className="section-inner">
            <h2 className="section-title">
              <i className="fas fa-search section-icon"></i>
              See What Everyone Else Misses
            </h2>
            <div className="section-content">
              <p className="lead-text">
                Today's security stack stops at the login screen.
              </p>
              <p>
                Above gives enterprise security teams <strong>real-time insight into what users actually do</strong> — across SaaS, web, and desktop environments. We detect intent-level risk before it becomes data loss, abuse, or breach.
              </p>
              <div className="highlight-card">
                <i className="fas fa-trophy highlight-icon"></i>
                <p>The #1 Insider Protection Product — purpose-built to close the user behavior blind spot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Above Delivers */}
        <section className="content-section features-section">
          <div className="section-inner">
            <h2 className="section-title">
              <i className="fas fa-cogs section-icon"></i>
              What Above Delivers
            </h2>
            <div className="features-grid">
              <div className="feature-card">
                <i className="fas fa-brain feature-icon"></i>
                <h3>Behavioral Intent Detection</h3>
                <p>See early signals of risk: scraping, shadow tools, offboarding misuse, AI exfiltration, OAuth abuse.</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-globe feature-icon"></i>
                <h3>Full-Surface Visibility</h3>
                <p>Track user actions across SaaS apps, unmanaged websites, and native desktop tools — all in one behavioral layer.</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-bolt feature-icon"></i>
                <h3>Real-Time, Actionable Signal</h3>
                <p>Not logs. Not file events. Actual human behavior, interpreted with context and delivered instantly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What Above Is Not */}
        <section className="content-section differentiation-section">
          <div className="section-inner">
            <h2 className="section-title">
              <i className="fas fa-th-large section-icon"></i>
              What Above<em>Is Not</em>
            </h2>
            <div className="section-content">
              <div className="callout-card">
                <p className="callout-text">We don't compete with your stack — we complete it.</p>
              </div>
              <p>Above is <strong>not</strong>:</p>
              <div className="not-list">
                <div className="not-item">
                  <i className="fas fa-times not-icon"></i>
                  <div className="not-content">
                    <strong>DLP</strong> — We catch what happens before data moves
                  </div>
                </div>
                <div className="not-item">
                  <i className="fas fa-times not-icon"></i>
                  <div className="not-content">
                    <strong>CASB</strong> — We focus on behavior, not traffic
                  </div>
                </div>
                <div className="not-item">
                  <i className="fas fa-times not-icon"></i>
                  <div className="not-content">
                    <strong>SSPM</strong> — We show real usage, not posture
                  </div>
                </div>
                <div className="not-item">
                  <i className="fas fa-times not-icon"></i>
                  <div className="not-content">
                    <strong>Enterprise Browsers</strong> — We don't isolate, control, or restrict use
                  </div>
                </div>
                <div className="not-item">
                  <i className="fas fa-times not-icon"></i>
                  <div className="not-content">
                    <strong>SASE</strong> — We don't route traffic or act as a proxy
                  </div>
                </div>
              </div>
              <p className="complement-text">
                Above <strong>complements</strong> all of the above — by revealing the intent behind the clicks, keystrokes, and cloud use your stack can't see.
              </p>
            </div>
          </div>
        </section>

        {/* Why We're #1 */}
        <section className="content-section advantage-section">
          <div className="section-inner">
            <h2 className="section-title">
              <i className="fas fa-brain section-icon"></i>
              Why We're #1 in Insider Protection
            </h2>
            <div className="advantage-grid">
              <div className="advantage-item">
                <i className="fas fa-check check-icon"></i>
                <span>Purpose-built for human behavior visibility</span>
              </div>
              <div className="advantage-item">
                <i className="fas fa-check check-icon"></i>
                <span>Detects misuse in real time — not just audits after the fact</span>
              </div>
              <div className="advantage-item">
                <i className="fas fa-check check-icon"></i>
                <span>Cross-environment telemetry — SaaS, web, desktop</span>
              </div>
              <div className="advantage-item">
                <i className="fas fa-check check-icon"></i>
                <span>Intent-first, not incident-lagged</span>
              </div>
              <div className="advantage-item">
                <i className="fas fa-check check-icon"></i>
                <span>Fast time-to-value — deploy and see results in days, not quarters</span>
              </div>
            </div>
          </div>
        </section>

        {/* What You Catch */}
        <section className="content-section scenarios-section">
          <div className="section-inner">
            <h2 className="section-title">
              <i className="fas fa-bullseye section-icon"></i>
              What You Catch with Above
            </h2>
            <div className="scenarios-table">
              <div className="table-header">
                <div className="header-cell">Scenario</div>
                <div className="header-cell">What Above Detects</div>
              </div>
              <div className="table-row">
                <div className="scenario-cell">Offboarding Drift</div>
                <div className="detection-cell">Active sessions, stale tokens, shadow data</div>
              </div>
              <div className="table-row">
                <div className="scenario-cell">SaaS Misuse</div>
                <div className="detection-cell">Risky tools, unsanctioned exports, shadow IT</div>
              </div>
              <div className="table-row">
                <div className="scenario-cell">AI Exfiltration</div>
                <div className="detection-cell">Sensitive copy-paste into ChatGPT, Gemini, etc.</div>
              </div>
              <div className="table-row">
                <div className="scenario-cell">Desktop Activity</div>
                <div className="detection-cell">Risky behavior in local tools (e.g., Excel, Notepad)</div>
              </div>
              <div className="table-row">
                <div className="scenario-cell">Third-Party Access Abuse</div>
                <div className="detection-cell">OAuth grants, delegated permissions</div>
              </div>
              <div className="table-row">
                <div className="scenario-cell">Role Drift & Scope Creep</div>
                <div className="detection-cell">Unusual access patterns, permission misuse</div>
              </div>
            </div>
          </div>
        </section>

        {/* Built for Enterprise */}
        <section className="content-section enterprise-section">
          <div className="section-inner">
            <h2 className="section-title">
              <i className="fas fa-bullseye section-icon"></i>
              Built for Enterprise Security Teams
            </h2>
            <div className="enterprise-grid">
              <div className="enterprise-item">
                <i className="fas fa-building enterprise-icon"></i>
                <span>5,000+ employee orgs with SaaS- and cloud-centric workflows</span>
              </div>
              <div className="enterprise-item">
                <i className="fas fa-shield-alt enterprise-icon"></i>
                <span>Insider risk, IR, SOC, GRC, identity & data security teams</span>
              </div>
              <div className="enterprise-item">
                <i className="fas fa-search enterprise-icon"></i>
                <span>Teams tasked with understanding the <em>why</em> behind risky user actions</span>
              </div>
              <div className="enterprise-item">
                <i className="fas fa-clock enterprise-icon"></i>
                <span>Orgs needing behavioral signal without deploying heavy agents</span>
              </div>
            </div>
          </div>
        </section>

        {/* Not a Tool You Replace */}
        <section className="content-section philosophy-section">
          <div className="section-inner">
            <h2 className="section-title">
              <i className="fas fa-handshake section-icon"></i>
              Not a Tool You Replace. A Lens You Add.
            </h2>
            <div className="section-content">
              <p>
                Above reveals what your existing tools cannot — the <em>intent</em> behind user activity.
              </p>
              <p>
                It's the difference between knowing "a file moved" and knowing <em>why</em> it moved.
              </p>
              <div className="testimonial-card">
                <blockquote>
                  "Above gave us visibility we didn't know we were missing."
                </blockquote>
                <cite>— CISO, Fortune 100</cite>
              </div>
            </div>
          </div>
        </section>

        {/* From Risk to Protection */}
        <section className="content-section conclusion-section">
          <div className="section-inner">
            <h2 className="section-title">
              <i className="fas fa-shield-alt section-icon"></i>
              From Risk to Protection
            </h2>
            <div className="section-content">
              <p>
                Above reframes "insider threat" as <strong>insider protection</strong> — enabling you to intervene early, investigate smarter, and reduce friction with your workforce.
              </p>
              <div className="final-statement">
                <p>This is not surveillance. This is <strong>security that understands human behavior.</strong></p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default InsiderThreatDeck;
