export function StreamingResponseBubble() {
  return (
    <div className="max-w-sm rounded-lg border border-[#40E0D0]/24 bg-[#40E0D0]/8 p-4 text-sm text-[#d8fffb]">
      <p>I can turn that product brief into a component map, then draft the first screen.</p>
      <div className="mt-3 flex gap-1" aria-label="Streaming response">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0] [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#40E0D0] [animation-delay:300ms]" />
      </div>
    </div>
  );
}
