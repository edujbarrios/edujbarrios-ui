"use client";

import { useState } from "react";

type Status = "idle" | "running" | "done";

export function AiGenerateButton() {
  const [status, setStatus] = useState<Status>("idle");

  const run = () => {
    if (status === "running") return;
    setStatus("running");
    window.setTimeout(() => setStatus("done"), 1600);
    window.setTimeout(() => setStatus("idle"), 3200);
  };

  const label = status === "running" ? "Generating…" : status === "done" ? "Generated" : "Generate with AI";

  return (
    <button
      type="button"
      onClick={run}
      disabled={status === "running"}
      aria-live="polite"
      className="group relative inline-flex min-w-48 items-center justify-center overflow-hidden rounded-xl border border-violet-400/30 bg-gradient-to-r from-violet-500/20 via-cyan-400/15 to-emerald-400/20 px-5 py-3 text-sm font-bold text-white shadow-[0_0_32px_rgba(167,139,250,0.16)] transition hover:-translate-y-0.5 hover:border-cyan-300/45 disabled:cursor-wait disabled:translate-y-0"
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">
        {status === "running" ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/25 border-t-white" aria-hidden="true" />
        ) : status === "done" ? (
          <span className="grid h-4 w-4 place-items-center rounded-full bg-emerald-300 text-[0.65rem] font-black text-emerald-950" aria-hidden="true">✓</span>
        ) : (
          <span aria-hidden="true">✦</span>
        )}
        {label}
      </span>
    </button>
  );
}
