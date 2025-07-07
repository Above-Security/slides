# Insider Protection Use Case

## Why Insider Protection Matters

Most security tools focus on *getting in*. But today’s biggest risks come *after login*. Employees, contractors, and third parties often have legitimate access to sensitive systems — and what they do inside SaaS apps like Salesforce, Notion, or Jira is largely invisible.

According to [Verizon’s DBIR](https://www.verizon.com/business/resources/reports/dbir/) and IBM X-Force, **68%+ of breaches involve a human element**. Many aren’t “hacks” — they’re *gray-area misuse* by insiders: scraping data before departure, using unsanctioned AI tools, or exporting financial records without technically violating policy.

> Visit: [Insider Threat Matrix](https://abovesec.com/#/insider-threat-matrix) — a live map of motives, behaviors, and mitigations.

---

## The Pain

### 🔍 You Lose Visibility After Login
SIEM, DLP, CASB — they all stop at the door. You can’t see:
- What users actually *do* inside SaaS and browser-native apps.
- Reuse of stale sessions by offboarded employees or contractors.
- Behavioral drift — like sales poking around finance tools.

### 🕳️ SaaS, Shadow AI, and Long-Tail Apps Are Blind Spots
Long-tail apps (Miro, Airtable, Confluence), embedded AI (ChatGPT, Gemini), and internal dashboards often lack logs or APIs. That means policy can’t be enforced — and risk goes undetected.

### 🧠 You Can’t Detect Intent
Someone scraping data over weeks doesn’t break a rule — until it’s too late. Traditional tools miss the early signs of misuse and drift.

---

## Our Approach: Runtime Insider Threat Detection & Response (Runtime ITDR)

Above sits *inside the browser*, observing what users do *after authentication* — across all SaaS, internal, and even unsanctioned tools. It analyzes user behavior in real time using LLMs to semantically understand clicks, exports, edits, and prompts.

### Key Capabilities
- **Real-Time Detection**: Behavioral deviation, risky SaaS use, AI prompt misuse, stale session reuse.
- **No Agents or API Dependencies**: Instant deployment via browser extension. No EDR, SIEM, or SASE integration needed.
- **Intent-Aware Alerts**: Move beyond violations to detect misuse patterns: admin reactivation, scraping before resignation, sensitive data into LLMs.

> [Explore Runtime ITDR](https://abovesec.com/#/insider-threat-matrix?id=MT022)

---

## What We Catch

| Insider Threat Category | What We Detect                                                                 |
|--------------------------|--------------------------------------------------------------------------------|
| **Offboarding Drift**    | Residual sessions, reused tokens, stale credentials post-deprovisioning       |
| **SaaS Misuse**          | Shadow tools, unsanctioned OAuth grants, AI tools embedded in workflows       |
| **Behavioral Drift**     | Role-inconsistent activity, low-and-slow scraping, policy-adjacent actions     |
| **AI & Extension Misuse**| Sensitive prompts in ChatGPT/Copilot, risky Chrome extensions                  |

---

## Real-World Examples

### 🔄 Notion Session After IdP Offboarding
A contractor was deprovisioned in Rippling but continued accessing Notion using a saved session. No alert fired in IdP or CASB. Above detected and killed the session in real time.

### 🧾 Confluence Export of Financial Data
A Deel contractor exported invoices incrementally via valid actions. DLP missed it. Above flagged behavioral drift after just two suspicious sessions — days ahead of any other tool.

---

## Timeline to Value

| Phase                  | Time     | Actions                                                        |
|------------------------|----------|----------------------------------------------------------------|
| **Deploy**             | Day 1    | Chrome/Edge extension deployed via MDM                         |
| **Baseline Behavior**  | Days 2–3 | Auto-learn normal behavior per role/app                        |
| **Signal Tuning**      | Days 4–7 | Early detections triaged by SOC; alert relevance dialed in     |
| **Operationalized**    | Week 2   | Integrated with SOAR, IdP, and analyst workflows               |

> Detect value even if nothing “bad” happens — just by showing what no one else can.

---

## Measurable Outcomes

| Metric                          | Result                          |
|----------------------------------|----------------------------------|
| **MTTD (Insider Events)**        | <15 mins from activity to alert  |
| **Session Visibility Coverage**  | >95% of SaaS apps, incl. unsanctioned |
| **Residual Session Detection**   | >90% of post-offboarding sessions flagged |
| **False Positive Rate**          | <2% due to semantic modeling     |
| **Analyst Clarity**              | Alerts come with user+intent context |

---

## What a POV Looks Like

Our 2-week POV is designed to validate *real risk visibility* — not hypothetical attacks.

### You’ll See:
- OAuth grants to unapproved apps
- Dormant admin reactivation
- Reuse of stale tokens post-offboarding
- Sensitive data into GenAI
- Drift (e.g., support using engineering tools)

### You’ll Get:
- Live detection reports with semantic context
- Heatmaps of risky behaviors by role or team
- Visibility you didn’t know you lacked

---

## Strategic Fit

Above **augments** your stack — not competes with it:

| Tool Type     | Above Adds Value By…                                     |
|---------------|-----------------------------------------------------------|
| CASB/DLP      | Seeing *before* traffic moves or policies are violated    |
| SIEM          | Providing semantic context, not just logs or noise        |
| SSPM          | Showing *use*, not just config                            |
| UBA/EDR       | Real-time, in-browser actions across SaaS                 |

---

## Human-Centric Security: From “Insider Threat” to “Insider Protection”

> “Most insider risk isn’t malicious — it’s users trying to get work done, the wrong way.”  
> — CISO Advisory Panel

We frame detection as **protection** — nudging users back into safe workflows:
- Flag AI use and suggest policy-compliant alternatives
- Educate in real time when risky behavior occurs
- Provide facts for HR/Legal — not judgment of intent

---

## Summary

**Above's Insider Protection** lets you:
- Detect what traditional tools miss: risky activity *after* login
- Observe gray-area misuse without relying on logs or agents
- Act in real time — even when no breach has yet occurred

> [Explore the Insider Threat Matrix](https://abovesec.com/#/insider-threat-matrix) for real-world scenarios.

---

**Category**: Runtime ITDR  
**Strategic Identity**: Post-auth browser visibility  
**Differentiator**: Real-time, semantic detection of user behavior
