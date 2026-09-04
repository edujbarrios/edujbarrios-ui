const agents = [
  { name: "Planner", role: "Breaks the goal into parallel work", status: "Done", latency: "1.2s" },
  { name: "Researcher", role: "Collects supporting evidence", status: "Running", latency: "3.8s" },
  { name: "Verifier", role: "Challenges weak claims and gaps", status: "Queued", latency: "—" },
  { name: "Synthesizer", role: "Combines the final answer", status: "Waiting", latency: "—" },
];

const statusClass: Record<string, string> = {
  Done: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
  Running: "text-cyan-300 bg-cyan-400/10 border-cyan-400/20",
  Queued: "text-amber-300 bg-amber-400/10 border-amber-400/20",
  Waiting: "text-slate-400 bg-white/[0.04] border-white/10",
};

export function AgentSwarmOrchestrator() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#090d12] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-fuchsia-300">Agent swarm</p>
          <h3 className="mt-1 text-base font-bold text-white">Parallel orchestration</h3>
          <p className="mt-1 text-xs text-slate-400">One objective, four specialized agents, one shared state.</p>
        </div>
        <div className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 px-3 py-2 text-right">
          <p className="text-[0.6rem] uppercase tracking-wider text-fuchsia-200/70">Progress</p>
          <strong className="text-sm text-fuchsia-200">58%</strong>
        </div>
      </header>

      <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
        <div className="mb-2 flex items-center justify-between text-[0.65rem] text-slate-400">
          <span>Shared objective</span>
          <span>Budget · 12.4k tokens</span>
        </div>
        <p className="text-sm font-medium leading-5 text-slate-100">Prepare a launch brief with evidence, risks, and a recommendation.</p>
      </div>

      <ol className="mt-3 space-y-2">
        {agents.map((agent, index) => (
          <li key={agent.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl border border-white/[0.07] p-3">
            <span className="grid size-7 place-items-center rounded-full bg-white/[0.06] text-[0.65rem] font-bold text-slate-300">{index + 1}</span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-xs font-semibold text-white">{agent.name}</p>
                <span className={`rounded-full border px-1.5 py-0.5 text-[0.58rem] font-semibold ${statusClass[agent.status]}`}>{agent.status}</span>
              </div>
              <p className="mt-1 truncate text-[0.66rem] text-slate-500">{agent.role}</p>
            </div>
            <span className="text-[0.65rem] font-medium tabular-nums text-slate-400">{agent.latency}</span>
          </li>
        ))}
      </ol>

      <footer className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-white/[0.035] p-2.5"><p className="text-[0.6rem] text-slate-500">Consensus</p><strong className="mt-1 block text-xs text-emerald-300">High</strong></div>
        <div className="rounded-xl bg-white/[0.035] p-2.5"><p className="text-[0.6rem] text-slate-500">Conflicts</p><strong className="mt-1 block text-xs text-white">1 open</strong></div>
        <div className="rounded-xl bg-white/[0.035] p-2.5"><p className="text-[0.6rem] text-slate-500">Critical path</p><strong className="mt-1 block text-xs text-cyan-300">Researcher</strong></div>
      </footer>
    </section>
  );
}
