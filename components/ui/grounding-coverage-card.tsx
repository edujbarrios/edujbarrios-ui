const claims = [
  { text: "Revenue increased 18% year over year", source: "Q2 report", covered: true },
  { text: "Enterprise retention reached 96%", source: "Metrics sheet", covered: true },
  { text: "Expansion is expected next quarter", source: "No source", covered: false },
];

export function GroundingCoverageCard() {
  const covered = claims.filter((claim) => claim.covered).length;

  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Grounding coverage</p><h3 className="mt-1 text-base font-bold text-white">Answer evidence</h3></div><span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#fdba74]">{covered}/{claims.length} supported</span></header>
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" role="progressbar" aria-label="Supported claims" aria-valuenow={covered} aria-valuemin={0} aria-valuemax={claims.length}><span className="block h-full w-2/3 rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]" /></div>
      <ul className="mt-4 space-y-2">
        {claims.map((claim) => <li key={claim.text} className="rounded-lg border border-white/9 bg-white/[0.025] p-3"><div className="flex items-start gap-2"><span className={claim.covered ? "mt-1 h-2 w-2 shrink-0 rounded-full bg-[#40E0D0]" : "mt-1 h-2 w-2 shrink-0 rounded-full bg-[#fb923c]"} aria-hidden="true" /><p className="text-xs leading-5 text-slate-300">{claim.text}</p></div><p className={claim.covered ? "mt-2 pl-4 text-[0.65rem] font-semibold text-[#d8fffb]" : "mt-2 pl-4 text-[0.65rem] font-semibold text-[#fdba74]"}>{claim.covered ? `Source: ${claim.source}` : "Needs citation"}</p></li>)}
      </ul>
    </section>
  );
}
