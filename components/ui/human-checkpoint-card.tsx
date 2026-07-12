const impact = ["Publishes to production", "Notifies 12 subscribers"];

export function HumanCheckpointCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-[#fb923c]/24 bg-[#0b0f14]/92 p-5 shadow-2xl">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#fb923c]/12 text-lg text-[#fdba74]" aria-hidden="true">!</span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fdba74]">Human checkpoint</p>
          <h3 className="mt-2 text-base font-bold text-white">Approve release action?</h3>
          <p className="mt-1 text-xs leading-5 text-slate-400">The agent is paused before a high-impact step.</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 rounded-lg border border-white/8 bg-white/[0.04] p-3">
        {impact.map((item) => (
          <li key={item} className="flex items-center gap-2 text-xs text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#fb923c]" aria-hidden="true" /> {item}
          </li>
        ))}
      </ul>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <button type="button" className="rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:bg-white/8">Reject</button>
        <button type="button" className="rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14] transition hover:bg-[#72eadf]">Approve once</button>
      </div>
      <p className="mt-3 text-center text-[0.65rem] text-slate-500">Auto-cancels in 4:58</p>
    </section>
  );
}
