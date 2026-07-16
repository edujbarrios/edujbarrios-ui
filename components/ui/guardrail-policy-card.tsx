const policies = [{ name: "Sensitive data", mode: "Block", events: 3 }, { name: "Unsafe content", mode: "Block", events: 0 }, { name: "Off-topic requests", mode: "Review", events: 12 }];

export function GuardrailPolicyCard() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fb923c]">Guardrails</p><h3 className="mt-1 text-base font-bold text-white">Production policy</h3></div><span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Active</span></header>
    <ul className="mt-4 divide-y divide-white/8 rounded-lg border border-white/9 bg-white/[0.025]">{policies.map((policy) => <li key={policy.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-3 py-3"><div><p className="text-xs font-semibold text-slate-200">{policy.name}</p><p className="mt-1 text-[0.65rem] text-slate-500">{policy.events} events this week</p></div><span className="rounded-md bg-white/[0.06] px-2 py-1 text-[0.65rem] font-semibold text-slate-300">{policy.mode}</span><span className="h-2 w-2 rounded-full bg-[#40E0D0]" aria-label="Enabled" /></li>)}</ul>
    <button type="button" className="mt-3 w-full rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200">Configure policies</button>
  </section>;
}
