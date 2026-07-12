const limits = [
  { label: "Requests", value: "342 / 500", width: "w-[68%]" },
  { label: "Tokens", value: "72k / 100k", width: "w-[72%]" },
];

export function RateLimitGauge() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Rate limits</p><h3 className="mt-2 text-lg font-bold text-white">Production API</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-xs font-bold text-[#d8fffb]">resets 42s</span></div>
      <dl className="mt-5 space-y-4">
        {limits.map((limit) => (
          <div key={limit.label}>
            <div className="flex items-center justify-between text-xs"><dt className="font-semibold text-slate-300">{limit.label}</dt><dd className="font-bold tabular-nums text-white">{limit.value}</dd></div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/[0.06]"><div className={`${limit.width} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]`} /></div>
          </div>
        ))}
      </dl>
      <div className="mt-5 flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.035] p-3"><span className="text-xs text-slate-400">Projected headroom</span><strong className="text-sm text-[#fdba74]">~158 requests</strong></div>
    </section>
  );
}
