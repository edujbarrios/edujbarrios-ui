const route = [
  { model: "Primary · v3", condition: "Default", state: "Ready", tone: "text-[#d8fffb]" },
  { model: "Fallback · v2-mini", condition: "Timeout > 2s", state: "Standby", tone: "text-[#c4b5fd]" },
  { model: "Cached response", condition: "Providers unavailable", state: "Last resort", tone: "text-[#fdba74]" },
];

export function ModelFallbackRoute() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Resilience route</p><h3 className="mt-1 text-base font-bold text-white">Response fallback chain</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Healthy</span></header>
      <ol className="mt-4 space-y-2">
        {route.map((step, index) => (
          <li key={step.model} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.03] p-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/[0.06] text-[0.65rem] font-bold text-slate-400">{index + 1}</span>
            <div><p className="text-xs font-semibold text-slate-100">{step.model}</p><p className="mt-1 text-[0.65rem] text-slate-500">{step.condition}</p></div>
            <span className={`text-[0.65rem] font-semibold ${step.tone}`}>{step.state}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[0.65rem] leading-5 text-slate-500">Requests preserve the same output schema across every route.</p>
    </section>
  );
}
