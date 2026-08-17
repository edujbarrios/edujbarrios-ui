const checks = [
  { label: "Clear intent", score: 96 },
  { label: "Useful context", score: 82 },
  { label: "Output constraints", score: 74 },
];

export function PromptQualityScore() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-center justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fb923c]">Prompt quality</p><h3 className="mt-1 text-base font-bold text-white">Release summary</h3></div>
        <div className="grid h-14 w-14 place-items-center rounded-full border-4 border-[#40E0D0]/70 bg-[#40E0D0]/8 text-lg font-black text-white" aria-label="Quality score 84 out of 100">84</div>
      </header>
      <dl className="mt-4 space-y-3">
        {checks.map((check) => (
          <div key={check.label}>
            <div className="flex items-center justify-between text-xs"><dt className="font-semibold text-slate-300">{check.label}</dt><dd className="font-bold text-white">{check.score}%</dd></div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" role="progressbar" aria-label={check.label} aria-valuenow={check.score} aria-valuemin={0} aria-valuemax={100}>
              <span className="block h-full rounded-full bg-gradient-to-r from-[#a78bfa] to-[#40E0D0]" style={{ width: `${check.score}%` }} />
            </div>
          </div>
        ))}
      </dl>
      <p className="mt-4 rounded-lg border border-[#fb923c]/15 bg-[#fb923c]/[0.06] p-3 text-xs leading-5 text-[#fed7aa]">Add a response format and one example to improve consistency.</p>
    </section>
  );
}
