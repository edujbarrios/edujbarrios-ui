type NeonGradientButtonProps = {
  children?: React.ReactNode;
};

export function NeonGradientButton({ children = "Launch interface" }: NeonGradientButtonProps) {
  return (
    <button className="rounded-full bg-gradient-to-r from-[#40E0D0] via-[#a78bfa] to-[#fb923c] p-px text-sm font-semibold text-white shadow-[0_0_32px_rgba(64,224,208,0.25)] transition hover:scale-[1.02]">
      <span className="block rounded-full bg-[#0b0f14] px-5 py-2.5">{children}</span>
    </button>
  );
}
