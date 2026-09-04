const evidence = [
  { type: "Text", source: "Launch brief.md", signal: "Pricing approved for EU rollout", confidence: 96, tone: "cyan" },
  { type: "Image", source: "dashboard.png", signal: "Activation trend is accelerating", confidence: 91, tone: "violet" },
  { type: "Audio", source: "customer-call.wav", signal: "Enterprise buyers mention SSO friction", confidence: 84, tone: "amber" },
  { type: "Code", source: "feature-flags.ts", signal: "Rollout remains capped at 25%", confidence: 99, tone: "emerald" },
];

const toneClass: Record<string, string> = {
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
};

export function MultimodalEvidenceBoard() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#090d12] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-300">Evidence fusion</p>
          <h3 className="mt-1 text-base font-bold text-white">Multimodal evidence board</h3>
          <p className="mt-1 text-xs leading-5 text-slate-400">One answer grounded across documents, visuals, audio, and code.</p>
        </div>
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-right">
          <p className="text-[0.6rem] uppercase tracking-wider text-emerald-200/70">Coverage</p>
          <strong className="text-sm text-emerald-200">4 / 4</strong>
        </div>
      </header>

      <div className="mt-4 rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
        <p className="text-[0.62rem] uppercase tracking-wider text-slate-500">Synthesized claim</p>
        <p className="mt-1.5 text-sm font-medium leading-5 text-slate-100">The EU launch is commercially ready, but enterprise onboarding risk remains.</p>
      </div>

      <ul className="mt-3 space-y-2">
        {evidence.map((item) => (
          <li key={item.source} className="rounded-xl border border-white/[0.07] p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`rounded-full border px-2 py-0.5 text-[0.58rem] font-semibold ${toneClass[item.tone]}`}>{item.type}</span>
                  <p className="truncate text-[0.65rem] font-medium text-slate-400">{item.source}</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-200">{item.signal}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-[0.58rem] uppercase tracking-wider text-slate-600">Confidence</p>
                <strong className="mt-1 block text-xs tabular-nums text-white">{item.confidence}%</strong>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <footer className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white/[0.035] p-3">
          <p className="text-[0.62rem] text-slate-500">Cross-modal agreement</p>
          <strong className="mt-1 block text-xs text-emerald-300">Strong · 0 conflicts</strong>
        </div>
        <div className="rounded-xl bg-white/[0.035] p-3">
          <p className="text-[0.62rem] text-slate-500">Weakest signal</p>
          <strong className="mt-1 block text-xs text-amber-300">Audio · 84%</strong>
        </div>
      </footer>
    </section>
  );
}
