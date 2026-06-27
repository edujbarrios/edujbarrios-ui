export function NeuralSearchInput() {
  return (
    <label className="flex w-full max-w-sm items-center gap-3 rounded-full border border-[#40E0D0]/25 bg-[#0b0f14]/80 px-4 py-3 shadow-2xl">
      <span className="h-2.5 w-2.5 rounded-full bg-[#40E0D0] shadow-[0_0_14px_rgba(64,224,208,0.75)]" />
      <span className="sr-only">Search components</span>
      <input
        className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
        placeholder="Search command, prompt, or UI..."
        type="search"
      />
      <kbd className="rounded border border-white/10 bg-white/[0.06] px-2 py-1 text-xs text-slate-300">/</kbd>
    </label>
  );
}
