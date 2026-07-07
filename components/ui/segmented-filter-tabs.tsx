const filters = [
  { label: "All", count: "42" },
  { label: "Live", count: "18" },
  { label: "Draft", count: "7" },
];

export function SegmentedFilterTabs() {
  return (
    <div className="inline-flex rounded-lg border border-white/12 bg-[#0b0f14]/82 p-1 shadow-xl">
      {filters.map((filter) => (
        <button
          key={filter.label}
          className={filter.label === "Live" ? "rounded-md bg-[#40E0D0] px-3 py-2 text-xs font-bold text-[#0b0f14]" : "rounded-md px-3 py-2 text-xs font-semibold text-slate-400 transition hover:text-white"}
          type="button"
        >
          {filter.label}
          <span className={filter.label === "Live" ? "ml-2 text-[#0b0f14]/70" : "ml-2 text-slate-600"}>{filter.count}</span>
        </button>
      ))}
    </div>
  );
}
