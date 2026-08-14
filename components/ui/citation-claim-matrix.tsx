const claims = [
  { claim: "Revenue grew 18%", sources: 2, status: "Supported" },
  { claim: "Expansion led growth", sources: 1, status: "Partial" },
  { claim: "Churn fell in Europe", sources: 0, status: "Missing" },
];

export function CitationClaimMatrix() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Grounding audit</p><h3 className="mt-1 text-base font-bold text-white">Claims and citations</h3></div><strong className="text-lg text-white">67%</strong></header>
      <div className="mt-4 grid grid-cols-[1fr_auto_auto] gap-x-3 border-b border-white/[0.08] pb-2 text-[0.62rem] font-semibold uppercase tracking-wider text-slate-600"><span>Claim</span><span>Sources</span><span>Status</span></div>
      <ul className="divide-y divide-white/[0.07]">{claims.map((item) => <li key={item.claim} className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 py-3"><span className="text-xs text-slate-200">{item.claim}</span><span className="text-xs font-semibold text-slate-400">{item.sources}</span><span className={item.status === "Supported" ? "w-16 text-right text-[0.62rem] font-semibold text-emerald-300" : item.status === "Partial" ? "w-16 text-right text-[0.62rem] font-semibold text-amber-300" : "w-16 text-right text-[0.62rem] font-semibold text-rose-300"}>{item.status}</span></li>)}</ul>
      <button type="button" className="mt-2 w-full rounded-lg border border-white/10 py-2 text-xs font-semibold text-white">Review unsupported claim</button>
    </section>
  );
}
