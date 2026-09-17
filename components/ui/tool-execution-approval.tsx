const scopes = [
  { label: "Read customer profile", level: "Read", detail: "CRM / account:acme" },
  { label: "Create refund draft", level: "Write", detail: "Billing / refunds" },
  { label: "Send external email", level: "External", detail: "support@acme.com" },
];

export function ToolExecutionApproval() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0f14] p-5 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-amber-300">Human approval required</p>
          <h3 className="mt-1 text-base font-bold text-white">Execute billing workflow?</h3>
          <p className="mt-1 text-sm text-slate-400">The agent wants to perform actions that can affect a customer account.</p>
        </div>
        <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-200">High impact</span>
      </header>

      <div className="mt-5 rounded-xl border border-white/8 bg-white/[0.03] p-3">
        <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
          <span>Requested by</span>
          <span className="font-medium text-slate-200">Support Agent · run_8f31</span>
        </div>
        <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-400">
          <span>Reason</span>
          <span className="text-right text-slate-300">Resolve duplicate charge</span>
        </div>
      </div>

      <ul className="mt-4 space-y-2" aria-label="Requested tool permissions">
        {scopes.map((scope) => (
          <li key={scope.label} className="flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-white/[0.025] px-3 py-2.5">
            <div>
              <p className="text-sm font-medium text-slate-100">{scope.label}</p>
              <p className="mt-0.5 text-xs text-slate-500">{scope.detail}</p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 px-2 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-slate-300">{scope.level}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] p-3 text-xs leading-5 text-cyan-100">
        Guardrail: the refund will remain a draft until a second confirmation step.
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2">
        <button type="button" className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08]">Deny</button>
        <button type="button" className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2.5 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-400/15">Approve once</button>
      </div>
    </section>
  );
}
