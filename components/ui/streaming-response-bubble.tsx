export function StreamingResponseBubble() {
  return (
    <div className="max-w-sm rounded-lg border border-emerald-300/20 bg-emerald-300/8 p-4 text-sm text-emerald-50">
      <p>I can turn that product brief into a component map, then draft the first screen.</p>
      <div className="mt-3 flex gap-1" aria-label="Streaming response">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300 [animation-delay:300ms]" />
      </div>
    </div>
  );
}
