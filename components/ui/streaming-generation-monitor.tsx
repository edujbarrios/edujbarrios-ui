const stages = [
  { name: "Prompt assembled", value: "42 ms", state: "Done" },
  { name: "First token", value: "318 ms", state: "Done" },
  { name: "Generation", value: "62 tok/s", state: "Live" },
  { name: "Safety check", value: "Queued", state: "Waiting" },
];

export function StreamingGenerationMonitor() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0f14] p-5 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-cyan-300">Live generation</p>
          <h3 className="mt-1 text-base font-bold text-white">Streaming response monitor</h3>
          <p className="mt-1 text-sm text-slate-400">Track response latency, token flow, and post-generation checks in one place.</p>
        </div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-200">Streaming</span>
      </header>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3"><p className="text-xs text-slate-500">Output</p><p className="mt-1 text-lg font-bold text-white">684</p><p className="text-[0.65rem] text-slate-500">tokens</p></div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3"><p className="text-xs text-slate-500">Latency</p><p className="mt-1 text-lg font-bold text-white">1.8s</p><p className="text-[0.65rem] text-slate-500">elapsed</p></div>
        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-3"><p className="text-xs text-slate-500">Cost</p><p className="mt-1 text-lg font-bold text-white">$0.014</p><p className="text-[0.65rem] text-slate-500">estimated</p></div>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/[0.06]" aria-label="Generation progress: 72 percent">
        <div className="h-full w-[72%] rounded-full bg-cyan-300/80" />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-500"><span>684 / 950 tokens</span><span>72%</span></div>

      <ul className="mt-5 space-y-2" aria-label="Generation stages">
        {stages.map((stage) => (
          <li key={stage.name} className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.025] px-3 py-2.5">
            <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-400" aria-hidden="true" /><span className="text-sm text-slate-200">{stage.name}</span></div>
            <div className="text-right"><p className="text-xs font-medium text-slate-200">{stage.value}</p><p className="text-[0.65rem] text-slate-500">{stage.state}</p></div>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-xl border border-violet-400/15 bg-violet-400/[0.06] p-3 text-xs leading-5 text-violet-100">Current signal: generation speed is healthy and first-token latency is below the 400 ms target.</div>
    </section>
  );
}
