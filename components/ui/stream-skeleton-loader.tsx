export function StreamSkeletonLoader() {
  const rows = [92, 76, 84, 58, 71];

  return (
    <div
      role="status"
      aria-label="Generating response"
      className="w-full max-w-xl rounded-2xl border border-white/10 bg-[#0b0f14]/92 p-5 shadow-[0_24px_80px_rgba(2,6,23,0.35)]"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#40E0D0]/20 bg-[#40E0D0]/10 text-[#d8fffb]">✦</span>
          <div>
            <p className="text-sm font-semibold text-white">Generating answer</p>
            <p className="mt-0.5 text-xs text-slate-500">Streaming grounded response</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0]" />
          Live
        </span>
      </div>

      <div className="mt-6 space-y-3 overflow-hidden">
        {rows.map((width, index) => (
          <div
            key={width}
            className="relative h-3 overflow-hidden rounded-full bg-white/[0.06]"
            style={{ width: `${width}%` }}
          >
            <span
              className="absolute inset-y-0 w-1/2 animate-[pulse_1.6s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ animationDelay: `${index * 120}ms` }}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/8 pt-4 text-xs text-slate-500">
        <span>Retrieving sources</span>
        <span>3 chunks matched</span>
      </div>
    </div>
  );
}
