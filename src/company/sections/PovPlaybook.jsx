import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import PovPhaseCard from '../components/PovPhaseCard';
import KpiGateCard from '../components/KpiGateCard';
import styles from '../styles/CompanyIndex.module.css';

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
        <div className={styles["pov-intro"]}>
          <h3>2.0 Why So Much Rigor?</h3>
          <p>
            <em>We get one shot to prove value in less than a monthly sprint. The buyer has five other pilots in flight — we must be the one that actually finishes.</em>
          </p>
        </div>

        {/* PoV Phases */}
        <div className={styles["pov-section"]}>
          <h3>2.1 PoV Guard-Rails (3 Weeks Total)</h3>
          
          <div className={styles["timeline-container"]}>
            {phases.map((phase, index) => (
              <div key={index} className={styles["timeline-item"]}>
                {/* Timeline Marker */}
                <div className={styles["timeline-marker"]}>
                  {/* Timeline Dot */}
                  <div 
                    className={styles["timeline-dot"]}
                    style={{
                      background: index === 1 ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '48px',
                      height: '48px'
                    }}
                  >
                    {phase.phaseNumber}
                  </div>
                  
                  {/* Timeline Line */}
                  {index < phases.length - 1 && (
                    <div className={styles["timeline-line"]}></div>
                  )}
                </div>
                
                {/* Phase Content */}
                <div className={styles["timeline-content"]}>
                  <PovPhaseCard
                    phase={phase.phase}
                    days={phase.days}
                    objectives={phase.objectives}
                    activities={phase.activities}
                    exitCriteria={phase.exitCriteria}
                    phaseNumber={phase.phaseNumber}
                    isActive={index === 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success KPIs */}
        <div className={styles["pov-section"]}>
          <h3>2.2 Success KPIs & Pass-Fail Gates</h3>
          
          <div className={styles["kpi-gates-grid"]}>
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
        <div className={styles["pov-section"]}>
          <h3>2.3 If No Real Attacks Occur</h3>
          
          <div className={styles["contingency-grid"]}>
            {contingencyPlans.map((plan, index) => (
              <div key={index} className={styles["contingency-card"]}>
                <h4>
                  <i className={plan.icon} />
                  {plan.title}
                </h4>
                <p>{plan.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Setup Checklist */}
        <div className={styles["setup-checklist"]}>
          <h4>
            <i className="fas fa-check-circle" />
            2.4 Set-up Checklist (Shared with Buyer)
          </h4>
          
          <ul className={styles["checklist-items"]}>
            {setupChecklist.map((item, index) => (
              <li key={index}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};

export default PovPlaybook;
