"use client";

import { useState } from "react";

type RunState = "running" | "paused" | "stopped";
const steps = ["Plan task", "Retrieve context", "Execute tools", "Validate output", "Deliver answer"];

export function AgentRunControlPanel() {
  const [state, setState] = useState<RunState>("running");
  const [step, setStep] = useState(2);

  return (
    <section aria-label="Agent run controls demo" className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/95 p-4 text-white shadow-2xl">
      <header className="flex items-start justify-between gap-3"><div><p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent orchestration</p><h3 className="mt-1 text-base font-bold">Run control panel</h3></div><span role="status" className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold capitalize">{state}</span></header>
      <p className="mt-2 text-xs text-slate-400">Interactive demonstration only. Controls do not execute external actions.</p>
      <div className="mt-4 flex items-center justify-between text-xs"><span className="font-semibold">Workflow progress</span><span className="text-slate-400">{step + 1} of {steps.length}</span></div>
      <div role="progressbar" aria-label="Workflow progress" aria-valuemin={0} aria-valuemax={steps.length} aria-valuenow={step + 1} className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-[#40E0D0] transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
      <ol className="mt-4 space-y-2">{steps.map((label, index) => <li key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs"><span aria-hidden="true" className={`flex size-5 items-center justify-center rounded-full font-bold ${index <= step ? "bg-[#40E0D0] text-[#0b0f14]" : "bg-white/10 text-slate-400"}`}>{index + 1}</span><span className={index <= step ? "text-white" : "text-slate-400"}>{label}</span><span className="ml-auto text-slate-400">{index < step ? "Complete" : index === step ? (state === "stopped" ? "Stopped" : state === "paused" ? "Paused" : "Active") : "Queued"}</span></li>)}</ol>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" disabled={state === "stopped"} onClick={() => setState((current) => current === "running" ? "paused" : "running")} className="rounded-md bg-[#40E0D0] px-3 py-2 text-xs font-bold text-[#0b0f14] disabled:cursor-not-allowed disabled:opacity-40">{state === "running" ? "Pause run" : "Resume run"}</button>
        <button type="button" disabled={state !== "running" || step === steps.length - 1} onClick={() => setStep((current) => Math.min(current + 1, steps.length - 1))} className="rounded-md border border-white/20 px-3 py-2 text-xs font-semibold disabled:opacity-40">Next step</button>
        <button type="button" disabled={state === "stopped"} onClick={() => setState("stopped")} className="rounded-md border border-rose-400/30 px-3 py-2 text-xs font-semibold text-rose-200 disabled:opacity-40">Stop</button>
        <button type="button" onClick={() => { setState("running"); setStep(0); }} className="rounded-md border border-white/20 px-3 py-2 text-xs font-semibold">Restart</button>
      </div>
    </section>
  );
}
