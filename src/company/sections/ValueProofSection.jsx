import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import CalloutBox from '../components/CalloutBox';

const ValueProofSection = () => (
  <SectionContainer id="value-proof" title="7 | IF NO ATTACKS DURING POV – PROVING VALUE">
    <div>
      <ol>
        <li><strong>Near‑miss Evidence</strong> – Show flagged consent pages, password‑reuse prompts, and blocklist hits from open‑source phish IOCs.</li>
        <li><strong>Visibility Delta</strong> – Quantify unknown SaaS, risky extensions, weak MFA scores for each user – give risk report.</li>
        <li><strong>Investigation Drill</strong> – Re‑play a historic incident with and without our timeline; have analyst live‑compare speed.</li>
        <li><strong>Red‑Team Voucher</strong> – Offer post‑sale internal phish simulation voucher to prove stop‑rate (paid by us if miss KPI).</li>
      </ol>
      <CalloutBox variant="blunt">
        <em>"If in 14 days we don't surface anything you find useful, we deserve to lose."</em>
      </CalloutBox>
    </div>
  </SectionContainer>
);

export default ValueProofSection;
