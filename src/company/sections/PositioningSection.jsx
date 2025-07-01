import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import PositioningCard from '../components/PositioningCard';

const PositioningSection = () => {
  const positioningData = [
    {
      tool: 'CASB / DLP',
      stance: 'Enhance',
      stanceType: 'enhance',
      talkTrack: 'We see user behavior *before* files move or traffic is flagged',
      risk: 'Buyer claims: "CASB already does this"',
      counterMeasure: 'Show behavioral evidence CASB *can\'t* see — UI actions, OAuth detail, ChatGPT misuse',
      icon: 'fas fa-cloud'
    },
    {
      tool: 'SSPM',
      stance: 'Enhance',
      stanceType: 'enhance',
      talkTrack: 'We show *usage*, not just config posture',
      risk: 'Limited differentiation on config monitoring',
      counterMeasure: 'Focus on behavioral risk vs. configuration compliance',
      icon: 'fas fa-cog'
    },
    {
      tool: 'EDR/XDR',
      stance: 'Enhance',
      stanceType: 'enhance',
      talkTrack: 'We add browser identity-level session context',
      risk: 'Endpoint tools claim browser coverage',
      counterMeasure: 'Show post-authentication session detail that EDR misses',
      icon: 'fas fa-desktop'
    },
    {
      tool: 'UEBA',
      stance: 'Replace',
      stanceType: 'replace',
      talkTrack: 'Faster deployment, real-time SaaS focus, no SIEM complexity (often shelved)',
      risk: 'UEBA solutions often already purchased but unused',
      counterMeasure: 'Position as "UEBA that actually works" with immediate value',
      icon: 'fas fa-chart-line'
    }
  ];

  return (
    <SectionContainer id="positioning" title="4 | REPLACE vs ENHANCE — POSITIONING">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--bg-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--brand-primary)'
        }}>
          <strong>Strategic Positioning:</strong> Above is <em>not</em> a new DLP or UBA... we complement existing tools by providing behavioral visibility they lack, while positioning to replace UEBA solutions that organizations have often shelved due to complexity and lack of actionable insights.
        </div>

        {/* Replace vs Enhance Table */}
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
                  <i className="fas fa-tools" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Tool
                </th>
                <th style={{ 
                  padding: 'var(--spacing-md)', 
                  textAlign: 'center',
                  fontWeight: '600',
                  color: 'var(--color-text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  <i className="fas fa-arrows-alt-h" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Approach
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
                  <i className="fas fa-plus-circle" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Enhance How?
                </th>
              </tr>
            </thead>
            <tbody>
              {positioningData.map((item, index) => (
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
                    <i className={item.icon} style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                    {item.tool}
                  </td>
                  <td style={{ 
                    padding: 'var(--spacing-md)',
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 'var(--font-size-lg)',
                    verticalAlign: 'top'
                  }}>
                    {item.stanceType === 'enhance' ? (
                      <span style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: 'var(--spacing-xs) var(--spacing-sm)',
                        backgroundColor: 'rgba(40, 167, 69, 0.1)',
                        color: '#28a745',
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '600'
                      }}>
                        <i className="fas fa-plus-circle" style={{ marginRight: '6px' }}></i>
                        {item.stance}
                      </span>
                    ) : (
                      <span style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: 'var(--spacing-xs) var(--spacing-sm)',
                        backgroundColor: 'rgba(255, 193, 7, 0.1)',
                        color: '#856404',
                        borderRadius: 'var(--border-radius-sm)',
                        fontSize: 'var(--font-size-sm)',
                        fontWeight: '600'
                      }}>
                        <i className="fas fa-exchange-alt" style={{ marginRight: '6px' }}></i>
                        {item.stance}
                      </span>
                    )}
                  </td>
                  <td style={{ 
                    padding: 'var(--spacing-md)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.5',
                    verticalAlign: 'top'
                  }}>
                    {item.talkTrack}
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
          {positioningData.map((item, index) => (
            <PositioningCard
              key={index}
              tool={item.tool}
              stance={item.stance}
              stanceType={item.stanceType}
              talkTrack={item.talkTrack}
              risk={item.risk}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default PositioningSection;