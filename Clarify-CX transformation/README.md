# Clarify - CX Transformation Project 
# (Visit : https://woozy-teacher-283.notion.site/Clarify-CX-Transformation-Playbook-377779ca445980dfb913fb093120beb3)
### A 90-day customer service transformation. Built from scratch.

> **Clarify** is a B2B SaaS company selling customer feedback and survey tooling to mid-market businesses. Despite being in the business of helping other companies understand their customers - Clarify's own customer service operation was severely underperforming. This project documents the full transformation.

---

## Results at a Glance

| Metric | Before | After | Change |
|---|---|---|---|
| CSAT Score | 5.1 / 10 | 9.4 / 10 | +84% |
| First Contact Resolution | 63% | 87% | +38% |
| Escalation Rate | 28.6% | 10% | -65% |
| Repeat Contact Rate | 29% | 13.8% | -52% |
| Avg Resolution Time | 52 mins | 31 mins | -40% |
| NPS Score | +34 | +61 | +79% |
| Resolved Tickets | 78.8% | 93.6% | +19% |

---

## Project Overview

**Role:** CX Operations Lead (contract engagement)  
**Company:** Clarify (fictional B2B SaaS)  
**Team size:** 12 agents  
**Duration:** 90 days  

### The Problem
A 12-month ticket audit of 3,000 support records revealed:
- No structured escalation process
- All 6 customer behaviour types handled identically
- Compensation decisions made ad-hoc with no approval framework
- No agent training program
- Silent Dissatisfied customers had a 2.1 avg CSAT with zero proactive intervention

### The Solution
A full CX system rebuilt from the ground up - persona framework, escalation architecture, compensation matrix, and agent training program - all rolled out over 12 weeks.

---

## Repository Structure

```
clarify-cx-transformation/
│
├── data/
│   ├── clarify_ticket_audit_pre.csv       # 3,000 ticket pre-implementation dataset
│   └── clarify_ticket_audit_post.csv      # 3,000 ticket post-implementation dataset
│
├── cx-case-study.html                     # Full interactive case study page
└── README.md                              # This file
```

---

## Project Assets

