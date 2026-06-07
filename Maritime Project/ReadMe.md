# Maritime Loading Computer
## Visit me: https://sweet-palmier-a46e76.netlify.app/
### PM–BA Project Playbook · v1.0 · 2024–2025

> A certified shore-side and onboard SaaS platform for vessel stability, cargo load planning, stress calculations and regulatory compliance (SOLAS / IMO / class society rules).

---

## Toolchain

```
Notion → Linear → Qase → GitHub Actions → HubSpot CRM
  │          │        │          │               │
Docs      Sprint    QA       CI/CD           Sales
```

| Tool | Purpose | What was built |
|------|---------|----------------|
| **Notion** | Requirements & Documentation | Product Vision, Feature List, PRD |
| **Linear** | Sprint & Backlog Management | 6 Epics, 5 User Stories, Sprint Board |
| **Qase** | Test Management & QA | 5 Test Suites, 2 Test Cases, Test Run |
| **GitHub Actions** | CI/CD & Deployment | 5-stage pipeline, 3 environments, Release v1.0 |
| **HubSpot CRM** | Customer & Sales Management | 3 Deals, 1 Contact, Sales Pipeline |

---

## Project Summary

| Item | Detail |
|------|--------|
| **Role** | Product Manager / Business Analyst |
| **Platform** | SaaS — Shore-side & Onboard |
| **Compliance** | SOLAS / IMO / Class Society Rules |
| **Features** | 10 documented (F-01 to F-10) |
| **Epics** | 6 (EP-01 to EP-06) |
| **User Stories** | 5 (MLC-12 to MLC-16) in Sprint 1 |
| **Environments** | Staging · UAT · Production |
| **Release** | v1.0.0 — Sprint 1 |
| **CRM Pipeline** | $243,000 total deal value |

---

## Stage 1 — Notion: Requirements & Documentation

