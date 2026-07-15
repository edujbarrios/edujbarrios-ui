const branches = [
  { label: "Concise", meta: "142 tokens", active: false },
  { label: "Balanced", meta: "318 tokens", active: true },
  { label: "Detailed", meta: "624 tokens", active: false },
];

export function ResponseBranchNavigator() {
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-center justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a78bfa]">Response branches</p><h3 className="mt-1 text-base font-bold text-white">Choose an answer direction</h3></div><span className="text-xs font-semibold text-slate-500">2 of 3</span></header>
      <div className="mt-4 grid grid-cols-3 gap-2" role="tablist" aria-label="Response variants">
        {branches.map((branch) => <button key={branch.label} type="button" role="tab" aria-selected={branch.active} className={branch.active ? "rounded-lg border border-[#40E0D0]/35 bg-[#40E0D0]/10 p-2.5 text-left" : "rounded-lg border border-white/9 bg-white/[0.025] p-2.5 text-left"}><span className={branch.active ? "block text-xs font-bold text-[#d8fffb]" : "block text-xs font-semibold text-slate-300"}>{branch.label}</span><span className="mt-1 block text-[0.6rem] text-slate-500">{branch.meta}</span></button>)}
      </div>
      <div className="mt-3 rounded-lg border border-white/9 bg-white/[0.03] p-3" role="tabpanel"><p className="text-xs leading-5 text-slate-300">Start with the highest-impact workflow, validate it with a small evaluation set, then expand the interface around observed user needs.</p><div className="mt-3 flex items-center justify-between border-t border-white/8 pt-3"><span className="text-[0.65rem] text-slate-500">Grounded in 3 sources</span><button type="button" className="text-xs font-bold text-[#40E0D0]">Use this branch</button></div></div>
    </section>
  );
}
