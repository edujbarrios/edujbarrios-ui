export function AuroraBorderEffect() {
  return (
    <div className="group relative w-full max-w-md overflow-hidden rounded-3xl p-px">
      <div className="absolute -inset-24 animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_180deg_at_50%_50%,#40E0D0_0deg,#a78bfa_120deg,#fb923c_220deg,#40E0D0_360deg)] opacity-35 blur-2xl transition duration-500 group-hover:opacity-55" />
      <div className="relative rounded-[calc(1.5rem-1px)] border border-white/10 bg-[#0b0f14]/95 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Aurora effect</p>
        <h3 className="mt-3 text-xl font-bold text-white">Animated ambient border</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">A reusable conic-gradient glow for cards, prompts, and highlighted AI states.</p>
      </div>
    </div>
  );
}
