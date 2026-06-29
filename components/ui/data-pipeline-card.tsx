const nodes = ["Input", "Clean", "Ship"];

export function DataPipelineCard() {
  return (
    <section className="w-full max-w-xs rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Pipeline</p>
      <div className="mt-5 grid grid-cols-3 gap-2">
        {nodes.map((node, index) => (
          <div key={node} className="rounded-md border border-white/10 bg-[#0b0f14]/60 p-2 text-center">
            <span className="mx-auto grid h-8 w-8 place-items-center rounded-full border border-[#40E0D0]/35 bg-[#40E0D0]/12 text-xs font-black text-[#d8fffb]">
              {index + 1}
            </span>
            <span className="mt-2 block text-xs font-semibold text-slate-300">{node}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
