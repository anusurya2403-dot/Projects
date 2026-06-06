# A/B Testing — Portfolio Color Theme

A self-contained A/B testing simulation built with vanilla JavaScript, designed to demonstrate the full lifecycle of a real-world experiment — from hypothesis to statistical conclusion.

> **Why this project?** Real A/B tests need thousands of visitors and weeks of runtime. This project simulates that entire process in-browser, using statistically valid methods, so the concepts and results are fully explainable and portfolio-ready.

---

## Project Structure

```
ab-testing/
├── dashboard.html   → The visual results dashboard (open this in a browser)
├── simulate.js      → Data simulation engine + chi-squared significance test
├── ab-test.js       → Reads simulation output, renders everything on the dashboard
└── README.md        → You are here
```

---

## The Experiment

### Hypothesis
Does changing the portfolio's color accent theme affect how many visitors click the main CTA ("View My Work")?

### Variants

| | Variant A | Variant B |
|---|---|---|
| **Theme** | Original | Purple |
| **Background** | Dark (`#0d1117`) | Dark (`#0d0d14`) |
| **Accent color** | Blue (`#4ea8f5`) | Purple (`#a855f7`) |
| **Text** | White | Light grey |
| **Role** | Control | Challenger |

### Metric tracked
**Click-through Rate (CTR)** — the percentage of visitors who clicked the CTA button.

### Test parameters
- **Duration:** 14 days (simulated)
- **Sample size:** ~1,000 visitors
- **Split:** 50/50 random assignment
- **Significance threshold:** p < 0.05 (95% confidence)

---

## How It Works

### 1. `simulate.js` — The Data Engine

This file does the heavy lifting. Here's what happens when you open the dashboard:

**Step 1 — Visitor simulation**
For each of the 14 days, a batch of visitors is generated and randomly split 50/50 between Variant A and B. The daily visitor count is slightly randomised to mimic real traffic patterns.

**Step 2 — Click simulation (Bernoulli trials)**
Each visitor independently "decides" whether to click based on a probability:
- Variant A: **22% click probability** (baseline)
- Variant B: **31% click probability** (challenger)

A Bernoulli trial is just: `Math.random() < probability` — the same statistical model used in real A/B testing tools.

**Step 3 — Chi-squared significance test**
After all clicks are counted, a chi-squared (χ²) test is run to determine whether the difference in CTR is statistically significant or could just be random noise.

```
χ² > 3.841  →  p < 0.05  →  Statistically significant ✓
χ² ≤ 3.841  →  p ≥ 0.05  →  Not significant ✗
```

This is the exact same test used by tools like Google Optimize, VWO, and Optimizely.

---

### 2. `ab-test.js` — The Renderer

Once `simulate.js` runs the experiment, `ab-test.js` takes the results and paints the dashboard:

- Fills in the summary cards (total visitors, clicks, overall CTR)
- Populates Variant A and B stat panels
- Animates the CTR progress bars
- Renders the winner banner with lift % and χ² value
- Draws the 14-day CTR line chart using Chart.js

---

### 3. `dashboard.html` — The Dashboard

A single-page results view that includes:

- **Theme previews** — side-by-side mockups showing exactly what each variant looked like to visitors
- **Summary cards** — top-level experiment metrics
- **Variant panels** — per-variant breakdown with animated CTR bars
- **Winner banner** — declares the winning variant with statistical backing
- **Daily CTR chart** — 14-day line chart showing how each variant performed over time

---

## Reading the Results

| Term | What it means |
|---|---|
| **CTR** | Click-through Rate. Clicks ÷ Visitors × 100 |
| **Lift** | How much better B performed vs A. `((CTR_B - CTR_A) / CTR_A) × 100` |
| **χ² (Chi-squared)** | A score measuring how unlikely the result is due to chance |
| **p < 0.05** | Less than 5% chance the result is random — the industry standard threshold |
| **Statistically significant** | The result is reliable enough to act on |

---

## Running Locally

No install, no build step, no dependencies to install manually.

**Option 1 - VS Code Live Server (recommended)**
1. Open the `ab-testing/` folder in VS Code
2. Install the **Live Server** extension by Ritwick Dey
3. Right-click `dashboard.html` → Open with Live Server

**Option 2 - Python**
```bash
cd ab-testing
python -m http.server 8000
# Open http://localhost:8000/dashboard.html
```

> Do not open `dashboard.html` directly as a `file://` URL — Chart.js won't load due to browser security restrictions. Always use a local server.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Vanilla JavaScript | Simulation logic, DOM rendering |
| Chart.js (CDN) | Daily CTR line chart |
| HTML + CSS | Dashboard layout and styling |
| GitHub Pages | Hosting |

No frameworks. No build tools. No paid services. No accounts required.

---

## Key Concepts Demonstrated

- **A/B test design** — forming a hypothesis, defining variants, choosing a metric
- **Randomised assignment** — 50/50 split using `Math.random()`
- **Bernoulli trials** — simulating probabilistic user behaviour
- **Chi-squared test** — real statistical significance testing
- **Data visualisation** — turning raw numbers into a readable dashboard
- **Experimental thinking** — understanding lift, confidence, and when to call a winner

---

## Notes

- Every page refresh re-runs the simulation with a new random seed, so results vary slightly each time — exactly like a real experiment would across different time windows.
- The click probabilities (22% for A, 31% for B) are hardcoded assumptions for demonstration. In a real test these would emerge from actual user behaviour.
- This project is intentionally self-contained so it can be understood, explained, and extended without any external dependencies.

