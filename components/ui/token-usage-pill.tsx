export function TokenUsagePill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100">
      <span className="h-2 w-16 overflow-hidden rounded-full bg-slate-800">
        <span className="block h-full w-2/3 rounded-full bg-emerald-300" />
      </span>
      4.2k tokens
    </span>
  );
}
