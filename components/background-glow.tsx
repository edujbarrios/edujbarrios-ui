export function BackgroundGlow() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-[#40E0D0]/14 blur-3xl" />
      <div className="absolute right-[12%] top-10 h-96 w-96 rounded-full bg-[#a78bfa]/12 blur-3xl" />
      <div className="absolute bottom-4 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#fb923c]/10 blur-3xl" />
    </div>
  );
}
