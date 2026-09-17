const steps = [
  { label: "Plan", status: "done" },
  { label: "Retrieve", status: "done" },
  { label: "Generate", status: "active" },
  { label: "Validate", status: "waiting" },
];

export function MultiStepLoader() {
  return (
    <div role="status" aria-label="Workflow in progress" className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0b0f14]/95 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent workflow</p>
          <h3 className="mt-2 text-lg font-bold text-white">Generating answer</h3>
        </div>
        <span className="rounded-full border border-[#40E0D0]/25 bg-[#40E0D0]/10 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">3 / 4</span>
      </div>
      <div className="mt-5 space-y-3">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center gap-3">
            <span className={`grid h-7 w-7 place-items-center rounded-full border text-[0.7rem] font-bold ${step.status === "done" ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-300" : step.status === "active" ? "animate-pulse border-[#40E0D0]/40 bg-[#40E0D0]/12 text-[#d8fffb]" : "border-white/10 bg-white/[0.03] text-slate-600"}`}>{step.status === "done" ? "✓" : index + 1}</span>
            <div className="min-w-0 flex-1">
              <p className={step.status === "waiting" ? "text-sm text-slate-600" : "text-sm font-medium text-slate-200"}>{step.label}</p>
            </div>
            <span className="text-xs text-slate-600">{step.status === "active" ? "Running" : step.status === "done" ? "Done" : "Queued"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
