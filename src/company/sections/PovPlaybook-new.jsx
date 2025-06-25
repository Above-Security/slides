import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import PovPhaseCard from '../components/PovPhaseCard';
import KpiGateCard from '../components/KpiGateCard';

const PovPlaybook = () => {
  const phases = [
    {
      phase: 'Preparation',
      days: '-5 → 0 days',
      objectives: 'Contract / DPIA signed, Admins briefed, Success KPIs frozen',
      activities: '30-min kickoff call, provide force-install JSON, enable SIEM webhook',
      exitCriteria: 'Work-back plan agreed, <1h customer effort',
      phaseNumber: '1'
    },
    {
      phase: 'Week 1 – Instrument',
      days: '1 → 7 days',
      objectives: '100% of pilot fleet covered; no UX regression',
      activities: 'Push extension, validate health dashboard, daily stand-up w/ SecOps',
      exitCriteria: '≥90% agents green, zero performance complaints',
      phaseNumber: '2'
    },
    {
      phase: 'Week 2 – Observe',
      days: '8 → 14 days',
      objectives: 'Surface "unknown unknowns" + near-miss phishing',
      activities: 'Passive detections only, risk report, live SIEM enrichment demo',
      exitCriteria: '≥3 true-positive phish or ≥10 consent/OAuth risk events, ≥20% new SaaS surfaced',
      phaseNumber: '3'
    },
    {
      phase: 'Week 3 – Act & Coach',
      days: '15 → 21 days',
      objectives: 'Prove user coaching & SOC efficiency',
      activities: 'Flip to soft-block, measure override rate, IR drill with timeline, exec read-out',
      exitCriteria: '<1% override, 2× faster triage, signed business-case deck',
      phaseNumber: '4'
    }
  ];

  const kpiGates = [
    {
      kpi: 'Phishing / consent phishing blocked pre-credential',
      passTarget: '>90% of observed events',
      failTrigger: '<70%',
      status: 'pending'
    },
    {
      kpi: 'Unknown SaaS discovery delta',
      passTarget: '≥20% increase',
      failTrigger: '<10%',
      status: 'pending'
    },
    {
      kpi: 'User override rate after coaching',
      passTarget: '<2%',
      failTrigger: '≥5%',
      status: 'pending'
    },
    {
      kpi: 'Analyst triage time reduction',
      passTarget: '≥30% faster',
      failTrigger: '<10%',
      status: 'pending'
    },
    {
      kpi: 'Deployment effort (customer hours)',
      passTarget: '≤4h total',
      failTrigger: '>8h',
      status: 'pending'
    }
  ];

  const contingencyPlans = [
    {
      title: 'Near-Miss Ledger',
      description: 'Auto-generate annotated timeline of blocked look-alike domains, expired certificates, abnormal OAuth scopes.',
      icon: 'fas fa-list-alt'
    },
    {
      title: 'Visibility Wins Report',
      description: 'Quantified SaaS & extension inventory delta delivered as PDF plus raw CSV for SIEM.',
      icon: 'fas fa-chart-bar'
    },
    {
      title: 'Forensic Drill',
      description: 'SOC re-opens a closed phish ticket; runs side-by-side with/without Above telemetry.',
      icon: 'fas fa-search'
    },
    {
      title: 'Red-Team Voucher',
      description: 'Post-purchase commitment: if internal red-team bypasses Above we credit 1 month license.',
      icon: 'fas fa-shield-alt'
    }
  ];

  const setupChecklist = [
    'Stakeholder map (CISO, SecOps lead, IT, Privacy Counsel)',
    'Definition of "pilot success" signed (KPIs & thresholds)',
    'Browser versions >v116 Chrome / Edge confirmed',
    'SIEM endpoint / token supplied',
    'Slack or Teams channel for daily communications'
  ];

  return (
    <SectionContainer id="pov-playbook" title="2 | YEAR-1 POV & SUCCESS PLAYBOOK">
      <div>
        {/* Introduction */}
        <div style={{ 
          marginBottom: 'var(--spacing-2xl)', 
          padding: 'var(--spacing-lg)', 
          background: 'var(--bg-secondary)', 
          borderRadius: 'var(--border-radius-lg)',
          borderLeft: '4px solid var(--brand-primary)'
        }}>
          <h3 style={{ margin: '0 0 var(--spacing-md) 0', color: 'var(--text-primary)' }}>
            2.0 Why So Much Rigor?
          </h3>
          <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--text-secondary)' }}>
            <em>We get one shot to prove value in less than a monthly sprint. The buyer has five other pilots in flight — we must be the one that actually finishes.</em>
          </p>
        </div>

        {/* PoV Phases */}
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h3 style={{ 
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
            2.1 PoV Guard-Rails (3 Weeks Total)
          </h3>
          
          <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
            {phases.map((phase, index) => (
              <PovPhaseCard
                key={index}
                phase={phase.phase}
                days={phase.days}
                objectives={phase.objectives}
                activities={phase.activities}
                exitCriteria={phase.exitCriteria}
                phaseNumber={phase.phaseNumber}
                isActive={index === 1} // Make Week 1 active as example
              />
            ))}
          </div>
        </div>

        {/* Success KPIs */}
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h3 style={{ 
            marginBottom: 'var(--spacing-xl)',
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
            2.2 Success KPIs & Pass-Fail Gates
          </h3>
          
          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            {kpiGates.map((kpi, index) => (
              <KpiGateCard
                key={index}
                kpi={kpi.kpi}
                passTarget={kpi.passTarget}
                failTrigger={kpi.failTrigger}
                status={kpi.status}
              />
            ))}
          </div>
        </div>

        {/* Contingency Plans */}
        <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
          <h3 style={{ 
            marginBottom: 'var(--spacing-lg)',
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
            2.3 If No Real Attacks Occur
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: 'var(--spacing-lg)' 
          }}>
            {contingencyPlans.map((plan, index) => (
              <div key={index} style={{ 
                background: 'var(--surface-primary)',
                border: '1px solid var(--border-secondary)',
                borderRadius: 'var(--border-radius-lg)',
                padding: 'var(--spacing-lg)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  marginBottom: 'var(--spacing-md)'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--border-radius-md)',
                    background: 'var(--brand-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <i className={plan.icon} style={{ color: 'white', fontSize: 'var(--font-size-md)' }} />
                  </div>
                  <h4 style={{ 
                    margin: 0,
                    color: 'var(--text-primary)',
                    fontSize: 'var(--font-size-md)',
                    fontWeight: 'var(--font-weight-semibold)'
                  }}>
                    {plan.title}
                  </h4>
                </div>
                <p style={{ 
                  margin: 0,
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--font-size-sm)',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Checklist */}
        <div style={{ 
          background: 'var(--surface-primary)', 
          border: '1px solid var(--border-secondary)',
          borderRadius: 'var(--border-radius-lg)',
          padding: 'var(--spacing-xl)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ 
            margin: '0 0 var(--spacing-lg) 0',
            color: 'var(--text-primary)',
            fontSize: 'var(--font-size-xl)',
            fontWeight: 'var(--font-weight-bold)'
          }}>
            2.4 Set-up Checklist (Shared with Buyer)
          </h3>
          
          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            {setupChecklist.map((item, index) => (
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
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'var(--brand-gradient)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <i className="fas fa-check" style={{ color: 'white', fontSize: 'var(--font-size-xs)' }} />
                </div>
                <span style={{ 
                  color: 'var(--text-primary)',
                  fontSize: 'var(--font-size-sm)',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PovPlaybook;
