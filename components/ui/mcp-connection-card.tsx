const capabilities = ["Search docs", "Read resources", "Run tools"];

export function McpConnectionCard() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">MCP server</p>
          <h3 className="mt-1 text-base font-bold text-white">Product knowledge</h3>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#40E0D0]" aria-hidden="true" /> Connected
        </span>
      </header>
      <dl className="mt-4 grid grid-cols-2 gap-2 rounded-lg border border-white/9 bg-white/[0.025] p-3">
        <div><dt className="text-[0.65rem] text-slate-500">Transport</dt><dd className="mt-1 text-xs font-semibold text-slate-200">Streamable HTTP</dd></div>
        <div><dt className="text-[0.65rem] text-slate-500">Round trip</dt><dd className="mt-1 text-xs font-semibold text-slate-200">84ms</dd></div>
      </dl>
      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Available capabilities">
        {capabilities.map((capability) => <li key={capability} className="rounded-md border border-white/9 bg-white/[0.04] px-2.5 py-1.5 text-[0.65rem] font-semibold text-slate-300">{capability}</li>)}
      </ul>
      <button type="button" className="mt-4 w-full rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200 transition hover:border-[#40E0D0]/40 hover:text-white">Inspect connection</button>
    </section>
  );
}
