const tools = [
  { name: "CRM lookup", reliability: 98, freshness: 92, scope: "Read", verdict: "Trusted" },
  { name: "Billing API", reliability: 95, freshness: 99, scope: "Read / Write", verdict: "Trusted" },
  { name: "Web search", reliability: 84, freshness: 100, scope: "Read", verdict: "Review" },
  { name: "Legacy export", reliability: 61, freshness: 42, scope: "Read", verdict: "Restricted" },
];

const verdictClass: Record<string, string> = {
  Trusted: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  Review: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  Restricted: "border-rose-400/20 bg-rose-400/10 text-rose-200",
};

export function ToolTrustMatrix() {
  return (
    <section className="w-full max-w-3xl rounded-2xl border border-white/10 bg-[#090d12] p-5 shadow-2xl">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-300">Tool trust matrix</p>
          <h3 className="mt-1 text-lg font-bold text-white">Preflight tool confidence</h3>
          <p className="mt-1 text-sm text-slate-400">Score tool reliability, data freshness, and permission scope before an agent acts.</p>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">4 tools</span>
      </header>

      <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.07]">
        <div className="hidden grid-cols-[1.3fr_0.8fr_0.8fr_1fr_auto] gap-3 bg-white/[0.035] px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-wider text-slate-500 md:grid">
          <span>Tool</span><span>Reliability</span><span>Freshness</span><span>Scope</span><span>Verdict</span>
        </div>
        <div className="divide-y divide-white/[0.06]">
          {tools.map((tool) => (
            <div key={tool.name} className="grid gap-3 px-4 py-4 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr_auto] md:items-center">
              <strong className="text-sm text-white">{tool.name}</strong>
              <span className="text-xs tabular-nums text-slate-300">{tool.reliability}% reliable</span>
              <span className="text-xs tabular-nums text-slate-300">{tool.freshness}% fresh</span>
              <span className="text-xs text-slate-400">{tool.scope}</span>
              <span className={`w-fit rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold ${verdictClass[tool.verdict]}`}>{tool.verdict}</span>
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-4 rounded-xl border border-rose-400/15 bg-rose-400/[0.05] p-3 text-xs text-rose-100">
        Legacy export should not be used for autonomous decisions until its stale dataset is refreshed.
      </footer>
    </section>
  );
}
