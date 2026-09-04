const agents = [
  { name: "Planner", waitsFor: "Reviewer", held: "Execution plan", age: "18s" },
  { name: "Reviewer", waitsFor: "Researcher", held: "Approval gate", age: "16s" },
  { name: "Researcher", waitsFor: "Planner", held: "Evidence bundle", age: "14s" },
];

export function AgentDeadlockDetector() {
  return (
    <section className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#090d12] p-5 shadow-2xl">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rose-300">Agent deadlock detector</p>
          <h3 className="mt-1 text-lg font-bold text-white">Circular dependency detected</h3>
          <p className="mt-1 text-sm text-slate-400">Identify blocked agent chains before they consume more latency and tool budget.</p>
        </div>
        <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1 text-xs font-semibold text-rose-200">Critical cycle</span>
      </header>

      <ol className="mt-5 space-y-3">
        {agents.map((agent, index) => (
          <li key={agent.name} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">{index + 1}. {agent.name}</p>
                <p className="mt-1 text-xs text-slate-400">Waiting for <span className="font-semibold text-slate-200">{agent.waitsFor}</span></p>
              </div>
              <span className="text-xs tabular-nums text-rose-200">Blocked {agent.age}</span>
            </div>
            <div className="mt-3 flex items-center justify-between rounded-lg border border-white/[0.06] bg-black/20 px-3 py-2 text-xs">
              <span className="text-slate-500">Holding</span>
              <strong className="text-slate-200">{agent.held}</strong>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/[0.07] p-3">
          <p className="text-[0.62rem] uppercase tracking-wider text-slate-500">Cycle</p>
          <p className="mt-1 text-xs font-semibold text-white">Planner → Reviewer → Researcher → Planner</p>
        </div>
        <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.05] p-3">
          <p className="text-[0.62rem] uppercase tracking-wider text-emerald-200/70">Suggested escape</p>
          <p className="mt-1 text-xs font-semibold text-emerald-100">Release Reviewer gate and resume Planner</p>
        </div>
      </div>
    </section>
  );
}
