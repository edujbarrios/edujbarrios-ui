const repairs = [
  { issue: "Malformed JSON", strategy: "Schema retry", state: "Repairing" },
  { issue: "Missing citation", strategy: "Targeted retrieval", state: "Queued" },
  { issue: "Invalid date", strategy: "Field correction", state: "Ready" },
];

export function ResponseRepairQueue() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Recovery pipeline</p><h3 className="mt-1 text-base font-bold text-white">Response repairs</h3></div><span className="rounded-full bg-cyan-400/10 px-2 py-1 text-[0.65rem] font-semibold text-cyan-200">3 items</span></header>
      <ol className="mt-4 space-y-2">{repairs.map((repair, index) => <li key={repair.issue} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/[0.07] p-3"><span className="grid h-6 w-6 place-items-center rounded-md bg-white/[0.05] text-[0.65rem] font-bold text-slate-500">{index + 1}</span><div><p className="text-xs font-semibold text-slate-200">{repair.issue}</p><p className="mt-0.5 text-[0.65rem] text-slate-500">{repair.strategy}</p></div><span className={repair.state === "Repairing" ? "text-[0.62rem] font-semibold text-cyan-300" : "text-[0.62rem] font-semibold text-slate-400"}>{repair.state}</span></li>)}</ol>
      <p className="mt-3 text-[0.65rem] text-slate-500">Repairs preserve the original response and attach an audit trail.</p>
    </section>
  );
}
