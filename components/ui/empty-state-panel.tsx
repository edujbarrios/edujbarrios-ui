export function EmptyStatePanel() {
  return (
    <section className="grid w-full max-w-sm place-items-center rounded-lg border border-dashed border-[#40E0D0]/30 bg-[#40E0D0]/8 p-8 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#40E0D0]/14 text-sm font-black text-[#d8fffb]">+</span>
      <h3 className="mt-4 text-base font-bold text-white">No variants yet</h3>
      <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">Create the first prompt variant to compare quality, cost, and latency.</p>
      <button className="mt-5 rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]" type="button">
        Add variant
      </button>
    </section>
  );
}
