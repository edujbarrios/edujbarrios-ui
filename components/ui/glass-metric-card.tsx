export function GlassMetricCard() {
  return (
    <div className="w-full max-w-xs rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Eval score</p>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-4xl font-black text-white">94.8%</span>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">+6.2</span>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#1b1b1d]">
        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]" />
      </div>
    </div>
  );
}
