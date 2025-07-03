import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import PovPhaseCard from '../components/PovPhaseCard';
import KpiGateCard from '../components/KpiGateCard';
import styles from '../styles/CompanyIndex.module.css';

const PovPlaybook = () => {
  const phases = [
    {
      phase: 'Week 1 – Deployment',
      days: '1 → 7 days',
      objectives: 'Extension live on 10-50 users in <1 hour',
      activities: 'Define Chrome policy group, push browser extension via policy, validate deployment',
      exitCriteria: '100% extension deployment, no performance issues',
      phaseNumber: '1'
    },
    {
      phase: 'Week 2 – Visibility',
      days: '8 → 14 days',
      objectives: 'Capture: unsanctioned app use, admin activity, OAuth grants, export behavior',
      activities: 'Monitor user sessions, collect behavioral data, identify shadow IT and risk patterns',
      exitCriteria: 'Show OAuth visibility, detect AI tool usage, surface offboarding drift',
      phaseNumber: '2'
    },
    {
      phase: 'Week 3 – Outcomes',
      days: '15 → 21 days',
      objectives: 'Deliver session visibility report + validate with security owner',
      activities: 'Present findings, demonstrate unique insights, validate operational value, provide session timeline + context for HR/legal, optional user nudge for risky behavior',
      exitCriteria: 'Buyer confirms: "We had no other tool that could show us this"',
      phaseNumber: '3'
    }
  ];

  const kpiGates = [
    {
      kpi: 'OAuth visibility',
      passTarget: 'Show all apps authorized by users in period',
      failTrigger: 'Unable to track OAuth grants',
      status: 'pending'
    },
    {
      kpi: 'Offboarding drift',
      passTarget: 'Detect 100% of active sessions tied to disabled accounts',
      failTrigger: 'Missing session persistence detection',
      status: 'pending'
    },
    {
      kpi: 'AI use / abuse',
      passTarget: 'Detect 1+ non-approved AI tools used in monitored group',
      failTrigger: 'No unsanctioned AI tool detection',
      status: 'pending'
    },
    {
      kpi: 'Real detections',
      passTarget: 'Buyer flags 2+ events as actionable (drift, misuse, intent gap)',
      failTrigger: 'No actionable insights generated',
      status: 'pending'
    },
    {
      kpi: 'Feedback validation',
      passTarget: 'Buyer confirms: "We had no other tool that could show us this"',
      failTrigger: 'Buyer sees no unique value',
      status: 'pending'
    }
  ];

  const setupChecklist = [
    'Define Chrome policy group (managed devices)',
    'Push browser extension via policy',
    'Align on what buyer wants to see (OAuth, exfiltration, AI use, stale sessions)',
    'Configure optional webhook or SIEM push for integrations'
  ];

  return (
    <SectionContainer
      id="pov-playbook"
      title="2 | YEAR‑1 POV & SUCCESS PLAYBOOK"
      variant="executive"
      priority="high"
    >
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--color-background-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--color-primary)'
        }}>
          <strong>3 Weeks Total</strong> — Show value <strong>even if nothing bad happens.</strong>
        </div>

        {/* POV Guard-Rails Table from NARRATIVE.md */}
        <h3>
          <i className="fas fa-traffic-light" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
          POV Guard-Rails
        </h3>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse', 
            marginBottom: 'var(--spacing-lg)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: 'var(--border-radius-md)',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
          }}>
            <thead>
              <tr style={{ 
                backgroundColor: 'rgba(0, 135, 43, 0.05)',
                borderBottom: '2px solid rgba(0, 135, 43, 0.1)'
              }}>
                <th style={{ 
                  padding: 'var(--spacing-md)', 
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  <i className="fas fa-calendar-week" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Phase
                </th>
                <th style={{ 
                  padding: 'var(--spacing-md)', 
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  <i className="fas fa-crosshairs" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Focus
                </th>
                <th style={{ 
                  padding: 'var(--spacing-md)', 
                  textAlign: 'left',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  <i className="fas fa-flag-checkered" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Milestone
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <td style={{ 
                  padding: 'var(--spacing-md)', 
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  verticalAlign: 'top'
                }}>
                  <i className="fas fa-play" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Week 1
                </td>
                <td style={{ 
                  padding: 'var(--spacing-md)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  verticalAlign: 'top'
                }}>
                  Deployment
                </td>
                <td style={{ 
                  padding: 'var(--spacing-md)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  verticalAlign: 'top'
                }}>
                  Extension live on 10–50 users in &lt;1 hour
                </td>
              </tr>
              <tr style={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                <td style={{ 
                  padding: 'var(--spacing-md)', 
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  verticalAlign: 'top'
                }}>
                  <i className="fas fa-eye" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Week 2
                </td>
                <td style={{ 
                  padding: 'var(--spacing-md)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  verticalAlign: 'top'
                }}>
                  Visibility
                </td>
                <td style={{ 
                  padding: 'var(--spacing-md)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  verticalAlign: 'top'
                }}>
                  Capture: unsanctioned app use, admin activity, OAuth grants, export behavior
                </td>
              </tr>
              <tr>
                <td style={{ 
                  padding: 'var(--spacing-md)', 
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  verticalAlign: 'top'
                }}>
                  <i className="fas fa-trophy" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Week 3
                </td>
                <td style={{ 
                  padding: 'var(--spacing-md)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  verticalAlign: 'top'
                }}>
                  Outcomes
                </td>
                <td style={{ 
                  padding: 'var(--spacing-md)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.5',
                  verticalAlign: 'top'
                }}>
                  Deliver session visibility report + validate with security owner
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Set-up Checklist from NARRATIVE.md */}
        <h3>
          <i className="fas fa-clipboard-check" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
          Set-up Checklist (Shared with Buyer)
        </h3>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'rgba(0, 135, 43, 0.03)',
          borderRadius: 'var(--border-radius-md)',
          border: '1px solid rgba(0, 135, 43, 0.1)'
        }}>
          <ul style={{ margin: 0, paddingLeft: 'var(--spacing-lg)' }}>
            {setupChecklist.map((item, index) => (
              <li key={index} style={{ 
                marginBottom: 'var(--spacing-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.5'
              }}>
                <i className="fas fa-check" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* PoV Phases */}
        <div className={styles["pov-section"]}>
          <h3>2.1 PoV Guard-Rails (3 Weeks Total)</h3>
          
          <div className={styles["timeline-container"]}>
            {phases.map((phase, index) => (
              <div key={index} className={styles["timeline-item"]}>
                {/* Timeline Marker */}
                <div className={styles["timeline-marker"]}>
                  {/* Timeline Dot */}
                  <div 
                    className={styles["timeline-dot"]}
                    style={{
                      background: 'linear-gradient(135deg, var(--color-primary), #0d7d2f)',
                      color: 'white',
                      fontSize: '18px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      boxShadow: index === 1 ? '0 4px 12px rgba(0, 135, 43, 0.4)' : '0 2px 8px rgba(0, 0, 0, 0.2)',
                      border: '3px solid white',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <i className={
                      index === 0 ? 'fas fa-play' : 
                      index === 1 ? 'fas fa-eye' : 
                      'fas fa-trophy'
                    } style={{ fontSize: '20px' }}></i>
                  </div>
                  
                  {/* Timeline Line */}
                  {index < phases.length - 1 && (
                    <div className={styles["timeline-line"]}></div>
                  )}
                </div>
                
                {/* Phase Content */}
                <div className={styles["timeline-content"]}>
                  <PovPhaseCard
                    phase={phase.phase}
                    days={phase.days}
                    objectives={phase.objectives}
                    activities={phase.activities}
                    exitCriteria={phase.exitCriteria}
                    isActive={index === 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success KPIs & Pass-Fail Gates */}
        <div className={styles["pov-section"]}>
          <h3>
            <i className="fas fa-chart-bar" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
            Success KPIs &amp; Pass-Fail Gates
          </h3>
          
          <div style={{ marginBottom: 'var(--spacing-xl)' }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse', 
              marginBottom: 'var(--spacing-lg)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              borderRadius: 'var(--border-radius-md)',
              overflow: 'hidden',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}>
              <thead>
                <tr style={{ 
                  backgroundColor: 'rgba(0, 135, 43, 0.05)',
                  borderBottom: '2px solid rgba(0, 135, 43, 0.1)'
                }}>
                  <th style={{ 
                    padding: 'var(--spacing-md)', 
                    textAlign: 'left',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-sm)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    <i className="fas fa-signal" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                    Signal
                  </th>
                  <th style={{ 
                    padding: 'var(--spacing-md)', 
                    textAlign: 'left',
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-sm)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    <i className="fas fa-bullseye" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                    Pass Threshold
                  </th>
                </tr>
              </thead>
              <tbody>
                {kpiGates.map((kpi, index) => (
                  <tr key={index} style={{ 
                    backgroundColor: index % 2 === 1 ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
                  }}>
                    <td style={{ 
                      padding: 'var(--spacing-md)', 
                      fontWeight: '600',
                      color: 'var(--color-text-primary)',
                      verticalAlign: 'top'
                    }}>
                      <i className="fas fa-key" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                      {kpi.kpi}
                    </td>
                    <td style={{ 
                      padding: 'var(--spacing-md)',
                      color: 'var(--color-text-secondary)',
                      lineHeight: '1.5',
                      verticalAlign: 'top'
                    }}>
                      {kpi.passTarget}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Contingency Plans */}
        <div className={styles["pov-section"]}>
          <h3>
            <i className="fas fa-shield-check" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
            2.3 If No Real Attacks Occur
          </h3>
          
          {/* Hero Message */}
          <div style={{ 
            marginBottom: 'var(--spacing-xl)',
            padding: 'var(--spacing-xl)',
            background: 'linear-gradient(135deg, rgba(0, 135, 43, 0.08), rgba(0, 135, 43, 0.03))',
            borderRadius: 'var(--border-radius-lg)',
            border: '2px solid rgba(0, 135, 43, 0.15)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'rgba(0, 135, 43, 0.05)',
              borderRadius: '50%',
              transform: 'translate(30px, -30px)'
            }}></div>
            <h4 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: 'var(--color-primary)',
              marginBottom: 'var(--spacing-md)',
              display: 'flex',
              alignItems: 'center'
            }}>
              <i className="fas fa-chart-line" style={{ marginRight: '12px', fontSize: '1.5rem' }}></i>
              Value Without Incidents
            </h4>
            <p style={{ 
              fontSize: '1.1rem',
              color: 'var(--color-text-primary)',
              lineHeight: '1.7',
              margin: 0,
              fontWeight: '500',
              marginBottom: 'var(--spacing-md)'
            }}>
              Even without security incidents, Above delivers <strong>immediate, measurable value</strong> through behavioral insights and proactive risk reduction.
            </p>
            <div style={{
              padding: 'var(--spacing-md)',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: 'var(--border-radius-md)',
              border: '1px solid rgba(0, 135, 43, 0.2)',
              backdropFilter: 'blur(10px)'
            }}>
              <h5 style={{
                margin: '0 0 var(--spacing-sm) 0',
                color: 'var(--color-primary)',
                fontSize: '1rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center'
              }}>
                <i className="fas fa-clipboard-check" style={{ marginRight: '8px' }}></i>
                Compliance-Ready Documentation
              </h5>
              <p style={{
                margin: 0,
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.5'
              }}>
                <strong>Audit-ready reports</strong> for SOX 404 (access controls), SOC 2 Type II (access monitoring), GDPR Article 32 (access logging), and PCI DSS 7.1 (user access restrictions) — delivered automatically as part of your PoV.
              </p>
            </div>
          </div>

          {/* Value Categories Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-xxl)'
          }}>
            
            {/* OAuth Permissions Card */}
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'linear-gradient(135deg, #ffffff, #fafbfc)',
              borderRadius: 'var(--border-radius-lg)',
              border: '1px solid rgba(0, 135, 43, 0.1)',
              boxShadow: '0 8px 25px rgba(0, 135, 43, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, var(--color-primary), #0d7d2f)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-lg)',
                boxShadow: '0 4px 12px rgba(0, 135, 43, 0.25)'
              }}>
                <i className="fas fa-key" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: '1.3'
              }}>
                OAuth Permission Audit
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'var(--color-primary)',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  ✓ SOX • SOC 2 • GDPR • PCI DSS Compliant
                </div>
              </h4>
              <ul style={{ 
                margin: 0, 
                padding: 0,
                listStyle: 'none',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Total OAuth grants discovered across all users
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  High-risk permissions flagged (full access, admin rights)
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Apps with excessive data access
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Dormant OAuth grants recommended for revocation
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>SOX 404.B.1:</strong> Access control documentation
                  </div>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>SOC 2 CC6.1:</strong> Logical access security monitoring
                  </div>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>GDPR Art. 32.1(d):</strong> Access logging and monitoring
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>PCI DSS 7.1.1:</strong> User access restrictions documentation
                  </div>
                </li>
              </ul>
            </div>

            {/* Shadow SaaS Discovery */}
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'linear-gradient(135deg, #ffffff, #fafbfc)',
              borderRadius: 'var(--border-radius-lg)',
              border: '1px solid rgba(0, 135, 43, 0.1)',
              boxShadow: '0 8px 25px rgba(0, 135, 43, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, var(--color-primary), #0d7d2f)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-lg)',
                boxShadow: '0 4px 12px rgba(0, 135, 43, 0.25)'
              }}>
                <i className="fas fa-eye-slash" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: '1.3'
              }}>
                Shadow SaaS Inventory
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'var(--color-primary)',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  ✓ Risk Assessment • Vendor Management • Data Governance
                </div>
              </h4>
              <ul style={{ 
                margin: 0, 
                padding: 0,
                listStyle: 'none',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Complete inventory of unsanctioned applications
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  AI/ML tools with data processing capabilities
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  File sharing and collaboration platforms
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Usage frequency and data exposure analysis
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-exclamation-triangle" style={{ color: '#f39c12', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>Risk Impact:</strong> Vendor risk, data loss prevention, contract compliance
                  </div>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>NIST CSF 1.1 ID.AM-3:</strong> Organizational communication and data flows mapped
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>ISO 27001 A.12.6.1:</strong> Management of technical vulnerabilities
                  </div>
                </li>
              </ul>
            </div>

            {/* User Behavior Analytics */}
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'linear-gradient(135deg, #ffffff, #fafbfc)',
              borderRadius: 'var(--border-radius-lg)',
              border: '1px solid rgba(0, 135, 43, 0.1)',
              boxShadow: '0 8px 25px rgba(0, 135, 43, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, var(--color-primary), #0d7d2f)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-lg)',
                boxShadow: '0 4px 12px rgba(0, 135, 43, 0.25)'
              }}>
                <i className="fas fa-users" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: '1.3'
              }}>
                User Behavior Analytics
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'var(--color-primary)',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  ✓ Zero Trust • UEBA • Insider Protection Compliant
                </div>
              </h4>
              <ul style={{ 
                margin: 0, 
                padding: 0,
                listStyle: 'none',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Real-time nudges delivered to at-risk users
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Anomalous behavior patterns and risk scoring
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Behavior change trends and effectiveness metrics
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Session timeline reconstruction for HR/legal
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-brain" style={{ color: '#8e44ad', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>AI Prevention:</strong> Proactive user guidance vs reactive detection
                  </div>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>NIST CSF 2.0 DE.AE-2:</strong> Event data analysis for anomaly detection
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>ISO 27001 A.12.4.1:</strong> Event logging and monitoring procedures
                  </div>
                </li>
              </ul>
            </div>

            {/* Security Recommendations */}
            <div style={{
              padding: 'var(--spacing-xl)',
              background: 'linear-gradient(135deg, #ffffff, #fafbfc)',
              borderRadius: 'var(--border-radius-lg)',
              border: '1px solid rgba(0, 135, 43, 0.1)',
              boxShadow: '0 8px 25px rgba(0, 135, 43, 0.08)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, var(--color-primary), #0d7d2f)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 'var(--spacing-lg)',
                boxShadow: '0 4px 12px rgba(0, 135, 43, 0.25)'
              }}>
                <i className="fas fa-shield-alt" style={{ fontSize: '24px', color: 'white' }}></i>
              </div>
              <h4 style={{ 
                fontSize: '1.25rem',
                fontWeight: '700',
                color: 'var(--color-text-primary)',
                marginBottom: 'var(--spacing-md)',
                lineHeight: '1.3'
              }}>
                Actionable Recommendations
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'var(--color-primary)',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  ✓ Risk Mitigation • Process Improvement • ROI Optimization
                </div>
              </h4>
              <ul style={{ 
                margin: 0, 
                padding: 0,
                listStyle: 'none',
                color: 'var(--color-text-secondary)',
                lineHeight: '1.6'
              }}>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Policy updates based on actual usage patterns
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Priority OAuth grants to review/revoke
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  User training recommendations
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-check-circle" style={{ color: 'var(--color-primary)', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  Integration opportunities with existing tools
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-dollar-sign" style={{ color: '#27ae60', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>Cost Savings:</strong> Tool consolidation opportunities (15-30% security budget reduction)
                  </div>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-clock" style={{ color: '#3498db', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>Time to Value:</strong> Immediate actionability vs traditional 6-month implementation
                  </div>
                </li>
                <li style={{ marginBottom: 'var(--spacing-sm)', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>CISA Zero Trust:</strong> Behavioral analytics supporting ZT architecture
                  </div>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fas fa-shield-alt" style={{ color: '#e74c3c', marginRight: '12px', marginTop: '2px', fontSize: '14px' }}></i>
                  <div>
                    <strong>NIST SP 800-207:</strong> Zero Trust identity verification and continuous monitoring
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Quantifiable Metrics Dashboard */}
          <div style={{
            padding: 'var(--spacing-xxl)',
            background: 'linear-gradient(135deg, rgba(0, 135, 43, 0.08), rgba(0, 135, 43, 0.03))',
            borderRadius: 'var(--border-radius-lg)',
            border: '2px solid rgba(0, 135, 43, 0.15)',
            marginBottom: 'var(--spacing-xl)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '-50px',
              left: '-50px',
              width: '150px',
              height: '150px',
              background: 'rgba(0, 135, 43, 0.05)',
              borderRadius: '50%'
            }}></div>
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-30px',
              width: '120px',
              height: '120px',
              background: 'rgba(0, 135, 43, 0.03)',
              borderRadius: '50%'
            }}></div>
            
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)', position: 'relative', zIndex: 1 }}>
              <h4 style={{
                fontSize: '1.75rem',
                fontWeight: '800',
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="fas fa-chart-line" style={{ marginRight: '16px', fontSize: '2rem' }}></i>
                Quantifiable Value Delivered
              </h4>
              <p style={{
                fontSize: '1.1rem',
                color: 'var(--color-text-secondary)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.6'
              }}>
                Measurable outcomes from Above's behavioral insights, even without security incidents
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--spacing-xl)',
              position: 'relative',
              zIndex: 1
            }}>
              <div style={{ 
                textAlign: 'center',
                padding: 'var(--spacing-lg)',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid rgba(0, 135, 43, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: 'var(--color-primary)',
                  lineHeight: '1',
                  marginBottom: 'var(--spacing-sm)'
                }}>100%</div>
                <div style={{ 
                  fontSize: '1rem', 
                  color: 'var(--color-text-primary)',
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-xs)'
                }}>OAuth Visibility</div>
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.4'
                }}>Complete audit coverage</div>
              </div>
              
              <div style={{ 
                textAlign: 'center',
                padding: 'var(--spacing-lg)',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid rgba(0, 135, 43, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: 'var(--color-primary)',
                  lineHeight: '1',
                  marginBottom: 'var(--spacing-sm)'
                }}>15-30</div>
                <div style={{ 
                  fontSize: '1rem', 
                  color: 'var(--color-text-primary)',
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-xs)'
                }}>Shadow Apps</div>
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.4'
                }}>Discovered per 100 users</div>
              </div>
              
              <div style={{ 
                textAlign: 'center',
                padding: 'var(--spacing-lg)',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid rgba(0, 135, 43, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: 'var(--color-primary)',
                  lineHeight: '1',
                  marginBottom: 'var(--spacing-sm)'
                }}>5-10</div>
                <div style={{ 
                  fontSize: '1rem', 
                  color: 'var(--color-text-primary)',
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-xs)'
                }}>Users Nudged</div>
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.4'
                }}>Daily behavioral guidance</div>
              </div>
              
              <div style={{ 
                textAlign: 'center',
                padding: 'var(--spacing-lg)',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid rgba(0, 135, 43, 0.1)',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  fontWeight: '900', 
                  color: 'var(--color-primary)',
                  lineHeight: '1',
                  marginBottom: 'var(--spacing-sm)'
                }}>25%</div>
                <div style={{ 
                  fontSize: '1rem', 
                  color: 'var(--color-text-primary)',
                  fontWeight: '600',
                  marginBottom: 'var(--spacing-xs)'
                }}>Behavior Change</div>
                <div style={{ 
                  fontSize: '0.875rem', 
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.4'
                }}>Risk reduction over time</div>
              </div>
            </div>
          </div>

        </div>

        {/* Setup Checklist */}
        <div className={styles["setup-checklist"]}>
          <h4>
            <i className="fas fa-check-circle" />
            2.4 Set-up Checklist (Shared with Buyer)
          </h4>
          
          <ul className={styles["checklist-items"]}>
            {setupChecklist.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PovPlaybook;
