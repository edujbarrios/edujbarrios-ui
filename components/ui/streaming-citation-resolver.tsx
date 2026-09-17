const claims = [
  { text: "Enterprise activation increased after onboarding changes.", source: "Growth report", status: "Resolved", confidence: 96 },
  { text: "SSO remains the most common blocker for large accounts.", source: "Support analysis", status: "Resolved", confidence: 91 },
  { text: "Renewal risk is concentrated in the EU segment.", source: "Searching…", status: "Pending", confidence: 54 },
];

export function StreamingCitationResolver() {
  return (
    <section className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0b0f14] p-5 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-emerald-300">Live grounding</p>
          <h3 className="mt-1 text-base font-bold text-white">Streaming citation resolver</h3>
          <p className="mt-1 text-sm text-slate-400">Track claim-level citation resolution while an AI response is still being generated.</p>
        </div>
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs font-medium text-cyan-200">2 / 3 grounded</span>
      </header>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/[0.06]" aria-label="Citation coverage: 67 percent">
        <div className="h-full w-2/3 rounded-full bg-emerald-300/80" />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-500"><span>Claim coverage</span><span>67%</span></div>

      <ol className="mt-5 space-y-2" aria-label="Citation resolution status">
        {claims.map((claim, index) => (
          <li key={claim.text} className="rounded-xl border border-white/8 bg-white/[0.025] p-3">
            <div className="flex items-start gap-3">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/[0.05] text-xs font-bold text-slate-300">{index + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="text-sm leading-5 text-slate-100">{claim.text}</p>
                <div className="mt-2 flex items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500">Source: <b className="font-medium text-slate-300">{claim.source}</b></span>
                  <span className="text-slate-400">{claim.confidence}%</span>
                </div>
                <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-200">{claim.status}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-4 rounded-xl border border-amber-400/15 bg-amber-400/[0.06] p-3 text-xs leading-5 text-amber-100">
        One claim is still under-supported. Keep it tentative or delay finalization until a matching source is found.
      </div>
    </section>
  );
}
