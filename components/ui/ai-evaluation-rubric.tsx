"use client";

import { useState } from "react";

const dimensions = [
  { label: "Accuracy", description: "Are claims correct and verifiable?" },
  { label: "Grounding", description: "Are factual claims supported by evidence?" },
  { label: "Completeness", description: "Does the response address the request?" },
  { label: "Clarity", description: "Is the answer understandable and actionable?" },
] as const;

export function AiEvaluationRubric() {
  const [scores, setScores] = useState<number[]>([4, 3, 5, 4]);
  const [notes, setNotes] = useState("");
  const total = scores.reduce((sum, score) => sum + score, 0);
  const average = total / dimensions.length;

  return (
    <section aria-label="AI response evaluation" className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/95 p-4 text-white shadow-2xl">
      <header className="flex items-start justify-between gap-3">
        <div><p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Human evaluation</p><h3 className="mt-1 text-base font-bold">Response quality rubric</h3></div>
        <span aria-live="polite" className="rounded-lg bg-white/10 px-3 py-2 text-sm font-bold">{average.toFixed(1)} / 5</span>
      </header>
      <div className="mt-4 space-y-3">
        {dimensions.map((dimension, index) => (
          <div key={dimension.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between gap-2"><label htmlFor={`rubric-${index}`} className="text-xs font-semibold">{dimension.label}</label><output className="text-xs text-[#40E0D0]">{scores[index]} / 5</output></div>
            <p className="mt-1 text-[0.65rem] text-slate-400">{dimension.description}</p>
            <input id={`rubric-${index}`} type="range" min="1" max="5" step="1" value={scores[index]} onChange={(event) => setScores((current) => current.map((score, i) => i === index ? Number(event.target.value) : score))} className="mt-2 w-full accent-[#40E0D0]" />
          </div>
        ))}
      </div>
      <label htmlFor="rubric-notes" className="mt-4 block text-xs font-semibold">Reviewer notes</label>
      <textarea id="rubric-notes" value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="What should improve?" rows={2} className="mt-2 w-full resize-y rounded-lg border border-white/15 bg-white/5 p-2 text-xs text-white placeholder:text-slate-500 focus:outline-2 focus:outline-[#40E0D0]" />
      <div className="mt-3 flex items-center justify-between gap-2 text-xs"><span className="text-slate-400">{notes.trim() ? "Notes captured locally" : "Add notes to document your score"}</span><button type="button" onClick={() => { setScores([4, 3, 5, 4]); setNotes(""); }} className="rounded-md border border-white/20 px-3 py-1.5 font-semibold hover:bg-white/10">Reset</button></div>
    </section>
  );
}
