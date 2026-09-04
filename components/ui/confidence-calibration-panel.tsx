const buckets = [
  { label: "50–60%", predicted: 55, observed: 49, samples: 124 },
  { label: "60–70%", predicted: 65, observed: 61, samples: 188 },
  { label: "70–80%", predicted: 75, observed: 73, samples: 236 },
  { label: "80–90%", predicted: 85, observed: 87, samples: 291 },
  { label: "90–100%", predicted: 95, observed: 91, samples: 344 },
];

export function ConfidenceCalibrationPanel() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0e13] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300">Calibration</p>
          <h3 className="mt-1 text-base font-bold text-white">Confidence vs. reality</h3>
          <p className="mt-1 text-xs text-slate-400">Checks whether model confidence matches observed correctness.</p>
        </div>
        <div className="rounded-xl border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-right">
          <p className="text-[0.6rem] uppercase tracking-wider text-violet-200/70">ECE</p>
          <strong className="text-sm text-violet-200">3.8%</strong>
        </div>
      </header>

      <div className="mt-4 space-y-3" aria-label="Confidence calibration buckets">
        {buckets.map((bucket) => {
          const gap = bucket.observed - bucket.predicted;
          return (
            <div key={bucket.label} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-slate-100">{bucket.label} confidence</p>
                  <p className="mt-0.5 text-[0.63rem] text-slate-500">{bucket.samples} samples</p>
                </div>
                <span className={`text-xs font-semibold tabular-nums ${Math.abs(gap) <= 3 ? "text-emerald-300" : "text-amber-300"}`}>
                  {gap > 0 ? "+" : ""}{gap} pts
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="grid grid-cols-[58px_1fr_36px] items-center gap-2 text-[0.62rem]">
                  <span className="text-slate-500">Predicted</span>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-violet-400/70" style={{ width: `${bucket.predicted}%` }} /></div>
                  <span className="text-right tabular-nums text-slate-300">{bucket.predicted}%</span>
                </div>
                <div className="grid grid-cols-[58px_1fr_36px] items-center gap-2 text-[0.62rem]">
                  <span className="text-slate-500">Observed</span>
                  <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]"><div className="h-full rounded-full bg-cyan-400/70" style={{ width: `${bucket.observed}%` }} /></div>
                  <span className="text-right tabular-nums text-slate-300">{bucket.observed}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <footer className="mt-3 flex items-center justify-between rounded-xl bg-white/[0.035] p-3">
        <div><p className="text-[0.62rem] text-slate-500">Largest calibration gap</p><strong className="mt-1 block text-xs text-white">50–60% bucket · 6 pts</strong></div>
        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2 py-1 text-[0.62rem] font-semibold text-amber-300">Needs tuning</span>
      </footer>
    </section>
  );
}
