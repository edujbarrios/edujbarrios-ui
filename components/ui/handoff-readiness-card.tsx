const checks = [
  { label: "Decision summary", detail: "Generated", ready: true },
  { label: "Supporting evidence", detail: "4 sources attached", ready: true },
  { label: "Open risks", detail: "1 needs review", ready: false },
  { label: "Next owner", detail: "Support lead", ready: true },
];

export function HandoffReadinessCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Human handoff</p><h3 className="mt-1 text-base font-bold text-white">Ready to escalate?</h3></div><div className="text-right"><strong className="text-xl text-white">75%</strong><p className="text-[0.62rem] text-slate-500">complete</p></div></header>
      <ul className="mt-4 space-y-2">
        {checks.map((check) => <li key={check.label} className="flex items-center gap-3 rounded-lg border border-white/[0.07] p-3"><span className={check.ready ? "grid h-5 w-5 place-items-center rounded-full bg-emerald-400/15 text-xs text-emerald-300" : "grid h-5 w-5 place-items-center rounded-full bg-amber-400/15 text-xs text-amber-300"} aria-hidden="true">{check.ready ? "✓" : "!"}</span><div><p className="text-xs font-semibold text-slate-200">{check.label}</p><p className="mt-0.5 text-[0.65rem] text-slate-500">{check.detail}</p></div></li>)}
      </ul>
      <div className="mt-3 flex gap-2"><button type="button" className="flex-1 rounded-lg border border-white/10 py-2 text-xs font-semibold text-slate-300">Resolve risk</button><button type="button" className="flex-1 rounded-lg bg-white py-2 text-xs font-bold text-slate-950">Create handoff</button></div>
    </section>
  );
}
