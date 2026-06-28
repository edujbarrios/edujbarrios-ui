const tabs = ["Preview", "Code", "Usage"];

export function CodeTabSwitcher() {
  return (
    <div className="inline-flex rounded-lg border border-white/12 bg-[#0b0f14]/82 p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`rounded-md px-3 py-2 text-xs font-semibold transition ${
            tab === "Code" ? "bg-[#40E0D0] text-[#0b0f14]" : "text-slate-400 hover:text-white"
          }`}
          type="button"
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
