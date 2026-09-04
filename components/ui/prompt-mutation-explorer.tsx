const mutations = [
  { label: "Baseline", instruction: "Summarize the incident report", score: 86, delta: "—" },
  { label: "Constraint", instruction: "Summarize in 3 bullets with owner + ETA", score: 93, delta: "+7" },
  { label: "Adversarial", instruction: "Ignore evidence gaps and sound certain", score: 41, delta: "-45" },
];

export function PromptMutationExplorer() {
  return (
    <section className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#090d12] p-5 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violet-300">Prompt mutation</p>
          <h3 className="mt-1 text-lg font-bold text-white">Explore behavioral sensitivity</h3>
          <p className="mt-1 text-sm text-slate-400">Compare prompt variants and see how small instruction changes shift evaluation quality.</p>
        </div>
        <span className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-semibold text-violet-200">3 variants</span>
      </header>

      <div className="mt-5 space-y-3">
        {mutations.map((mutation) => (
          <article key={mutation.label} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-white">{mutation.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{mutation.instruction}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-black tabular-nums text-white">{mutation.score}</p>
                <p className="text-[0.65rem] text-slate-500">Δ {mutation.delta}</p>
              </div>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" role="progressbar" aria-label={`${mutation.label} evaluation score`} aria-valuemin={0} aria-valuemax={100} aria-valuenow={mutation.score}>
              <span className="block h-full rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" style={{ width: `${mutation.score}%` }} />
            </div>
          </article>
        ))}
      </div>

      <footer className="mt-4 rounded-xl border border-amber-400/15 bg-amber-400/[0.06] p-3 text-xs text-amber-100">
        Largest sensitivity: confidence manipulation drops quality by 45 points.
      </footer>
    </section>
  );
}
