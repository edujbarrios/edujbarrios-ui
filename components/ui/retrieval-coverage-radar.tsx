const topics = [
  { label: "Pricing", coverage: 96, sources: 8 },
  { label: "Security", coverage: 88, sources: 6 },
  { label: "Rollout", coverage: 73, sources: 5 },
  { label: "Customer pain", coverage: 61, sources: 4 },
  { label: "Competition", coverage: 42, sources: 2 },
];

export function RetrievalCoverageRadar() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#080c11] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">Retrieval coverage</p>
          <h3 className="mt-1 text-base font-bold text-white">Evidence coverage radar</h3>
          <p className="mt-1 text-xs text-slate-400">Expose strong topics, weak retrieval zones, and source depth before synthesis.</p>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[0.62rem] font-semibold text-emerald-200">25 sources</span>
      </header>

      <div className="mt-4 space-y-3">
        {topics.map((topic) => (
          <div key={topic.label}>
            <div className="flex items-center justify-between text-[0.68rem]">
              <span className="font-semibold text-slate-200">{topic.label}</span>
              <span className="text-slate-500">{topic.sources} sources · {topic.coverage}%</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/[0.06]" role="progressbar" aria-label={`${topic.label} retrieval coverage`} aria-valuenow={topic.coverage} aria-valuemin={0} aria-valuemax={100}>
              <span className="block h-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" style={{ width: `${topic.coverage}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-amber-400/15 bg-amber-400/[0.06] p-3">
        <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-amber-300">Coverage gap</p>
        <p className="mt-1 text-xs leading-5 text-slate-300">Competition has only 42% coverage. Retrieve at least two primary sources before producing a market comparison.</p>
      </div>

      <footer className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white/[0.035] p-3"><p className="text-[0.62rem] text-slate-500">Overall coverage</p><strong className="mt-1 block text-sm text-white">72%</strong></div>
        <div className="rounded-xl bg-white/[0.035] p-3"><p className="text-[0.62rem] text-slate-500">Weakest topic</p><strong className="mt-1 block text-sm text-amber-300">Competition</strong></div>
      </footer>
    </section>
  );
}
