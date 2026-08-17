const locales = [
  { name: "English", code: "en-US", coverage: 100 },
  { name: "Spanish", code: "es-ES", coverage: 92 },
  { name: "Japanese", code: "ja-JP", coverage: 68 },
];

export function LocaleCoverageCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Localization</p><h3 className="mt-1 text-base font-bold text-white">Locale coverage</h3></div><span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[0.65rem] font-bold text-slate-300">3 locales</span></header>
      <dl className="mt-4 space-y-3">
        {locales.map((locale) => <div key={locale.code} className="rounded-lg border border-white/9 bg-white/[0.025] p-3">
          <div className="flex items-center justify-between"><dt><span className="text-xs font-semibold text-slate-200">{locale.name}</span><span className="ml-2 text-[0.65rem] text-slate-500">{locale.code}</span></dt><dd className="text-xs font-black text-white">{locale.coverage}%</dd></div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" role="progressbar" aria-label={`${locale.name} coverage`} aria-valuenow={locale.coverage} aria-valuemin={0} aria-valuemax={100}><span className="block h-full rounded-full bg-gradient-to-r from-[#a78bfa] to-[#40E0D0]" style={{ width: `${locale.coverage}%` }} /></div>
        </div>)}
      </dl>
    </section>
  );
}
