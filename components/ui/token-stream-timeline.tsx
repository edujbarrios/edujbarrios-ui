const phases = [{ label: "First token", value: "240ms", width: "w-[20%]" }, { label: "Reasoning", value: "680ms", width: "w-[38%]" }, { label: "Streaming", value: "1.4s", width: "w-[72%]" }];

export function TokenStreamTimeline() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Token stream</p><h3 className="mt-1 text-base font-bold text-white">Response delivery trace</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">48 tok/s</span></header>
    <ol className="mt-5 space-y-3">{phases.map((phase) => <li key={phase.label} className="grid grid-cols-[5rem_1fr_auto] items-center gap-3"><span className="text-xs text-slate-400">{phase.label}</span><span className="h-2 rounded-full bg-white/[0.06]" aria-hidden="true"><span className={`block h-full ${phase.width} rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]`} /></span><span className="text-xs font-bold tabular-nums text-white">{phase.value}</span></li>)}</ol>
    <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-3 text-[0.65rem]"><span className="text-slate-500">612 output tokens</span><span className="font-semibold text-[#d8fffb]">Complete · 2.3s</span></div>
  </section>;
}
