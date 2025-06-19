import React from 'react';
import SlideLayout from '../components/SlideLayout';
import '../styles/components/card-patterns.css';
import '../styles/components/shared-slide-components.css';

const SlideBusinessCase = () => (
    <SlideLayout>
        <header className="slide-header">
            <h1 className="slide-title">Business Case for Above Security</h1>
            <p className="slide-subtitle">Capturing the $15B Identity Security Market</p>
        </header>

        <div className="content-section">
            {/* Market Opportunity Section */}
            <section className="key-points-grid" style={{ marginBottom: '48px' }}>
                <div className="card card--secondary card--elevated">
                    <div className="card-header">
                        <i className="fas fa-chart-line" style={{ color: 'var(--brand-primary)', fontSize: '1.5rem', marginBottom: '16px' }}></i>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '16px' }}>
                            Market Size
                        </h3>
                    </div>
                    <div className="card-body">
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '8px' }}>$15.1B</div>
                        <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>Identity Security Market (2024)</div>
                        <div style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                            Growing at <strong>22% CAGR</strong> driven by:
                            <ul style={{ marginTop: '12px', paddingLeft: '20px', lineHeight: 1.6 }}>
                                <li>Remote work expansion</li>
                                <li>SaaS sprawl acceleration</li>
                                <li>Insider threat sophistication</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card card--secondary card--elevated">
                    <div className="card-header">
                        <i className="fas fa-target" style={{ color: 'var(--brand-primary)', fontSize: '1.5rem', marginBottom: '16px' }}></i>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '16px' }}>
                            Above's TAM
                        </h3>
                    </div>
                    <div className="card-body">
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '8px' }}>$3.2B</div>
                        <div style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>Browser Security + Session Control</div>
                        <div style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
                            Targeting <strong>50,000+ organizations</strong> with:
                            <ul style={{ marginTop: '12px', paddingLeft: '20px', lineHeight: 1.6 }}>
                                <li>1,000+ employees</li>
                                <li>Heavy SaaS adoption</li>
                                <li>Regulatory requirements</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="card card--brand card--elevated">
                    <div className="card-header">
                        <i className="fas fa-rocket" style={{ color: 'var(--text-inverse)', fontSize: '1.5rem', marginBottom: '16px' }}></i>
                        <h3 style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '16px' }}>
                            Market Position
                        </h3>
                    </div>
                    <div className="card-body">
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--text-inverse)', marginBottom: '8px' }}>First</div>
                        <div style={{ fontSize: '1rem', color: 'var(--text-inverse)', opacity: 0.9, marginBottom: '16px' }}>Runtime ITDR Solution</div>
                        <div style={{ fontSize: '0.95rem', lineHeight: 1.5, color: 'var(--text-inverse)' }}>
                            <strong>Unique advantages:</strong>
                            <ul style={{ marginTop: '12px', paddingLeft: '20px', lineHeight: 1.6 }}>
                                <li>Real-time session visibility</li>
                                <li>Pre-consent threat blocking</li>
                                <li>Browser-native deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer Segments */}
            <section style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '32px', textAlign: 'center' }}>
                    Three High-Value Customer Segments
                </h2>
                <div className="key-points-grid">
                    <div className="card card--accent">
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏢</div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '12px' }}>
                                Enterprise
                            </h3>
                            <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                Large organizations with complex compliance requirements
                            </div>
                        </div>

                        <div className="card card--secondary" style={{ marginBottom: '16px', padding: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$50K-200K ARR</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>per customer</div>
                        </div>

                        <div style={{ fontSize: '0.9rem' }}>
                            <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Key Needs:</div>
                            <ul style={{ paddingLeft: '16px', lineHeight: 1.5, margin: 0 }}>
                                <li>Real-time session monitoring</li>
                                <li>Compliance audit trails</li>
                                <li>Behavioral risk scoring</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card card--accent">
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🚀</div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '12px' }}>
                                Mid-Market
                            </h3>
                            <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                Fast-growing companies with lean security teams
                            </div>
                        </div>

                        <div className="card card--secondary" style={{ marginBottom: '16px', padding: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$15K-50K ARR</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>per customer</div>
                        </div>

                        <div style={{ fontSize: '0.9rem' }}>
                            <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Key Needs:</div>
                            <ul style={{ paddingLeft: '16px', lineHeight: 1.5, margin: 0 }}>
                                <li>Easy deployment</li>
                                <li>OAuth app protection</li>
                                <li>Automated threat response</li>
                            </ul>
                        </div>
                    </div>

                    <div className="card card--accent">
                        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🔧</div>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '12px' }}>
                                Technical Buyers
                            </h3>
                            <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                                Security architects seeking precision tools
                            </div>
                        </div>

                        <div className="card card--secondary" style={{ marginBottom: '16px', padding: '16px', textAlign: 'center' }}>
                            <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$25K-75K ARR</div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>per customer</div>
                        </div>

                        <div style={{ fontSize: '0.9rem' }}>
                            <div style={{ fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Key Needs:</div>
                            <ul style={{ paddingLeft: '16px', lineHeight: 1.5, margin: 0 }}>
                                <li>Granular policy control</li>
                                <li>API integration</li>
                                <li>Low-friction deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROI & Business Impact */}
            <section className="card card--secondary card--spacious" style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '32px', textAlign: 'center' }}>
                    Quantified Business Impact
                </h2>
                <div className="key-points-grid">
                    <div className="card card--elevated" style={{ textAlign: 'center', padding: '32px' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '12px' }}>
                            95%
                        </div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', margin: '0 0 8px 0' }}>
                            Faster Threat Detection
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                            From hours to seconds for malicious OAuth consent
                        </p>
                    </div>

                    <div className="card card--elevated" style={{ textAlign: 'center', padding: '32px' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '12px' }}>
                            $2.4M
                        </div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', margin: '0 0 8px 0' }}>
                            Average Breach Cost Avoided
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                            Per prevented insider threat incident
                        </p>
                    </div>

                    <div className="card card--elevated" style={{ textAlign: 'center', padding: '32px' }}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--brand-primary)', marginBottom: '12px' }}>
                            80%
                        </div>
                        <h4 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', margin: '0 0 8px 0' }}>
                            Security Tool Consolidation
                        </h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>
                            Reduction in overlapping monitoring tools
                        </p>
                    </div>
                </div>
            </section>

            {/* Competitive Differentiation */}
            <section className="card card--dark card--spacious" style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '32px', textAlign: 'center' }}>
                    Why Above Wins
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px', color: 'var(--text-inverse)' }}>
                            <i className="fas fa-times-circle" style={{ color: '#e74c3c', marginRight: '8px' }}></i>
                            Traditional Approaches Fail:
                        </h3>
                        <ul style={{ paddingLeft: '20px', lineHeight: 1.6, color: 'var(--text-inverse)', margin: 0 }}>
                            <li>CASB/DLP tools operate post-session</li>
                            <li>SSPM detects risky apps hours later</li>
                            <li>EDR misses browser-native threats</li>
                            <li>IAM governs access, not behavior</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '16px', color: 'var(--brand-primary-light)' }}>
                            <i className="fas fa-check-circle" style={{ color: '#27ae60', marginRight: '8px' }}></i>
                            Above's Unique Advantage:
                        </h3>
                        <ul style={{ paddingLeft: '20px', lineHeight: 1.6, color: 'var(--text-inverse)', margin: 0 }}>
                            <li>Real-time session-level visibility</li>
                            <li>Pre-consent threat prevention</li>
                            <li>Browser-native deployment</li>
                            <li>Behavioral risk context</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Financial Projections */}
            <section className="card card--brand card--spacious" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.8rem', fontWeight: 600, marginBottom: '32px', color: 'var(--text-inverse)' }}>
                    Revenue Trajectory
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', maxWidth: '800px', margin: '0 auto 32px auto' }}>
                    <div className="card card--secondary" style={{ padding: '24px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Year 1</div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$2M</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>ARR</div>
                    </div>
                    <div className="card card--secondary" style={{ padding: '24px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Year 2</div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$8M</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>ARR</div>
                    </div>
                    <div className="card card--secondary" style={{ padding: '24px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Year 3</div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$25M</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>ARR</div>
                    </div>
                    <div className="card card--secondary" style={{ padding: '24px' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px', color: 'var(--text-primary)' }}>Year 4</div>
                        <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--brand-primary)' }}>$65M</div>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>ARR</div>
                    </div>
                </div>
                <div style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--text-inverse)', lineHeight: 1.5 }}>
                    Above fills the last critical gap in the identity security stack,<br />
                    <span style={{ color: 'var(--brand-primary-light)' }}>positioning us to capture significant market share in a rapidly growing $15B+ market</span>.
                </div>
            </section>
        </div>
    </SlideLayout>
);

export default SlideBusinessCase;
