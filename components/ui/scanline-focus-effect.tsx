export function ScanlineFocusEffect() {
  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f14] p-6">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#40E0D0] to-transparent opacity-0 shadow-[0_0_18px_rgba(64,224,208,.8)] transition-all duration-700 group-hover:top-full group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(64,224,208,.03)_50%,transparent_100%)] bg-[length:100%_8px] opacity-40" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Scanline focus</p>
        <h3 className="mt-3 text-xl font-bold text-white">Hover inspection effect</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">A lightweight scanning highlight for AI cards, diagnostics, and inspectable panels.</p>
      </div>
    </div>
  );
}
