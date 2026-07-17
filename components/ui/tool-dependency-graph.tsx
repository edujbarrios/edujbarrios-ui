const tools = [{ name: "Search docs", state: "Complete", step: "01" }, { name: "Extract facts", state: "Running", step: "02" }, { name: "Draft answer", state: "Waiting", step: "03" }];

export function ToolDependencyGraph() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Execution graph</p><h3 className="mt-1 text-base font-bold text-white">Research workflow</h3></div><span className="text-[0.65rem] font-semibold text-slate-500">2 dependencies</span></header>
    <ol className="mt-5 flex items-stretch gap-2">{tools.map((tool, index) => <li key={tool.name} className="flex min-w-0 flex-1 items-center gap-2"><div className={tool.state === "Running" ? "min-w-0 flex-1 rounded-lg border border-[#40E0D0]/30 bg-[#40E0D0]/[0.07] p-3" : "min-w-0 flex-1 rounded-lg border border-white/9 bg-white/[0.025] p-3"}><span className="text-[0.6rem] font-bold text-slate-500">{tool.step}</span><p className="mt-2 text-xs font-semibold text-slate-200">{tool.name}</p><p className="mt-1 text-[0.65rem] text-slate-500">{tool.state}</p></div>{index < tools.length - 1 && <span className="shrink-0 text-[#40E0D0]" aria-hidden="true">→</span>}</li>)}</ol>
    <div className="mt-4 rounded-lg border border-white/9 bg-white/[0.025] p-3"><div className="flex justify-between text-[0.65rem]"><span className="text-slate-500">Critical path</span><span className="font-semibold text-white">1.8s estimated</span></div></div>
  </section>;
}
