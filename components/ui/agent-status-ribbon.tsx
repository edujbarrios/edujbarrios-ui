const statuses = ["Planning", "Writing", "Reviewing"];

export function AgentStatusRibbon() {
  return (
    <div className="flex w-full max-w-md flex-wrap items-center gap-2 rounded-full border border-[#40E0D0]/22 bg-[#0b0f14]/86 px-3 py-2 shadow-2xl backdrop-blur">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-[#40E0D0]/14 text-xs font-black text-[#d8fffb]">AI</span>
      {statuses.map((status, index) => (
        <span
          key={status}
          className={index === 1 ? "rounded-full bg-[#40E0D0] px-3 py-1.5 text-xs font-bold text-[#0b0f14]" : "rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-300"}
        >
          {status}
        </span>
      ))}
    </div>
  );
}
