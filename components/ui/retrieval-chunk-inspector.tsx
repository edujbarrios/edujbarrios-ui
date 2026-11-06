"use client";

import { useState } from "react";

const chunks = [
  { id: "doc-01", title: "API reference", source: "docs/api.md", similarity: 0.94, text: "Requests are limited by your workspace quota. Retry only after the reset window." },
  { id: "doc-02", title: "Operations handbook", source: "docs/ops.md", similarity: 0.86, text: "Use exponential backoff for transient rate-limit responses." },
  { id: "doc-03", title: "Release notes", source: "docs/releases.md", similarity: 0.68, text: "The current release adds visibility into per-route token usage." },
];

export function RetrievalChunkInspector() {
  const [threshold, setThreshold] = useState(0.8);
  const [selected, setSelected] = useState(chunks[0].id);
  const visible = chunks.filter((chunk) => chunk.similarity >= threshold);
  const active = visible.find((chunk) => chunk.id === selected) ?? visible[0];

  return (
    <section aria-label="Retrieval chunk inspector demo" className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/95 p-4 text-white shadow-2xl">
      <header className="flex items-start justify-between gap-3"><div><p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">RAG inspection</p><h3 className="mt-1 text-base font-bold">Retrieved context</h3></div><span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold">{visible.length} / {chunks.length} chunks</span></header>
      <p className="mt-2 text-xs text-slate-400">Sample retrieval data; similarity scores are illustrative.</p>
      <label htmlFor="chunk-threshold" className="mt-4 flex justify-between text-xs font-semibold"><span>Minimum similarity</span><output>{Math.round(threshold * 100)}%</output></label>
      <input id="chunk-threshold" type="range" min="0.6" max="1" step="0.02" value={threshold} onChange={(event) => setThreshold(Number(event.target.value))} className="mt-2 w-full accent-[#40E0D0]" />
      <div className="mt-3 space-y-2">{visible.map((chunk) => <button type="button" key={chunk.id} aria-pressed={active?.id === chunk.id} onClick={() => setSelected(chunk.id)} className={`w-full rounded-lg border p-3 text-left transition-colors ${active?.id === chunk.id ? "border-[#40E0D0]/60 bg-[#40E0D0]/10" : "border-white/10 bg-white/[0.03] hover:bg-white/10"}`}><span className="flex items-center justify-between gap-2 text-xs"><span className="font-bold">{chunk.title}</span><span className="font-mono text-[#40E0D0]">{Math.round(chunk.similarity * 100)}%</span></span><span className="mt-1 block text-[0.65rem] text-slate-400">{chunk.source}</span></button>)}</div>
      {active ? <div className="mt-3 rounded-lg border border-white/10 bg-white/[0.04] p-3"><p className="text-[0.65rem] font-semibold uppercase tracking-wider text-slate-400">Selected excerpt</p><p className="mt-2 text-xs leading-relaxed text-slate-200">{active.text}</p><p className="mt-2 font-mono text-[0.65rem] text-slate-500">{active.id}</p></div> : <p role="status" className="mt-3 rounded-lg border border-white/10 p-3 text-xs text-slate-400">No chunks meet this threshold. Lower it to inspect results.</p>}
    </section>
  );
}
