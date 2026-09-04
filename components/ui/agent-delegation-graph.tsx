const nodes = [
  { name: "Coordinator", task: "Own final recommendation", depth: 0, state: "Active", eta: "—" },
  { name: "Research", task: "Collect market signals", depth: 1, state: "Done", eta: "1.6s" },
  { name: "Risk", task: "Challenge assumptions", depth: 1, state: "Active", eta: "2.4s" },
  { name: "Finance", task: "Validate unit economics", depth: 2, state: "Queued", eta: "4.1s" },
  { name: "Writer", task: "Draft executive brief", depth: 1, state: "Waiting", eta: "—" },
];

const stateClass: Record<string, string> = {
  Active: "border-cyan-400/20 bg-cyan-400/10 text-cyan-200",
  Done: "border-emerald-400/20 bg-emerald-400/10 text-emerald-200",
  Queued: "border-amber-400/20 bg-amber-400/10 text-amber-200",
  Waiting: "border-white/10 bg-white/[0.04] text-slate-400",
};

export function AgentDelegationGraph() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#090d12] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-300">Delegation graph</p>
          <h3 className="mt-1 text-base font-bold text-white">Agent ownership tree</h3>
          <p className="mt-1 text-xs text-slate-400">See who delegated what, to whom, and which dependency is blocking completion.</p>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[0.62rem] text-slate-300">5 agents</span>
      </header>

      <ol className="mt-4 space-y-2">
        {nodes.map((node) => (
          <li
            key={node.name}
            className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3"
            style={{ marginLeft: `${node.depth * 18}px` }}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[0.62rem] text-slate-600">{node.depth === 0 ? "ROOT" : "↳"}</span>
                <p className="truncate text-xs font-semibold text-white">{node.name}</p>
                <span className={`rounded-full border px-1.5 py-0.5 text-[0.56rem] font-semibold ${stateClass[node.state]}`}>{node.state}</span>
              </div>
              <p className="mt-1 truncate text-[0.66rem] text-slate-500">{node.task}</p>
            </div>
            <div className="text-right">
              <p className="text-[0.58rem] uppercase tracking-wider text-slate-600">ETA</p>
              <strong className="text-[0.68rem] font-semibold tabular-nums text-slate-300">{node.eta}</strong>
            </div>
          </li>
        ))}
      </ol>

      <footer className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-white/[0.035] p-2.5"><p className="text-[0.6rem] text-slate-500">Max depth</p><strong className="mt-1 block text-xs text-white">2 hops</strong></div>
        <div className="rounded-xl bg-white/[0.035] p-2.5"><p className="text-[0.6rem] text-slate-500">Blocked by</p><strong className="mt-1 block text-xs text-amber-300">Finance</strong></div>
        <div className="rounded-xl bg-white/[0.035] p-2.5"><p className="text-[0.6rem] text-slate-500">Ownership</p><strong className="mt-1 block text-xs text-emerald-300">Complete</strong></div>
      </footer>
    </section>
  );
}
