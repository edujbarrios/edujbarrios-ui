const steps = ["Parse brief", "Create variants", "Ship preview"];

export function AgentStepTimeline() {
  return (
    <ol className="w-full max-w-xs space-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3 text-sm text-slate-200">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs text-cyan-100">
            {index + 1}
          </span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
