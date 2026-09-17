"use client";

import { useState } from "react";

export function ConfirmDangerButton() {
  const [armed, setArmed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setArmed((value) => !value)}
      className={armed
        ? "inline-flex items-center gap-2 rounded-full border border-red-400/40 bg-red-500 px-5 py-3 text-sm font-bold text-white shadow-[0_0_28px_rgba(239,68,68,0.22)] transition hover:bg-red-400"
        : "inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-200 transition hover:border-red-400/45 hover:bg-red-500/15"
      }
      aria-pressed={armed}
    >
      <span aria-hidden="true">{armed ? "!" : "×"}</span>
      {armed ? "Click again to delete" : "Delete component"}
    </button>
  );
}
