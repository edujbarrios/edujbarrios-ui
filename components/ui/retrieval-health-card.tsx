const sources = [
  { name: "Product docs", freshness: "2m", score: "98%", tone: "bg-[#40E0D0]" },
  { name: "Help center", freshness: "1h", score: "91%", tone: "bg-[#a78bfa]" },
  { name: "Release notes", freshness: "3d", score: "76%", tone: "bg-[#fb923c]" },
];

export function RetrievalHealthCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Retrieval health</p><h3 className="mt-2 text-lg font-bold text-white">Knowledge index</h3></div><span className="text-xs font-semibold text-[#d8fffb]">healthy</span></div>
      <dl className="mt-4 space-y-2">
        {sources.map((source) => (
          <div key={source.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/8 bg-white/[0.035] p-3">
            <span className={`${source.tone} h-2 w-2 rounded-full shadow-[0_0_12px_currentColor]`} aria-hidden="true" />
            <div><dt className="text-xs font-semibold text-slate-200">{source.name}</dt><dd className="mt-1 text-[0.65rem] text-slate-500">Synced {source.freshness} ago</dd></div>
            <dd className="text-xs font-black tabular-nums text-white">{source.score}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 text-xs leading-5 text-slate-400">12,482 chunks indexed · 3 sources online</p>
    </section>
  );
}
