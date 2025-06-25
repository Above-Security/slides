import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import RiskMitigationCard from '../components/RiskMitigationCard';

const RisksSection = () => {
  const criticalRisks = [
    {
      risk: 'Extension removal / evasion',
      mitigation: 'Detect uninstall, auto-re-enroll via MDM, raise IdP webhook to force step-up auth.',
      severity: 'high',
      icon: 'fas fa-puzzle-piece'
    },
    {
      risk: 'Privacy objections',
      mitigation: 'Provide on-device redaction, PCI/PII tag drop, and EU data-center option; publish DPIA template.',
      severity: 'medium',
      icon: 'fas fa-user-shield'
    },
    {
      risk: '"Yet another console" fatigue',
      mitigation: 'Ship Splunk / Sentinel apps Day-1; console optional.',
      severity: 'low',
      icon: 'fas fa-desktop'
    }
  ];

  return (
    <SectionContainer id="risks" title="8 | CRITICAL RISKS & COUNTER-MEASURES">
      <div>
        <div style={{ 
          marginBottom: 'var(--spacing-xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--bg-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--brand-primary)'
        }}>
          <strong>Risk Management Framework:</strong> Proactive identification and mitigation of deployment, operational, and adoption risks that could impact customer success and retention.
        </div>

        <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
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
            🛡️ Risk Monitoring & Response
          </h4>
          <p style={{ 
            margin: 0, 
            color: 'var(--text-secondary)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Each risk category has specific monitoring KPIs and escalation procedures. Weekly risk reviews during deployment phase ensure early detection and rapid response to emerging issues.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default RisksSection;
