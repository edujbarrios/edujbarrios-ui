const permissions = [
  { label: "Read workspace files", scope: "Project only", enabled: true },
  { label: "Write proposed changes", scope: "Ask each time", enabled: true },
  { label: "Access external services", scope: "Blocked", enabled: false },
];

export function ToolPermissionCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Tool access</p><h3 className="mt-1 text-base font-bold text-white">Workspace permissions</h3></div>
        <span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Restricted</span>
      </header>
      <ul className="mt-4 divide-y divide-white/8 rounded-lg border border-white/10 bg-white/[0.025]">
        {permissions.map((permission) => (
          <li key={permission.label} className="flex items-center justify-between gap-4 px-3 py-3">
            <div><p className="text-xs font-semibold text-slate-200">{permission.label}</p><p className="mt-1 text-[0.65rem] text-slate-500">{permission.scope}</p></div>
            <span role="img" aria-label={permission.enabled ? "Allowed" : "Blocked"} className={permission.enabled ? "relative h-5 w-9 rounded-full bg-[#40E0D0]" : "relative h-5 w-9 rounded-full bg-white/10"}>
              <span className={permission.enabled ? "absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-[#0b0f14]" : "absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-slate-500"} />
            </span>
          </li>
        ))}
      </ul>
      <button type="button" className="mt-3 w-full rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:border-[#40E0D0]/35 hover:text-white">Review access policy</button>
    </section>
  );
}
