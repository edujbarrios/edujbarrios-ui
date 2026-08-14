const allocations = [
  { label: "System", tokens: "4.2k", width: "18%", color: "bg-violet-400" },
  { label: "History", tokens: "9.8k", width: "41%", color: "bg-cyan-400" },
  { label: "Retrieval", tokens: "5.1k", width: "21%", color: "bg-emerald-400" },
  { label: "Response", tokens: "4.8k", width: "20%", color: "bg-amber-300" },
];

export function TokenBudgetAllocator() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Context window</p>
          <h3 className="mt-1 text-base font-bold text-white">Token allocation</h3>
        </div>
        <p className="text-right text-xs text-slate-500"><strong className="block text-lg text-white">23.9k</strong>of 32k</p>
      </header>
      <div className="mt-4 flex h-3 overflow-hidden rounded-full bg-white/[0.06]" aria-label="75 percent of the context window is allocated">
        {allocations.map((item) => <span key={item.label} className={item.color} style={{ width: item.width }} />)}
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2">
        {allocations.map((item) => (
          <li key={item.label} className="rounded-lg border border-white/[0.07] p-2.5">
            <div className="flex items-center gap-2 text-[0.68rem] text-slate-400"><span className={`h-2 w-2 rounded-full ${item.color}`} />{item.label}</div>
            <strong className="mt-1 block text-sm text-white">{item.tokens}</strong>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.65rem] text-slate-500">8.1k tokens remain for tools, retries, and safety margin.</p>
    </section>
  );
}
