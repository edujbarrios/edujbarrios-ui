"use client";

import { useState } from "react";

const commands = [
  { key: "G", label: "Generate component", detail: "Create a new UI draft" },
  { key: "S", label: "Search library", detail: "Find reusable components" },
  { key: "R", label: "Run preview", detail: "Open the current showcase" },
];

export function CommandPaletteModal() {
  const [open, setOpen] = useState(true);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white hover:bg-white/[0.08]">
        Open command palette
      </button>
    );
  }

  return (
    <div className="w-full max-w-lg rounded-2xl border border-white/12 bg-[#0b0f14]/96 p-3 shadow-[0_24px_100px_rgba(2,6,23,0.55)]">
      <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
        <span className="text-slate-500">⌕</span>
        <input autoFocus placeholder="Type a command..." className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-600" />
        <button type="button" onClick={() => setOpen(false)} className="rounded border border-white/10 px-2 py-1 text-[0.65rem] text-slate-500 hover:text-white">Esc</button>
      </div>
      <div className="mt-2 space-y-1">
        {commands.map((command, index) => (
          <button key={command.label} type="button" className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${index === 0 ? "bg-[#40E0D0]/10" : "hover:bg-white/[0.05]"}`}>
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-xs font-bold text-slate-300">{command.key}</span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-white">{command.label}</span>
              <span className="mt-0.5 block text-xs text-slate-500">{command.detail}</span>
            </span>
            <span className="text-slate-600">↵</span>
          </button>
        ))}
      </div>
    </div>
  );
}
