const events = [
  { time: "09:42", label: "Citation rate dropped", severity: "High" },
  { time: "09:38", label: "Retriever index changed", severity: "Change" },
  { time: "09:31", label: "Eval threshold breached", severity: "Signal" },
];

export function AiIncidentTriageBoard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Incident INC-204</p><h3 className="mt-1 text-base font-bold text-white">Answer quality regression</h3></div><span className="rounded-full bg-rose-400/10 px-2 py-1 text-[0.65rem] font-semibold text-rose-300">SEV-2</span></header>
      <div className="mt-4 grid grid-cols-2 gap-2"><div className="rounded-lg border border-white/[0.07] p-3"><p className="text-[0.62rem] text-slate-500">Affected runs</p><strong className="mt-1 block text-lg text-white">18.4%</strong></div><div className="rounded-lg border border-white/[0.07] p-3"><p className="text-[0.62rem] text-slate-500">Owner</p><strong className="mt-1 block text-sm text-white">Quality team</strong></div></div>
      <ol className="mt-3 space-y-2">{events.map((event) => <li key={event.time} className="flex gap-3 rounded-lg bg-white/[0.025] p-2.5"><span className="text-[0.65rem] font-semibold text-slate-500">{event.time}</span><div><p className="text-xs text-slate-200">{event.label}</p><p className="mt-0.5 text-[0.62rem] text-slate-500">{event.severity}</p></div></li>)}</ol>
      <button type="button" className="mt-3 w-full rounded-lg bg-amber-300 py-2 text-xs font-bold text-slate-950">Open response room</button>
    </section>
  );
}
