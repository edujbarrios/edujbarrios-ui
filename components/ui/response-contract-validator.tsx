const checks = [{ label: "JSON schema", status: "Valid" }, { label: "Citation minimum", status: "3 of 2" }, { label: "Length budget", status: "418 / 600" }, { label: "Policy rules", status: "Passed" }];

export function ResponseContractValidator() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Output contract</p><h3 className="mt-1 text-base font-bold text-white">Release validation</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Ready</span></header>
    <dl className="mt-4 divide-y divide-white/8 rounded-lg border border-white/9 bg-white/[0.025]">{checks.map((check) => <div key={check.label} className="flex items-center justify-between gap-3 px-3 py-3"><dt className="text-xs text-slate-300">{check.label}</dt><dd className="inline-flex items-center gap-2 text-[0.65rem] font-bold text-[#d8fffb]"><span className="h-1.5 w-1.5 rounded-full bg-[#40E0D0]" aria-hidden="true" />{check.status}</dd></div>)}</dl>
    <div className="mt-3 flex gap-2"><button type="button" className="flex-1 rounded-full border border-white/12 px-3 py-2.5 text-xs font-bold text-slate-200">Inspect output</button><button type="button" className="flex-1 rounded-full bg-[#40E0D0] px-3 py-2.5 text-xs font-bold text-[#0b0f14]">Release</button></div>
  </section>;
}
