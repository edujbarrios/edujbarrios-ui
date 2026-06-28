const scores = [
  { label: "Accuracy", value: "96" },
  { label: "Latency", value: "42ms" },
  { label: "Grounding", value: "91" },
];

export function EvalRadarCard() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-white/12 bg-[#0b0f14]/88 p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Eval radar</p>
        <span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-xs font-semibold text-[#fdba74]">live</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {scores.map((score) => (
          <div key={score.label} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
            <p className="text-[0.65rem] uppercase tracking-[0.14em] text-slate-500">{score.label}</p>
            <p className="mt-2 text-xl font-black text-white">{score.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#1b1b1d]">
        <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-[#40E0D0] via-[#a78bfa] to-[#fb923c]" />
      </div>
    </section>
  );
}
