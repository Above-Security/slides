import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import RoadmapTimelineCard from '../components/RoadmapTimelineCard';
import styles from '../styles/CompanyIndex.module.css';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      area: 'Browser telemetry platform',
      detail: 'Build unified signal layer across all web activity',
      timeline: 'Q1-Q2 2026',
      hypothesis: 'Comprehensive browser telemetry creates defensible moat',
      status: 'planned'
    },
    {
      area: 'Automated response controls',
      detail: 'MFA challenges, session blocks, and access quarantine based on behavior',
      timeline: 'Q2-Q3 2026',
      hypothesis: 'Actionable controls eliminate alert fatigue and manual intervention',
      status: 'planned'
    },
    {
      area: 'Remediation actions',
      detail: 'Revoke sessions, block app grants, show in-browser banners',
      timeline: 'Q3-Q4 2026',
      hypothesis: 'Automated response capabilities drive enterprise adoption',
      status: 'planned'
    },
    {
      area: 'Coaching UX',
      detail: 'Display real-time guidance ("this app is unsanctioned")',
      timeline: 'Q4 2026',
      hypothesis: 'User education reduces security incidents proactively',
      status: 'planned'
    },
    {
      area: 'Manager visibility',
      detail: 'Heatmaps and summaries by team, org unit, persona',
      timeline: 'Q1 2027',
      hypothesis: 'Management dashboards enable organizational behavior insights',
      status: 'planned'
    }
  ];

  const icpLayers = [
    {
      title: 'Year-1 design partners',
      description: 'Expand successful POVs into full platform deployments',
      icon: 'fas fa-rocket'
    },
    {
      title: 'Mid-market with IRM needs',
      description: 'Target orgs needing insider risk management without dedicated tools',
      icon: 'fas fa-user-shield'
    },
    {
      title: 'Chrome Enterprise customers',
      description: 'Leverage existing Google Workspace relationships for expansion',
      icon: 'fas fa-chrome'
    },
    {
      title: 'Identity-forward organizations',
      description: 'Orgs with mature IdP deployments seeking behavioral layer',
      icon: 'fas fa-id-card'
    }
  ];

  return (
    <SectionContainer id="roadmap" title="5 | YEAR-2 EXPANSION ROADMAP (12-24 Months)">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--color-background-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--color-primary)'
        }}>
          <strong>Platform Evolution:</strong> Year-2 expansion focuses on building comprehensive behavioral risk platform with automated response capabilities.
        </div>

        {/* Year-2 Expansion Roadmap Table */}
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
                  <i className="fas fa-puzzle-piece" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Area
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
                  <i className="fas fa-info-circle" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {roadmapItems.map((item, index) => (
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
                    <i className="fas fa-arrow-right" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                    {item.area}
                  </td>
                  <td style={{ 
                    padding: 'var(--spacing-md)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.5',
                    verticalAlign: 'top'
                  }}>
                    {item.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          marginBottom: 'var(--spacing-2xl)'
        }}>
          {roadmapItems.map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              gap: 'var(--spacing-xl)',
              marginBottom: index < roadmapItems.length - 1 ? 'var(--spacing-2xl)' : '0',
              position: 'relative'
            }}>
              {/* Timeline Marker */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flexShrink: 0,
                position: 'relative',
                minWidth: '50px'
              }}>
                {/* Timeline Dot */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--brand-primary)',
                  border: '4px solid var(--surface-primary)',
                  boxShadow: '0 0 0 4px var(--brand-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  zIndex: 2
                }}>
                  {index + 1}
                </div>
                
                {/* Timeline Line */}
                {index < roadmapItems.length - 1 && (
                  <div style={{
                    width: '4px',
                    height: '120px',
                    background: 'linear-gradient(to bottom, var(--brand-primary), #e5e7eb)',
                    marginTop: 'var(--spacing-md)'
                  }}></div>
                )}
              </div>
              
              {/* Roadmap Content */}
              <div style={{ 
                flex: 1,
                background: 'var(--surface-primary)',
                border: '1px solid var(--border-secondary)',
                borderRadius: 'var(--border-radius-lg)',
                padding: 'var(--spacing-xl)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: 'var(--spacing-xs) var(--spacing-sm)',
                  background: 'var(--brand-primary)',
                  color: 'white',
                  borderRadius: 'var(--border-radius-md)',
                  fontWeight: 'var(--font-weight-bold)',
                  fontSize: 'var(--font-size-sm)',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  {item.timeline}
                </div>
                
                <h3 style={{
                  fontSize: 'var(--font-size-lg)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--text-primary)',
                  margin: '0 0 var(--spacing-md) 0'
                }}>
                  {item.area}
                </h3>
                
                <div style={{ display: 'grid', gap: 'var(--spacing-sm)' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                    padding: 'var(--spacing-sm)',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--border-radius-md)',
                    fontSize: 'var(--font-size-sm)'
                  }}>
                    <i className="fas fa-dollar-sign" style={{ color: 'var(--brand-primary)', width: '16px' }} />
                    <span>{item.detail}</span>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-sm)',
                    padding: 'var(--spacing-sm)',
                    background: 'var(--bg-secondary)',
                    borderRadius: 'var(--border-radius-md)',
                    fontSize: 'var(--font-size-sm)'
                  }}>
                    <i className="fas fa-flask" style={{ color: 'var(--text-secondary)', width: '16px' }} />
                    <span>{item.hypothesis}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          background: 'var(--surface-primary)', 
          border: '1px solid var(--border-secondary)',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'var(--spacing-xl)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ 
            marginTop: 0, 
            marginBottom: 'var(--spacing-lg)',
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-lg)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
            Year-2 ICP Layer-Cake
          </h3>
          
          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            {icpLayers.map((layer, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center',
                gap: 'var(--spacing-md)',
                padding: 'var(--spacing-md)',
                background: 'var(--bg-secondary)',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--border-secondary)'
              }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--border-radius-md)',
                  background: 'var(--brand-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className={layer.icon} style={{ color: 'white', fontSize: 'var(--font-size-sm)' }} />
                </div>
                <div>
                  <div style={{ 
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--text-primary)',
                    marginBottom: 'var(--spacing-xs)'
                  }}>
                    {layer.title}
                  </div>
                  <div style={{ 
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--font-size-sm)',
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    {layer.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default RoadmapSection;