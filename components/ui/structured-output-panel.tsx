const fields = [
  { name: "summary", type: "string", required: true },
  { name: "confidence", type: "number", required: true },
  { name: "citations", type: "string[]", required: false },
];

export function StructuredOutputPanel() {
  return (
    <section className="w-full max-w-sm overflow-hidden rounded-xl border border-white/12 bg-[#0b0f14]/92 shadow-2xl">
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Response schema</p>
          <h3 className="mt-1 text-sm font-bold text-white">Research result</h3>
        </div>
        <span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Valid</span>
      </header>
      <dl className="divide-y divide-white/8">
        {fields.map((field) => (
          <div key={field.name} className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3">
            <div>
              <dt className="font-mono text-xs font-semibold text-slate-100">{field.name}</dt>
              <dd className="mt-1 text-[0.65rem] text-slate-500">{field.required ? "Required field" : "Optional field"}</dd>
            </div>
            <span className="rounded-md border border-[#a78bfa]/20 bg-[#a78bfa]/10 px-2 py-1 font-mono text-[0.65rem] text-[#c4b5fd]">{field.type}</span>
          </div>
        ))}
      </dl>
      <footer className="flex items-center justify-between border-t border-white/10 bg-white/[0.025] px-4 py-3">
        <span className="text-[0.65rem] text-slate-500">Strict mode enabled</span>
        <button type="button" className="text-xs font-semibold text-[#40E0D0] transition hover:text-white">Edit schema</button>
      </footer>
    </section>
  );
}
