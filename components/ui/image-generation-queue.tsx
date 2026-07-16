const variants = [{ name: "Editorial", progress: 100, state: "Ready" }, { name: "Cinematic", progress: 72, state: "Rendering" }, { name: "Minimal", progress: 18, state: "Queued" }];

export function ImageGenerationQueue() {
  return <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Image generation</p><h3 className="mt-1 text-base font-bold text-white">Campaign variants</h3></div><span className="text-[0.65rem] font-semibold text-slate-500">1536 × 1024</span></header>
    <ol className="mt-4 space-y-2">{variants.map((variant, index) => <li key={variant.name} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3"><span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-to-br from-[#40E0D0]/25 via-[#a78bfa]/25 to-[#fb923c]/25 text-xs font-bold text-white">{index + 1}</span><div><div className="flex justify-between text-xs"><span className="font-semibold text-slate-200">{variant.name}</span></div><div className="mt-2 h-1.5 rounded-full bg-white/[0.06]" role="progressbar" aria-label={`${variant.name} progress`} aria-valuenow={variant.progress} aria-valuemin={0} aria-valuemax={100}><span className="block h-full rounded-full bg-[#40E0D0]" style={{ width: `${variant.progress}%` }} /></div></div><span className="text-[0.65rem] font-semibold text-slate-400">{variant.state}</span></li>)}</ol>
    <button type="button" className="mt-3 w-full rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200">Add variant</button>
  </section>;
}
