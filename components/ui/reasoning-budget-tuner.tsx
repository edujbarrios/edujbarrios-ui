const modes = [
  { name: "Fast", effort: "Low", latency: "0.8s", cost: "$0.004", quality: 74 },
  { name: "Balanced", effort: "Medium", latency: "2.4s", cost: "$0.014", quality: 89 },
  { name: "Deep", effort: "High", latency: "6.9s", cost: "$0.048", quality: 96 },
];

export function ReasoningBudgetTuner() {
  return (
    <section className="w-full max-w-3xl rounded-2xl border border-white/10 bg-slate-950 p-6 text-slate-100 shadow-2xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Preflight control</p>
          <h2 className="mt-2 text-xl font-bold">Reasoning Budget Tuner</h2>
          <p className="mt-1 text-sm text-slate-500">Choose how much compute to spend before the run starts.</p>
        </div>
        <span className="rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1 text-xs font-bold text-violet-200">Recommended: Balanced</span>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {modes.map((mode) => (
          <article key={mode.name} className={`rounded-xl border p-4 ${mode.name === "Balanced" ? "border-violet-300/40 bg-violet-300/10" : "border-white/8 bg-white/[0.035]"}`}>
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-bold">{mode.name}</h3>
              <span className="text-xs font-semibold text-slate-400">{mode.effort}</span>
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-3"><dt className="text-slate-500">Latency</dt><dd>{mode.latency}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-slate-500">Est. cost</dt><dd>{mode.cost}</dd></div>
              <div className="flex justify-between gap-3"><dt className="text-slate-500">Eval quality</dt><dd>{mode.quality}%</dd></div>
            </dl>
            <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-label={`${mode.name} evaluation quality`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={mode.quality}>
              <div className="h-full rounded-full bg-violet-300" style={{ width: `${mode.quality}%` }} />
            </div>
          </article>
        ))}
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-400">Balanced preserves most measured quality while using less than one third of the estimated cost of Deep mode.</p>
    </section>
  );
}
