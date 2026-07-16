const limits = [{ label: "Wall time", used: "08:42", limit: "15 min", width: "w-[58%]" }, { label: "Tool calls", used: "12", limit: "25", width: "w-[48%]" }, { label: "Estimated cost", used: "$0.84", limit: "$2.00", width: "w-[42%]" }];

export function AutonomousRunBudget() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Run budget</p><h3 className="mt-1 text-base font-bold text-white">Research workflow</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Within limits</span></header>
    <dl className="mt-4 space-y-3">{limits.map((item) => <div key={item.label} className="rounded-lg border border-white/9 bg-white/[0.025] p-3"><div className="flex items-center justify-between"><dt className="text-xs font-semibold text-slate-300">{item.label}</dt><dd className="text-[0.65rem] text-slate-500"><strong className="text-slate-200">{item.used}</strong> / {item.limit}</dd></div><div className="mt-2 h-1.5 rounded-full bg-white/[0.06]" aria-hidden="true"><span className={`block h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa] ${item.width}`} /></div></div>)}</dl>
    <div className="mt-3 grid grid-cols-2 gap-2"><button type="button" className="rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200">Pause run</button><button type="button" className="rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14]">Adjust limits</button></div>
  </section>;
}
