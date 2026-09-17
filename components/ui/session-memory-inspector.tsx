const memories = [
  { label: "Preferred locale", value: "Spanish", source: "Conversation", scope: "Session" },
  { label: "Deployment target", value: "EU region", source: "Project context", scope: "Workspace" },
  { label: "Answer style", value: "Concise + technical", source: "User preference", scope: "Session" },
];

export function SessionMemoryInspector() {
  return (
    <section className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b0f14] p-5 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-violet-300">Context memory</p>
          <h3 className="mt-1 text-base font-bold text-white">Session memory inspector</h3>
          <p className="mt-1 text-sm text-slate-400">Review what an AI assistant is carrying forward, where it came from, and how broadly it applies.</p>
        </div>
        <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-2.5 py-1 text-xs font-medium text-violet-200">3 active</span>
      </header>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3"><p className="text-xs text-slate-500">Session</p><p className="mt-1 text-lg font-bold text-white">2</p></div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3"><p className="text-xs text-slate-500">Workspace</p><p className="mt-1 text-lg font-bold text-white">1</p></div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3"><p className="text-xs text-slate-500">Expired</p><p className="mt-1 text-lg font-bold text-white">0</p></div>
      </div>

      <ul className="mt-5 space-y-2" aria-label="Active session memories">
        {memories.map((memory) => (
          <li key={memory.label} className="rounded-xl border border-white/8 bg-white/[0.025] p-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-100">{memory.label}</p>
                <p className="mt-1 text-sm text-slate-300">{memory.value}</p>
              </div>
              <span className="rounded-full border border-white/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-300">{memory.scope}</span>
            </div>
            <p className="mt-2 text-xs text-slate-500">Source: {memory.source}</p>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] p-3 text-xs leading-5 text-cyan-100">
        Memory health: all active entries have explicit provenance and scope. No stale values detected.
      </div>
    </section>
  );
}
