const tools = [
  { name: "Web search", calls: 8, cost: "$0.18", width: "w-[72%]" },
  { name: "Code runner", calls: 3, cost: "$0.07", width: "w-[28%]" },
  { name: "File retrieval", calls: 14, cost: "$0.04", width: "w-[16%]" },
];

export function ToolCostBreakdown() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Tool spend</p><h3 className="mt-1 text-base font-bold text-white">Research run</h3></div>
        <div className="text-right"><p className="text-lg font-black text-white">$0.29</p><p className="text-[0.65rem] text-slate-500">25 calls</p></div>
      </header>
      <dl className="mt-4 space-y-3">
        {tools.map((tool) => (
          <div key={tool.name} className="rounded-lg border border-white/9 bg-white/[0.025] p-3">
            <div className="flex items-center justify-between"><dt className="text-xs font-semibold text-slate-200">{tool.name}</dt><dd className="text-xs font-black text-white">{tool.cost}</dd></div>
            <div className="mt-2 h-1.5 rounded-full bg-white/[0.06]"><span className={`block h-full rounded-full bg-gradient-to-r from-[#a78bfa] to-[#40E0D0] ${tool.width}`} /></div>
            <p className="mt-2 text-[0.65rem] text-slate-500">{tool.calls} calls</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
