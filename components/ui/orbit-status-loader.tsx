export function OrbitStatusLoader() {
  return (
    <div role="status" aria-label="Processing request" className="flex w-full max-w-sm items-center gap-4 rounded-2xl border border-white/10 bg-[#0b0f14]/92 p-5">
      <div className="relative h-14 w-14 shrink-0">
        <span className="absolute inset-0 rounded-full border border-[#40E0D0]/15" />
        <span className="absolute inset-1 animate-spin rounded-full border border-transparent border-t-[#40E0D0] border-r-violet-400" />
        <span className="absolute inset-4 rounded-full bg-gradient-to-br from-[#40E0D0]/80 to-violet-400/80 shadow-[0_0_24px_rgba(64,224,208,0.25)]" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white">Running workflow</p>
          <span className="text-xs font-medium text-[#d8fffb]">68%</span>
        </div>
        <p className="mt-1 text-xs text-slate-500">Calling tools and validating output</p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
          <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-[#40E0D0] to-violet-400" />
        </div>
      </div>
    </div>
  );
}
