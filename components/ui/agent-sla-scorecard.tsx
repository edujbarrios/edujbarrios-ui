const metrics = [
  { label: "Task success", value: "98.4%", target: "> 97%" },
  { label: "P95 latency", value: "1.8s", target: "< 2.5s" },
  { label: "Escalations", value: "3.2%", target: "< 5%" },
];

export function AgentSlaScorecard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-500">Agent SLA</p>
          <h3 className="mt-1 text-base font-bold text-white">Production quality</h3>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-200">Healthy</span>
      </header>

      <dl className="mt-4 grid grid-cols-3 gap-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="min-w-0 rounded-lg border border-white/8 bg-white/[0.04] p-3">
            <dt className="truncate text-[0.62rem] text-slate-500">{metric.label}</dt>
            <dd className="mt-2 text-lg font-black text-white">{metric.value}</dd>
            <dd className="mt-1 text-[0.6rem] text-slate-500">Target {metric.target}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-4 rounded-lg border border-white/8 bg-white/[0.03] p-3">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-slate-300">Monthly breach budget</span>
          <span className="text-slate-500">2 / 20</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/8" aria-hidden="true">
          <div className="h-full w-[10%] rounded-full bg-[var(--preview-accent,#40E0D0)]" />
        </div>
      </div>
    </section>
  );
}
