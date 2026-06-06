// ── simulate.js ──
// Generates realistic fake visitor data for a 14-day A/B test
// Variant A: Original theme  → ~22% CTR (baseline)
// Variant B: Purple theme    → ~31% CTR (challenger)

const SIMULATION = (() => {

  const DAYS = 14;
  const TOTAL_VISITORS = 1000;

  // True click probabilities for each variant
  const PROB_A = 0.22;
  const PROB_B = 0.31;

  // ── Helper: simulate one bernoulli trial ──
  function didClick(probability) {
    return Math.random() < probability;
  }

  // ── Generate daily breakdown ──
  function generateDailyData() {
    const dailyA = [];
    const dailyB = [];

    for (let day = 1; day <= DAYS; day++) {
      // Spread visitors unevenly across days (more realistic)
      const visitorsToday = Math.floor(
        (TOTAL_VISITORS / DAYS) * (0.7 + Math.random() * 0.6)
      );

      const aVisitors = Math.floor(visitorsToday / 2);
      const bVisitors = visitorsToday - aVisitors;

      let aClicks = 0;
      let bClicks = 0;

      for (let i = 0; i < aVisitors; i++) if (didClick(PROB_A)) aClicks++;
      for (let i = 0; i < bVisitors; i++) if (didClick(PROB_B)) bClicks++;

      dailyA.push({ day, visitors: aVisitors, clicks: aClicks });
      dailyB.push({ day, visitors: bVisitors, clicks: bClicks });
    }

    return { dailyA, dailyB };
  }

  // ── Aggregate totals ──
  function aggregate(daily) {
    return daily.reduce(
      (acc, d) => ({
        visitors: acc.visitors + d.visitors,
        clicks:   acc.clicks   + d.clicks,
      }),
      { visitors: 0, clicks: 0 }
    );
  }

  // ── Chi-squared significance test ──
  // Tests whether the difference in CTR is statistically significant
  function chiSquaredTest(aVisitors, aClicks, bVisitors, bClicks) {
    const aNonClicks = aVisitors - aClicks;
    const bNonClicks = bVisitors - bClicks;
    const total      = aVisitors + bVisitors;
    const totalClicks    = aClicks + bClicks;
    const totalNonClicks = aNonClicks + bNonClicks;

    // Expected values
    const eAClick    = (aVisitors * totalClicks)    / total;
    const eANonClick = (aVisitors * totalNonClicks) / total;
    const eBClick    = (bVisitors * totalClicks)    / total;
    const eBNonClick = (bVisitors * totalNonClicks) / total;

    const chi2 =
      Math.pow(aClicks    - eAClick,    2) / eAClick    +
      Math.pow(aNonClicks - eANonClick, 2) / eANonClick +
      Math.pow(bClicks    - eBClick,    2) / eBClick    +
      Math.pow(bNonClicks - eBNonClick, 2) / eBNonClick;

    // chi2 > 3.841 means p < 0.05 (statistically significant at 95% confidence)
    return {
      chi2: chi2.toFixed(3),
      significant: chi2 > 3.841,
      confidence: chi2 > 3.841 ? "95%" : "< 95%"
    };
  }

  // ── Run the full simulation ──
  function run() {
    const { dailyA, dailyB } = generateDailyData();
    const totA = aggregate(dailyA);
    const totB = aggregate(dailyB);

    const ctrA = totA.clicks / totA.visitors;
    const ctrB = totB.clicks / totB.visitors;
    const lift = (((ctrB - ctrA) / ctrA) * 100).toFixed(1);

    const stats = chiSquaredTest(
      totA.visitors, totA.clicks,
      totB.visitors, totB.clicks
    );

    return {
      dailyA, dailyB,
      totA, totB,
      ctrA, ctrB,
      lift,
      stats,
      winner: ctrB > ctrA ? "B" : "A"
    };
  }

  return { run };
})();