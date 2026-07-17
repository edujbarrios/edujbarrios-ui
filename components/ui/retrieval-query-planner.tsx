const queries = [{ text: "enterprise retention Q2", source: "Reports", hits: 8 }, { text: "renewal risk signals", source: "CRM", hits: 14 }, { text: "support escalation themes", source: "Tickets", hits: 21 }];

export function RetrievalQueryPlanner() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Retrieval plan</p><h3 className="mt-1 text-base font-bold text-white">Quarterly risk brief</h3></div><span className="rounded-full bg-[#a78bfa]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#c4b5fd]">3 queries</span></header>
    <ol className="mt-4 space-y-2">{queries.map((query, index) => <li key={query.text} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3"><span className="grid h-7 w-7 place-items-center rounded-full bg-[#40E0D0]/10 text-[0.65rem] font-bold text-[#d8fffb]">{index + 1}</span><div><p className="font-mono text-xs text-slate-200">{query.text}</p><p className="mt-1 text-[0.65rem] text-slate-500">Search {query.source}</p></div><span className="text-[0.65rem] font-semibold text-slate-400">{query.hits} hits</span></li>)}</ol>
    <div className="mt-3 flex items-center justify-between rounded-lg border border-white/9 px-3 py-2.5"><span className="text-[0.65rem] text-slate-500">Estimated context</span><strong className="text-xs text-white">6.4k tokens</strong></div>
  </section>;
}
