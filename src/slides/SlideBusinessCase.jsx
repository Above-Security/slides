import React from 'react';
import SlideLayout from '../components/SlideLayout';
import '../styles/components/card-patterns.css';
import '../styles/components/shared-slide-components.css';

const SlideBusinessCase = () => (
  <SlideLayout>
    <header className="slide-header">
      <h1 className="slide-title">Business Case for Above Security</h1>
      <p className="slide-subtitle">Runtime ITDR Platform</p>
    </header>

    <div className="content-section">
      {/* Market Overview Section */}
      <section style={{ marginBottom: '48px' }}>
        <div className="executive-summary">
          <h2 className="summary-title">
            <i className="fas fa-trophy"></i>
            Strategic Market Positioning
          </h2>
          <p className="summary-text">
            Above's browser-native runtime intelligence positions us to capture significant share across
            <strong> $7-9B in serviceable TAM</strong> with double-digit CAGR—sufficient headroom for a
            <strong> $10B+ revenue target by early 2030s</strong>.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '32px' }}>
          <div className="card card--secondary card--elevated">
            <div className="card-header">
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-chart-bar" style={{ marginRight: '12px' }}></i>
                Primary Target Categories
              </h4>
            </div>
            <div className="card-body">
              <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <div style={{ display: 'grid', gap: '12px' }}>
                  <div style={{ padding: '8px', backgroundColor: 'var(--bg-success)', borderRadius: '6px', border: '1px solid var(--brand-primary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600 }}>🥇 Identity Threat Detection (ITDR)</span>
                      <strong style={{ color: 'var(--brand-primary)' }}>$13B</strong>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>22-23% CAGR | Perfect fit: post-auth signals</div>
                  </div>

                  <div style={{ padding: '8px', backgroundColor: 'var(--surface-secondary)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600 }}>🥈 Insider Risk Management (IRM)</span>
                      <strong style={{ color: 'var(--brand-primary)' }}>$2B+</strong>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>18% CAGR | High fit: runtime intent detection</div>
                  </div>

                  <div style={{ padding: '8px', backgroundColor: 'var(--surface-secondary)', borderRadius: '6px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600 }}>🥉 Human Risk Management (HRM)</span>
                      <strong style={{ color: 'var(--brand-primary)' }}>$6B</strong>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>19-20% CAGR | Medium fit: behavioral coaching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card card--secondary card--elevated">
            <div className="card-header">
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-bullseye" style={{ marginRight: '12px' }}></i>
                Competitive Advantage
              </h4>
            </div>
            <div className="card-body">
              <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Why We Win:</div>
                  <ul style={{ paddingLeft: '16px', lineHeight: 1.6, listStyle: 'disc', margin: 0 }}>
                    <li><strong>Browser-semantic depth</strong> vs. log-based detection</li>
                    <li><strong>Runtime signals</strong> beat post-facto analysis</li>
                    <li><strong>No proxy pain</strong> - solves SSL pinning gaps</li>
                  </ul>
                </div>

                <div>
                  <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Market Reality:</div>
                  <ul style={{ paddingLeft: '16px', lineHeight: 1.6, listStyle: 'disc', margin: 0 }}>
                    <li>ITDR incumbents rely on logs, not sessions</li>
                    <li>CASB vendors admit unmanaged browser gaps</li>
                    <li>UEBA consolidating into XDR - signal export opportunity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ICP Analysis - Three Column Grid */}
      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '32px', textAlign: 'center' }}>
          Ideal Customer Profiles
        </h3>
        <div className="key-points-grid">
          {/* Enterprise CISO / IRM Buyer */}
          <div className="card card--accent card--elevated">
            <div className="card-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <i className="fas fa-building" style={{ fontSize: '2.5rem', color: 'var(--brand-primary)', marginBottom: '16px' }}></i>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '8px' }}>Enterprise CISO</h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>&gt;5,000 employees</div>
            </div>
            <div className="card-body">
              <div className="card card--secondary" style={{ marginBottom: '16px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$100K-$300K</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ACV Range</div>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                <div style={{ fontWeight: 600, marginBottom: '8px' }}>Key Value:</div>
                <ul style={{ paddingLeft: '16px', lineHeight: 1.5, listStyle: 'disc', margin: 0 }}>
                  <li>Real-time insider threat detection</li>
                  <li>Audit-grade behavioral logs</li>
                  <li>Compliance visibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mid-Market Security Lead */}
          <div className="card card--accent card--elevated">
            <div className="card-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <i className="fas fa-rocket" style={{ fontSize: '2.5rem', color: 'var(--brand-primary)', marginBottom: '16px' }}></i>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '8px' }}>Mid-Market SecOps</h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>250-2,000 employees</div>
            </div>
            <div className="card-body">
              <div className="card card--secondary" style={{ marginBottom: '16px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$25K-$75K</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ACV Range</div>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                <div style={{ fontWeight: 600, marginBottom: '8px' }}>Key Value:</div>
                <ul style={{ paddingLeft: '16px', lineHeight: 1.5, listStyle: 'disc', margin: 0 }}>
                  <li>Easy browser-native deployment</li>
                  <li>Immediate SaaS threat coverage</li>
                  <li>CASB replacement/augmentation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Architect / Technical Buyer */}
          <div className="card card--accent card--elevated">
            <div className="card-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
              <i className="fas fa-cog" style={{ fontSize: '2.5rem', color: 'var(--brand-primary)', marginBottom: '16px' }}></i>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '8px' }}>Security Architect</h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>1,000-10,000 employees</div>
            </div>
            <div className="card-body">
              <div className="card card--secondary" style={{ marginBottom: '16px', padding: '12px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$40K-$100K</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>ACV Range</div>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                <div style={{ fontWeight: 600, marginBottom: '8px' }}>Key Value:</div>
                <ul style={{ paddingLeft: '16px', lineHeight: 1.5, listStyle: 'disc', margin: 0 }}>
                  <li>Browser telemetry integration</li>
                  <li>SIEM/UEBA enrichment</li>
                  <li>Runtime policy enforcement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Growth Path */}
      <section className="card card--dark card--spacious">
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '24px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <i className="fas fa-rocket" style={{ marginRight: '12px' }}></i>
          Path to $10B+ Valuation
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
          <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', border: '2px solid var(--brand-primary-light)' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-primary-light)', marginBottom: '12px' }}>Phase 1: 2025-27</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-inverse)', marginBottom: '12px', fontWeight: 600 }}>Runtime ITDR for SaaS</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-inverse)', lineHeight: 1.4 }}>
              &lt;5% FP rate, 90-day deployments to 250K endpoints, replace 20% of legacy CASB licenses
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginTop: '12px' }}>~$2-3B TAM</div>
          </div>

          <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '12px' }}>Phase 2: 2027-29</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-inverse)', marginBottom: '12px', fontWeight: 600 }}>Identity-Centric Zero-Trust</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-inverse)', lineHeight: 1.4 }}>
              30% of customer SaaS sessions covered by adaptive policy engine with granular controls
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-inverse)', marginTop: '12px' }}>+$2B TAM</div>
          </div>

          <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
            <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '12px' }}>Phase 3: 2029-32</div>
            <div style={{ fontSize: '0.95rem', color: 'var(--text-inverse)', marginBottom: '12px', fontWeight: 600 }}>Unified Workforce Risk Platform</div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-inverse)', lineHeight: 1.4 }}>
              IRM dashboards, HRM coaching, JIT access - 50% drop in insider incidents
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-inverse)', marginTop: '12px' }}>+$3-4B TAM</div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginBottom: '8px' }}>&lt;5%</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)' }}>False positive rate target<br />(wins most bake-offs)</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginBottom: '8px' }}>90-Day</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)' }}>Deployment to 250K endpoints<br />(vs. 6+ month alternatives)</div>
            </div>
            <div>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginBottom: '8px' }}>20%</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)' }}>CASB license replacement<br />in customer accounts</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </SlideLayout>
);

export default SlideBusinessCase;
