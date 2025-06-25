import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import PositioningCard from '../components/PositioningCard';

const PositioningSection = () => {
  const positioningData = [
    {
      tool: 'Secure Email Gateway',
      stance: 'Enhance',
      stanceType: 'enhance',
      talkTrack: '"...we catch what slips after the click."',
      risk: 'Duplication worries – show pass-through integration',
      icon: 'fas fa-envelope-open-text'
    },
    {
      tool: 'CASB / SSE',
      stance: 'Augment now, muzzle later (Year-2)',
      stanceType: 'augment',
      talkTrack: '"...CASB sees traffic; we see intent in the UI. Eventually we can enforce same policies without PAC files."',
      risk: 'Must not appear as direct rip-and-replace too early',
      icon: 'fas fa-cloud-upload-alt'
    },
    {
      tool: 'Push Security',
      stance: 'Supersede',
      stanceType: 'supersede',
      talkTrack: '"Push v2 = us + detection + coaching + SIEM timelines."',
      risk: 'Need proof on richer detections',
      icon: 'fas fa-mobile-alt'
    },
    {
      tool: 'Enterprise Browser',
      stance: 'Lightweight alternative',
      stanceType: 'alternative',
      talkTrack: '"Same runtime control without forcing browser swap."',
      risk: 'Browser replacement vendors will spread FUD on extension bypass – have answer',
      icon: 'fas fa-globe'
    }
  ];

  return (
    <SectionContainer id="positioning" title="4 | REPLACE vs ENHANCE – POSITIONING">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--bg-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--brand-primary)'
        }}>
          <strong>Strategic Positioning:</strong> Our approach varies by tool category - we enhance email security, augment network tools, supersede point solutions, and provide lightweight alternatives to heavyweight browsers. Each positioning requires specific risk mitigation strategies.
        </div>

        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
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
