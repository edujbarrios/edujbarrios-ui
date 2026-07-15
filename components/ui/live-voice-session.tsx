const levels = [35, 58, 42, 76, 92, 64, 48, 82, 55, 31, 68, 44];

export function LiveVoiceSession() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Live voice</p><h3 className="mt-1 text-base font-bold text-white">Product discovery call</h3></div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#fdba74]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#fb923c]" />02:18</span>
      </header>
      <div className="mt-5 flex h-16 items-center justify-center gap-1" role="img" aria-label="Live audio activity">
        {levels.map((level, index) => <span key={index} className="w-1.5 rounded-full bg-gradient-to-t from-[#40E0D0] to-[#a78bfa]" style={{ height: `${level}%` }} />)}
      </div>
      <div className="mt-4 rounded-lg border border-white/9 bg-white/[0.03] p-3" aria-live="polite">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Live transcript</p>
        <p className="mt-2 text-xs leading-5 text-slate-300">“I need the dashboard to surface risks before the weekly review…”</p>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <button type="button" className="rounded-full border border-white/12 px-3 py-2 text-xs font-semibold text-slate-300">Mute</button>
        <button type="button" className="rounded-full border border-white/12 px-3 py-2 text-xs font-semibold text-slate-300">Notes</button>
        <button type="button" className="rounded-full bg-[#fb923c] px-3 py-2 text-xs font-bold text-[#0b0f14]">End</button>
      </div>
    </section>
  );
}
