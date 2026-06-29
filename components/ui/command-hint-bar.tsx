const hints = [
  { key: "K", label: "Command" },
  { key: "Enter", label: "Run" },
  { key: "Esc", label: "Close" },
];

export function CommandHintBar() {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/12 bg-[#0b0f14]/82 px-3 py-2 shadow-xl backdrop-blur">
      {hints.map((hint) => (
        <span key={hint.label} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
          <kbd className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-1 text-[#d8fffb]">{hint.key}</kbd>
          {hint.label}
        </span>
      ))}
    </div>
  );
}
