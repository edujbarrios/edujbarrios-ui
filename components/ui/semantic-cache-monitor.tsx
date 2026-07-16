const metrics = [{ label: "Hit rate", value: "68%" }, { label: "Saved", value: "$42.18" }, { label: "Latency", value: "−310ms" }];

export function SemanticCacheMonitor() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Semantic cache</p><h3 className="mt-1 text-base font-bold text-white">Response reuse</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Healthy</span></header>
    <dl className="mt-4 grid grid-cols-3 gap-2">{metrics.map((metric) => <div key={metric.label} className="rounded-lg border border-white/9 bg-white/[0.03] p-3"><dt className="text-[0.65rem] text-slate-500">{metric.label}</dt><dd className="mt-2 text-lg font-black text-white">{metric.value}</dd></div>)}</dl>
    <div className="mt-4"><div className="flex justify-between text-[0.65rem]"><span className="text-slate-500">8,142 similar requests</span><span className="font-semibold text-[#d8fffb]">5,536 hits</span></div><div className="mt-2 h-2 rounded-full bg-white/[0.06]" role="progressbar" aria-label="Semantic cache hit rate" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span className="block h-full w-[68%] rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]" /></div></div>
    <p className="mt-4 text-[0.65rem] leading-5 text-slate-500">Similarity threshold 0.92 · Entries expire after 24 hours</p>
  </section>;
}
