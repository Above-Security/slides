import React from 'react';
import SectionContainer from '../../components/SectionContainer';
import CalloutBox from '../components/CalloutBox';
import MotionTimeline from '../components/MotionTimeline';
import PackageTiles from '../components/PackageTiles';
import ICPProfile from '../components/ICPProfile';

const phases = [
  {
    stage: 'Land – 1‑500 seats',
    channel: 'Direct (founder‑led AE + SE)',
    champion: 'SecOps Team Lead / Staff Security Engineer',
    model: 'Flat pilot fee or free <500 seats',
    risk: 'Low signal if no phishing occurs',
    icon: 'fas fa-flag-checkered'
  },
  {
    stage: 'Expand – 500‑5 000',
    channel: 'Same team + CISO sponsor',
    champion: 'CISO / Dir. Identity',
    model: 'ARR/seat + telemetry bundle',
    risk: 'Avoid "yet‑another‑phishing-tool" bucket',
    icon: 'fas fa-chart-line'
  },
  {
    stage: 'Scale – 5 000‑50 000',
    channel: 'MSSP & VAR co‑sell',
    champion: 'IR, SOC leadership',
    model: 'Tiered seat + volume discount',
    risk: 'Privacy & data residency objections',
    icon: 'fas fa-rocket'
  }
];

const packages = [
  {
    name: 'Starter (PhishGuard)',
    description: 'Real‑time phishing soft‑block & coaching (Chrome Extension only).',
    icon: 'fas fa-shield-alt'
  },
  {
    name: 'Growth (PhishGuard + ScopeLens)',
    description: 'Adds full browser telemetry export to SIEM/XDR; timeline & enrichment panels.',
    icon: 'fas fa-search'
  },
  {
    name: 'Platform (Runtime ITDR)',
    description: 'Unlocks Year‑2 detections (privilege misuse, insider drift) + response policies.',
    icon: 'fas fa-layer-group'
  }
];

const icpItems = [
  {
    label: 'Size',
    text: '500‑5 000 employees (fast buy cycles, material ARR)',
    icon: 'fas fa-users'
  },
  {
    label: 'Profile',
    text: 'Cloud‑native, Google Workspace / M365, heavy SaaS',
    icon: 'fas fa-cloud'
  },
  {
    label: 'Pain triggers',
    text: 'Recent AitM scare, overworked IR team, Zero‑Trust mandate',
    icon: 'fas fa-bolt'
  },
  {
    label: 'Tech stack fit',
    text: 'Okta or Entra ID, CrowdStrike, Splunk/Chronicle, Proofpoint/Mimecast',
    icon: 'fas fa-plug'
  }
];

const GoToMarket = () => (
  <SectionContainer
    id="go-to-market"
    title="1 | YEAR‑1 GO‑TO‑MARKET (0‑12 Months)"
    variant="executive"
    priority="high"
  >
    <div>
      <h3>1.1 How We Sell (Motion)</h3>
      <MotionTimeline phases={phases} />
      <CalloutBox variant="hook">
        <em>
          "Email gateways catch &lt;40% of initial phish. Everything else starts in the browser – we stop it <strong>and</strong> give you post‑auth forensics the instant you need them."
        </em>
      </CalloutBox>

      <h3>1.2 What We Sell (Packages)</h3>
      <PackageTiles packages={packages} />
      <CalloutBox variant="critical">
        <strong>Critical stance:</strong> Don’t attempt full insider detections in Year‑1 – “visibility first” avoids promise / delivery gap that kills early deals.
      </CalloutBox>

      <h3>1.3 Ideal ICP (Beach‑head)</h3>
      <ICPProfile items={icpItems} />
    </div>
  </SectionContainer>
);

export default GoToMarket;
