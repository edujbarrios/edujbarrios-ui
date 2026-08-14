const permissions = [
  { tool: "Knowledge search", scope: "Read public docs", status: "Allowed", tone: "text-emerald-300 bg-emerald-400/10" },
  { tool: "Customer records", scope: "Read contact data", status: "Approval", tone: "text-amber-300 bg-amber-400/10" },
  { tool: "Email sender", scope: "Send as workspace", status: "Blocked", tone: "text-rose-300 bg-rose-400/10" },
];

export function ToolPermissionInspector() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0b0f14] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Preflight</p>
          <h3 className="mt-1 text-base font-bold text-white">Tool permissions</h3>
        </div>
        <span className="text-[0.65rem] font-medium text-slate-500">3 connected</span>
      </header>
      <ul className="mt-4 space-y-2">
        {permissions.map((permission) => (
          <li key={permission.tool} className="flex items-center justify-between gap-3 rounded-lg border border-white/[0.07] p-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-slate-200">{permission.tool}</p>
              <p className="mt-1 truncate text-[0.65rem] text-slate-500">{permission.scope}</p>
            </div>
            <span className={`shrink-0 rounded-full px-2 py-1 text-[0.62rem] font-semibold ${permission.tone}`}>{permission.status}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="mt-4 w-full rounded-lg border border-white/10 py-2 text-xs font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.04]">Review sensitive scopes</button>
    </section>
  );
}
