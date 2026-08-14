const sources = [
  { label: "Product docs", age: "2h", freshness: 96 },
  { label: "Support index", age: "3d", freshness: 78 },
  { label: "Policy archive", age: "41d", freshness: 32 },
];

export function RetrievalFreshnessGauge() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Retrieval health</p>
          <h3 className="mt-1 text-base font-bold text-white">Source freshness</h3>
        </div>
        <span className="rounded-full bg-amber-400/10 px-2 py-1 text-[0.65rem] font-semibold text-amber-300">1 stale</span>
      </header>
      <ul className="mt-4 space-y-3">
        {sources.map((source) => (
          <li key={source.label}>
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-200">{source.label}</span>
              <span className="text-slate-500">updated {source.age} ago</span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
              <span className={source.freshness < 50 ? "block h-full rounded-full bg-amber-400" : "block h-full rounded-full bg-[#40E0D0]"} style={{ width: `${source.freshness}%` }} />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-[0.65rem] leading-relaxed text-slate-500">Policy archive may reduce grounded-answer confidence until it is re-indexed.</p>
    </section>
  );
}
