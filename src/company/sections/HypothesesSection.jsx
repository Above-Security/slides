import React from 'react';
import SectionContainer from '../../components/SectionContainer';

const HypothesesSection = () => (
  <SectionContainer id="hypotheses" title="6 | DEAL‑CRITICAL HYPOTHESES & HOW WE TEST">
    <div>
      <table className="narrative-table">
        <thead>
          <tr>
            <th>Hypothesis</th>
            <th>Evidence Sought in Y1</th>
            <th>Kill‑Criteria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Users tolerate coaching interstitials</td>
            <td>&lt;1 % uninstall rate in pilot</td>
            <td>&gt;5 % uninstall =&gt; redesign UX</td>
          </tr>
          <tr>
            <td>Browser telemetry materially speeds IR</td>
            <td>Analysts quote ≥30 % faster RCA</td>
            <td>&lt;10 % speed‑up =&gt; narrow scope</td>
          </tr>
          <tr>
            <td>Extension delivers enough coverage vs full browser</td>
            <td>80 % of managed fleet stays on Chrome‑family</td>
            <td>If customer base shifts to Safari/Firefox &gt;30 %, need cross‑browser port</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SectionContainer>
);

export default HypothesesSection;
