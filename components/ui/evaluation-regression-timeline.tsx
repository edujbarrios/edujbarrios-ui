const releases = [
  { version: "v21", score: 94, note: "Baseline" },
  { version: "v22", score: 92, note: "Prompt update" },
  { version: "v23", score: 81, note: "Retriever change" },
  { version: "v24", score: 89, note: "Partial recovery" },
];

export function EvaluationRegressionTimeline() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Evaluation history</p><h3 className="mt-1 text-base font-bold text-white">Regression timeline</h3></div><span className="text-[0.65rem] font-semibold text-rose-300">−5 pts vs baseline</span></header>
      <ol className="mt-5 flex items-end gap-2" aria-label="Evaluation scores by release">
        {releases.map((release) => <li key={release.version} className="flex flex-1 flex-col items-center"><strong className={release.score < 85 ? "text-xs text-rose-300" : "text-xs text-white"}>{release.score}</strong><div className="mt-1 flex h-24 w-full items-end rounded-md bg-white/[0.04] p-1"><span className={release.score < 85 ? "w-full rounded bg-rose-400/70" : "w-full rounded bg-cyan-400/70"} style={{ height: `${release.score}%` }} /></div><span className="mt-2 text-[0.62rem] font-semibold text-slate-400">{release.version}</span></li>)}
      </ol>
      <div className="mt-4 rounded-lg border border-rose-300/15 bg-rose-400/[0.06] p-3"><p className="text-xs font-semibold text-rose-200">Regression begins at v23</p><p className="mt-1 text-[0.65rem] leading-relaxed text-slate-400">Correlated with the retriever change; 13 failing cases remain.</p></div>
    </section>
  );
}
