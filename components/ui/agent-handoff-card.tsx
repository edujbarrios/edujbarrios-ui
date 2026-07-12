const context = ["Customer intent", "Billing history", "Draft response"];

export function AgentHandoffCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent handoff</p>
        <span className="rounded-full bg-[#a78bfa]/12 px-2.5 py-1 text-xs font-semibold text-[#c4b5fd]">ready</span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-xs font-black text-slate-200">CS</span>
        <span className="text-lg text-slate-600" aria-hidden="true">→</span>
        <span className="grid h-11 w-11 place-items-center rounded-full border border-[#40E0D0]/24 bg-[#40E0D0]/10 text-xs font-black text-[#d8fffb]">BL</span>
        <div className="min-w-0"><p className="truncate text-sm font-bold text-white">Billing specialist</p><p className="mt-1 text-xs text-slate-500">Confidence 96%</p></div>
      </div>
      <div className="mt-4 rounded-lg border border-white/8 bg-white/[0.035] p-3">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Context attached</p>
        <ul className="mt-2 flex flex-wrap gap-2">{context.map((item) => <li key={item} className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.65rem] font-semibold text-slate-300">{item}</li>)}</ul>
      </div>
      <button type="button" className="mt-4 w-full rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14] transition hover:bg-[#72eadf]">Transfer conversation</button>
    </section>
  );
}
