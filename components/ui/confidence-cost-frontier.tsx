const candidates = [
  { label: "Fast + 2 sources", cost: 0.006, confidence: 78, note: "Budget" },
  { label: "Balanced + rerank", cost: 0.019, confidence: 91, note: "Efficient frontier" },
  { label: "Deep + 6 sources", cost: 0.057, confidence: 94, note: "Diminishing returns" },
  { label: "Deep + review", cost: 0.084, confidence: 97, note: "High assurance" },
];

export function ConfidenceCostFrontier() {
  return (
    <section className="w-full max-w-3xl rounded-2xl border border-white/10 bg-slate-950 p-6 text-slate-100 shadow-2xl">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Optimization view</p>
        <h2 className="mt-2 text-xl font-bold">Confidence Cost Frontier</h2>
        <p className="mt-1 text-sm text-slate-500">Compare assurance gains against estimated run cost.</p>
      </div>

      <div className="mt-6 space-y-3">
        {candidates.map((candidate) => (
          <article key={candidate.label} className={`rounded-xl border p-4 ${candidate.note === "Efficient frontier" ? "border-emerald-300/40 bg-emerald-300/10" : "border-white/8 bg-white/[0.035]"}`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-slate-100">{candidate.label}</h3>
                <p className="mt-1 text-xs text-slate-500">{candidate.note}</p>
              </div>
              <div className="flex items-center gap-5 text-right">
                <div><p className="text-xs text-slate-500">Cost</p><p className="font-bold tabular-nums">${candidate.cost.toFixed(3)}</p></div>
                <div><p className="text-xs text-slate-500">Confidence</p><p className="font-bold tabular-nums">{candidate.confidence}%</p></div>
              </div>
            </div>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-label={`${candidate.label} confidence`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={candidate.confidence}>
              <div className="h-full rounded-full bg-emerald-300" style={{ width: `${candidate.confidence}%` }} />
            </div>
          </article>
        ))}
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-400">Balanced + rerank is the efficient default: it reaches 91% confidence before the cost curve steepens sharply.</p>
    </section>
  );
}
