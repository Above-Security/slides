import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import RoadmapTimelineCard from '../components/RoadmapTimelineCard';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      quarter: 'Q1-Q2',
      capability: 'Insider heat-map (behavioral drift scoring)',
      revenue: 'Add-on per-seat fee',
      hypothesis: 'Browser telemetry + ML = earlier insider signal than DTEX',
      status: 'planned'
    },
    {
      quarter: 'Q2-Q3',
      capability: 'Real-time policy actions (block mass export, rogue role change)',
      revenue: '"Runtime DLP Lite" module',
      hypothesis: 'Customers will pay to prevent insider misuse, not just observe',
      status: 'planned'
    },
    {
      quarter: 'Q3-Q4',
      capability: 'API tie-ins to ZTNA / IdP for session kill, step-up auth',
      revenue: 'Enterprise tier / workflow credits',
      hypothesis: 'Orchestrated response drives stickiness and upsell',
      status: 'planned'
    },
    {
      quarter: 'Q4',
      capability: 'BYOD lightweight agent (Edge + unmanaged Chrome)',
      revenue: 'Opens EDU & contractor-heavy verticals',
      hypothesis: 'Privacy gates solvable with FIDO attestation',
      status: 'planned'
    }
  ];

  const icpLayers = [
    {
      title: 'Existing PhishGuard customers',
      description: 'Upsell Runtime Insider Protection to proven successful deployments',
      icon: 'fas fa-arrow-up'
    },
    {
      title: 'IRM / Insider-Risk programs',
      description: 'Target financial & healthcare organizations with compliance requirements',
      icon: 'fas fa-user-shield'
    },
    {
      title: 'CASB refresh cycles',
      description: 'Sell as faster/cheaper alternative where Netskope / Skyhigh replacement is planned',
      icon: 'fas fa-sync-alt'
    }
  ];

  return (
    <SectionContainer id="roadmap" title="5 | YEAR-2 EXPANSION ROADMAP (12-24 Months)">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--bg-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--brand-primary)'
        }}>
          <strong>Year-2 Strategy:</strong> Transition from phishing prevention to full Runtime Insider Protection platform with insider threat detection, real-time policy enforcement, and orchestrated response capabilities.
        </div>

        <div style={{ display: 'grid', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-2xl)' }}>
          {roadmapItems.map((item, index) => (
            <RoadmapTimelineCard
              key={index}
              quarter={item.quarter}
              capability={item.capability}
              revenue={item.revenue}
              hypothesis={item.hypothesis}
              status={item.status}
            />
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
