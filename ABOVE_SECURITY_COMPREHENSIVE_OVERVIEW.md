# Above Security: Runtime Identity Threat Detection & Response Platform
## Comprehensive Technical and Business Overview

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Market Problem & Pain Points](#market-problem--pain-points)
3. [Solution Overview](#solution-overview)
4. [Technical Architecture](#technical-architecture)
5. [Key Capabilities](#key-capabilities)
6. [Real-World Use Cases](#real-world-use-cases)
7. [Competitive Landscape](#competitive-landscape)
8. [Deployment Model](#deployment-model)
9. [Market Leadership](#market-leadership)
10. [Business Case & ROI](#business-case--roi)
11. [Key Performance Indicators](#key-performance-indicators)
12. [Target Customer Profiles](#target-customer-profiles)
13. [Strategic Growth Roadmap](#strategic-growth-roadmap)

---

## Executive Summary

**Above Security** delivers the industry's first **Runtime Identity Threat Detection & Response (Runtime ITDR)** platform. Unlike traditional security tools that rely on logs and post-facto analysis, Above provides real-time visibility into user behavior *inside* applications after authentication.

### The Core Problem
- **80% of breaches happen after authentication** — when users are already inside applications
- Traditional ITDR, DLP, and UEBA tools watch logs and traffic but can't see what users actually do inside applications
- Emerging threats like semantic phishing (LOTS), OAuth abuse, and insider misuse exploit this visibility gap

### The Above Solution
Above bridges this gap with **browser-native runtime intelligence** that:
- **Sees user behavior in real-time** during active sessions
- **Understands intent and context** using LLM-powered semantic analysis  
- **Prevents threats before completion** — stopping attacks mid-session
- **Deploys in hours, not months** via lightweight browser extensions

---

## Market Problem & Pain Points

### The Identity Threat Landscape

#### Critical Security Gaps
Traditional security tools focus on **access control** rather than **actual behavior** inside applications, creating dangerous blind spots:

- **Post-authentication behavior** — What users do after login
- **In-application activities** — Actions within SaaS platforms
- **Session-level visibility** — Real-time user interactions
- **Semantic user intent** — Understanding the "why" behind actions

#### Emerging Identity Threats

##### 1. Semantic Phishing (LOTS - Living Off Trusted Services)
- **Attack Vector**: Attackers exploit legitimate-looking apps and interfaces
- **Method**: Bypass email security and MFA using trusted service branding
- **Impact**: Users grant access to malicious apps that appear legitimate
- **Traditional Detection**: ❌ Missed by email filters and endpoint security

##### 2. Session Hijacking
- **Attack Vector**: Stolen tokens or cookies to impersonate users
- **Method**: Bypass MFA entirely with valid session credentials
- **Impact**: Full account takeover without authentication
- **Traditional Detection**: ❌ Appears as legitimate session activity

##### 3. Low-and-Slow Data Scraping
- **Attack Vector**: Gradual data extraction to avoid detection thresholds
- **Method**: Insiders extract sensitive data over extended periods
- **Impact**: Massive data exposure flying under SIEM/DLP radar
- **Traditional Detection**: ❌ Below alerting thresholds, appears normal

##### 4. Gray-Area Insider Misuse
- **Attack Vector**: Legitimate users with valid access doing inappropriate things
- **Method**: Role creep, curiosity browsing, competitive intelligence gathering
- **Impact**: Data exposure, IP theft, compliance violations
- **Traditional Detection**: ❌ Rule-based systems can't flag "gray area" behavior

---

## Solution Overview

### What is Runtime ITDR?

Runtime ITDR provides visibility into user behavior **after authentication** by capturing and analyzing real user interactions within applications — not just logs or access patterns.

#### Key Differentiators

##### Runtime Behavioral Observability
- Captures clicks, inputs, navigation patterns, and page-level actions
- Understands what users are actually doing, not just whether they logged in
- Tracks scrolls, downloads, exports, deletions, and search behaviors

##### Intent Analysis
- Determines if access patterns are reasonable for user's role
- Identifies abnormal behavior compared to peer groups
- Flags actions that break trust or indicate malicious intent

##### Session-Level Visibility
- Provides complete picture of user activity during sessions
- No guesswork based on incomplete logs
- Real-time behavioral analysis and threat detection

### How Above Works

#### Technical Architecture

##### Browser Extension + LLM Analysis
- **Browser Extension**: Captures page content and user interactions across any web application in real-time
- **LLM Page Analysis**: Semantic analysis of page content to detect sophisticated phishing attempts and malicious intent
- **Real-Time Prevention**: Blocks sophisticated attacks before completion — prevents credential entry, stops malicious OAuth consent

##### Key Technical Components

1. **App-Agnostic Deployment**
   - Works with any web application
   - No API integration required
   - No traffic proxying or infrastructure changes

2. **Instant Deployment**
   - Days to deploy via browser management
   - Sends alerts to existing SIEM/SOAR platforms
   - Zero disruption to user workflows

3. **Semantic Understanding**
   - LLM understands user intent and page context
   - Bridges gaps that ITDR, DLP, and UEBA miss
   - Detects threats based on behavior, not just rules

---

## Key Capabilities

### Real-Time Threat Detection

#### Browser-Based Phishing Detection
- **AiTM (Adversary-in-the-Middle) Protection**: Detects pixel-perfect fake login pages
- **Consent Phishing Prevention**: Blocks malicious OAuth applications  
- **LOTS Attack Recognition**: Identifies Living Off Trusted Services patterns
- **Session Token Theft Prevention**: Stops credential harvesting attempts

#### Insider Threat Prevention
- **Role Misalignment Detection**: Flags access inconsistent with job function
- **Cross-App Correlation**: Tracks suspicious behavior across multiple applications
- **Intent-Based Drift Detection**: Identifies semantic shifts in user behavior
- **Exfiltration Indicators**: Detects unusual download and copy behaviors

#### Session Integrity Monitoring
- **Behavioral Mismatch Detection**: Identifies when session behavior doesn't match user history
- **Location and Device Analysis**: Flags suspicious access patterns
- **Navigation Pattern Analysis**: Detects automated or non-human behavior
- **Identity Drift Modeling**: Alerts on significant behavioral changes

### Advanced Analytics

#### Behavioral Baseline Establishment
- **User Profiling**: Establishes normal behavior patterns for each user
- **Peer Group Analysis**: Compares user behavior to role-based cohorts
- **Temporal Pattern Recognition**: Identifies time-based behavioral anomalies
- **Automated Response Actions**: Immediate interventions based on behavioral indicators - MFA challenges, session termination, access quarantine

#### Semantic Context Understanding
- **Page Content Analysis**: LLM-powered understanding of application interfaces
- **Intent Recognition**: Determines the purpose behind user actions
- **Threat Context Mapping**: Correlates behaviors to known attack patterns
- **Policy Violation Detection**: Identifies violations of business rules and compliance requirements

---

## Real-World Use Cases

### Case Study 1: Cyberhaven Incident

#### What Happened
A Cyberhaven developer was phished with a fake Google OAuth page. They unknowingly authorized a malicious app, which pushed a trojanized Chrome extension update to thousands of users. Email filters, EDR, and SIEM all missed the attack because the page looked legitimate.

#### What Above Would Have Caught

1. **OAuth Page Deep Inspection**
   - LLM parses page content and layout
   - Identifies mismatched branding and suspicious issuer identity
   - Flags discrepancies in app metadata

2. **Scope Mismatch Alert**
   - Analyzes permission scopes vs. app's stated purpose
   - Detects classic indicators of OAuth abuse
   - Compares requested permissions to legitimate app patterns

3. **LOTS Pattern Recognition**
   - Identifies Living Off Trusted Services attack signature
   - Detects fake OAuth within trusted domain flow
   - Recognizes exploitation of user trust post-authentication

4. **Consent Interruption**
   - Blocks token issuance before app access is granted
   - Cuts off attack midstream with user warning
   - Prevents compromise before any damage occurs

**Result**: Attack neutralized before access granted — mass compromise prevented.

### Case Study 2: Rippling–Deel Espionage

#### What Happened
A Rippling payroll employee allegedly acted as corporate mole, exfiltrating competitor data to Deel for months using Slack, search tools, and browser-based access. Traditional controls saw valid sessions but missed malicious intent.

#### What Above Would Have Caught

1. **Role Misalignment Detection**
   - Access to sensitive pipeline and strategy documents flagged
   - Inconsistent with payroll role responsibilities
   - Elevated as lateral access risk early

2. **Cross-App Search Correlation**
   - Slack searches for "Deel" across multiple days and devices
   - Surfaced as outliers from peer behavior patterns
   - Flagged competitive intelligence gathering

3. **Intent-Based Drift Detection**
   - User actions showed consistent interest in competitor data
   - Semantic drift from normal role activities
   - Espionage pattern recognition triggered

4. **Exfiltration Indicators**
   - Unusual download and copy behavior detected
   - Activity in apps not covered by traditional DLP
   - Session containment and alerting activated

**Result**: Insider threat detected months earlier, before significant data loss.

### Additional Detection Scenarios

#### Fake Microsoft Login (AiTM Phish)
- **Attack**: Pixel-perfect fake Microsoft login on compromised SharePoint subdomain
- **Detection**: Above flags form structure and JavaScript behavior inconsistent with legitimate flow
- **Outcome**: Session blocked before credentials submitted

#### Account Takeover via Shared Cookie  
- **Attack**: Session cookie reuse from shared browser profile to bypass MFA
- **Detection**: Behavioral mismatch with historical user patterns (location, clicks, navigation)
- **Outcome**: Session terminated before data access

#### Privileged Misuse by Insider
- **Attack**: Departing finance executive accesses acquisition documents before exit
- **Detection**: Cross-app access correlation, peer role deviation, intent mismatch
- **Outcome**: Real-time alert with full session trace

---

## Competitive Landscape

### Market Categories & Limitations

#### Email Security (Pre-Delivery)
**Players**: Abnormal Security, Proofpoint, Sublime
- **Coverage**: Catches phishing emails at delivery
- **Gap**: Blind once user clicks link — no visibility into LOTS, OAuth phishing, or in-session deception

#### SaaS Security Posture (Post-Configuration)  
**Players**: Valence Security, Reco, Grip Security, Savvy
- **Coverage**: Maps risks via SaaS API logs
- **Gap**: No real-time view, misses active misuse and gray-area threats

#### Inline CASB (Traffic Proxy)
**Players**: Netskope, Skyhigh Security  
- **Coverage**: Traffic inspection and policy enforcement
- **Gap**: SSL pinning issues, no DOM access, can't see user intent

#### Enterprise Browsers (Policy-Based)
**Players**: Island, Prisma Access Browser
- **Coverage**: Access governance with tight policies  
- **Gap**: No awareness of intent, deception, or insider manipulation

#### UEBA & Traditional ITDR (After the Incident)
**Players**: DTEX, Exabeam, Reveal Security
- **Coverage**: Log analysis and behavioral baselines
- **Gap**: Too late detection, lacks browser visibility, coarse UI flows

### Above's Unique Position

Above uniquely covers the **runtime behavioral layer** left exposed by every other vendor:

- **LLM Semantic Analysis**: Understands context and intent
- **Real-Time Prevention**: Stops threats during interaction  
- **Zero Infrastructure Change**: No proxy, traffic rerouting, or new browsers
- **LOTS Attack Detection**: Only solution detecting Living Off Trusted Services

---

## Deployment Model

### Implementation Approach

#### Deployment Steps

1. **Browser Extension Distribution**
   - Deploy via enterprise browser management (Chrome, Edge, Firefox)
   - Centralized policy distribution and updates
   - No user interaction required for installation

2. **Cloud Backend Configuration**  
   - SaaS platform processes behavioral data
   - Provides threat detection and analytics
   - Integrates with existing SIEM/SOAR platforms

3. **Baseline Establishment**
   - Learn normal user behavior patterns
   - Establish role-based behavioral profiles
   - Calibrate detection sensitivity and thresholds

### Supported Environments

#### ✅ Current Coverage
- **Managed corporate devices** with enterprise browser policies
- **Any web-based application** regardless of architecture
- **Real-time threat prevention** and alerting
- **Existing SIEM/SOAR integration** for alert management

#### 🛣️ Expansion Roadmap
- **API integrations** for native mobile app coverage
- **Endpoint agents** for desktop application visibility  
- **Log correlation** for offline activity reconstruction
- **Policy enforcement engine** for adaptive access controls

### Deployment Timeline
- **Traditional CASB/ITDR**: 6+ months implementation
- **Above Security**: Same-day deployment with immediate coverage

---

## Market Leadership

### Capability Matrix Comparison

| Capability | Above | Push | Valence | Island | Abnormal |
|------------|-------|------|---------|--------|----------|
| **Real-Time Session Threat Detection** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Post-authentication Behavior Visibility** | ✅ | ✅ | ❌ | ❌ | ❌ |
| **Browser-Based Phishing Detection (AiTM, Consent)** | ✅ | ❌ | ❌ | ✅ | ❌ |
| **High-Fidelity Insider Threat Prevention** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Misuse of Legitimate SaaS Tools** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Third-Party OAuth Abuse Coverage** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Session Hijacking Detection** | ✅ | ✅ | ❌ | ✅ | ❌ |
| **Prevention of Credential Misuse In-Session** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **SaaS Misconfig Detection & Remediation** | ❌ | ❌ | ✅ | ❌ | ❌ |
| **Email-Based Phishing Detection** | ❌ | ❌ | ❌ | ❌ | ✅ |

### Where Above Leads

#### In-Session Visibility
Sees user behavior inside apps — not just login metadata or API logs

#### Prevention at Point-of-Action  
Stops misuse before tokens are granted or data is accessed

#### Real-Time Detection
Responds to live user behavior — not hours later in SIEM logs

#### Zero Infrastructure Requirements
No proxy, traffic rerouting, or browser replacement needed

---

## Business Case & ROI

### Strategic Market Positioning

Above's browser-native runtime intelligence positions the company to capture significant share across **$7-9B in serviceable TAM** with double-digit CAGR — sufficient headroom for a **$10B+ revenue target by early 2030s**.

### Primary Target Markets

#### 🥇 Identity Threat Detection (ITDR) - $13B Market
- **CAGR**: 22-23%
- **Fit**: Perfect — post-authentication signals are core differentiator
- **Opportunity**: Replace log-based detection with runtime visibility

#### 🥈 Insider Risk Management (IRM) - $2B+ Market  
- **CAGR**: 18%
- **Fit**: High — runtime intent detection addresses core IRM challenges
- **Opportunity**: Behavioral analytics for privileged user monitoring

#### 🥉 Human Risk Management (HRM) - $6B Market
- **CAGR**: 19-20%  
- **Fit**: Medium — behavioral coaching and user education opportunities
- **Opportunity**: Real-time user guidance and training

### Competitive Advantages

#### Why Above Wins
- **Browser-semantic depth** vs. log-based detection
- **Runtime signals** beat post-facto analysis  
- **No proxy pain** — solves SSL pinning gaps that plague CASB vendors
- **Immediate deployment** vs. months-long implementations

#### Market Reality
- **ITDR incumbents** rely on logs, not live sessions
- **CASB vendors** admit unmanaged browser coverage gaps
- **UEBA consolidating** into XDR platforms — signal export opportunity

---

## Key Performance Indicators

### Technical KPIs

#### Detection Accuracy
- **False Positive Rate**: <5% target (industry-leading)
- **True Positive Rate**: >95% for known attack patterns
- **Mean Time to Detection**: <60 seconds for real-time threats
- **Coverage Breadth**: 100% of web-based SaaS applications

#### Performance Metrics
- **Session Analysis Latency**: <500ms for real-time decisions
- **Browser Performance Impact**: <2% CPU/memory overhead
- **Data Processing Volume**: Handles 10M+ events per customer daily
- **Uptime SLA**: 99.9% platform availability

#### Deployment Success
- **Time to Value**: 90 days to full coverage (vs. 6+ months for alternatives)
- **Endpoint Coverage**: 250K managed endpoints per deployment
- **Integration Success**: 100% SIEM/SOAR integration compatibility
- **User Adoption**: Zero user training required (transparent operation)

### Business KPIs

#### Customer Success Metrics
- **CASB License Replacement**: 20% target displacement
- **Security Incident Reduction**: 50% fewer insider-related incidents
- **Compliance Improvement**: 90% reduction in audit findings
- **Alert Fatigue Reduction**: 60% fewer false positives vs. traditional tools

#### Revenue Metrics
- **Annual Contract Value (ACV)**: $25K-$300K based on company size
- **Net Revenue Retention**: >120% expansion target
- **Customer Lifetime Value**: 3-5x annual security budget allocation
- **Payback Period**: <12 months for mid-market, <18 months enterprise

---

## Target Customer Profiles

### Enterprise CISO (>5,000 employees)
**ACV Range**: $100K-$300K

#### Key Value Propositions
- Real-time insider threat detection with audit-grade logging
- Compliance visibility for SOX, GDPR, HIPAA requirements  
- Executive dashboards for board-level security reporting
- Risk quantification and incident cost avoidance metrics

#### Pain Points Addressed
- Post-authentication visibility gaps in current security stack
- High-value target protection (executives, privileged users)
- Regulatory compliance and audit preparation
- Advanced persistent threat (APT) detection in SaaS environments

### Mid-Market SecOps (250-2,000 employees)  
**ACV Range**: $25K-$75K

#### Key Value Propositions
- Easy browser-native deployment with immediate coverage
- SaaS threat protection without infrastructure investment
- CASB replacement or augmentation capabilities
- SMB-friendly pricing and support model

#### Pain Points Addressed  
- Limited security team resources and expertise
- Rapid SaaS adoption outpacing security controls
- Need for quick wins and demonstrable ROI
- Integration with existing (limited) security stack

### Security Architect (1,000-10,000 employees)
**ACV Range**: $40K-$100K

#### Key Value Propositions
- Browser telemetry integration with existing security platforms
- SIEM/UEBA enrichment with high-fidelity behavioral data
- Runtime policy enforcement capabilities
- API-driven automation and response orchestration

#### Pain Points Addressed
- Data quality issues in current behavioral analytics
- Coverage gaps in hybrid and multi-cloud environments  
- Need for programmable security controls
- Integration complexity with legacy security tools

---

## Strategic Growth Roadmap

### Phase 1: Runtime ITDR for SaaS (2025-27)
**Target Market**: $2-3B TAM

#### Objectives
- Achieve <5% false positive rate across all deployment scenarios
- 90-day deployment standard to 250K endpoints per customer
- Replace 20% of legacy CASB licenses in customer accounts
- Establish category leadership in runtime behavioral detection

#### Key Milestones
- **Product**: LLM-powered semantic phishing detection at scale
- **Sales**: $50M ARR with 50+ enterprise customers
- **Partnerships**: Integrations with top 5 SIEM platforms
- **Market**: Recognized as Runtime ITDR category creator

### Phase 2: Identity-Centric Zero-Trust (2027-29)  
**Expansion Market**: +$2B TAM

#### Objectives
- Cover 30% of customer SaaS sessions with adaptive policy engine
- Granular access controls based on real-time risk assessment
- Automated response and remediation capabilities
- Cross-platform identity risk correlation

#### Key Milestones
- **Product**: Adaptive policy engine with ML-driven controls
- **Sales**: $200M ARR with expansion into mid-market
- **Technology**: Real-time session monitoring and automated enforcement actions
- **Market**: Platform consolidation of identity security tools

### Phase 3: Unified Workforce Risk Platform (2029-32)
**Total Market**: $7-9B TAM

#### Objectives  
- Comprehensive IRM dashboards and analytics
- HRM coaching and behavioral modification
- Just-in-time access controls and privilege management
- 50% reduction in insider incidents across customer base

#### Key Milestones
- **Product**: Full workforce risk management suite
- **Sales**: $1B ARR with international expansion  
- **Vision**: Single platform for all human-driven security risks
- **Impact**: Industry standard for workforce security

### Key Performance Targets

| Metric | Target | Rationale |
|--------|--------|-----------|
| **False Positive Rate** | <5% | Required to win competitive evaluations |
| **Deployment Timeline** | 90 days to 250K endpoints | 4-6x faster than alternatives |
| **CASB Displacement** | 20% license replacement | Significant customer cost savings |
| **Market Position** | Category leadership by 2027 | First-mover advantage in Runtime ITDR |

---

## Conclusion

Above Security represents a paradigm shift from reactive log analysis to proactive runtime protection. By bridging the critical gap between authentication and application usage, Above enables organizations to:

- **See threats in real-time** during active user sessions
- **Prevent attacks before completion** rather than detecting them after damage
- **Understand user intent and context** through advanced semantic analysis  
- **Deploy protection rapidly** without infrastructure changes or user disruption

The convergence of browser-native deployment, LLM-powered analysis, and real-time behavioral detection positions Above to capture significant market share across multiple high-growth security categories, with a clear path to $10B+ valuation by the early 2030s.

**The future of identity security is runtime. Above is that future.**

---

*Document Version: 1.0*  
*Last Updated: June 2025*  
*Classification: Confidential*
