const tools = [
  { name: "Search", success: "99.8%", latency: "410ms", state: "Healthy" },
  { name: "CRM", success: "98.7%", latency: "620ms", state: "Healthy" },
  { name: "Billing", success: "94.1%", latency: "1.4s", state: "Watch" },
] as const;

export function ToolHealthMatrix() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#fb923c]">Tool health</p>
          <h3 className="mt-1 text-base font-bold text-white">Runtime dependencies</h3>
        </div>
        <span className="text-xs font-semibold text-slate-500">Last 15m</span>
      </header>

      <div className="mt-4 overflow-hidden rounded-lg border border-white/8">
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 bg-white/[0.035] px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-wide text-slate-500">
          <span>Tool</span>
          <span>Success</span>
          <span>P95</span>
        </div>
        {tools.map((tool) => (
          <div key={tool.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-t border-white/8 px-3 py-3 text-xs">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className={`h-2 w-2 shrink-0 rounded-full ${tool.state === "Healthy" ? "bg-emerald-400" : "bg-[#fb923c]"}`} aria-hidden="true" />
                <span className="truncate font-semibold text-slate-200">{tool.name}</span>
              </div>
              <span className="mt-1 block text-[0.6rem] text-slate-500">{tool.state}</span>
            </div>
            <span className="font-mono text-slate-300">{tool.success}</span>
            <span className="font-mono text-slate-400">{tool.latency}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
