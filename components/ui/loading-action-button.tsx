"use client";

import { useState } from "react";

export function LoadingActionButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    if (loading) return;
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1800);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={loading}
      aria-busy={loading}
      className="group relative inline-flex min-w-44 items-center justify-center overflow-hidden rounded-full border border-[#40E0D0]/35 bg-[#40E0D0] px-5 py-3 text-sm font-bold text-[#071014] shadow-[0_0_30px_rgba(64,224,208,0.18)] transition hover:-translate-y-0.5 hover:bg-[#7ff2e8] disabled:cursor-wait disabled:translate-y-0 disabled:bg-[#40E0D0]/80"
    >
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black/15">
        <span className={loading ? "block h-full w-full origin-left animate-pulse bg-black/45" : "block h-full w-0 bg-black/45"} />
      </span>
      <span className="flex items-center gap-2">
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#071014]/25 border-t-[#071014]" aria-hidden="true" />
        ) : (
          <span aria-hidden="true">↗</span>
        )}
        {loading ? "Publishing…" : "Publish component"}
      </span>
    </button>
  );
}
