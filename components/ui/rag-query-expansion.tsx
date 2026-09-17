const expansions = [
  { query: "enterprise renewal blockers Q2", hits: 18, coverage: "High" },
  { query: "SSO migration risk accounts", hits: 11, coverage: "Medium" },
  { query: "support escalation renewal churn", hits: 24, coverage: "High" },
];

const sources = [
  { name: "CRM notes", status: "Covered", matches: 14 },
  { name: "Support tickets", status: "Covered", matches: 27 },
  { name: "Product docs", status: "Sparse", matches: 3 },
];

export function RagQueryExpansion() {
  return (
    <section className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b0f14] p-5 shadow-2xl">
      <header>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-violet-300">Retrieval planning</p>
        <h3 className="mt-1 text-base font-bold text-white">RAG query expansion</h3>
        <p className="mt-1 text-sm text-slate-400">Inspect how one user question becomes multiple retrieval queries before ranking.</p>
      </header>

      <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.03] p-3">
        <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-slate-500">Original question</p>
        <p className="mt-1 text-sm leading-6 text-slate-100">Why are enterprise renewals at risk this quarter?</p>
      </div>

      <div className="mt-4 space-y-2">
        {expansions.map((item, index) => (
          <div key={item.query} className="rounded-xl border border-white/8 bg-white/[0.025] p-3">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-violet-400/10 text-xs font-bold text-violet-200">{index + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-slate-100">{item.query}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>{item.hits} candidate chunks</span>
                  <span className="rounded-full border border-white/10 px-2 py-0.5 text-slate-300">{item.coverage} coverage</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 border-t border-white/8 pt-4">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Source coverage</p>
          <span className="text-xs text-slate-500">44 unique chunks</span>
        </div>
        <ul className="mt-3 space-y-2" aria-label="Retrieval source coverage">
          {sources.map((source) => (
            <li key={source.name} className="flex items-center justify-between gap-4 text-sm">
              <span className="text-slate-300">{source.name}</span>
              <span className="flex items-center gap-2 text-xs text-slate-500"><b className="font-medium text-slate-300">{source.matches}</b> matches · {source.status}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-xl border border-amber-400/15 bg-amber-400/[0.06] p-3 text-xs leading-5 text-amber-100">
        Coverage gap: product documentation contributes only 3 chunks. Consider adding a product-specific expansion before generation.
      </div>
    </section>
  );
}
