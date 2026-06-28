export function ApiKeyField() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      <label htmlFor="api-key" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">
        API key
      </label>
      <div className="mt-3 flex min-w-0 items-center gap-2 rounded-md border border-white/10 bg-[#0b0f14]/80 p-2">
        <input
          id="api-key"
          className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          placeholder="sk_live_************"
          type="password"
        />
        <button className="rounded-md bg-[#40E0D0] px-3 py-1.5 text-xs font-bold text-[#0b0f14]" type="button">
          Save
        </button>
      </div>
      <p className="mt-2 text-xs text-slate-400">Use environment variables in production.</p>
    </div>
  );
}
