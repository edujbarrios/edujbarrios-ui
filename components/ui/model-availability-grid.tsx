const models = [
  { name: "Reasoning", region: "US East", latency: "620ms", status: "Available" },
  { name: "Realtime", region: "Europe", latency: "94ms", status: "Available" },
  { name: "Vision", region: "Asia Pacific", latency: "—", status: "Degraded" },
];

export function ModelAvailabilityGrid() {
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Model availability</p><h3 className="mt-1 text-base font-bold text-white">Regional endpoints</h3></header>
      <ul className="mt-4 grid gap-2 sm:grid-cols-3">
        {models.map((model) => (
          <li key={model.name} className="rounded-lg border border-white/9 bg-white/[0.025] p-3">
            <div className="flex items-center justify-between gap-2"><p className="text-xs font-bold text-slate-200">{model.name}</p><span className={`h-2 w-2 rounded-full ${model.status === "Available" ? "bg-[#40E0D0]" : "bg-[#fb923c]"}`} aria-hidden="true" /></div>
            <p className="mt-2 text-[0.65rem] text-slate-500">{model.region}</p>
            <p className="mt-3 text-sm font-black text-white">{model.latency}</p>
            <p className="mt-1 text-[0.65rem] font-semibold text-slate-400">{model.status}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