| Asset | Description | Link |
|---|---|---|
| Trello Board | Full project management timeline with 9 cards | [View board](https://trello.com/b/CSKpBkxT) |
| Pre-Implementation Data | 3,000 ticket audit — baseline metrics | Google Sheets |
| Post-Implementation Data | 3,000 ticket audit — post-framework metrics | Google Sheets |
| KPI Dashboard | Before vs after comparison across all metrics | Google Sheets |
| Miro Board | Customer Persona Map + Escalation Flowchart | [View board](https://miro.com/app/board/uXjVHJUG2i4=/?share_link_id=970308368701) |
| Case Study Page | Full interactive methodology writeup | [View page](https://astonishing-sprite-e077a9.netlify.app/cx-case-study.html) |
| Notion Playbook | Full operational documentation hub | [View playbook](https://woozy-teacher-283.notion.site/Clarify-CX-Transformation-Playbook-377779ca445980dfb913fb093120beb3) |

---

## Methodology

### Phase 1 : Ticket Audit (Week 1–2)
Reviewed 3,000 historical support tickets tagged across 16 dimensions:
- Channel, plan tier, customer tenure
- Complaint type, agent, resolution time
- Repeat contact, escalation status, CSAT score
- Compensation offered, persona tag

**Key finding:** 6 distinct customer behaviour clusters identified - each with completely different escalation rates, CSAT scores, and resolution patterns. All were being handled identically.

---

### Phase 2 : Customer Persona Framework (Week 3)

Six personas derived from behaviour cluster analysis:

| Persona | CSAT (pre) | Escalation Rate | Core Strategy |
|---|---|---|---|
| Loyal Advocate | 8.2 | 4% | Nurture & reward |
| Frustrated Escalator | 4.1 | 58% | De-escalate fast |
| Deal Seeker | 6.3 | 19% | Firm & proportionate |
| First-Timer | 6.8 | 12% | Onboard & educate |
| At-Risk Churner | 3.9 | 35% | Proactive retention |
| Silent Dissatisfied | 2.1 | 5% | Proactive outreach |

Each persona received a full handling playbook covering: behaviour signals, handling approach, escalation triggers, compensation method, and agent opening scripts.

---

### Phase 3 : Escalation Architecture (Week 3)

4-tier framework built around two constraints:
1. **Response time expectations** by issue severity
2. **Decision authority** required to resolve the issue

| Tier | Role | SLA | Volume |
|---|---|---|---|
| Tier 1 | Front-line Agent | 15 mins | 78% |
| Tier 2 | Senior Agent | 2 hrs | 14% |
| Tier 3 | Team Lead | 4 hrs | 6% |
| Tier 4 | Manager / Director | 24 hrs | <2% |

Key design decision: Tier 4 volume acts as a diagnostic metric. If more than 2% of tickets reach Tier 4, it signals a systemic upstream failure.

---

### Phase 4 : Compensation Matrix (Week 4)

Built on 4 principles:
1. **Match the emotional weight** : not just the technical failure
2. **Never train bad behaviour** : compensation scales with genuine harm
3. **Strengthen the relationship** : especially for high-value customers
4. **Measure the outcome** : every decision logged against retention impact

Compensation authority defined by tier - from 10% discounts at Tier 1 to executive packages at Tier 4.

---

### Phase 5 : Agent Training Program (Week 4–8)

6 modules rolled out over 4 weeks across 12 agents:

| Module | Format | Pass Mark | Completion |
|---|---|---|---|
| De-escalation Skills | Workshop + role play | 75% | 92% |
| Policy & Compliance | Self-paced + quiz | 90% | 100% |
| CX Tools & CRM | Hands-on training | 80% | 75% |
| Empathy & Active Listening | Workshop + exercises | 75% | 83% |
| Upsell & Retention | Workshop + shadowing | 70% | 58% |
| Multilingual Communications | Self-paced + assessment | 80% | 42% |

Key frameworks taught:
- **ACR** : Acknowledge, Commit, Resolve (de-escalation)
- **LEAP** : Listen, Echo, Acknowledge, Proceed (active listening)
- **Value Frame Method** : for upsell and retention conversations

---

### Phase 6 : Implementation & Measurement (Week 9–12)

- Full framework live from Week 9
- Weekly KPI reviews with team lead
- Monthly performance scoring per agent (5 dimensions)
- Persona tags updated in CRM after every interaction
- Post-implementation 90-day review completed

---

## Data

### Dataset Overview

Both datasets contain 3,000 records each with 16 columns:

```
Ticket ID | Date | Time | Channel | Plan Tier | Customer Tenure (months)
Complaint Type | Agent | Persona Tag | Resolution Time (mins)
Repeat Contact | Escalated | Escalation Tier | Status
CSAT Score (1-10) | Compensation Offered
```

### Key Data Characteristics
- **Silent Dissatisfied** customers have 62% CSAT non-response rate (pre) → 38% (post)
- Resolution time outliers included - some tickets spiked 3–8x normal duration
- Escalation and repeat contact rates vary significantly by persona
- 12 named agents across all interactions
- 4 plan tiers: Starter, Growth, Pro, Enterprise
- 15 complaint type categories

---

## Tools Used

| Tool | Purpose |
|---|---|
| Trello | Project management + task tracking |
| Google Sheets | Data audit + KPI dashboard + visualisations |
| Miro | Visual framework design - persona map + escalation flow |
| Notion | Full operational playbook + SOPs |
| Python | Simulated dataset generation with realistic variance |
| Netlify | Case study page hosting |
| HTML / CSS | Interactive case study page |

---





*This is a portfolio project built to demonstrate CX strategy, operations design, and data-driven decision making. Clarify is a fictional company. All data is simulated.*
