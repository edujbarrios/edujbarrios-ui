const signals = ["Hidden instruction in retrieved HTML", "Request to reveal system context"];

export function PromptInjectionQuarantine() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-rose-300/20 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-300">Threat contained</p><h3 className="mt-1 text-base font-bold text-white">Prompt injection</h3></div><span className="rounded-full bg-rose-400/10 px-2 py-1 text-[0.65rem] font-semibold text-rose-300">Quarantined</span></header>
      <div className="mt-4 rounded-lg border border-white/[0.07] bg-white/[0.025] p-3"><p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-500">Untrusted source</p><p className="mt-1 text-xs text-slate-200">vendor-help.example / setup.html</p></div>
      <ul className="mt-3 space-y-2">{signals.map((signal) => <li key={signal} className="flex gap-2 text-xs leading-relaxed text-slate-400"><span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-300" />{signal}</li>)}</ul>
      <div className="mt-4 flex gap-2"><button type="button" className="flex-1 rounded-lg border border-white/10 py-2 text-xs font-semibold text-slate-300">Inspect payload</button><button type="button" className="flex-1 rounded-lg bg-white py-2 text-xs font-bold text-slate-950">Continue safely</button></div>
    </section>
  );
}
