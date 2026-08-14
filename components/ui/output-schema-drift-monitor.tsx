const fields = [
  { name: "confidence", change: "number → string", impact: "Breaking" },
  { name: "citations[]", change: "optional → required", impact: "Breaking" },
  { name: "trace_id", change: "new optional field", impact: "Safe" },
];

export function OutputSchemaDriftMonitor() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-300">Contract drift</p><h3 className="mt-1 text-base font-bold text-white">Output schema</h3></div><span className="rounded-full bg-rose-400/10 px-2 py-1 text-[0.65rem] font-semibold text-rose-300">2 breaking</span></header>
      <div className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2 text-[0.68rem] text-slate-400"><span className="text-slate-200">v12 production</span><span className="mx-2 text-slate-600">→</span><span className="text-cyan-300">v13 candidate</span></div>
      <ul className="mt-3 divide-y divide-white/[0.07] rounded-lg border border-white/[0.07]">
        {fields.map((field) => <li key={field.name} className="flex items-center justify-between gap-3 p-3"><div className="min-w-0"><code className="text-xs font-semibold text-white">{field.name}</code><p className="mt-1 truncate text-[0.65rem] text-slate-500">{field.change}</p></div><span className={field.impact === "Safe" ? "text-[0.65rem] font-semibold text-emerald-300" : "text-[0.65rem] font-semibold text-rose-300"}>{field.impact}</span></li>)}
      </ul>
      <button type="button" className="mt-3 w-full rounded-lg border border-rose-300/20 bg-rose-400/[0.06] py-2 text-xs font-semibold text-rose-200">Generate migration plan</button>
    </section>
  );
}
