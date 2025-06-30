import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import RiskMitigationCard from '../components/RiskMitigationCard';

const RisksSection = () => {
  const criticalRisks = [
    {
      risk: 'Buyer claims: "CASB already does this"',
      mitigation: 'Show behavioral evidence CASB *can\'t* see — e.g., UI actions, OAuth detail, ChatGPT misuse',
      severity: 'high',
      icon: 'fas fa-cloud'
    },
    {
      risk: 'Privacy concern',
      mitigation: 'No keystrokes, no screen captures — only security-relevant events with clear logs',
      severity: 'medium',
      icon: 'fas fa-user-shield'
    },
    {
      risk: 'Overhead concern',
      mitigation: 'Show install is 60 seconds, Chrome only, low CPU impact',
      severity: 'low',
      icon: 'fas fa-tachometer-alt'
    },
    {
      risk: '"We don\'t need it if no breach"',
      mitigation: 'Prove prevention ROI by showing risky intent before it becomes an incident',
      severity: 'high',
      icon: 'fas fa-shield-alt'
    }
  ];

  return (
    <SectionContainer id="risks" title="8 | CRITICAL RISKS & COUNTER-MEASURES">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--color-background-secondary)', 
          borderRadius: 'var(--radius-lg)',
          borderLeft: '4px solid var(--color-primary)'
        }}>
          <strong>Risk Management Framework:</strong> Proactive objection handling and differentiation strategies to address common buyer concerns and competitive positioning challenges.
        </div>

        {/* Critical Risks & Counter-Measures Table */}
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
                backgroundColor: 'rgba(220, 53, 69, 0.05)',
                borderBottom: '2px solid rgba(220, 53, 69, 0.1)'
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
                  <i className="fas fa-exclamation-triangle" style={{ marginRight: '8px', color: '#dc3545' }}></i>
                  Risk
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
                  <i className="fas fa-shield-alt" style={{ marginRight: '8px', color: '#28a745' }}></i>
                  Counter-Measure
                </th>
              </tr>
            </thead>
            <tbody>
              {criticalRisks.map((item, index) => (
                <tr key={index} style={{ 
                  backgroundColor: index % 2 === 1 ? 'rgba(0, 0, 0, 0.02)' : 'transparent',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <td style={{ 
                    padding: 'var(--spacing-md)', 
                    fontWeight: '600',
                    color: 'var(--color-text-primary)',
                    verticalAlign: 'top',
                    width: '40%'
                  }}>
                    <i className={item.icon} style={{ marginRight: '8px', color: '#dc3545' }}></i>
                    {item.risk}
                  </td>
                  <td style={{ 
                    padding: 'var(--spacing-md)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.5',
                    verticalAlign: 'top'
                  }}>
                    <i className="fas fa-check-circle" style={{ marginRight: '8px', color: '#28a745' }}></i>
                    {item.mitigation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
          {criticalRisks.map((risk, index) => (
            <RiskMitigationCard
              key={index}
              risk={risk.risk}
              mitigation={risk.mitigation}
              severity={risk.severity}
              icon={risk.icon}
            />
          ))}
        </div>

        <div style={{ 
          marginTop: 'var(--spacing-2xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--color-background-primary)', 
          border: '1px solid var(--color-border-primary)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h4 style={{ 
            margin: '0 0 var(--spacing-md) 0',
            color: 'var(--color-text-primary)',
            fontSize: 'var(--font-size-md)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
            <i className="fas fa-shield-alt" /> Risk Monitoring & Response
          </h4>
          <p style={{ 
            margin: 0, 
            color: 'var(--color-text-secondary)',
            lineHeight: '1.6'
          }}>
            Each risk category has specific monitoring KPIs and escalation procedures. Weekly risk reviews during deployment phase ensure early detection and rapid response to emerging issues.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default RisksSection;
