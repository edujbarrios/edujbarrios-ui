export function GlassCommandCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Command palette</p>
        <kbd className="rounded border border-white/10 bg-slate-950/80 px-2 py-1 text-xs text-slate-300">⌘K</kbd>
      </div>
      <div className="mt-4 rounded-lg border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-sm text-cyan-100">
        Generate dashboard layout
      </div>
      <p className="mt-3 text-xs text-slate-400">3 actions ready · 1 agent online</p>
    </div>
  );
}
