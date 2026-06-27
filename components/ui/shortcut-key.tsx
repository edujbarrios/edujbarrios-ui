export function ShortcutKey() {
  return (
    <span className="inline-flex items-center gap-1 rounded-md border border-white/12 bg-white/[0.06] p-1 text-xs font-semibold text-slate-200">
      <kbd className="rounded bg-[#1b1b1d] px-2 py-1 text-[#d8fffb]">Ctrl</kbd>
      <span className="text-slate-500">+</span>
      <kbd className="rounded bg-[#1b1b1d] px-2 py-1 text-[#d8fffb]">K</kbd>
    </span>
  );
}
