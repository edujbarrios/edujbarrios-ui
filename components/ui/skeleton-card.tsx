export function SkeletonCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur" role="status" aria-label="Loading card">
      <div className="h-3 w-24 animate-pulse rounded-full bg-[#40E0D0]/25" />
      <div className="mt-5 h-8 w-40 animate-pulse rounded-md bg-white/12" />
      <div className="mt-4 space-y-2">
        <div className="h-2.5 w-full animate-pulse rounded-full bg-white/10" />
        <div className="h-2.5 w-4/5 animate-pulse rounded-full bg-white/10" />
        <div className="h-2.5 w-2/3 animate-pulse rounded-full bg-white/10" />
      </div>
    </div>
  );
}
