import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import ValueProofCard from '../components/ValueProofCard';
import CalloutBox from '../components/CalloutBox';

const ValueProofSection = () => {
  const valueProofStrategies = [
    {
      title: 'Near-miss Evidence',
      description: 'Show flagged consent pages, password-reuse prompts, and blocklist hits from open-source phish IOCs.',
      icon: 'fas fa-exclamation-triangle',
      priority: 'critical'
    },
    {
      title: 'Visibility Delta',
      description: 'Quantify unknown SaaS, risky extensions, weak MFA scores for each user – give comprehensive risk report.',
      icon: 'fas fa-chart-bar',
      priority: 'high'
    },
    {
      title: 'Investigation Drill',
      description: 'Re-play a historic incident with and without our timeline; have analyst live-compare speed.',
      icon: 'fas fa-search',
      priority: 'high'
    },
    {
      title: 'Red-Team Voucher',
      description: 'Offer post-sale internal phish simulation voucher to prove stop-rate (paid by us if miss KPI).',
      icon: 'fas fa-shield-alt',
      priority: 'default'
    }
  ];

  return (
    <SectionContainer id="value-proof" title="7 | IF NO ATTACKS DURING POV – PROVING VALUE">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--bg-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--brand-primary)'
        }}>
          <strong>Value Demonstration Strategy:</strong> When real attacks don't occur during the PoV period, we have multiple proven methods to demonstrate security value and ROI to stakeholders.
        </div>

        <div style={{ display: 'grid', gap: 'var(--spacing-lg)', marginBottom: 'var(--spacing-xl)' }}>
          {valueProofStrategies.map((strategy, index) => (
            <ValueProofCard
              key={index}
              title={strategy.title}
              description={strategy.description}
              icon={strategy.icon}
              priority={strategy.priority}
            />
          ))}
        </div>
        
        <CalloutBox variant="blunt">
          <em>"If in 14 days we don't surface anything you find useful, we deserve to lose."</em>
        </CalloutBox>
      </div>
    </SectionContainer>
  );
};

export default ValueProofSection;
