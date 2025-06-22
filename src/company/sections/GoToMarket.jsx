import React from 'react';
import SectionContainer from '../../components/SectionContainer';

const GoToMarket = () => (
  <SectionContainer id="go-to-market" title="1 | YEAR‑1 GO‑TO‑MARKET (0‑12 Months)" variant="executive" priority="high">
    <div>
      <h3>1.1 How We Sell (Motion)</h3>
      <table className="narrative-table">
        <thead>
          <tr>
            <th>Stage</th>
            <th>Channel</th>
            <th>Champion</th>
            <th>Commercial Model</th>
            <th>Critical Risks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Land</strong> – 1‑500 seats pilot</td>
            <td>Direct (founder‑led AE + SE)</td>
            <td>SecOps Team Lead / Staff Security Engineer</td>
            <td>Flat pilot fee (or free if under 500 seats)</td>
            <td>Low signal if no phishing occurs</td>
          </tr>
          <tr>
            <td><strong>Expand</strong> – 500‑5 000 seats</td>
            <td>Same account team, add CISO exec sponsor</td>
            <td>CISO / Dir. Identity</td>
            <td>Annual SaaS (ARR/seat) w/ phishing + telemetry bundle</td>
            <td>Budget comes from email‑sec – must avoid “yet‑another‑phishing‑tool” bucket</td>
          </tr>
          <tr>
            <td><strong>Scale</strong> – 5 000‑50 000</td>
            <td>MSSP & VAR co‑sell</td>
            <td>IR, SOC leadership</td>
            <td>Tiered seat‑based + volume discount</td>
            <td>Privacy & data‑residency objections</td>
          </tr>
        </tbody>
      </table>
      <div className="narrative-hook">
        <em>"Email gateways catch &lt;40% of initial phish. Everything else starts in the browser – we stop it <strong>and</strong> give you post‑auth forensics the instant you need them."</em>
      </div>

      <h3>1.2 What We Sell (Packages)</h3>
      <ol>
        <li><strong>Starter (PhishGuard)</strong> – real‑time phishing soft‑block & coaching (Chrome Extension only).</li>
        <li><strong>Growth (PhishGuard + ScopeLens)</strong> – adds full browser telemetry export to SIEM/XDR; timeline & enrichment panels for investigations.</li>
        <li><strong>Platform (Runtime ITDR)</strong> – unlocks Year‑2 detections (privilege misuse, insider drift) + response policies.</li>
      </ol>
      <div className="critical-stance">
        <strong>Critical stance:</strong> Don’t attempt full insider detections in Year‑1 – “visibility first” avoids promise / delivery gap that kills early deals.
      </div>

      <h3>1.3 Ideal ICP (Beach‑head)</h3>
      <ul>
        <li><strong>Size:</strong> 500‑5 000 employees (fast buy cycles, but material ARR).</li>
        <li><strong>Profile:</strong> Cloud‑native, Google Workspace / M365, heavy SaaS.</li>
        <li><strong>Pain triggers:</strong> ‑ Recent AitM / OAuth phish scare ‑ Overworked IR team ‑ Mandate to move toward Zero‑Trust but no budget for Enterprise Browser replacement.</li>
        <li><strong>Tech stack fit:</strong> Okta or Entra ID, CrowdStrike, Splunk/Chronicle, Proofpoint/Mimecast.</li>
      </ul>
    </div>
  </SectionContainer>
);

export default GoToMarket;
