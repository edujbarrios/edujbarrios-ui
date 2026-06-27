type NeonGradientButtonProps = {
  children?: React.ReactNode;
};

export function NeonGradientButton({ children = "Launch interface" }: NeonGradientButtonProps) {
  return (
    <button className="rounded-full bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300 p-px text-sm font-semibold text-white shadow-[0_0_32px_rgba(34,211,238,0.28)] transition hover:scale-[1.02]">
      <span className="block rounded-full bg-slate-950 px-5 py-2.5">{children}</span>
    </button>
  );
}
