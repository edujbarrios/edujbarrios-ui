export function IconPulseButton() {
  return (
    <button
      aria-label="Run agent"
      className="relative grid h-14 w-14 place-items-center rounded-full border border-[#40E0D0]/30 bg-[#40E0D0]/10 text-[#d8fffb] shadow-[0_0_28px_rgba(64,224,208,0.18)] transition hover:scale-105 hover:bg-[#40E0D0]/16"
      type="button"
    >
      <span className="absolute inset-0 animate-ping rounded-full border border-[#40E0D0]/30" />
      <span className="relative text-xl font-black">AI</span>
    </button>
  );
}
