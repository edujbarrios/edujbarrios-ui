const versions = ["v3.2 production", "v3.1 stable", "v2.9 fallback"];

export function PromptVersionSelect() {
  return (
    <label className="grid w-full max-w-sm gap-2 rounded-lg border border-white/12 bg-[#0b0f14]/82 p-4 shadow-2xl">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Prompt version</span>
      <select className="rounded-md border border-[#40E0D0]/24 bg-white/[0.05] px-3 py-2.5 text-sm font-semibold text-white outline-none transition focus:border-[#40E0D0]/60">
        {versions.map((version) => (
          <option key={version}>{version}</option>
        ))}
      </select>
      <span className="text-xs text-slate-400">Pinned for deterministic release reviews</span>
    </label>
  );
}
