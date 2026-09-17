"use client";

import { useState } from "react";

export function InspectorSideModal() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white">Open inspector</button>;
  }

  return (
    <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-[#080b10] shadow-[0_30px_100px_rgba(2,6,23,.55)]">
      <div className="grid min-h-[420px] md:grid-cols-[1fr_320px]">
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Preview</p>
          <h3 className="mt-3 text-2xl font-bold text-white">Agent response card</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">Inspect properties, metadata, accessibility notes, and runtime state without leaving the current page.</p>
          <div className="mt-8 h-44 rounded-2xl border border-white/10 bg-gradient-to-br from-[#40E0D0]/10 via-white/[0.02] to-violet-500/10" />
        </div>
        <aside className="border-t border-white/10 bg-white/[0.025] p-5 md:border-l md:border-t-0">
          <div className="flex items-center justify-between gap-3">
            <div><p className="text-xs uppercase tracking-[0.16em] text-slate-500">Inspector</p><h4 className="mt-1 font-semibold text-white">Properties</h4></div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close inspector" className="rounded-lg border border-white/10 px-2.5 py-1.5 text-slate-500 hover:text-white">×</button>
          </div>
          <div className="mt-6 space-y-4 text-sm">
            {[['Variant','Default'],['Status','Ready'],['Tokens','428'],['Latency','640 ms']].map(([label,value]) => <div key={label} className="flex items-center justify-between border-b border-white/[0.06] pb-3"><span className="text-slate-500">{label}</span><span className="font-medium text-slate-200">{value}</span></div>)}
          </div>
          <button type="button" className="mt-6 w-full rounded-xl bg-[#40E0D0] px-4 py-2.5 text-sm font-bold text-[#07110f]">Apply changes</button>
        </aside>
      </div>
    </div>
  );
}
