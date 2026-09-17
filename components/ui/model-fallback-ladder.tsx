const routes = [
  { model: "Primary reasoning", trigger: "Default", status: "Active", latency: "1.2s" },
  { model: "Fast general", trigger: "Latency > 2.5s", status: "Standby", latency: "420ms" },
  { model: "Safe compact", trigger: "Policy uncertainty", status: "Standby", latency: "510ms" },
  { model: "Human review", trigger: "All routes fail", status: "Escalation", latency: "Manual" },
];

export function ModelFallbackLadder() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0f14] p-5 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-300">Resilience routing</p>
          <h3 className="mt-1 text-base font-bold text-white">Model fallback ladder</h3>
          <p className="mt-1 text-sm text-slate-400">See exactly how an AI request degrades gracefully when quality, latency, or safety thresholds are crossed.</p>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200">Healthy</span>
      </header>

      <ol className="mt-5 space-y-2" aria-label="Model fallback order">
        {routes.map((route, index) => (
          <li key={route.model} className="relative rounded-xl border border-white/8 bg-white/[0.025] p-3">
            <div className="flex items-start gap-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-xs font-bold text-slate-200">{index + 1}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-100">{route.model}</p>
                  <span className="text-xs text-slate-500">{route.latency}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">Trigger: {route.trigger}</p>
                <p className="mt-2 text-[0.65rem] font-semibold uppercase tracking-wide text-cyan-200">{route.status}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-xl border border-violet-400/15 bg-violet-400/[0.06] p-3 text-xs leading-5 text-violet-100">
        Current policy keeps the primary model until either latency exceeds 2.5s or a safety signal requires rerouting.
      </div>
    </section>
  );
}
