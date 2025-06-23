import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import styles from '../styles/CompanyIndex.module.css';

const ExecutiveSummarySection = () => (
  <SectionContainer id="executive-summary" title="9 | EXECUTIVE SUMMARY (TL;DR)">
    <div>
      <ul>
        <li><em>Land fast</em> with phishing prevention &amp; coaching that shows ROI in &lt;14 days.</li>
        <li><em>Expand</em> by monetizing the <strong>unique browser telemetry</strong> every other control plane lacks.</li>
        <li><em>Dominate</em> by adding real‑time insider threat prevention, gradually encroaching on legacy CASB / UEBA budgets.</li>
      </ul>
      <div className={styles.finalStatement}>
        <strong>Above</strong> becomes the lightweight, deploy‑anywhere runtime layer that <strong>starts</strong> where IAM ends and <strong>finishes</strong> what CASB &amp; email security can’t.
      </div>
    </div>
  </SectionContainer>
);

export default ExecutiveSummarySection;
