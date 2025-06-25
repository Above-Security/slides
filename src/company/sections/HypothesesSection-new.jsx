import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import HypothesesTestCard from '../components/HypothesesTestCard';

const HypothesesSection = () => {
  const hypotheses = [
    {
      hypothesis: 'Users tolerate coaching interstitials',
      evidence: '<1% uninstall rate in pilot',
      killCriteria: '>5% uninstall => redesign UX',
      riskLevel: 'medium',
      testProgress: 0
    },
    {
      hypothesis: 'Browser telemetry materially speeds IR',
      evidence: 'Analysts quote ≥30% faster RCA',
      killCriteria: '<10% speed-up => narrow scope',
      riskLevel: 'high',
      testProgress: 0
    },
    {
      hypothesis: 'Extension delivers enough coverage vs full browser',
      evidence: '80% of managed fleet stays on Chrome-family',
      killCriteria: 'If customer base shifts to Safari/Firefox >30%, need cross-browser port',
      riskLevel: 'low',
      testProgress: 0
    }
  ];

  return (
    <SectionContainer id="hypotheses" title="6 | DEAL-CRITICAL HYPOTHESES & HOW WE TEST">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--bg-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--brand-primary)'
        }}>
          <strong>Validation Framework:</strong> These three hypotheses are fundamental to our business model. Each has specific evidence thresholds and kill criteria that will determine Year-1 strategy pivots if validation fails.
        </div>

        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
          {hypotheses.map((hypothesis, index) => (
            <HypothesesTestCard
              key={index}
              hypothesis={hypothesis.hypothesis}
              evidence={hypothesis.evidence}
              killCriteria={hypothesis.killCriteria}
              riskLevel={hypothesis.riskLevel}
              testProgress={hypothesis.testProgress}
            />
          ))}
        </div>

        <div style={{ 
          marginTop: 'var(--spacing-2xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--surface-primary)', 
          border: '1px solid var(--border-secondary)',
          borderRadius: 'var(--border-radius-lg)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h4 style={{ 
            margin: '0 0 var(--spacing-md) 0',
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-md)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
            🧪 Testing Timeline
          </h4>
          <ul style={{ 
            margin: 0, 
            paddingLeft: 'var(--spacing-lg)',
            color: 'var(--text-secondary)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            <li><strong>Q1:</strong> Deploy pilot programs with 3-5 customers to test user tolerance</li>
            <li><strong>Q2:</strong> Measure IR speed improvements with established customers</li>
            <li><strong>Q3-Q4:</strong> Monitor browser adoption trends and competitive landscape</li>
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default HypothesesSection;
