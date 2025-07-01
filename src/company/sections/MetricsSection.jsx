import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import MetricsCard from '../components/MetricsCard';

const MetricsSection = () => {
  const metrics = [
    {
      dimension: 'MTTR (insider)',
      description: 'Faster investigation using session context and behavioral timeline',
      kpi: 'Mean time to investigate insider threats',
      baseline: '4-6 hours',
      target: '<1 hour',
      icon: 'fas fa-clock',
      variant: 'critical'
    },
    {
      dimension: 'MTTD (token/role drift)',
      description: 'Early detection of misuse not caught by IdP or CASB systems',
      kpi: 'Time to detect privilege drift and session abuse',
      baseline: 'Days/weeks',
      target: 'Real-time',
      icon: 'fas fa-radar',
      variant: 'performance'
    },
    {
      dimension: 'Unique OAuth grants',
      description: 'Quantifies exposure via 3rd-party app delegation and shadow integrations',
      kpi: 'OAuth applications discovered vs. known inventory',
      baseline: 'Unknown',
      target: '+30% discovery',
      icon: 'fas fa-key',
      variant: 'discovery'
    },
    {
      dimension: '% SaaS with session visibility',
      description: 'Shows coverage breadth beyond API-integrated apps and managed tools',
      kpi: 'SaaS applications with behavioral monitoring',
      baseline: '<20%',
      target: '>80%',
      icon: 'fas fa-eye',
      variant: 'coverage'
    },
    {
      dimension: 'Detection → IR tickets',
      description: 'Proves operational integration and actionable alert quality',
      kpi: 'Alerts that generate investigation tickets',
      baseline: '10-20%',
      target: '>70%',
      icon: 'fas fa-ticket',
      variant: 'efficiency'
    },
    {
      dimension: 'Heatmap of user risk',
      description: 'Maps behavior concentration and aids prioritization of security focus',
      kpi: 'High-risk users identified proactively',
      baseline: 'Unknown',
      target: 'Top 5% flagged',
      icon: 'fas fa-chart-heat',
      variant: 'intelligence'
    },
    {
      dimension: 'Risky behavior nudges delivered',
      description: 'Real-time user guidance and policy enforcement effectiveness',
      kpi: 'In-browser nudges delivered to users',
      baseline: '0',
      target: '>500/month',
      icon: 'fas fa-hand-point-right',
      variant: 'coaching'
    },
    {
      dimension: 'Users with behavior timelines',
      description: 'Comprehensive session context available for HR/legal investigations',
      kpi: 'Users with detailed behavioral timelines',
      baseline: '0%',
      target: '100% monitored users',
      icon: 'fas fa-timeline',
      variant: 'forensics'
    }
  ];

  return (
    <SectionContainer id="metrics" title="3 | METRICS THAT MATTER (LAND → EXPAND)">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--color-background-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--color-primary)'
        }}>
          <strong>Key Performance Indicators:</strong> These metrics demonstrate operational value and justify expansion from initial deployment to enterprise-wide adoption.
        </div>

        {/* Metrics Table */}
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
                  <i className="fas fa-chart-line" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Metric
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
                  <i className="fas fa-question-circle" style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                  Why It Matters
                </th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((metric, index) => (
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
                    <i className={metric.icon} style={{ marginRight: '8px', color: 'var(--color-primary)' }}></i>
                    {metric.dimension}
                  </td>
                  <td style={{ 
                    padding: 'var(--spacing-md)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.5',
                    verticalAlign: 'top'
                  }}>
                    {metric.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', 
          gap: 'var(--spacing-xl)',
          alignItems: 'start'
        }}>
          {metrics.map((metric, index) => (
            <MetricsCard
              key={index}
              dimension={metric.dimension}
              description={metric.description}
              kpi={metric.kpi}
              baseline={metric.baseline}
              target={metric.target}
              icon={metric.icon}
              variant={metric.variant}
            />
          ))}
        </div>
        
        <div style={{ 
          marginTop: 'var(--spacing-2xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--color-background-secondary)', 
          borderRadius: 'var(--radius-lg)',
          borderLeft: '4px solid var(--color-primary)'
        }}>
          <strong>Success Framework:</strong> These metrics establish clear value demonstration for both technical teams (phish prevention, IR efficiency) and business stakeholders (deployment friction, visibility ROI). Target achievements within 90 days create expansion momentum.
        </div>
      </div>
    </SectionContainer>
  );
};

export default MetricsSection;