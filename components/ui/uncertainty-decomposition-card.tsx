const factors = [
  { label: "Source coverage", value: 82, note: "2 claims lack primary evidence" },
  { label: "Freshness", value: 91, note: "Newest source is 18 min old" },
  { label: "Intent clarity", value: 74, note: "One requirement is underspecified" },
  { label: "Model agreement", value: 68, note: "Minor disagreement on recommendation" },
];

export function UncertaintyDecompositionCard() {
  const confidence = 78;

  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0a0d12] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300">Uncertainty</p>
          <h3 className="mt-1 text-base font-bold text-white">Confidence decomposition</h3>
          <p className="mt-1 text-xs text-slate-400">Explain why a model is uncertain instead of exposing a single opaque score.</p>
        </div>
        <div className="rounded-xl border border-violet-400/20 bg-violet-400/10 px-3 py-2 text-right">
          <p className="text-[0.6rem] uppercase tracking-wider text-violet-200/70">Calibrated</p>
          <strong className="text-lg text-violet-200">{confidence}%</strong>
        </div>
      </header>

      <div className="mt-4 space-y-3">
        {factors.map((factor) => (
          <div key={factor.label} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold text-slate-200">{factor.label}</p>
              <span className="text-xs font-bold tabular-nums text-white">{factor.value}%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" aria-label={`${factor.label}: ${factor.value}%`}>
              <div className="h-full rounded-full bg-white/50" style={{ width: `${factor.value}%` }} />
            </div>
            <p className="mt-2 text-[0.66rem] text-slate-500">{factor.note}</p>
          </div>
        ))}
      </div>

      <footer className="mt-3 grid grid-cols-[1fr_auto] gap-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.06] p-3">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-amber-300">Largest uncertainty</p>
          <p className="mt-1 text-xs text-slate-300">Model disagreement contributes the most remaining uncertainty.</p>
        </div>
        <span className="self-center rounded-full border border-amber-400/20 px-2 py-1 text-[0.6rem] font-semibold text-amber-200">Review</span>
      </footer>
    </section>
  );
}
