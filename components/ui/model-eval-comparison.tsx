const candidates = [
  { name: "Fast", model: "v2-mini", quality: 86, latency: "420ms", cost: "$0.18" },
  { name: "Balanced", model: "v3", quality: 94, latency: "880ms", cost: "$0.42" },
];

export function ModelEvalComparison() {
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Evaluation run</p>
          <h3 className="mt-1 text-base font-bold text-white">Support answer quality</h3>
        </div>
        <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.65rem] font-semibold text-slate-400">240 cases</span>
      </header>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {candidates.map((candidate, index) => (
          <article key={candidate.model} className={index === 1 ? "rounded-lg border border-[#40E0D0]/28 bg-[#40E0D0]/[0.07] p-3" : "rounded-lg border border-white/10 bg-white/[0.035] p-3"}>
            <div className="flex items-center justify-between gap-2">
              <div><h4 className="text-xs font-bold text-white">{candidate.name}</h4><p className="mt-0.5 font-mono text-[0.6rem] text-slate-500">{candidate.model}</p></div>
              {index === 1 && <span className="rounded-full bg-[#40E0D0]/12 px-2 py-1 text-[0.6rem] font-bold text-[#d8fffb]">Best</span>}
            </div>
            <p className="mt-4 text-2xl font-black tabular-nums text-white">{candidate.quality}%</p>
            <p className="text-[0.65rem] text-slate-500">quality score</p>
            <dl className="mt-3 space-y-1.5 border-t border-white/8 pt-3 text-[0.65rem]">
              <div className="flex justify-between"><dt className="text-slate-500">Latency</dt><dd className="font-semibold text-slate-200">{candidate.latency}</dd></div>
              <div className="flex justify-between"><dt className="text-slate-500">Cost / 1k</dt><dd className="font-semibold text-slate-200">{candidate.cost}</dd></div>
            </dl>
          </article>
        ))}
      </div>
      <p className="mt-3 text-[0.65rem] leading-5 text-slate-500">Balanced improves groundedness by 9 points with a 460ms latency tradeoff.</p>
    </section>
  );
}
