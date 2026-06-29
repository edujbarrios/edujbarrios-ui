export function ToggleSettingRow() {
  return (
    <div className="flex w-full max-w-sm items-center justify-between gap-4 rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      <div>
        <p className="text-sm font-semibold text-white">Auto-run evals</p>
        <p className="mt-1 text-xs leading-5 text-slate-400">Start checks whenever a prompt version changes.</p>
      </div>
      <button
        aria-pressed="true"
        className="flex h-7 w-12 shrink-0 items-center justify-end rounded-full border border-[#40E0D0]/35 bg-[#40E0D0]/18 p-1"
        type="button"
      >
        <span className="h-5 w-5 rounded-full bg-[#40E0D0] shadow-[0_0_16px_rgba(64,224,208,0.55)]" />
      </button>
    </div>
  );
}
