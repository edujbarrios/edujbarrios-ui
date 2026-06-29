const signals = [
  { label: "Grounded", value: "91%", width: "w-[91%]" },
  { label: "Coverage", value: "84%", width: "w-[84%]" },
  { label: "Risk", value: "12%", width: "w-[12%]" },
];

export function ConfidenceMeter() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Confidence</p>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">ready</span>
      </div>
      <div className="mt-4 space-y-3">
        {signals.map((signal) => (
          <div key={signal.label}>
            <div className="flex justify-between text-xs font-semibold text-slate-300">
              <span>{signal.label}</span>
              <span>{signal.value}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-[#1b1b1d]">
              <div className={`${signal.width} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