**Tool:** [notion.so](https://notion.so)

### What was built

A structured product documentation space with 3 pages:

```
📁 Maritime Loading Computer
   📄 Product Vision & OKRs
   📄 Feature List & Requirements
   📄 F-02 Stability Engine PRD
```

### Feature List (F-01 to F-10)

| ID | Feature | Epic | Priority | Complexity |
|----|---------|------|----------|------------|
| F-01 | Vessel Hull Model Import | EP-01 | MUST | High |
| F-02 | Stability Calculation Engine | EP-01 | MUST | High |
| F-03 | Cargo Stowage Planner | EP-02 | MUST | High |
| F-04 | Bending Moment & Shear Force | EP-02 | MUST | High |
| F-05 | Ballast Tank Sequencer | EP-03 | MUST | Med |
| F-06 | Damage Stability Simulator | EP-04 | SHOULD | High |
| F-07 | Regulatory Compliance Checker | EP-05 | MUST | Med |
| F-08 | Multi-Voyage Report Generator | EP-06 | SHOULD | Low |
| F-09 | User Roles & Access Control | EP-07 | MUST | Med |
| F-10 | Offline Mode & Sync | EP-08 | COULD | High |

### Sample PRD — F-02 Stability Engine

**Business Goal:** Reduce stability approval time from 4h manual to under 5 minutes.

**Functional Requirements:**
- FR-01: Accept draught, density, departure condition inputs
- FR-02: Compute righting levers at 0–90 degrees
- FR-03: Display pass/fail per IMO criteria

**Non-Functional Requirements:**
- NF-01: Calculation under 1 second
- NF-02: 99.9% uptime onshore
- NF-03: Audit log of all conditions

**Acceptance Criteria:**
- GZ curve matches class-approved reference conditions ±0.01m
- All IMO criteria auto-flagged

**Linked to:** Jira Epic EP-01 | Stories MLC-12, MLC-13, MLC-14, MLC-15 | TestRail Suite S-02

---

## Stage 2 — Linear: Sprint & Backlog Management

**Tool:** [linear.app](https://linear.app)

### Project Setup

```
Workspace: Maritime Loading Computer
Team: Anu
Dates: May 29 → Jun 15
Status: Backlog → Active
```

### Epics

| ID | Epic Name |
|----|-----------|
| EP-01 | Hull & Stability |
| EP-02 | Cargo Planning |
| EP-03 | Ballast Management |
| EP-04 | Damage Stability |
| EP-05 | Compliance |
| EP-06 | Reporting |

### Sprint 1 User Stories — EP-01 Hull & Stability

| ID | Story | Priority | SP | Est | Status |
|----|-------|----------|----|-----|--------|
| MLC-12 | Hull XML Import | High | 8 | 3d | Done |
| MLC-13 | Real-time GM Calculation | High | 13 | 4d | In Progress |
| MLC-14 | GZ Curve Display | High | 13 | 5d | In Progress |
| MLC-15 | Condition Comparison | Medium | 8 | 3d | Done |
| MLC-16 | Frame Stress Alerts | High | 8 | 3d | Todo |

### Sprint Board Summary

```
In Progress: 2  (MLC-13, MLC-14)
Todo:        1  (MLC-16)
Done:        2  (MLC-12, MLC-15)
```

---

## Stage 3 — Qase: Test Management & QA

**Tool:** [qase.io](https://qase.io)

### Test Suites

| Suite | Name | Cases |
|-------|------|-------|
| S-01 | Hull Import | 0 |
| S-02 | Stability Engine | 2 |
| S-03 | GZ Curve Display | 0 |
| S-04 | Stress Alerts | 0 |
| S-05 | User Auth & Roles | 0 |

### Test Cases — S-02 Stability Engine

| ID | Title | Status | Linked Story |
|----|-------|--------|--------------|
| C-021 | GM greater than minimum with full departure condition | **PASSED** | MLC-13 |
| C-022 | GM below minimum triggers red alert | **FAILED** | MLC-13 |

### Test Run — Sprint 1

```
Run date:         06 Jun 2026
Executed by:      Anu Surya
Completion rate:  100% (2 of 2)
Status:           Failed (1 failure found)
Total time:       7s 560ms
```

> **Note:** C-022 failure flagged as known issue. Fix scheduled for Sprint 2. Mirrors real QA-to-development feedback loop.

---

## Stage 4 — GitHub Actions: CI/CD Pipeline

**Repository:** [github.com/anusurya2403-dot/maritime-loading-computer](https://github.com/anusurya2403-dot/maritime-loading-computer)

### Pipeline Stages

```
Build → Unit & Integration Tests → Deploy to Staging → UAT & Approval → Production Release
  ✅           ✅                        ✅                  ✅                  ✅
```

**Status:** Success · Total duration: 39s · Triggered on push to main

### Environments

| Environment | Branch | Trigger | Purpose |
|-------------|--------|---------|---------|
| staging | develop | On PR merge | Integration & smoke tests |
| uat | release/* | Manual trigger | Business validation |
| production | main | After UAT approval | Live operations |

### Release v1.0.0

**Tag:** v1.0.0  
**Title:** Maritime Loading Computer v1.0 — Sprint 1 Release

**Features Released:**
- MLC-12 Hull XML Import
- MLC-13 Real-time GM Calculation
- MLC-14 GZ Curve Display
- MLC-15 Condition Comparison
- MLC-16 Frame Stress Alerts

**Deployment:**
- Blue-green deployment completed
- Staged rollout: 5% → 50% → 100%
- All 3 environments healthy

---

## Stage 5 — HubSpot CRM: Customer & Sales Management

**Tool:** [hubspot.com](https://hubspot.com)

### Sales Pipeline

| Company | Deal Value | Stage | Close Date |
|---------|-----------|-------|------------|
| Maersk Line | $45,000 | Prospecting | 30 Jun 2026 |
| MSC Mediterranean | $78,000 | Qualified | 19 Jul 2026 |
| CMA CGM Group | $120,000 | Proposal Sent | 31 Aug 2026 |

**Total Pipeline Value: $243,000**

### Contact

| Name | Title | Company | Lifecycle Stage |
|------|-------|---------|----------------|
| Sophie Dubois | Fleet Superintendent | CMA CGM Group | Opportunity |

> **Why HubSpot?** Maritime Loading Computer is a commercial SaaS product. Shipping companies are customers. As PM, tracking the commercial pipeline demonstrates full product lifecycle ownership — from requirements to revenue.

---

## How Everything Connects

```
Notion PRD (F-02)
    ↓ links to
Linear Epic EP-01 → Stories MLC-12 to MLC-16
    ↓ stories drive
Qase Test Suite S-02 → Test Cases C-021, C-022
    ↓ test results feed into
GitHub Actions → CI/CD Pipeline → v1.0 Release
    ↓ released product sold via
HubSpot CRM → Maersk, MSC, CMA CGM deals
```

---

## Risk Register (Summary)

| Risk | Severity | Mitigation |
|------|----------|------------|
| Class society rejects stability algorithm | Critical | Validate against DNV-GL reference software |
| Hull XML import fails for non-standard vessels | High | Schema validation + manual entry fallback |
| Offshore connectivity loss | High | Offline-first architecture in Sprint 4 |
| Sprint velocity drops below 70% | Medium | 20% capacity buffer per sprint |
| Production deployment causes regression | Critical | Blue-green deploy + instant rollback |

---

## PM Competencies Demonstrated

| Competency | Evidence |
|-----------|---------|
| Requirements Management | Notion PRDs with functional + non-functional requirements |
| Agile / Scrum | Linear sprint board with user stories, epics and statuses |
| Acceptance Criteria | Written for each story in the correct format |
| QA Oversight | Qase test plan with real pass/fail outcomes |
| CI/CD Understanding | GitHub Actions pipeline with 5 stages and 3 environments |
| Release Management | Formal v1.0 release notes with deployment details |
| Commercial Awareness | HubSpot CRM with $243k pipeline across 3 shipping companies |
| Risk Management | 5-item risk register with mitigation and backup plans |

---

## Author

**Anu Surya**  
Product Manager · Business Analyst  
Maritime Loading Computer · v1.0 · 2024–2025 · Confidential
