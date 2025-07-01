import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import styles from '../styles/CompanyIndex.module.css';

const ExecutiveSummarySection = () => (
  <SectionContainer id="executive-summary" title="9 | EXECUTIVE SUMMARY (TL;DR)">
    <div>
      <ul>
        <li><strong>Above gives you real-time visibility</strong> into what users actually do in SaaS apps, browsers, and unsanctioned tools.</li>
        <li><strong>Nudges users</strong> with in-browser guidance to prevent risky behavior before it becomes an incident.</li>
        <li><strong>Helps HR/legal investigate</strong> with detailed behavioral timelines and session context.</li>
        <li><strong>Browser-native, Chrome-only, fast to deploy.</strong> No agents, no traffic routing, no log parsing.</li>
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
