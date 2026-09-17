export function SpotlightGridEffect() {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f14] p-7">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full bg-[#40E0D0]/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300">Spotlight grid</p>
        <h3 className="mt-3 text-xl font-bold text-white">Structured glow background</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">A lightweight layered grid and spotlight treatment for empty states, cards, and dashboard panels.</p>
      </div>
    </div>
  );
}
