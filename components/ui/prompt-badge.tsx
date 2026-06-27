export function PromptBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#a78bfa]/30 bg-[#a78bfa]/10 px-3 py-1.5 text-xs font-semibold text-[#eee7ff]">
      <span className="h-2 w-2 rounded-full bg-[#a78bfa] shadow-[0_0_12px_rgba(167,139,250,0.8)]" />
      Prompt tuned
    </span>
  );
}
