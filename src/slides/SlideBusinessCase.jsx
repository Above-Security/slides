import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';
// card-patterns.css already imported globally in App.css - removed duplicate
import '../styles/components/shared-slide-components.css';

const SlideBusinessCase = () => {
  const [showSimplifiedPricing, setShowSimplifiedPricing] = useState(true);

  return (
    <SlideLayout>
      <header className="slide-header">
        <h1 className="slide-title">Business Case for Above Security</h1>
        <p className="slide-subtitle">Insider Protection Platform</p>
      </header>

      <div className="content-section">
        {/* Market Overview Section */}
        <section style={{ marginBottom: '48px' }}>
          <div className="executive-summary">
            <h2 className="summary-title">
              <i className="fas fa-layer-group"></i>
              Tool Consolidation & Market Opportunity
            </h2>
            <p className="summary-text">
              CISOs are actively seeking to <strong>replace 2-3 point solutions</strong> with Above's unified insider protection platform.
              Our browser-native approach positions us to capture significant share across
              <strong> $7-9B in serviceable TAM</strong> with double-digit CAGR.
            </p>
            
            {/* Compliance Differentiator */}
            <div style={{ 
              marginTop: '20px', 
              padding: '16px', 
              backgroundColor: 'var(--brand-primary)', 
              borderRadius: '8px', 
              color: 'white'
            }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, display: 'flex', alignItems: 'center' }}>
                <i className="fas fa-award" style={{ marginRight: '12px', color: '#FFD700' }}></i>
                <span>Compliance-Ready Documentation: The Ultimate Differentiator</span>
              </p>
              <p style={{ fontSize: '0.9rem', margin: '8px 0 0 0', opacity: 0.95 }}>
                Built-in SOX 404, SOC 2, GDPR, PCI DSS, NIST CSF, and ISO 27001 controls eliminate compliance gaps that plague legacy solutions.
              </p>
            </div>

            <div style={{ marginTop: '16px', padding: '16px', backgroundColor: 'var(--bg-success)', borderRadius: '8px', border: '2px solid var(--brand-primary)' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 500, margin: 0, color: 'var(--brand-primary)' }}>
                <i className="fas fa-quote-left"></i> "If I can replace SSPM + DLP + something else with this, I'm in." — I.B, CISO Advisor
              </p>
            </div>
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
                        <span style={{ fontWeight: 600 }}>🥇 Insider Protection (DLP + UEBA)</span>
                        <strong style={{ color: 'var(--brand-primary)' }}>$15B</strong>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>25% CAGR | Replace Cyberhaven, Exabeam portions</div>
                    </div>

                    <div style={{ padding: '8px', backgroundColor: 'var(--surface-secondary)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 600 }}>🥈 SaaS Security Posture (SSPM)</span>
                        <strong>$8B</strong>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>30% CAGR | Real-time behavior vs. configuration</div>
                    </div>

                    <div style={{ padding: '8px', backgroundColor: 'var(--surface-secondary)', borderRadius: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontWeight: 600 }}>🥉 Insider Risk Management (IRM)</span>
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
                      <li><strong>Compliance-first architecture</strong> - audit-ready by design</li>
                    </ul>
                  </div>

                  {/* Compliance Advantage Callout */}
                  <div style={{ 
                    marginBottom: '16px',
                    padding: '12px',
                    backgroundColor: 'var(--bg-success)',
                    borderRadius: '6px',
                    border: '1px solid var(--brand-primary)'
                  }}>
                    <div style={{ fontWeight: 600, marginBottom: '6px', color: 'var(--brand-primary)', fontSize: '0.9rem' }}>
                      🏆 Compliance Competitive Edge:
                    </div>
                    <div style={{ fontSize: '0.8rem', lineHeight: 1.4 }}>
                      Pre-built controls for SOX 404.B.1, SOC 2 CC6.1, GDPR Art. 32.1(d), PCI DSS 7.1.1, NIST CSF, and ISO 27001 — turn compliance from cost center to competitive advantage.
                    </div>
                  </div>

                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Market Reality:</div>
                    <ul style={{ paddingLeft: '16px', lineHeight: 1.6, listStyle: 'disc', margin: 0 }}>
                      <li>ITDR incumbents rely on logs, not sessions</li>
                      <li>CASB vendors admit unmanaged browser gaps</li>
                      <li>UEBA consolidating into XDR - signal export opportunity</li>
                      <li><strong>Compliance documentation gaps</strong> plague legacy tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section with Toggle */}
        <section style={{ marginBottom: '48px' }}>
          {/* Toggle Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '24px' }}>
              Customer Profiles & Pricing
            </h3>
            <div style={{ display: 'inline-flex', backgroundColor: 'var(--surface-secondary)', borderRadius: '8px', padding: '4px' }}>
              <button
                onClick={() => setShowSimplifiedPricing(false)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: !showSimplifiedPricing ? 'var(--brand-primary)' : 'transparent',
                  color: !showSimplifiedPricing ? 'white' : 'var(--text-primary)',
                  fontWeight: !showSimplifiedPricing ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Traditional ICP Model
              </button>
              <button
                onClick={() => setShowSimplifiedPricing(true)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: showSimplifiedPricing ? 'var(--brand-primary)' : 'transparent',
                  color: showSimplifiedPricing ? 'white' : 'var(--text-primary)',
                  fontWeight: showSimplifiedPricing ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Simplified Pricing & ROI
              </button>
            </div>
          </div>

          {/* Traditional ICP Model */}
          {!showSimplifiedPricing && (
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '24px', textAlign: 'center' }}>
                Ideal Customer Profiles
              </h4>
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
                        <li><strong>SOX 404 & SOC 2 ready documentation</strong></li>
                      </ul>
                      
                      {/* Compliance Badge */}
                      <div style={{ 
                        marginTop: '12px', 
                        padding: '8px', 
                        backgroundColor: 'var(--bg-success)', 
                        borderRadius: '6px',
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--brand-primary)'
                      }}>
                        🏆 Enterprise Compliance Controls
                      </div>
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
                        <li><strong>PCI DSS & GDPR compliance automation</strong></li>
                      </ul>
                      
                      {/* Compliance Badge */}
                      <div style={{ 
                        marginTop: '12px', 
                        padding: '8px', 
                        backgroundColor: 'var(--bg-success)', 
                        borderRadius: '6px',
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--brand-primary)'
                      }}>
                        📋 Regulatory Framework Ready
                      </div>
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
                        <li><strong>NIST CSF & ISO 27001 alignment</strong></li>
                      </ul>
                      
                      {/* Compliance Badge */}
                      <div style={{ 
                        marginTop: '12px', 
                        padding: '8px', 
                        backgroundColor: 'var(--bg-success)', 
                        borderRadius: '6px',
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--brand-primary)'
                      }}>
                        🔧 Technical Compliance Controls
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Simplified Pricing & Cost Calculator */}
          {showSimplifiedPricing && (
            <div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '24px', textAlign: 'center' }}>
                Simple Per-Employee Pricing & Cost Calculator
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {/* Unified Pricing Model */}
                <div className="card card--accent card--elevated">
                  <div className="card-header">
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                      <i className="fas fa-calculator" style={{ marginRight: '12px' }}></i>
                      Above Security Pricing
                    </h4>
                  </div>
                  <div className="card-body">
                    <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                      <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '8px' }}>$3</div>
                      <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>per employee per month</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-tertiary)', fontStyle: 'italic' }}>Enterprise discounts: $2/employee at 5K+ users</div>
                    </div>

                    <div style={{ backgroundColor: 'var(--surface-secondary)', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '12px' }}>Example: 5,000 Employees</div>
                      <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '8px' }}>$120K/year</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>All features included - undercut incumbents by 70-80%</div>
                    </div>

                    <div style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                      <div style={{ fontWeight: 600, marginBottom: '8px' }}>What You Get (Everything):</div>
                      <ul style={{ paddingLeft: '16px', listStyle: 'disc', margin: 0 }}>
                        <li>Real-time insider threat detection</li>
                        <li>SaaS threat coverage & policy enforcement</li>
                        <li>Browser telemetry & SIEM integration</li>
                        <li>Audit-grade behavioral logs</li>
                        <li>Compliance dashboards</li>
                        <li><strong>SOX, SOC 2, GDPR, PCI DSS controls built-in</strong></li>
                      </ul>
                      
                      {/* Compliance Value Callout */}
                      <div style={{ 
                        marginTop: '16px',
                        padding: '12px',
                        backgroundColor: 'var(--brand-primary)',
                        borderRadius: '6px',
                        color: 'white',
                        fontSize: '0.85rem',
                        textAlign: 'center'
                      }}>
                        <strong>🏆 Compliance Advantage:</strong> Pre-built regulatory frameworks eliminate the need for costly compliance consultants and reduce audit preparation time by 60-80%.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cost Avoidance Calculator */}
                <div className="card card--secondary card--elevated">
                  <div className="card-header">
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                      <i className="fas fa-piggy-bank" style={{ marginRight: '12px' }}></i>
                      Cost Avoidance Analysis
                    </h4>
                  </div>
                  <div className="card-body">
                    <div style={{ fontSize: '0.9rem', marginBottom: '20px' }}>
                      <div style={{ fontWeight: 600, marginBottom: '12px', color: 'var(--text-primary)' }}>Tools You Can Replace:</div>
                      <div style={{ display: 'grid', gap: '8px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: 'var(--bg-danger)', borderRadius: '4px' }}>
                          <span>❌ Cyberhaven (~70% overlap)</span>
                          <strong>$200K-400K</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: 'var(--bg-danger)', borderRadius: '4px' }}>
                          <span>❌ Valence (~80% overlap)</span>
                          <strong>$56K-101K</strong>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px', backgroundColor: 'var(--bg-warning)', borderRadius: '4px' }}>
                          <span>🔄 Legacy CASB (partial)</span>
                          <strong>$100K-200K</strong>
                        </div>
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-primary)', paddingTop: '16px', marginBottom: '16px' }}>
                      <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>5K Employee Scenario:</div>
                      <div style={{ fontSize: '0.85rem', lineHeight: 1.4 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span>Current tools cost:</span>
                          <span style={{ fontWeight: 600 }}>~$356K-701K</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span>Above Security:</span>
                          <span style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>$120K</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-secondary)', paddingTop: '8px', marginTop: '8px' }}>
                          <span style={{ fontWeight: 600 }}>Annual savings:</span>
                          <span style={{ fontWeight: 700, color: 'var(--text-success)', fontSize: '1.1rem' }}>$236K-581K</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ backgroundColor: 'var(--bg-success)', padding: '12px', borderRadius: '6px', fontSize: '0.8rem' }}>
                      <strong>🎯 Disruption Strategy:</strong> Price 70-80% below incumbents while delivering superior browser-native coverage. Replace your entire stack and save hundreds of thousands annually.
                    </div>
                  </div>
                </div>
              </div>

              {/* Gain/Loss Analysis */}
              <div style={{ marginTop: '32px' }}>
                <div className="card card--dark card--spacious">
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '24px', textAlign: 'center' }}>
                    What You Gain vs. What You Lose - Decision Matrix
                  </h4>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    <div>
                      <h5 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-primary-light)', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-plus-circle" style={{ marginRight: '8px' }}></i>
                        What Above Adds
                      </h5>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)', lineHeight: 1.5 }}>
                        <ul style={{ paddingLeft: '16px', listStyle: 'disc', margin: 0 }}>
                          <li><strong>Real-time session intelligence</strong> - detect threats as they happen, not after</li>
                          <li><strong>Browser-native deployment</strong> - no SSL pinning issues, works everywhere</li>
                          <li><strong>Unified ITDR + IRM platform</strong> - one console for all insider risks</li>
                          <li><strong>Runtime policy enforcement</strong> - block risky actions in real-time</li>
                          <li><strong>Zero proxy infrastructure</strong> - eliminate network bottlenecks</li>
                          <li><strong>Compliance-ready documentation</strong> - audit-grade logs for SOX, SOC 2, GDPR, PCI DSS</li>
                          <li><strong>Regulatory framework automation</strong> - reduce compliance costs by 60-80%</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h5 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-warning)', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                        <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px' }}></i>
                        What You Might Lose
                      </h5>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)', lineHeight: 1.5 }}>
                        <ul style={{ paddingLeft: '16px', listStyle: 'disc', margin: 0 }}>
                          <li><strong>Cyberhaven's file tracking</strong> - need to assess if Above's session-level DLP suffices</li>
                          <li><strong>Valence's API discovery</strong> - Above focuses on browser sessions, not backend APIs</li>
                          <li><strong>Existing integrations</strong> - migration effort to Above's SIEM connectors</li>
                          <li><strong>Historical data</strong> - need export/migration strategy for compliance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '20px', marginTop: '24px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)', fontStyle: 'italic' }}>
                      <strong>Bottom Line:</strong> Above delivers better browser-native coverage than incumbents at 70-80% lower cost. Replace multiple tools, get superior detection, save hundreds of thousands annually.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Strategic Growth Path */}
        <section className="card card--dark card--spacious">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '24px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="fas fa-rocket" style={{ marginRight: '12px' }}></i>
            Strategic Growth Roadmap: Path to $10B+ Valuation
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
            <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', border: '2px solid var(--brand-primary-light)' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--brand-primary-light)', marginBottom: '12px' }}>Phase 1: 2025-27</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-inverse)', marginBottom: '12px', fontWeight: 600 }}>Runtime ITDR for SaaS</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-inverse)', lineHeight: 1.4 }}>
                Target: &lt;5% FP rate, 90-day deployments to 250K endpoints, aim to replace 20% of legacy CASB licenses
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginTop: '12px' }}>~$2-3B TAM</div>
            </div>

            <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '12px' }}>Phase 2: 2027-29</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-inverse)', marginBottom: '12px', fontWeight: 600 }}>Identity-Centric Zero-Trust</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-inverse)', lineHeight: 1.4 }}>
                Goal: Cover 30% of customer SaaS sessions with adaptive policy engine and granular controls
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-inverse)', marginTop: '12px' }}>+$2B TAM</div>
            </div>

            <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '12px' }}>Phase 3: 2029-32</div>
              <div style={{ fontSize: '0.95rem', color: 'var(--text-inverse)', marginBottom: '12px', fontWeight: 600 }}>Unified Workforce Risk Platform</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-inverse)', lineHeight: 1.4 }}>
                Vision: IRM dashboards, HRM coaching, JIT access - targeting 50% reduction in insider incidents
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-inverse)', marginTop: '12px' }}>+$3-4B TAM</div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)', textAlign: 'center', marginBottom: '16px', fontStyle: 'italic' }}>
              Key Performance Targets
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginBottom: '8px' }}>&lt;5%</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)' }}>False positive rate target<br />(to win most bake-offs)</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginBottom: '8px' }}>90-Day</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)' }}>Target deployment to 250K endpoints<br />(vs. 6+ month alternatives)</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--brand-primary-light)', marginBottom: '8px' }}>20%</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)' }}>Aimed CASB license replacement<br />in customer accounts</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SlideLayout>
  );
};

export default SlideBusinessCase;