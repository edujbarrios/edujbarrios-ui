const racers = [{ model: "Fast draft", time: "380ms", status: "Accepted", score: 91 }, { model: "Deep verify", time: "1.2s", status: "Checking", score: 96 }, { model: "Fallback", time: "—", status: "Standby", score: 0 }];

export function SpeculativeModelRace() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Speculative race</p><h3 className="mt-1 text-base font-bold text-white">Parallel response routing</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">310ms saved</span></header>
    <ol className="mt-4 space-y-2">{racers.map((racer, index) => <li key={racer.model} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3"><span className={index === 0 ? "grid h-8 w-8 place-items-center rounded-full bg-[#40E0D0]/15 text-xs font-black text-[#d8fffb]" : "grid h-8 w-8 place-items-center rounded-full bg-white/[0.06] text-xs font-bold text-slate-500"}>{index + 1}</span><div><p className="text-xs font-semibold text-slate-200">{racer.model}</p><p className="mt-1 text-[0.65rem] text-slate-500">Quality {racer.score || "pending"}</p></div><div className="text-right"><p className="text-xs font-bold text-white">{racer.time}</p><p className="mt-1 text-[0.65rem] text-slate-500">{racer.status}</p></div></li>)}</ol>
    <p className="mt-3 text-[0.65rem] leading-5 text-slate-500">The first valid draft streams while a deeper model verifies the answer.</p>
  </section>;
}
