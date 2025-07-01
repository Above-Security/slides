# 📘 NARRATIVE.md

---

## ✅ Vision in One Sentence

> Real-time visibility into user behavior inside SaaS and browsers — to detect risky activity, guide users in the moment, and protect data without changing how users work.

---

## 📈 YEAR‑1 GO‑TO‑MARKET (0‑12 Months)

| Initiative      | Detail                                                                                                                      |
| --------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Entry Motion    | Founder-led direct sales, leveraging design partnerships with 5–10 security-forward mid-market CISOs                        |
| Roles           | Hire 1 AE and 1 SDR for scale post-month 6                                                                                  |
| ICP             | Mid-market orgs (100–3,000 employees), Chrome-managed fleet, SaaS-heavy, low visibility into user behavior post-login       |
| Channels        | Founder outbound, mutual network intros, CISO Slack communities                                                             |
| Messaging       | Browser-based visibility post-authentication; catch insider misuse, SaaS misuse, OAuth grants, role drift, offboarding risk |
| Conversion Flow | Design partner → 3-week POV → pilot → land                                                                                  |

---

## 🚦 YEAR‑1 POV & SUCCESS PLAYBOOK

**3 Weeks Total** — Show value **even if nothing bad happens.**

### ✅ PoV Guard-Rails

| Phase  | Focus      | Milestone                                                                    |
| ------ | ---------- | ---------------------------------------------------------------------------- |
| Week 1 | Deployment | Extension live on 10–50 users in <1 hour                                     |
| Week 2 | Visibility | Capture: unsanctioned app use, admin activity, OAuth grants, export behavior |
| Week 3 | Outcomes   | Deliver session visibility report + validate with security owner             |

---

## 📋 Set-up Checklist (Shared with Buyer)

* ✅ Define Chrome policy group (managed devices)
* ✅ Push browser extension via policy
* ✅ Align on what buyer wants to see (e.g., OAuth, exfiltration, AI use, stale sessions)
* ✅ Configure optional webhook or SIEM push for integrations

---

## 🎯 Success KPIs & Pass‑Fail Gates

| Signal            | Pass Threshold                                                            |
| ----------------- | ------------------------------------------------------------------------- |
| OAuth visibility  | Show all apps authorized by users in period                               |
| Offboarding drift | Detect 100% of active sessions tied to disabled accounts                  |
| AI use / abuse    | Detect 1+ non-approved AI tools used in monitored group                   |
| Real detections   | Buyer flags 2+ events as actionable (drift, misuse, misuse-to-intent gap) |
| Feedback          | Buyer confirms: "We had no other tool that could show us this."           |

---

## 📊 METRICS THAT MATTER (LAND → EXPAND)

| Metric                         | Why It Matters                                      |
| ------------------------------ | --------------------------------------------------- |
| MTTR (insider)                 | Faster investigation using session context          |
| MTTD (token/role drift)        | Early detection of misuse not caught by IdP or CASB |
| Unique OAuth grants            | Quantifies exposure via 3rd-party app delegation    |
| % SaaS with session visibility | Shows coverage breadth beyond API-integrated apps   |
| Detection → IR tickets         | Proves operational integration                      |
| Heatmap of user risk           | Maps behavior concentration, aids prioritization    |

---

## 🔁 REPLACE vs ENHANCE — POSITIONING

| Tool       | Replace?          | Enhance How?                                                   |
| ---------- | ----------------- | -------------------------------------------------------------- |
| CASB / DLP | ❌                 | We see user behavior *before* files move or traffic is flagged |
| SSPM       | ❌                 | We show *usage*, not just config posture                       |
| EDR/XDR    | ❌                 | We add browser identity-level session context                  |
| UEBA       | ✅ (often shelved) | Ours works in real time, no SIEM needed                        |

---

## 🚀 YEAR‑2 EXPANSION ROADMAP (12‑24 Months)

| Area                       | Detail                                                     |
| -------------------------- | ---------------------------------------------------------- |
| Browser telemetry platform | Build unified signal layer across all web activity         |
| Behavioral risk scoring    | Add per-user risk index based on drift, intent, misuse     |
| Remediation actions        | Revoke sessions, block app grants, show in-browser banners |
| Coaching UX                | Display real-time guidance (“this app is unsanctioned”)    |
| Manager visibility         | Heatmaps and summaries by team, org unit, persona          |

---

## ❓ DEAL‑CRITICAL HYPOTHESES & HOW WE TEST

| Hypothesis                               | How We Test                                               |
| ---------------------------------------- | --------------------------------------------------------- |
| Teams want visibility even if no attack  | Show frictionless insights during uneventful weeks        |
| OAuth abuse is invisible                 | Quantify unrecognized app connections and prompt feedback |
| Offboarding drift is common              | Surface residual sessions after IdP deactivation          |
| Chrome telemetry is operationally useful | Confirm analysts act on Above data in IR flows            |

---

## ⚠️ CRITICAL RISKS & COUNTER-MEASURES

| Risk                                   | Counter-Measure                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------------------ |
| Buyer claims: "CASB already does this" | Show behavioral evidence CASB *can’t* see — e.g., UI actions, OAuth detail, ChatGPT misuse |
| Privacy concern                        | No keystrokes, no screen captures — only security-relevant events with clear logs          |
| Overhead concern                       | Show install is 60 seconds, Chrome only, low CPU impact                                    |
| "We don’t need it if no breach"        | Prove prevention ROI by showing risky intent before it becomes an incident                 |

---

## ✂️ EXECUTIVE SUMMARY (TL;DR)

* Above gives you **real-time visibility** into what users actually do in SaaS, browsers, and unsanctioned apps.
* Detects intent-based insider risk: gray-area misuse, role drift, offboarding gaps, AI workarounds, OAuth abuse.
* Browser-native, Chrome-only, fast to deploy. No agents, no traffic routing, no log parsing.
* Not just a new category — a usable layer of signal and accountability that every org needs.

---

## 🎯 How We Nail ICP

| Trait                    | Signal                                        |
| ------------------------ | --------------------------------------------- |
| Mid-market org           | 100–3,000 employees, no IRM headcount         |
| SaaS-heavy               | >20 apps, browser-first work                  |
| Identity-forward         | Okta, MDM in place                            |
| Security visibility gaps | Unknown OAuth, offboarding drift, SaaS misuse |

---

## 🔬 How We Nail POV

* Fast setup (<1 hr)
* Evidence delivered in Week 1
* Stakeholder engagement: we surface what they didn’t know was happening
* Actionable signal → IR / GRC / Identity teams

---

## 👁️‍🗨️ Use Cases, Visibility, What We Show

| Category               | What We See                                           |
| ---------------------- | ----------------------------------------------------- |
| Phishing aftermath     | OAuth grants, session token persistence               |
| Insider misuse         | Role misuse, scraping, drift                          |
| AI misuse              | Use of consumer LLMs in unsanctioned places           |
| SaaS misuse            | Shadow tools, exports, public shares                  |
| Offboarding            | Tokens still alive, old SSO sessions reused           |
| Excessive personal use | YouTube, ChatGPT, consumer shopping by internal users |
| Unauthorized software  | Risky extensions, downloads from unvetted SaaS        |

---

We give teams **visibility into user behavior** they’ve never had — and we do it in **weeks, not quarters**.

**Above = post-auth visibility, behavioral detection, and real-time control — built on browser telemetry.**
