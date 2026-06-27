export function TokenUsagePill() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#40E0D0]/25 bg-[#40E0D0]/10 px-4 py-2 text-sm font-semibold text-[#d8fffb]">
      <span className="h-2 w-16 overflow-hidden rounded-full bg-[#1b1b1d]">
        <span className="block h-full w-2/3 rounded-full bg-[#40E0D0]" />
      </span>
      4.2k tokens
    </span>
  );
}
