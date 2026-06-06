// ── ab-test.js ──
// Reads simulation output and renders everything on the dashboard

document.addEventListener("DOMContentLoaded", () => {

  // ── Run the simulation ──
  const result = SIMULATION.run();
  const { dailyA, dailyB, totA, totB, ctrA, ctrB, lift, stats, winner } = result;

  // ── Helper: format numbers ──
  const pct   = (n) => (n * 100).toFixed(1) + "%";
  const comma = (n) => n.toLocaleString();

  // ── Summary cards ──
  document.getElementById("totalVisitors").textContent =
    comma(totA.visitors + totB.visitors);

  document.getElementById("totalClicks").textContent =
    comma(totA.clicks + totB.clicks);

  document.getElementById("overallCTR").textContent =
    pct((totA.clicks + totB.clicks) / (totA.visitors + totB.visitors));

  // ── Variant A stats ──
  document.getElementById("aVisitors").textContent = comma(totA.visitors);
  document.getElementById("aClicks").textContent   = comma(totA.clicks);
  document.getElementById("aCTR").textContent      = pct(ctrA);

  // ── Variant B stats ──
  document.getElementById("bVisitors").textContent = comma(totB.visitors);
  document.getElementById("bClicks").textContent   = comma(totB.clicks);
  document.getElementById("bCTR").textContent      = pct(ctrB);

  // ── Animate CTR bars ──
  const maxCTR = Math.max(ctrA, ctrB);
  setTimeout(() => {
    document.getElementById("aBar").style.width = ((ctrA / maxCTR) * 100) + "%";
    document.getElementById("bBar").style.width = ((ctrB / maxCTR) * 100) + "%";
  }, 200);

  // ── Winner banner ──
  const winnerTitle = document.getElementById("winnerTitle");
  const winnerDesc  = document.getElementById("winnerDesc");
  const sigPill     = document.getElementById("sigPill");
  const banner      = document.getElementById("winnerBanner");

  if (winner === "B") {
    winnerTitle.textContent = "Variant B wins — Purple Theme";
    winnerDesc.textContent  =
      `CTR improved from ${pct(ctrA)} → ${pct(ctrB)}, ` +
      `a +${lift}% lift. Chi² = ${stats.chi2} (${stats.confidence} confidence).`;
    banner.style.borderColor = "#a855f7";
  } else {
    winnerTitle.textContent = "Variant A wins — Original Theme";
    winnerDesc.textContent  =
      `CTR held at ${pct(ctrA)} vs ${pct(ctrB)} for Variant B. ` +
      `Chi² = ${stats.chi2} (${stats.confidence} confidence).`;
    banner.style.borderColor = "#4ea8f5";
  }

  if (stats.significant) {
    sigPill.textContent = "✓ Statistically Significant (p < 0.05)";
    sigPill.className   = "sig-pill yes";
  } else {
    sigPill.textContent = "✗ Not Statistically Significant";
    sigPill.className   = "sig-pill no";
  }

  // ── Daily CTR chart ──
  const labels = dailyA.map((d) => `Day ${d.day}`);

  const ctrSeriesA = dailyA.map((d) =>
    ((d.clicks / d.visitors) * 100).toFixed(1)
  );
  const ctrSeriesB = dailyB.map((d) =>
    ((d.clicks / d.visitors) * 100).toFixed(1)
  );

  const ctx = document.getElementById("ctrChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Variant A — Original",
          data: ctrSeriesA,
          borderColor: "#4ea8f5",
          backgroundColor: "rgba(78,168,245,0.08)",
          borderWidth: 2,
          pointRadius: 4,
          tension: 0.3,
          fill: true,
        },
        {
          label: "Variant B — Purple",
          data: ctrSeriesB,
          borderColor: "#a855f7",
          backgroundColor: "rgba(168,85,247,0.08)",
          borderWidth: 2,
          pointRadius: 4,
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: { color: "#ccc", font: { size: 13 } },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y}% CTR`,
          },
        },
      },
      scales: {
        x: { ticks: { color: "#888" }, grid: { color: "#1e1e2e" } },
        y: {
          ticks: { color: "#888", callback: (v) => v + "%" },
          grid:  { color: "#1e1e2e" },
          title: { display: true, text: "CTR (%)", color: "#666" },
        },
      },
    },
  });

});
