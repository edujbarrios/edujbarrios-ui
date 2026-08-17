const usage = [42, 48, 46, 58, 64, 71, 78];

export function QuotaForecastCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Quota forecast</p><h3 className="mt-1 text-base font-bold text-white">Monthly requests</h3></div><span className="rounded-full bg-[#fb923c]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#fed7aa]">8 days left</span></header>
      <div className="mt-5 flex h-24 items-end gap-2" aria-label="Seven day quota usage trend">
        {usage.map((value, index) => <div key={index} className="flex flex-1 flex-col items-center gap-2"><span className="w-full rounded-t bg-gradient-to-t from-[#a78bfa] to-[#40E0D0]" style={{ height: `${value}%` }} /><span className="text-[0.6rem] text-slate-600">{index + 1}</span></div>)}
      </div>
      <div className="mt-4 flex items-end justify-between border-t border-white/8 pt-3"><div><p className="text-[0.65rem] text-slate-500">Projected usage</p><p className="mt-1 text-lg font-black text-white">824k</p></div><div className="text-right"><p className="text-[0.65rem] text-slate-500">Limit</p><p className="mt-1 text-sm font-bold text-slate-300">1M</p></div></div>
    </section>
  );
}
