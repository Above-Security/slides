import React from 'react';
import SectionContainer from '../../components/SectionContainer';

const PovPlaybook = () => (
  <SectionContainer id="pov-playbook" title="2 | YEAR‑1 POV & SUCCESS PLAYBOOK">
    <div>
      <h3>2.0 Why So Much Rigor?</h3>
      <p><em>We get one shot to prove value in less than a monthly sprint. The buyer has five other pilots in flight — we must be the one that actually finishes.</em></p>

      <h3>2.1 PoV Guard‑Rails (3 Weeks Total)</h3>
      <table className="narrative-table">
        <thead>
          <tr>
            <th>Phase</th>
            <th>Days</th>
            <th>Objectives</th>
            <th>Activities</th>
            <th>Exit / Evidence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Prep</strong></td>
            <td>−5 → 0</td>
            <td>Contract / DPIA signed, Admins briefed, Success KPIs frozen</td>
            <td>30‑min kickoff call, provide force‑install JSON, enable SIEM webhook</td>
            <td>Work‑back plan agreed, &lt;1 h customer effort</td>
          </tr>
          <tr>
            <td><strong>Week 1 – Instrument</strong></td>
            <td>1 → 7</td>
            <td>100 % of pilot fleet covered; no UX regression</td>
            <td>Push extension, validate health dashboard, daily stand‑up w/ SecOps</td>
            <td>≥ 90 % agents green, zero perf complaints</td>
          </tr>
          <tr>
            <td><strong>Week 2 – Observe</strong></td>
            <td>8 → 14</td>
            <td>Surface “unknown unknowns” + near‑miss phish</td>
            <td>Passive detections only, risk report, live SIEM enrichment demo</td>
            <td>≥ 3 true‑positive phish or ≥ 10 consent/OAuth risk events, ≥ 20 % new SaaS surfaced</td>
          </tr>
          <tr>
            <td><strong>Week 3 – Act &amp; Coach</strong></td>
            <td>15 → 21</td>
            <td>Prove user coaching &amp; SOC efficiency</td>
            <td>Flip to soft‑block, measure override rate, IR drill with timeline, exec read‑out</td>
            <td>&lt;1 % override, 2× faster triage, signed business‑case deck</td>
          </tr>
        </tbody>
      </table>

      <h3>2.2 Success KPIs &amp; Pass‑Fail Gates</h3>
      <table className="narrative-table">
        <thead>
          <tr>
            <th>KPI</th>
            <th>Pass Target</th>
            <th>Fail Trigger</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phish / consent phish blocked pre‑credential</td>
            <td>&gt; 90 % of observed events</td>
            <td>&lt; 70 %</td>
          </tr>
          <tr>
            <td>Unknown SaaS discovery delta</td>
            <td>&ge; 20 % increase</td>
            <td>&lt; 10 %</td>
          </tr>
          <tr>
            <td>User override rate after coaching</td>
            <td>&lt; 2 %</td>
            <td>&ge; 5 %</td>
          </tr>
          <tr>
            <td>Analyst triage time reduction</td>
            <td>&ge; 30 % faster</td>
            <td>&lt; 10 %</td>
          </tr>
          <tr>
            <td>Deployment effort (customer hours)</td>
            <td>&le; 4 h total</td>
            <td>&gt; 8 h</td>
          </tr>
        </tbody>
      </table>

      <h3>2.3 If No Real Attacks Occur</h3>
      <ol>
        <li><strong>Near‑Miss Ledger</strong> – auto‑generate annotated timeline of blocked look‑alike domains, expired certificates, abnormal OAuth scopes.</li>
        <li><strong>Visibility Wins Report</strong> – quantified SaaS &amp; extension inventory delta delivered as PDF plus raw CSV for SIEM.</li>
        <li><strong>Forensic Drill</strong> – SOC re‑opens a closed phish ticket; runs side‑by‑side with/without Above telemetry.</li>
        <li><strong>Red‑Team Voucher</strong> – post‑purchase commitment: <em>if</em> internal red‑team bypasses Above we credit 1 mo licence.</li>
      </ol>

      <h3>2.4 Set‑up Checklist (Shared with Buyer)</h3>
      <ul>
        <li>Stakeholder map (CISO, SecOps lead, IT, Privacy Counsel)</li>
        <li>Definition of “pilot success” signed (KPIs &amp; thresholds)</li>
        <li>Browser versions &gt; v116 Chrome / Edge confirmed</li>
        <li>SIEM endpoint / token supplied</li>
        <li>Slack or Teams channel for daily comms</li>
      </ul>
    </div>
  </SectionContainer>
);

export default PovPlaybook;
