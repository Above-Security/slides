import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import styles from '../styles/CompanyIndex.module.css';

const ExecutiveSummarySection = () => (
  <SectionContainer id="executive-summary" title="9 | EXECUTIVE SUMMARY (TL;DR)">
    <div>
      <ul>
        <li><strong>Above gives you real-time visibility</strong> into what users actually do in SaaS, browsers, and unsanctioned apps.</li>
        <li><strong>Detects intent-based insider risk:</strong> gray-area misuse, role drift, offboarding gaps, AI workarounds, OAuth abuse.</li>
        <li><strong>Browser-native, Chrome-only, fast to deploy.</strong> No agents, no traffic routing, no log parsing.</li>
        <li><strong>Not just a new category</strong> — a usable layer of signal and accountability that every org needs.</li>
      </ul>
      <div className={styles["final-statement"]}>
        <strong>We give teams visibility into user behavior they've never had — and we do it in weeks, not quarters.</strong>
        <br/><br/>
        <em>Above = post-auth visibility, behavioral detection, and real-time control — built on browser telemetry.</em>
      </div>
    </div>
  </SectionContainer>
);

export default ExecutiveSummarySection;
