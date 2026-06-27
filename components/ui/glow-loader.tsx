export function GlowLoader() {
  return (
    <div className="flex items-center gap-3" role="status" aria-label="Loading">
      <span className="h-4 w-4 animate-ping rounded-full bg-[#40E0D0]" />
      <span className="h-4 w-4 animate-ping rounded-full bg-[#a78bfa] [animation-delay:120ms]" />
      <span className="h-4 w-4 animate-ping rounded-full bg-[#fb923c] [animation-delay:240ms]" />
    </div>
  );
}
