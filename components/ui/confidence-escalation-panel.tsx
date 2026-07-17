const signals = [{ label: "Source agreement", value: 84 }, { label: "Policy clarity", value: 62 }, { label: "Answer stability", value: 71 }];

export function ConfidenceEscalationPanel() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fb923c]">Decision boundary</p><h3 className="mt-1 text-base font-bold text-white">Review before answering</h3></div><span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#fdba74]">72% confidence</span></header>
    <dl className="mt-4 space-y-3">{signals.map((signal) => <div key={signal.label}><div className="flex justify-between text-[0.65rem]"><dt className="text-slate-400">{signal.label}</dt><dd className="font-bold text-white">{signal.value}%</dd></div><div className="mt-1.5 h-1.5 rounded-full bg-white/[0.06]" aria-hidden="true"><span className="block h-full rounded-full bg-gradient-to-r from-[#fb923c] to-[#a78bfa]" style={{ width: `${signal.value}%` }} /></div></div>)}</dl>
    <div className="mt-4 rounded-lg border border-[#fb923c]/20 bg-[#fb923c]/[0.06] p-3"><p className="text-xs font-semibold text-[#fdba74]">Escalation triggered</p><p className="mt-1 text-[0.65rem] leading-5 text-slate-400">Policy clarity is below the 70% automatic-answer threshold.</p></div>
    <div className="mt-3 grid grid-cols-2 gap-2"><button type="button" className="rounded-full border border-white/12 px-3 py-2.5 text-xs font-bold text-slate-200">Request context</button><button type="button" className="rounded-full bg-[#40E0D0] px-3 py-2.5 text-xs font-bold text-[#0b0f14]">Send to review</button></div>
  </section>;
}
