import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import styles from '../styles/CompanyIndex.module.css';

const RoadmapSection = () => (
  <SectionContainer id="roadmap" title="5 | YEAR‑2 EXPANSION ROADMAP (12‑24 Months)">
    <div>
      <table className={styles.narrativeTable}>
        <thead>
          <tr>
            <th>Q</th>
            <th>Capability</th>
            <th>New Revenue Lever</th>
            <th>Hypothesis to Prove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Q1‑Q2</strong></td>
            <td>Insider heat‑map (behavioral drift scoring)</td>
            <td>Add‑on per‑seat fee</td>
            <td>Browser telemetry + ML = earlier insider signal than DTEX</td>
          </tr>
          <tr>
            <td><strong>Q2‑Q3</strong></td>
            <td>Real‑time policy actions (block mass export, rogue role change)</td>
            <td>“Runtime DLP Lite” module</td>
            <td>Customers will pay to prevent insider misuse, not just observe</td>
          </tr>
          <tr>
            <td><strong>Q3‑Q4</strong></td>
            <td>API tie‑ins to ZTNA / IdP for session kill, step‑up auth</td>
            <td>Enterprise tier / workflow credits</td>
            <td>Orchestrated response drives stickiness and upsell</td>
          </tr>
          <tr>
            <td><strong>Q4</strong></td>
            <td>BYOD lightweight agent (Edge + unmanaged Chrome)</td>
            <td>Opens EDU & contractor‑heavy verticals</td>
            <td>Privacy gates solvable with FIDO attestation</td>
          </tr>
        </tbody>
      </table>

      <h3>Year‑2 ICP Layer‑Cake</h3>
      <ol>
        <li><strong>Existing PhishGuard customers</strong> – upsell Runtime ITDR.</li>
        <li><strong>IRM / Insider‑Risk programs</strong> in financial / healthcare orgs.</li>
        <li><strong>CASB refresh cycles</strong> where Netskope / Skyhigh replacement is planned – sell as faster/cheaper alternative.</li>
      </ol>
    </div>
  </SectionContainer>
);

export default RoadmapSection;
