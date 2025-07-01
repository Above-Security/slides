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
          <h3>2.3 If No Real Attacks Occur</h3>
          
          <div className={styles["contingency-grid"]}>
            {/* No contingency plans provided in the change description */}
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
