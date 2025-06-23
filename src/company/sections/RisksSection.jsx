import React from 'react';
import SectionContainer from '../../components/SectionContainer';

const RisksSection = () => (
  <SectionContainer id="risks" title="8 | CRITICAL RISKS & COUNTER‑MEASURES">
    <div>
      <ul>
        <li><strong>Extension removal / evasion</strong> – Detect uninstall, auto‑re‑enroll via MDM, raise IdP webhook to force step‑up auth.</li>
        <li><strong>Privacy objections</strong> – Provide on‑device redaction, PCI/PII tag drop, and EU data‑center option; publish DPIA template.</li>
        <li><strong>‘Yet another console’ fatigue</strong> – Ship Splunk / Sentinel apps Day‑1; console optional.</li>
      </ul>
    </div>
  </SectionContainer>
);

export default RisksSection;
