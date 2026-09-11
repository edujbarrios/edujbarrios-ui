const memoryBlocks = [
  { label: "System instructions", tokens: 3200, action: "Keep" },
  { label: "Conversation history", tokens: 11800, action: "Summarize" },
  { label: "Retrieved evidence", tokens: 7600, action: "Keep" },
  { label: "Working memory", tokens: 5400, action: "Trim" },
];

const capacity = 32000;

export function AgentMemoryPressure() {
  const used = memoryBlocks.reduce((sum, block) => sum + block.tokens, 0);
  const pressure = Math.round((used / capacity) * 100);

  return (
    <section className="w-full max-w-2xl rounded-2xl border border-white/10 bg-slate-950 p-6 text-slate-100 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Agent memory</p>
          <h2 className="mt-2 text-xl font-bold">Memory Pressure</h2>
        </div>
        <div className="text-right">
          <p className="text-3xl font-black tabular-nums">{pressure}%</p>
          <p className="text-xs text-slate-500">{used.toLocaleString()} / {capacity.toLocaleString()} tokens</p>
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10" role="progressbar" aria-label="Memory pressure" aria-valuemin={0} aria-valuemax={capacity} aria-valuenow={used}>
        <div className="h-full rounded-full bg-cyan-300" style={{ width: `${pressure}%` }} />
      </div>

      <ul className="mt-6 space-y-3">
        {memoryBlocks.map((block) => (
          <li key={block.label} className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.035] p-4">
            <div>
              <p className="font-semibold text-slate-200">{block.label}</p>
              <p className="mt-1 text-xs text-slate-500">{block.tokens.toLocaleString()} tokens</p>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-slate-300">{block.action}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-sm leading-6 text-slate-400">Recommendation: summarize conversation history before the next retrieval step to preserve response headroom.</p>
    </section>
  );
}
