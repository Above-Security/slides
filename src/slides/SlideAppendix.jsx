import React from 'react';
import { useNavigate } from 'react-router-dom';
import SlideLayout from '../components/SlideLayout';
import { clarityEvent, claritySet } from '../utils/clarity';
import '../styles/components/shared-slide-components.css';

const SlideAppendix = () => {
    const navigate = useNavigate();

    const handleDirectNavigation = () => {
        // Navigate directly to the matrix
        clarityEvent('appendix_matrix_navigation');
        claritySet('user_action', 'direct_matrix_navigation');
        navigate('/insider-threat-matrix');
    };

    return (
        <SlideLayout>
            <header className="slide-header">
                <h1 className="slide-title">Appendix</h1>
                <p className="slide-subtitle">Interactive Insider Threat Matrix</p>
            </header>

            <div className="content-section">
                {/* Overview Section */}
                <section style={{ marginBottom: '48px' }}>
                    <div className="executive-summary">
                        <h2 className="summary-title">
                            <i className="fas fa-th-large"></i>
                            Comprehensive Threat Coverage Analysis
                        </h2>
                        <p className="summary-text">
                            <strong>Explore Above's comprehensive coverage</strong> of 100+ insider threat vectors with our interactive matrix.
                            See exactly how our runtime detection capabilities map to specific threat scenarios with real-world examples.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section style={{ marginBottom: '48px' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '32px', textAlign: 'center' }}>
                        Interactive Matrix Features
                    </h3>
                    <div className="key-points-grid">
                        <div className="card card--accent card--elevated">
                            <div className="card-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <i className="fas fa-chart-bar" style={{ fontSize: '2.5rem', color: 'var(--brand-primary)', marginBottom: '16px' }}></i>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '8px' }}>Executive Dashboard</h4>
                            </div>
                            <div className="card-body">
                                <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                                    <ul style={{ paddingLeft: '16px', lineHeight: 1.5, listStyle: 'disc', margin: 0 }}>
                                        <li>Key metrics and coverage insights</li>
                                        <li>Category heatmaps and analytics</li>
                                        <li>Strategic threat landscape overview</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card card--accent card--elevated">
                            <div className="card-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <i className="fas fa-bullseye" style={{ fontSize: '2.5rem', color: 'var(--brand-primary)', marginBottom: '16px' }}></i>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '8px' }}>Detection Mapping</h4>
                            </div>
                            <div className="card-body">
                                <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                                    <ul style={{ paddingLeft: '16px', lineHeight: 1.5, listStyle: 'disc', margin: 0 }}>
                                        <li>Real-world threat scenarios</li>
                                        <li>Above capability analysis</li>
                                        <li>Coverage gap identification</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card card--accent card--elevated">
                            <div className="card-header" style={{ textAlign: 'center', marginBottom: '20px' }}>
                                <i className="fas fa-search" style={{ fontSize: '2.5rem', color: 'var(--brand-primary)', marginBottom: '16px' }}></i>
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '8px' }}>Interactive Exploration</h4>
                            </div>
                            <div className="card-body">
                                <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                                    <ul style={{ paddingLeft: '16px', lineHeight: 1.5, listStyle: 'disc', margin: 0 }}>
                                        <li>Drill down into specific threats</li>
                                        <li>Filter by category and coverage</li>
                                        <li>Search threat vectors instantly</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="card card--dark card--spacious">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-inverse)', marginBottom: '24px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="fas fa-shield-alt" style={{ marginRight: '12px' }}></i>
                        Insider Threat Matrix Portal
                    </h3>

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                        <div style={{ padding: '32px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', border: '2px solid var(--brand-primary-light)', textAlign: 'center', maxWidth: '400px' }}>
                            <div style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--brand-primary-light)', marginBottom: '16px' }}>
                                <i className="fas fa-th-large" style={{ marginRight: '12px' }}></i>
                                Explore Interactive Matrix
                            </div>
                            <div style={{ fontSize: '1rem', color: 'var(--text-inverse)', marginBottom: '24px', lineHeight: 1.5 }}>
                                Dive deep into our comprehensive threat coverage analysis with interactive dashboards and real-world scenarios.
                            </div>
                            <button
                                onClick={handleDirectNavigation}
                                style={{
                                    background: 'var(--brand-primary)',
                                    color: 'white',
                                    border: 'none',
                                    padding: '16px 32px',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    transition: 'all 0.2s ease',
                                    margin: '0 auto',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = 'var(--brand-primary-dark)';
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = 'var(--brand-primary)';
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
                                }}
                            >
                                <i className="fas fa-arrow-right"></i>
                                Go to Matrix
                            </button>
                        </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '24px' }}>
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-inverse)', textAlign: 'center', marginBottom: '16px', fontStyle: 'italic' }}>
                            Matrix Coverage Preview
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'var(--bg-success)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px'
                                }}>
                                    <i className="fas fa-bullseye" style={{ color: 'var(--brand-primary)' }}></i>
                                </div>
                                <span style={{ color: 'var(--text-inverse)', fontSize: '0.9rem' }}>Direct Coverage</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'var(--surface-secondary)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px'
                                }}>
                                    <i className="fas fa-search" style={{ color: 'var(--text-secondary)' }}></i>
                                </div>
                                <span style={{ color: 'var(--text-inverse)', fontSize: '0.9rem' }}>Partial Coverage</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: 'rgba(255,255,255,0.1)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px'
                                }}>
                                    <i className="fas fa-times" style={{ color: 'var(--text-inverse)' }}></i>
                                </div>
                                <span style={{ color: 'var(--text-inverse)', fontSize: '0.9rem' }}>No Coverage</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </SlideLayout>
    );
};

export default SlideAppendix;
