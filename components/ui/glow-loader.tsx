export function GlowLoader() {
  return (
    <div className="flex items-center gap-3" role="status" aria-label="Loading">
      <span className="h-4 w-4 animate-ping rounded-full bg-cyan-300" />
      <span className="h-4 w-4 animate-ping rounded-full bg-violet-300 [animation-delay:120ms]" />
      <span className="h-4 w-4 animate-ping rounded-full bg-emerald-300 [animation-delay:240ms]" />
    </div>
  );
}
