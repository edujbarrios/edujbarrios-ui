const routes = [
  { condition: "Simple lookup", model: "Fast", cost: "$0.002" },
  { condition: "Multi-step reasoning", model: "Deep", cost: "$0.041" },
  { condition: "Sensitive action", model: "Deep + review", cost: "$0.058" },
];

export function ModelRouteSimulator() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Routing sandbox</p><h3 className="mt-1 text-base font-bold text-white">Model route simulator</h3></div><span className="text-[0.65rem] text-slate-500">1,000 runs</span></header>
      <ul className="mt-4 space-y-2">{routes.map((route) => <li key={route.condition} className="grid grid-cols-[1fr_auto] gap-3 rounded-lg border border-white/[0.07] p-3"><div><p className="text-xs font-semibold text-slate-200">{route.condition}</p><p className="mt-1 text-[0.65rem] text-cyan-300">→ {route.model}</p></div><span className="text-xs font-semibold text-slate-400">{route.cost}</span></li>)}</ul>
      <div className="mt-3 grid grid-cols-2 gap-2"><div className="rounded-lg bg-white/[0.035] p-3"><p className="text-[0.62rem] text-slate-500">Projected cost</p><strong className="mt-1 block text-sm text-white">$18.70</strong></div><div className="rounded-lg bg-white/[0.035] p-3"><p className="text-[0.62rem] text-slate-500">Quality target</p><strong className="mt-1 block text-sm text-emerald-300">92.4%</strong></div></div>
    </section>
  );
}
