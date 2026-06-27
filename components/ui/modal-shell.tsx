export function ModalShell() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-[#0b0f14] p-5 shadow-[0_22px_80px_rgba(0,0,0,0.45)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Confirm action</p>
          <h2 className="mt-2 text-lg font-bold text-white">Publish component?</h2>
        </div>
        <button aria-label="Close modal" className="rounded-full bg-white/8 px-2 py-1 text-sm text-slate-300" type="button">
          x
        </button>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">This will make the component visible in the public gallery.</p>
      <div className="mt-5 flex justify-end gap-2">
        <button className="rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-slate-200" type="button">
          Cancel
        </button>
        <button className="rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]" type="button">
          Publish
        </button>
      </div>
    </div>
  );
}
