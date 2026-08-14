const personas = [
  { name: "Power user", cases: 48, pass: 94 },
  { name: "First-time visitor", cases: 72, pass: 86 },
  { name: "Ambiguous requester", cases: 35, pass: 69 },
];

export function SyntheticUserCohort() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-300">Synthetic evaluation</p><h3 className="mt-1 text-base font-bold text-white">User cohorts</h3></div><span className="text-[0.65rem] font-semibold text-slate-500">155 scenarios</span></header>
      <ul className="mt-4 space-y-3">{personas.map((persona) => <li key={persona.name}><div className="flex items-center justify-between"><div><p className="text-xs font-semibold text-slate-200">{persona.name}</p><p className="mt-0.5 text-[0.62rem] text-slate-500">{persona.cases} cases</p></div><strong className={persona.pass < 75 ? "text-base text-amber-300" : "text-base text-white"}>{persona.pass}%</strong></div><div className="mt-1.5 h-1.5 rounded-full bg-white/[0.06]" aria-hidden="true"><span className="block h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300" style={{ width: `${persona.pass}%` }} /></div></li>)}</ul>
      <p className="mt-4 rounded-lg bg-amber-400/[0.07] p-3 text-[0.68rem] leading-relaxed text-amber-100">Ambiguous requesters are 18 points below the cohort average.</p>
    </section>
  );
}
