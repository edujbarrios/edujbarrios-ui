const stages = ["Brief", "Design", "Code"];

export function ProgressStepper() {
  return (
    <ol className="flex w-full max-w-sm items-center">
      {stages.map((stage, index) => (
        <li key={stage} className="flex flex-1 items-center">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#40E0D0]/30 bg-[#40E0D0]/10 text-xs font-bold text-[#d8fffb]">
            {index + 1}
          </span>
          <span className="ml-2 text-xs font-semibold text-slate-300">{stage}</span>
          {index < stages.length - 1 ? <span className="mx-3 h-px flex-1 bg-gradient-to-r from-[#40E0D0]/60 to-[#a78bfa]/40" /> : null}
        </li>
      ))}
    </ol>
  );
}
