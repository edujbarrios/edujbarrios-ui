"use client";

import { useState } from "react";

export function ApprovalModal() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]">
        Review AI action
      </button>
    );
  }

  return (
    <div className="w-full max-w-md rounded-2xl border border-amber-300/20 bg-[#0b0f14]/96 p-5 shadow-[0_24px_100px_rgba(2,6,23,0.55)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">Approval required</p>
          <h2 className="mt-2 text-xl font-bold text-white">Allow the agent to continue?</h2>
        </div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="rounded-lg border border-white/10 px-2.5 py-1.5 text-slate-500 hover:text-white">×</button>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-400">The workflow wants to send an external email and create a refund draft for account ACME-218.</p>
      <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-4">
        <div className="flex items-center justify-between text-xs"><span className="text-slate-500">Risk level</span><span className="font-semibold text-amber-300">Medium</span></div>
        <div className="mt-3 flex items-center justify-between text-xs"><span className="text-slate-500">Requested by</span><span className="text-slate-300">Support Agent</span></div>
      </div>
      <div className="mt-6 flex justify-end gap-3">
        <button type="button" onClick={() => setOpen(false)} className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-white/[0.05]">Deny</button>
        <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14] hover:bg-[#7ff2e8]">Approve once</button>
      </div>
    </div>
  );
}
