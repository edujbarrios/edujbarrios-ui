const calls = [
  { tool: "search_docs", detail: "design system tokens", duration: "128ms", status: "done" },
  { tool: "read_file", detail: "components/card.tsx", duration: "42ms", status: "done" },
  { tool: "write_patch", detail: "3 changes proposed", duration: "running", status: "active" },
];

export function ToolCallInspector() {
  return (
    <section className="w-full max-w-md overflow-hidden rounded-xl border border-white/12 bg-[#0b0f14]/92 shadow-2xl">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent activity</p>
          <h3 className="mt-1 text-sm font-bold text-white">3 tool calls</h3>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0]" /> live
        </span>
      </header>
      <ol className="divide-y divide-white/8">
        {calls.map((call, index) => (
          <li key={call.tool} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3">
            <span className={call.status === "active" ? "grid h-7 w-7 place-items-center rounded-md bg-[#a78bfa]/16 text-xs font-bold text-[#c4b5fd]" : "grid h-7 w-7 place-items-center rounded-md bg-[#40E0D0]/12 text-xs font-bold text-[#d8fffb]"}>
              {call.status === "active" ? "…" : index + 1}
            </span>
            <div className="min-w-0">
              <p className="truncate font-mono text-xs font-semibold text-slate-100">{call.tool}</p>
              <p className="mt-1 truncate text-xs text-slate-500">{call.detail}</p>
            </div>
            <span className="text-[0.65rem] font-semibold tabular-nums text-slate-500">{call.duration}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
