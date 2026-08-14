const claims = [
  { source: "Pricing guide · v8", claim: "Refund window: 30 days", status: "Current" },
  { source: "Support article · 2024", claim: "Refund window: 14 days", status: "Stale" },
];

export function ContextConflictResolver() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Context conflict</p><h3 className="mt-1 text-base font-bold text-white">Resolve competing claims</h3></div>
        <span className="rounded-full bg-amber-400/10 px-2 py-1 text-[0.65rem] font-semibold text-amber-300">2 sources</span>
      </header>
      <ul className="mt-4 space-y-2">
        {claims.map((item) => (
          <li key={item.source} className="rounded-lg border border-white/[0.08] p-3">
            <div className="flex items-center justify-between gap-3"><span className="text-[0.65rem] text-slate-500">{item.source}</span><span className={item.status === "Current" ? "text-[0.65rem] font-semibold text-emerald-300" : "text-[0.65rem] font-semibold text-rose-300"}>{item.status}</span></div>
            <p className="mt-2 text-xs font-medium text-slate-200">{item.claim}</p>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded-lg bg-cyan-400/[0.07] p-3 text-[0.68rem] leading-relaxed text-cyan-100">Recommended: prefer v8 because it has the newer effective date and product-owner approval.</div>
      <button type="button" className="mt-3 w-full rounded-lg bg-white py-2 text-xs font-bold text-slate-950">Use recommended source</button>
    </section>
  );
}
