import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import HypothesesTestCard from '../components/HypothesesTestCard';

const HypothesesSection = () => {
  const hypotheses = [
    {
      hypothesis: 'Teams want visibility even if no attack',
      evidence: 'Show frictionless insights during uneventful weeks',
      testMethod: 'Demonstrate value through behavioral patterns and risk identification',
      killCriteria: 'If customers only engage during incidents',
      riskLevel: 'high',
      testProgress: 0
    },
    {
      hypothesis: 'OAuth abuse is invisible',
      evidence: 'Quantify unrecognized app connections and prompt feedback',
      testMethod: 'Surface OAuth grants that security teams didn\'t know existed',
      killCriteria: 'If teams already have complete OAuth visibility',
      riskLevel: 'medium',
      testProgress: 0
    },
    {
      hypothesis: 'Offboarding drift is common',
      evidence: 'Surface residual sessions after IdP deactivation',
      testMethod: 'Detect active sessions tied to disabled accounts',
      killCriteria: 'If organizations have perfect session hygiene',
      riskLevel: 'low',
      testProgress: 0
    },
    {
      hypothesis: 'Chrome telemetry is operationally useful',
      evidence: 'Confirm analysts act on Above data in IR flows',
      testMethod: 'Track investigation workflow improvements and SIEM integration',
      killCriteria: 'If analysts don\'t change behavior based on our data',
      riskLevel: 'high',
      testProgress: 0
    }
  ];

  return (
    <SectionContainer id="hypotheses" title="6 | DEAL-CRITICAL HYPOTHESES & HOW WE TEST">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--color-background-secondary)', 
          borderRadius: 'var(--radius-lg)',
          borderLeft: '4px solid var(--color-primary)'
        }}>
          <strong>Validation Framework:</strong> These four hypotheses are fundamental to proving market need and product-market fit. Each hypothesis has specific testing methods and evidence requirements that validate our core value proposition.
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: 'var(--spacing-lg)' 
        }}>
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
            <i className="fas fa-flask" /> Testing Timeline
          </h4>
          <ul style={{ 
            margin: 0, 
            paddingLeft: 'var(--spacing-lg)',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.6'
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