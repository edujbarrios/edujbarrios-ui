const variables = [{ name: "audience", value: "Product leaders", type: "string" }, { name: "tone", value: "Concise", type: "enum" }, { name: "max_items", value: "5", type: "number" }];

export function PromptVariableEditor() {
  return <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
    <header className="flex items-start justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Prompt variables</p><h3 className="mt-1 text-base font-bold text-white">Weekly summary</h3></div><span className="rounded-full bg-[#a78bfa]/12 px-2.5 py-1 text-[0.65rem] font-bold text-[#c4b5fd]">3 inputs</span></header>
    <div className="mt-4 space-y-2">{variables.map((variable) => <label key={variable.name} className="grid grid-cols-[1fr_1.25fr] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3"><span><span className="block font-mono text-xs font-semibold text-slate-200">{`{{${variable.name}}}`}</span><span className="mt-1 block text-[0.65rem] text-slate-500">{variable.type}</span></span><input defaultValue={variable.value} className="min-w-0 rounded-md border border-white/10 bg-[#0b0f14] px-2.5 py-2 text-xs text-white outline-none focus:border-[#40E0D0]/40" /></label>)}</div>
    <div className="mt-3 flex gap-2"><button type="button" className="flex-1 rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200">Preview</button><button type="button" className="flex-1 rounded-full bg-[#40E0D0] px-4 py-2.5 text-xs font-bold text-[#0b0f14]">Run prompt</button></div>
  </section>;
}
