const steps = ["Parse brief", "Create variants", "Ship preview"];

export function AgentStepTimeline() {
  return (
    <ol className="w-full max-w-xs space-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3 text-sm text-slate-200">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[#40E0D0]/30 bg-[#40E0D0]/10 text-xs text-[#d8fffb]">
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
