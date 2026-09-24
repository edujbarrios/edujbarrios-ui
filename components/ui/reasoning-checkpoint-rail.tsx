const checkpoints = [
  { label: "Intent", detail: "Scope resolved", status: "done" },
  { label: "Evidence", detail: "4 sources grounded", status: "done" },
  { label: "Tool plan", detail: "2 calls approved", status: "active" },
  { label: "Final answer", detail: "Waiting on tool result", status: "queued" },
] as const;

function checkpointStyles(status: (typeof checkpoints)[number]["status"]) {
  if (status === "done") return "border-emerald-400/25 bg-emerald-400/10 text-emerald-200";
  if (status === "active") return "border-[#40E0D0]/30 bg-[#40E0D0]/10 text-[#d8fffb]";
  return "border-white/10 bg-white/[0.03] text-slate-500";
}

export function ReasoningCheckpointRail() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Reasoning rail</p>
        <h3 className="mt-1 text-base font-bold text-white">Run checkpoints</h3>
      </header>

      <ol className="mt-4 space-y-2">
        {checkpoints.map((checkpoint, index) => (
          <li key={checkpoint.label} className="flex items-center gap-3 rounded-lg border border-white/8 bg-white/[0.025] p-3">
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border text-[0.65rem] font-black ${checkpointStyles(checkpoint.status)}`}>
              {index + 1}
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <p className="truncate text-sm font-semibold text-slate-200">{checkpoint.label}</p>
                <span className="text-[0.6rem] uppercase tracking-wide text-slate-500">{checkpoint.status}</span>
              </div>
              <p className="mt-1 truncate text-xs text-slate-500">{checkpoint.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
