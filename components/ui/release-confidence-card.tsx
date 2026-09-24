const signals = [
  { label: "Eval pass rate", value: "96%", width: "w-[96%]" },
  { label: "Grounding", value: "92%", width: "w-[92%]" },
  { label: "Tool reliability", value: "98%", width: "w-[98%]" },
] as const;

export function ReleaseConfidenceCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[var(--preview-accent,#40E0D0)]">Release confidence</p>
          <h3 className="mt-1 text-base font-bold text-white">Prompt v24 · Candidate</h3>
        </div>
        <span className="rounded-full border border-[#40E0D0]/20 bg-[#40E0D0]/10 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">Ship</span>
      </header>

      <div className="mt-4 space-y-3">
        {signals.map((signal) => (
          <div key={signal.label}>
            <div className="flex items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-slate-300">{signal.label}</span>
              <span className="font-mono text-slate-400">{signal.value}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/8" aria-hidden="true">
              <div className={`${signal.width} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]`} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-lg border border-white/8 bg-white/[0.03] p-3">
          <p className="text-slate-500">Blocking regressions</p>
          <p className="mt-1 text-lg font-black text-white">0</p>
        </div>
        <div className="rounded-lg border border-white/8 bg-white/[0.03] p-3">
          <p className="text-slate-500">Confidence</p>
          <p className="mt-1 text-lg font-black text-white">94 / 100</p>
        </div>
      </div>
    </section>
  );
}
