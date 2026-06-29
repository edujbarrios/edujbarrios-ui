const checks = ["Types pass", "Preview built", "Docs updated"];

export function ReleaseChecklist() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Release check</p>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">3/3</span>
      </div>
      <ul className="mt-4 space-y-3">
        {checks.map((check) => (
          <li key={check} className="flex items-center gap-3 text-sm font-semibold text-slate-200">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-[#40E0D0] text-xs font-black text-[#0b0f14]">OK</span>
            {check}
          </li>
        ))}
      </ul>
    </section>
  );
}
