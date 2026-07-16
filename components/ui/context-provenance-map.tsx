const sources = [{ name: "System policy", tokens: "1.2k", influence: "High" }, { name: "Product brief.pdf", tokens: "3.8k", influence: "High" }, { name: "User message", tokens: "184", influence: "Direct" }];

export function ContextProvenanceMap() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Context provenance</p><h3 className="mt-1 text-base font-bold text-white">Answer input map</h3></header>
    <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3"><ul className="space-y-2">{sources.map((source) => <li key={source.name} className="rounded-lg border border-white/9 bg-white/[0.025] p-2.5"><p className="text-xs font-semibold text-slate-200">{source.name}</p><p className="mt-1 text-[0.65rem] text-slate-500">{source.tokens} · {source.influence}</p></li>)}</ul><span aria-hidden="true" className="text-[#40E0D0]">→</span><div className="rounded-xl border border-[#40E0D0]/25 bg-[#40E0D0]/[0.07] p-3 text-center"><p className="text-xs font-bold text-white">Final answer</p><p className="mt-1 text-[0.65rem] text-slate-500">5.2k input tokens</p></div></div>
    <p className="mt-3 text-[0.65rem] text-slate-500">All influential sources are visible and traceable.</p>
  </section>;
}
