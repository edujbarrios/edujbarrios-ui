const segments = [
  { label: "System", tokens: "4.2k", width: "w-[18%]", color: "bg-[#40E0D0]" },
  { label: "Conversation", tokens: "12.8k", width: "w-[38%]", color: "bg-[#a78bfa]" },
  { label: "Sources", tokens: "8.4k", width: "w-[27%]", color: "bg-[#fb923c]" },
];

export function ContextWindowMeter() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Context window</p>
          <h3 className="mt-2 text-2xl font-black tabular-nums text-white">25.4k <span className="text-sm font-semibold text-slate-500">/ 32k</span></h3>
        </div>
        <span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-xs font-bold text-[#fdba74]">79% used</span>
      </div>
      <div className="mt-5 flex h-2.5 gap-1 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
        {segments.map((segment) => <span key={segment.label} className={`${segment.width} ${segment.color} rounded-full`} />)}
      </div>
      <dl className="mt-4 grid grid-cols-3 gap-2">
        {segments.map((segment) => (
          <div key={segment.label} className="rounded-lg border border-white/8 bg-white/[0.035] p-2.5">
            <dt className="text-[0.65rem] text-slate-500">{segment.label}</dt>
            <dd className="mt-1 text-xs font-bold tabular-nums text-slate-200">{segment.tokens}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 flex items-center gap-2 text-xs text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-[#40E0D0]" /> 6.6k tokens available for response</p>
    </section>
  );
}
