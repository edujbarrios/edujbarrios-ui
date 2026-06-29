export function SchemaFieldRow() {
  return (
    <label className="grid w-full max-w-sm gap-2 rounded-lg border border-white/12 bg-[#0b0f14]/82 p-4 shadow-2xl">
      <span className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Field name</span>
        <span className="rounded-full bg-[#a78bfa]/12 px-2 py-0.5 text-[0.65rem] font-bold text-[#ddd6fe]">required</span>
      </span>
      <input
        className="rounded-md border border-white/10 bg-white/[0.05] px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-[#40E0D0]/55"
        defaultValue="customer_segment"
      />
      <span className="text-xs text-slate-400">String - used by the recommendation model</span>
    </label>
  );
}
