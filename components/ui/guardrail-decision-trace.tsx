const decisions = [
  { rule: "PII detection", result: "Redact", detail: "Email address" },
  { rule: "Allowed topics", result: "Pass", detail: "Customer support" },
  { rule: "Action scope", result: "Review", detail: "Refund over $500" },
];

export function GuardrailDecisionTrace() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Policy trace</p><h3 className="mt-1 text-base font-bold text-white">Guardrail decision</h3></div><span className="rounded-full bg-amber-400/10 px-2 py-1 text-[0.65rem] font-semibold text-amber-300">Review</span></header>
      <ol className="mt-4 border-l border-white/10 pl-4">{decisions.map((decision) => <li key={decision.rule} className="relative pb-4 last:pb-0"><span className="absolute -left-[1.18rem] top-1 h-2 w-2 rounded-full bg-violet-300 ring-4 ring-[#0b0f14]" /><div className="flex items-center justify-between"><p className="text-xs font-semibold text-slate-200">{decision.rule}</p><span className="text-[0.62rem] font-semibold text-slate-400">{decision.result}</span></div><p className="mt-1 text-[0.65rem] text-slate-500">{decision.detail}</p></li>)}</ol>
      <div className="mt-4 rounded-lg bg-white/[0.035] p-3 text-[0.68rem] leading-relaxed text-slate-400">Final action requires approval because the refund exceeds the autonomous limit.</div>
    </section>
  );
}
