import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import styles from '../styles/CompanyIndex.module.css';

const PositioningSection = () => (
  <SectionContainer id="positioning" title="4 | REPLACE vs ENHANCE – POSITIONING">
    <div>
      <table className={styles["narrative-table"]}>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Our Stance</th>
            <th>Talk‑Track</th>
            <th>Risk</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Secure Email Gateway</strong></td>
            <td><strong>Enhance</strong></td>
            <td>“…we catch what slips after the click.”</td>
            <td>Duplication worries – show pass‑through integration</td>
          </tr>
          <tr>
            <td><strong>CASB / SSE</strong></td>
            <td><strong>Augment now, muzzle later (Year‑2)</strong></td>
            <td>“…CASB sees traffic; we see intent in the UI. Eventually we can enforce same policies without PAC files.”</td>
            <td>Must not appear as direct rip‑and‑replace too early</td>
          </tr>
          <tr>
            <td><strong>Push Security</strong></td>
            <td><strong>Supersede</strong></td>
            <td>“Push v2 = us + detection + coaching + SIEM timelines.”</td>
            <td>Need proof on richer detections</td>
          </tr>
          <tr>
            <td><strong>Enterprise Browser</strong></td>
            <td><strong>Lightweight alt</strong></td>
            <td>“Same runtime control without forcing browser swap.”</td>
            <td>Browser replacement vendors will spread FUD on extension bypass – have answer</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SectionContainer>
);

export default PositioningSection;
