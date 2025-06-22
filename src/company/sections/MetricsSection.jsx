import React from 'react';
import SectionContainer from '../../components/SectionContainer';

const MetricsSection = () => (
  <SectionContainer id="metrics" title="3 | METRICS THAT MATTER (LAND → EXPAND)" variant="executive">
    <div>
      <table className="narrative-table">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>KPI</th>
            <th>Baseline Pain</th>
            <th>Win Condition</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phish Prevention</strong></td>
            <td>% Consent/OAuth phish blocked pre‑credential</td>
            <td>Unknown</td>
            <td>&gt;90 % of events</td>
          </tr>
          <tr>
            <td><strong>User Coaching</strong></td>
            <td>Override‑after‑coaching rate</td>
            <td>N/A</td>
            <td>&lt;2 %</td>
          </tr>
          <tr>
            <td><strong>IR Efficiency</strong></td>
            <td>Analyst triage time per phish incident</td>
            <td>45 min</td>
            <td>&lt;15 min</td>
          </tr>
          <tr>
            <td><strong>Visibility Lift</strong></td>
            <td>Net‑new SaaS apps surfaced</td>
            <td>?</td>
            <td>+20 % in 30 d</td>
          </tr>
          <tr>
            <td><strong>Deployment Friction</strong></td>
            <td>Support tickets per 1 000 users</td>
            <td>–</td>
            <td>&lt;0.5</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SectionContainer>
);

export default MetricsSection;
