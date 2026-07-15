const assertions = [
  { label: "Mentions refund window", passed: true },
  { label: "Includes policy citation", passed: true },
  { label: "Avoids unsupported promise", passed: false },
];

export function PromptTestCase() {
  const passed = assertions.filter((assertion) => assertion.passed).length;

  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Prompt test</p><h3 className="mt-1 text-base font-bold text-white">Refund policy answer</h3></div><span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#fdba74]">{passed}/{assertions.length} passed</span></header>
      <div className="mt-4 rounded-lg border border-white/9 bg-white/[0.03] p-3"><p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">Input</p><p className="mt-2 text-xs leading-5 text-slate-300">Can I return an annual plan after 20 days?</p></div>
      <ul className="mt-3 space-y-2">
        {assertions.map((assertion) => (
          <li key={assertion.label} className="flex items-center justify-between gap-3 rounded-lg border border-white/8 px-3 py-2.5"><span className="text-xs text-slate-300">{assertion.label}</span><span className={assertion.passed ? "text-[0.65rem] font-bold text-[#d8fffb]" : "text-[0.65rem] font-bold text-[#fdba74]"}>{assertion.passed ? "Pass" : "Review"}</span></li>
        ))}
      </ul>
      <button type="button" className="mt-3 w-full rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14] transition hover:bg-[#72eadf]">Run test again</button>
    </section>
  );
}
