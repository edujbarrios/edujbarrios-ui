export function GradientSplitButton() {
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-[#40E0D0]/25 bg-[#0b0f14] shadow-[0_0_28px_rgba(64,224,208,0.16)]">
      <button className="bg-[#40E0D0] px-4 py-2.5 text-sm font-bold text-[#0b0f14]" type="button">
        Deploy
      </button>
      <button
        aria-label="Open deploy options"
        className="border-l border-[#0b0f14]/20 px-3 py-2.5 text-sm font-bold text-[#d8fffb] transition hover:bg-[#40E0D0]/12"
        type="button"
      >
        v
      </button>
    </div>
  );
}
