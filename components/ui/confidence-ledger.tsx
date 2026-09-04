const entries = [
  { claim: "Pricing is approved", confidence: 94, basis: "Signed launch brief", change: "+6" },
  { claim: "Activation is accelerating", confidence: 81, basis: "7-day product trend", change: "+3" },
  { claim: "SSO is the top blocker", confidence: 67, basis: "3 customer interviews", change: "-8" },
  { claim: "25% rollout is safe", confidence: 72, basis: "Canary metrics", change: "+1" },
];

export function ConfidenceLedger() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#080c11] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-cyan-300">Confidence ledger</p>
          <h3 className="mt-1 text-base font-bold text-white">Claim confidence over time</h3>
          <p className="mt-1 text-xs text-slate-400">Track what the agent believes, why, and how confidence shifts.</p>
        </div>
        <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-[0.62rem] font-semibold text-cyan-200">4 claims</span>
      </header>

      <ol className="mt-4 space-y-2">
        {entries.map((entry) => (
          <li key={entry.claim} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-semibold text-white">{entry.claim}</p>
                <p className="mt-1 truncate text-[0.66rem] text-slate-500">Basis · {entry.basis}</p>
              </div>
              <div className="text-right">
                <strong className="block text-sm tabular-nums text-cyan-200">{entry.confidence}%</strong>
                <span className={`text-[0.62rem] font-semibold ${entry.change.startsWith("-") ? "text-rose-300" : "text-emerald-300"}`}>{entry.change} pts</span>
              </div>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" role="progressbar" aria-label={`${entry.claim} confidence`} aria-valuenow={entry.confidence} aria-valuemin={0} aria-valuemax={100}>
              <span className="block h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" style={{ width: `${entry.confidence}%` }} />
            </div>
          </li>
        ))}
      </ol>

      <footer className="mt-3 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-white/[0.035] p-3"><p className="text-[0.62rem] text-slate-500">Average confidence</p><strong className="mt-1 block text-sm text-white">78.5%</strong></div>
        <div className="rounded-xl bg-white/[0.035] p-3"><p className="text-[0.62rem] text-slate-500">Largest movement</p><strong className="mt-1 block text-sm text-rose-300">SSO · -8 pts</strong></div>
      </footer>
    </section>
  );
}
