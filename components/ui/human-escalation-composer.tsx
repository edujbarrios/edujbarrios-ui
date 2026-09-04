const packet = [
  { label: "Decision", value: "Pause automated rollout" },
  { label: "Why now", value: "Regression exceeds quality guardrail" },
  { label: "Evidence", value: "3 eval failures · 2 customer reports" },
  { label: "Missing", value: "Owner approval for rollback" },
];

export function HumanEscalationComposer() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#090d12] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-rose-300">Human escalation</p>
          <h3 className="mt-1 text-base font-bold text-white">Review packet composer</h3>
          <p className="mt-1 text-xs text-slate-400">Turn an agent decision into a compact, review-ready handoff with explicit missing context.</p>
        </div>
        <span className="rounded-full border border-rose-400/20 bg-rose-400/10 px-2.5 py-1 text-[0.62rem] font-semibold text-rose-200">P1 review</span>
      </header>

      <div className="mt-4 space-y-2">
        {packet.map((item) => (
          <div key={item.label} className="grid grid-cols-[72px_1fr] gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
            <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
            <p className="text-xs leading-5 text-slate-200">{item.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-amber-400/15 bg-amber-400/[0.06] p-3">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-amber-300">Recommended action</p>
          <span className="text-[0.6rem] text-amber-200/70">Agent confidence 87%</span>
        </div>
        <p className="mt-1 text-xs leading-5 text-slate-300">Approve a rollback to prompt v42, then rerun the affected evaluation slice before restoring traffic.</p>
      </div>

      <footer className="mt-3 flex items-center justify-between gap-3">
        <div>
          <p className="text-[0.6rem] text-slate-500">Reviewer</p>
          <strong className="text-xs text-white">Product safety · unassigned</strong>
        </div>
        <div className="flex gap-2">
          <button type="button" className="rounded-lg border border-white/10 px-3 py-2 text-[0.66rem] font-semibold text-slate-300">Request context</button>
          <button type="button" className="rounded-lg bg-white px-3 py-2 text-[0.66rem] font-bold text-slate-950">Escalate</button>
        </div>
      </footer>
    </section>
  );
}
