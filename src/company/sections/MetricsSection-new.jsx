import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import MetricsCard from '../components/MetricsCard';

const MetricsSection = () => {
  const metrics = [
    {
      dimension: 'Phish Prevention',
      description: 'Real-time blocking of consent and OAuth phishing attempts before credential compromise',
      kpi: 'Percentage of consent/OAuth phish blocked pre-credential',
      baseline: 'Unknown',
      target: '>90% of events',
      icon: 'fas fa-shield-alt',
      variant: 'critical'
    },
    {
      dimension: 'User Coaching',
      description: 'Behavioral training effectiveness when users encounter coaching interstitials',
      kpi: 'Override-after-coaching rate',
      baseline: 'N/A',
      target: '<2%',
      icon: 'fas fa-graduation-cap',
      variant: 'performance'
    },
    {
      dimension: 'IR Efficiency',
      description: 'Speed improvement in incident response and threat investigation workflows',
      kpi: 'Analyst triage time per phishing incident',
      baseline: '45 minutes',
      target: '<15 minutes',
      icon: 'fas fa-clock',
      variant: 'efficiency'
    },
    {
      dimension: 'Visibility Lift',
      description: 'Discovery of shadow IT and unmanaged SaaS applications through browser telemetry',
      kpi: 'Net-new SaaS applications surfaced',
      baseline: 'Unknown',
      target: '+20% in 30 days',
      icon: 'fas fa-eye',
      variant: 'discovery'
    },
    {
      dimension: 'Deployment Friction',
      description: 'Operational overhead and user support requirements during rollout',
      kpi: 'Support tickets per 1,000 users',
      baseline: '—',
      target: '<0.5',
      icon: 'fas fa-tools',
      variant: 'operations'
    }
  ];

  return (
    <SectionContainer id="metrics" title="3 | METRICS THAT MATTER (LAND → EXPAND)" variant="executive">
      <div>
        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
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
          background: 'var(--bg-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--brand-primary)'
        }}>
          <strong>Success Framework:</strong> These metrics establish clear value demonstration for both technical teams (phish prevention, IR efficiency) and business stakeholders (deployment friction, visibility ROI). Target achievements within 90 days create expansion momentum.
        </div>
      </div>
    </SectionContainer>
  );
};

export default MetricsSection;
