const events = [{ time: "00:00", label: "Prompt submitted" }, { time: "00:01", label: "Sources retrieved" }, { time: "00:02", label: "Tool called" }, { time: "00:04", label: "Response streamed" }];

export function AiSessionReplay() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Session replay</p><h3 className="mt-1 text-base font-bold text-white">Support answer · Run 1842</h3></div><span className="text-[0.65rem] font-semibold text-slate-500">4.8s total</span></header>
    <ol className="mt-4 grid grid-cols-4 gap-2">{events.map((event, index) => <li key={event.label} className={index === 2 ? "rounded-lg border border-[#40E0D0]/30 bg-[#40E0D0]/[0.07] p-2.5" : "rounded-lg border border-white/9 bg-white/[0.025] p-2.5"}><time className="text-[0.6rem] font-bold text-slate-500">{event.time}</time><p className="mt-2 text-[0.65rem] leading-4 text-slate-200">{event.label}</p></li>)}</ol>
    <div className="mt-4"><div className="h-1.5 rounded-full bg-white/[0.06]" role="progressbar" aria-label="Replay position" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}><span className="block h-full w-[55%] rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]" /></div><div className="mt-3 flex items-center justify-between"><button type="button" className="text-xs font-bold text-slate-300">Previous</button><button type="button" className="grid h-9 w-9 place-items-center rounded-full bg-[#40E0D0] text-sm text-[#0b0f14]" aria-label="Play replay">▶</button><button type="button" className="text-xs font-bold text-slate-300">Next</button></div></div>
  </section>;
}
