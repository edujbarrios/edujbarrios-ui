const changes = [
  { field: "Goal", before: "Prepare launch plan", after: "Prepare launch plan + rollback", status: "Changed" },
  { field: "Owner", before: "Planner", after: "Planner", status: "Unchanged" },
  { field: "Risk level", before: "Medium", after: "High", status: "Changed" },
  { field: "Open blockers", before: "2", after: "1", status: "Improved" },
];

const statusClass: Record<string, string> = {
  Changed: "text-amber-300",
  Unchanged: "text-slate-400",
  Improved: "text-emerald-300",
};

export function AgentStateDiffViewer() {
  return (
    <section className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#080c11] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300">State diff</p>
          <h3 className="mt-1 text-base font-bold text-white">Agent snapshot comparison</h3>
          <p className="mt-1 text-xs text-slate-400">See exactly what changed after a tool run, handoff, or reasoning step.</p>
        </div>
        <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-[0.62rem] font-semibold text-violet-200">v12 → v13</span>
      </header>

      <div className="mt-4 grid grid-cols-[0.8fr_1fr_1fr_auto] gap-2 px-2 text-[0.6rem] font-semibold uppercase tracking-wider text-slate-600">
        <span>Field</span><span>Before</span><span>After</span><span>Status</span>
      </div>
      <dl className="mt-2 space-y-2">
        {changes.map((change) => (
          <div key={change.field} className="grid grid-cols-[0.8fr_1fr_1fr_auto] items-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
            <dt className="text-[0.68rem] font-semibold text-white">{change.field}</dt>
            <dd className="truncate text-[0.66rem] text-slate-500">{change.before}</dd>
            <dd className="truncate text-[0.66rem] text-slate-300">{change.after}</dd>
            <dd className={`text-[0.6rem] font-semibold ${statusClass[change.status]}`}>{change.status}</dd>
          </div>
        ))}
      </dl>

      <footer className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
        <div><p className="text-[0.6rem] text-slate-500">Mutation summary</p><strong className="text-xs text-white">2 changed · 1 improved · 1 unchanged</strong></div>
        <span className="text-[0.62rem] font-semibold text-emerald-300">1 blocker resolved</span>
      </footer>
    </section>
  );
}
