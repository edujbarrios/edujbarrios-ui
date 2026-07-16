const attacks = [{ name: "Instruction override", result: "Blocked" }, { name: "Secret extraction", result: "Blocked" }, { name: "Role confusion", result: "Review" }];

export function AdversarialTestCard() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fb923c]">Adversarial suite</p><h3 className="mt-1 text-base font-bold text-white">Prompt defense check</h3></div><span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#fdba74]">1 review</span></header>
    <ul className="mt-4 space-y-2">{attacks.map((attack) => <li key={attack.name} className="flex items-center justify-between gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3"><div><p className="text-xs font-semibold text-slate-200">{attack.name}</p><p className="mt-1 text-[0.65rem] text-slate-500">Synthetic attack pattern</p></div><span className={attack.result === "Blocked" ? "text-[0.65rem] font-bold text-[#d8fffb]" : "text-[0.65rem] font-bold text-[#fdba74]"}>{attack.result}</span></li>)}</ul>
    <div className="mt-3 flex items-center justify-between rounded-lg border border-white/9 p-3"><span className="text-[0.65rem] text-slate-500">Defense score</span><strong className="text-lg text-white">92/100</strong></div>
  </section>;
}
