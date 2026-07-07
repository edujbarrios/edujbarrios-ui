const checkpoints = [
  { label: "Queue", value: "18ms", width: "w-[18%]" },
  { label: "Model", value: "212ms", width: "w-[62%]" },
  { label: "Render", value: "41ms", width: "w-[28%]" },
];

export function LatencyBudgetCard() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Latency budget</p>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">271ms</span>
      </div>
      <div className="mt-4 space-y-3">
        {checkpoints.map((checkpoint) => (
          <div key={checkpoint.label}>
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>{checkpoint.label}</span>
              <span>{checkpoint.value}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#1b1b1d]">
              <div className={`${checkpoint.width} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#fb923c]`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
