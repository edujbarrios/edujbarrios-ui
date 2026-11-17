const segments = [
  { label: "Internal", audience: "Team", rollout: 100 },
  { label: "Early access", audience: "2.4k users", rollout: 65 },
  { label: "General", audience: "18k users", rollout: 20 },
];

export function FeatureRolloutMeter() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Feature rollout</p><h3 className="mt-1 text-base font-bold text-white">Smart summaries</h3></div>
        <span className="rounded-full bg-[#a78bfa]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#ddd6fe]">Gradual</span>
      </header>
      <dl className="mt-4 space-y-3">
        {segments.map((segment) => (
          <div key={segment.label} className="rounded-lg border border-white/9 bg-white/[0.025] p-3">
            <div className="flex items-center justify-between"><dt><span className="text-xs font-semibold text-slate-200">{segment.label}</span><span className="ml-2 text-[0.65rem] text-slate-500">{segment.audience}</span></dt><dd className="text-xs font-black text-white">{segment.rollout}%</dd></div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" role="progressbar" aria-label={`${segment.label} rollout`} aria-valuenow={segment.rollout} aria-valuemin={0} aria-valuemax={100}><span className="block h-full rounded-full bg-gradient-to-r from-[#a78bfa] to-[#40E0D0]" style={{ width: `${segment.rollout}%` }} /></div>
          </div>
        ))}
      </dl>
    </section>
  );
}
