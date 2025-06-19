import React from 'react';
import SlideLayout from '../components/SlideLayout';
import '../styles/components/card-patterns.css';
import '../styles/components/shared-slide-components.css';

const icps = [
  {
    icon: '🤖',
    title: 'Large Enterprise CISO / IRM Leader',
    summary: 'Needs real-time, in-session risk control for complex, regulated environments.',
    pains: [
      'No visibility post-authentication',
      'Lagging detection',
      'Compliance burden',
    ],
    values: [
      'Behavioral monitoring',
      'Session logs',
      'Runtime enforcement',
    ],
  },
  {
    icon: '🚗',
    title: 'Mid-Market Security Lead / IT Director',
    summary: 'Needs fast, easy SaaS protection for lean teams and high SaaS usage.',
    pains: [
      'Phishing/ATO risk',
      'No OAuth visibility',
      'Limited forensics',
    ],
    values: [
      'Deploys in hours',
      'Blocks consent',
      'Audit-ready logs',
    ],
  },
  {
    icon: '🧑‍💻',
    title: 'Security Architect / Identity Engineer',
    summary: 'Needs precision, low-friction controls for identity and browser security.',
    pains: [
      'API-only tools miss in-session risk',
      'SSO gaps',
      'Brittle policies',
    ],
    values: [
      'DOM/session visibility',
      'No proxying',
      'Real-time scoring',
    ],
  },
];

const objections = [
  {
    q: 'This feels like a nice-to-have.',
    a: 'Until a user consents to a malicious app and you can’t revoke access fast enough.'
  },
  {
    q: 'Isn’t this just DLP or CASB?',
    a: 'Those govern policy or content; Above governs behavior.'
  },
  {
    q: 'This is yet another agent.',
    a: 'It’s not. It’s a browser extension. Push via MDM, no install.'
  },
  {
    q: 'SSPM already flags risky OAuth apps.',
    a: 'Hours later. Above prevents the consent altogether.'
  },
];

const metrics = [
  { metric: 'Detection time (malicious consent)', before: 'Hours or never', after: 'Seconds — pre-consent' },
  { metric: 'Session-level visibility', before: 'Nonexistent or delayed', after: 'Real-time, browser-native' },
  { metric: 'Insider misuse response time', before: 'Post-incident investigation', after: 'Prevented at time of behavior' },
  { metric: 'Audit/compliance log fidelity', before: 'API/gaps in coverage', after: 'Structured browser telemetry' },
  { metric: 'Stack complexity', before: 'Multiple overlapping tools', after: 'Coverage consolidation + augmentation' },
];

const SlideBusinessCase = () => (
  <SlideLayout>
    <section className="executive-summary card card--brand">
      <div className="summary-title"><i className="fas fa-rocket"></i> Executive Summary</div>
      <div className="summary-text">
        <strong>Above Security</strong> fills a critical and unaddressed gap: <span style={{color:'var(--brand-primary)'}}>real-time visibility and control over in-session identity threats</span>.<br/>
        Traditional tools govern access, scan configs, or respond after-the-fact. Above operates <strong>where threats unfold—inside the browser, during legitimate SaaS sessions</strong>—and <span style={{color:'var(--brand-primary)'}}>stops malicious behavior before damage occurs</span>.
      </div>
    </section>

    <section style={{marginTop: 40, marginBottom: 40}}>
      <div className="key-points-grid">
        {icps.map((icp, i) => (
          <div className="card card--secondary" key={icp.title} style={{minHeight: 260}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
              <span style={{fontSize:'1.5rem'}}>{icp.icon}</span>
              <span style={{fontWeight:600, fontSize:'1.1rem', color:'var(--brand-primary)'}}>{icp.title}</span>
            </div>
            <div style={{fontSize:'1rem', color:'var(--text-secondary)', marginBottom:8}}>{icp.summary}</div>
            <div style={{marginBottom:8}}>
              <span style={{fontWeight:500, color:'var(--text-primary)'}}>Key Pains:</span>
              <ul style={{margin:'4px 0 0 18px',padding:0}}>{icp.pains.map((p,j)=><li key={j} style={{fontSize:'0.98rem'}}>{p}</li>)}</ul>
            </div>
            <div>
              <span style={{fontWeight:500, color:'var(--brand-primary)'}}>Above Value:</span>
              <ul style={{margin:'4px 0 0 18px',padding:0}}>{icp.values.map((v,j)=><li key={j} style={{fontSize:'0.98rem'}}>{v}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="card card--secondary" style={{marginBottom:40}}>
      <div style={{fontWeight:600, fontSize:'1.1rem', color:'var(--brand-primary)', marginBottom:12}}>Metrics Impact</div>
      <table style={{width:'100%',borderCollapse:'collapse',background:'none'}}>
        <thead>
          <tr style={{borderBottom:'1px solid var(--border-secondary)'}}>
            <th style={{textAlign:'left',fontWeight:600,padding:'8px 8px',color:'var(--text-secondary)',background:'none'}}>Metric</th>
            <th style={{textAlign:'left',fontWeight:600,padding:'8px 8px',color:'var(--text-secondary)',background:'none'}}>Before Above</th>
            <th style={{textAlign:'left',fontWeight:600,padding:'8px 8px',color:'var(--brand-primary)',background:'none'}}>After Above</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((m,i)=>(
            <tr key={i} style={{borderBottom:'1px solid var(--border-secondary)'}}>
              <td style={{padding:'8px 8px'}}>{m.metric}</td>
              <td style={{padding:'8px 8px'}}>{m.before}</td>
              <td style={{padding:'8px 8px',fontWeight:600,color:'var(--brand-primary)'}}>{m.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>

    <section className="card card--secondary" style={{marginBottom:40}}>
      <div style={{fontWeight:600, fontSize:'1.1rem', color:'var(--brand-primary)', marginBottom:12}}>Objections & Rebuttals</div>
      <ul style={{margin:0,padding:0,listStyle:'none',display:'flex',flexDirection:'column',gap:16}}>
        {objections.map((o,i)=>(
          <li key={i} style={{margin:0,padding:0}}>
            <div style={{fontWeight:600, color:'var(--text-primary)',marginBottom:2}}>{o.q}</div>
            <div style={{color:'var(--brand-primary)',fontWeight:500}}>{o.a}</div>
          </li>
        ))}
      </ul>
    </section>

    <section className="card card--brand" style={{textAlign:'center',padding:'40px 32px',marginTop:32}}>
      <div style={{fontSize:'1.25rem',fontWeight:600,marginBottom:12}}>Final Positioning</div>
      <div style={{fontSize:'1.1rem',fontWeight:500}}>
        Above doesn’t replace your security stack. It makes it accountable to the runtime layer.<br/>
        It’s where user action, identity, access, and risk intersect—in the browser.<br/>
        <span style={{color:'var(--brand-primary)'}}>It’s the last layer you need to catch the threats that everyone else assumes are someone else’s problem.</span>
      </div>
    </section>
  </SlideLayout>
);

export default SlideBusinessCase;
