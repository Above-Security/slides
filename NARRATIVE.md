**Above – Two‑Year Strategic Narrative & Execution Plan (Phishing → Observability → Runtime Insider Threat)**

---

## 0. Vision in One Sentence

*Become the browser‑native control plane that sees and stops what every other security tool misses – from sophisticated phishing to gray‑area insider misuse – without changing how users work.*

---

## 1 | YEAR‑1 GO‑TO‑MARKET (0‑12 Months)

### 1.1 How We Sell (Motion)

| Stage                        | Channel                                  | Champion                                   | Commercial Model                                      | Critical Risks                                                              |
| ---------------------------- | ---------------------------------------- | ------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------- |
| **Land** – 1‑500 seats pilot | Direct (founder‑led AE + SE)             | SecOps Team Lead / Staff Security Engineer | Flat pilot fee (or free if under 500 seats)           | Low signal if no phishing occurs                                            |
| **Expand** – 500‑5 000 seats | Same account team, add CISO exec sponsor | CISO / Dir. Identity                       | Annual SaaS (ARR/seat) w/ phishing + telemetry bundle | Budget comes from email‑sec – must avoid “yet‑another‑phishing‑tool” bucket |
| **Scale** – 5 000‑50 000     | MSSP & VAR co‑sell                       | IR, SOC leadership                         | Tiered seat‑based + volume discount                   | Privacy & data‑residency objections                                         |

> **Narrative hook:** *“Email gateways catch <40 % of initial phish. Everything else starts in the browser – we stop it **and** give you post‑auth forensics the instant you need them.”*

### 1.2 What We Sell (Packages)

1. **Starter (PhishGuard)** – real‑time phishing soft‑block & coaching (Chrome Extension only).<br>
2. **Growth (PhishGuard + ScopeLens)** – adds full browser telemetry export to SIEM/XDR; timeline & enrichment panels for investigations.<br>
3. **Platform (Runtime ITDR)** – unlocks Year‑2 detections (privilege misuse, insider drift) + response policies.

> **Critical stance:** Don’t attempt full insider detections in Year‑1 – “visibility first” avoids promise / delivery gap that kills early deals.

### 1.3 Ideal ICP (Beach‑head)

* **Size :** 500‑5 000 employees (fast buy cycles, but material ARR).
* **Profile :** Cloud‑native, Google Workspace / M365, heavy SaaS.
* **Pain triggers :** ‑ Recent AitM / OAuth phish scare ‑ Overworked IR team ‑ Mandate to move toward Zero‑Trust but no budget for Enterprise Browser replacement.
* **Tech stack fit :** Okta or Entra ID, CrowdStrike, Splunk/Chronicle, Proofpoint/Mimecast.

---

## 2 | YEAR‑1 POV & SUCCESS PLAYBOOK

### 2.0 Why So Much Rigor?

*We get one shot to prove value in less than a monthly sprint.  The buyer has five other pilots in flight — we must be the one that actually finishes.*

### 2.1 PoV Guard‑Rails (3 Weeks Total)

| Phase                    | Days     | Objectives                                                        | Activities                                                                                                                       | Exit / Evidence                                                                            |
| ------------------------ | -------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| **Prep**                 |  −5 → 0  | ‑ Contract / DPIA signed  ‑ Admins briefed  ‑ Success KPIs frozen | ‑ 30‑min kickoff call  ‑ Provide G‑Workspace / Entra json for extension force‑install  ‑ Enable SIEM webhook                     | • Work‑back plan agreed • < 1 h customer effort                                            |
| **Week 1 – Instrument**  |  1 → 7   | 100 % of pilot fleet covered; no UX regression                    | ① Push extension ② Validate health dashboard ③ Daily stand‑up w/ SecOps                                                          | • ≥ 90 % agents green • Zero perf complaints                                               |
| **Week 2 – Observe**     |  8 → 14  | Surface “unknown unknowns” + near‑miss phish                      | ① Passive detections only ② Risk report (unknown SaaS, consent pages) ③ Live SIEM enrichment demo                                | • ≥ 3 true‑positive phish **or** ≥ 10 consent/OAuth risk events • ≥ 20 % new SaaS surfaced |
| **Week 3 – Act & Coach** |  15 → 21 | Prove user coaching & SOC efficiency                              | ① Flip to soft‑block ② Measure override rate ③ IR drill – replay last month’s phish incident with Above timeline ④ Exec read‑out | • <1 % override • 2× faster triage in drill • Signed business‑case deck                    |

### 2.2 Success KPIs & Pass‑Fail Gates

| KPI                                          | Pass Target               | Fail Trigger |
| -------------------------------------------- | ------------------------- | ------------ |
| Phish / consent phish blocked pre‑credential | > 90 % of observed events | < 70 %       |
| Unknown SaaS discovery delta                 | ≥ 20 % increase           | < 10 %       |
| User override rate after coaching            | < 2 %                     | ≥ 5 %        |
| Analyst triage time reduction                | ≥ 30 % faster             | < 10 %       |
| Deployment effort (customer hours)           | ≤ 4 h total               | > 8 h        |

### 2.3 If **No Real Attacks** Occur

1. **Near‑Miss Ledger** – auto‑generate annotated timeline of blocked look‑alike domains, expired certificates, abnormal OAuth scopes.
2. **Visibility Wins Report** – quantified SaaS & extension inventory delta delivered as PDF plus raw CSV for SIEM.
3. **Forensic Drill** – SOC re‑opens a closed phish ticket; runs side‑by‑side with/without Above telemetry.
4. **Red‑Team Voucher** – post‑purchase commitment: *if* internal red‑team bypasses Above we credit 1 mo licence.

### 2.4 Set‑up Checklist (Shared with Buyer)

* ❏ Stakeholder map (CISO, SecOps lead, IT, Privacy Counsel)
* ❏ Definition of “pilot success” signed (KPIs & thresholds)
* ❏ Browser versions > v116 Chrome / Edge confirmed
* ❏ SIEM endpoint / token supplied
* ❏ Slack or Teams channel for daily comms

---

## 3 | METRICS THAT MATTER (LAND → EXPAND)

 | METRICS THAT MATTER (LAND → EXPAND)

| Dimension               | KPI                                          | Baseline Pain | Win Condition   |
| ----------------------- | -------------------------------------------- | ------------- | --------------- |
| **Phish Prevention**    | % Consent/OAuth phish blocked pre‑credential | Unknown       | >90 % of events |
| **User Coaching**       | Override‑after‑coaching rate                 | N/A           | <2 %            |
| **IR Efficiency**       | Analyst triage time per phish incident       | 45 min        | <15 min         |
| **Visibility Lift**     | Net‑new SaaS apps surfaced                   | ?             | +20 % in 30 d   |
| **Deployment Friction** | Support tickets per 1 000 users              | –             | <0.5            |

---

## 4 | REPLACE vs ENHANCE – POSITIONING

| Tool                     | Our Stance                             | Talk‑Track                                                                                                | Risk                                                                          |
| ------------------------ | -------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Secure Email Gateway** | **Enhance**                            | “…we catch what slips after the click.”                                                                   | Duplication worries – show pass‑through integration                           |
| **CASB / SSE**           | **Augment now, muzzle later (Year‑2)** | “…CASB sees traffic; we see intent in the UI. Eventually we can enforce same policies without PAC files.” | Must not appear as direct rip‑and‑replace too early                           |
| **Push Security**        | **Supersede**                          | “Push v2 = us + detection + coaching + SIEM timelines.”                                                   | Need proof on richer detections                                               |
| **Enterprise Browser**   | **Lightweight alt**                    | “Same runtime control without forcing browser swap.”                                                      | Browser replacement vendors will spread FUD on extension bypass – have answer |

---

## 5 | YEAR‑2 EXPANSION ROADMAP (12‑24 Months)

| Q           | Capability                                                      | New Revenue Lever                      | Hypothesis to Prove                                              |
| ----------- | --------------------------------------------------------------- | -------------------------------------- | ---------------------------------------------------------------- |
| **Q1 ‑ Q2** | Insider heat‑map (behavioral drift scoring)                     | Add‑on per‑seat fee                    | Browser telemetry + ML = earlier insider signal than DTEX        |
| **Q2 ‑ Q3** | Real‑time policy actions (block mass export, rogue role change) | “Runtime DLP Lite” module              | Customers will pay to *prevent* insider misuse, not just observe |
| **Q3 ‑ Q4** | API tie‑ins to ZTNA / IdP for session kill, step‑up auth        | Enterprise tier / workflow credits     | Orchestrated response drives stickiness and upsell               |
| **Q4**      | BYOD lightweight agent (Edge + unmanaged Chrome)                | Opens EDU & contractor‑heavy verticals | Privacy gates solvable with FIDO attestation                     |

### Year‑2 ICP Layer‑Cake

1. **Existing PhishGuard customers** – upsell Runtime ITDR.
2. **IRM / Insider‑Risk programs** in financial / healthcare orgs.
3. **CASB refresh cycles** where Netskope / Skyhigh replacement is planned – sell as faster/cheaper alternative.

---

## 6 | DEAL‑CRITICAL HYPOTHESES & HOW WE TEST

| Hypothesis                                         | Evidence Sought in Y1                        | Kill‑Criteria                                                            |
| -------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| Users tolerate coaching interstitials              | <1 % uninstall rate in pilot                 | >5 % uninstall => redesign UX                                            |
| Browser telemetry materially speeds IR             | Analysts quote ≥30 % faster RCA              | <10 % speed‑up => narrow scope                                           |
| Extension delivers enough coverage vs full browser | 80 % of managed fleet stays on Chrome‑family | If customer base shifts to Safari/Firefox >30 %, need cross‑browser port |

---

## 7 | IF **NO ATTACKS** DURING POV – PROVING VALUE

1. **Near‑miss Evidence** – Show flagged consent pages, password‑reuse prompts, and blocklist hits from open‑source phish IOCs.
2. **Visibility Delta** – Quantify unknown SaaS, risky extensions, weak MFA scores for each user – give risk report.
3. **Investigation Drill** – Re‑play a historic incident with and without our timeline; have analyst live‑compare speed.
4. **Red‑Team Voucher** – Offer post‑sale internal phish simulation voucher to prove stop‑rate (paid by us if miss KPI).

> *Be blunt with buyer*: “If in 14 days we don’t surface anything you find useful, we deserve to lose.”

---

## 8 | CRITICAL RISKS & COUNTER‑MEASURES

* **Extension removal / evasion** – Detect uninstall, auto‑re‑enroll via MDM, raise IdP webhook to force step‑up auth.
* **Privacy objections** – Provide on‑device redaction, PCI/PII tag drop, and EU data‑center option; publish DPIA template.
* **‘Yet another console’ fatigue** – Ship Splunk / Sentinel apps Day‑1; console optional.

---

## 9 | EXECUTIVE SUMMARY (TL;DR)

* *Land fast* with phishing prevention & coaching that shows ROI in <14 days.
* *Expand* by monetizing the **unique browser telemetry** every other control plane lacks.
* *Dominate* by adding real‑time insider threat prevention, gradually encroaching on legacy CASB / UEBA budgets.

**Above** becomes the lightweight, deploy‑anywhere runtime layer that **starts** where IAM ends and **finishes** what CASB & email security can’t.
