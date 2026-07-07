const lineItems = [
  { label: "Input", value: "$0.12" },
  { label: "Output", value: "$0.28" },
  { label: "Cache", value: "-$0.05" },
];

export function CostEstimateCard() {
  return (
    <section className="w-full max-w-xs rounded-lg border border-[#40E0D0]/20 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Run estimate</p>
      <div className="mt-3 flex items-end justify-between">
        <span className="text-4xl font-black text-white">$0.35</span>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">cached</span>
      </div>
      <dl className="mt-4 space-y-2">
        {lineItems.map((item) => (
          <div key={item.label} className="flex justify-between text-sm">
            <dt className="text-slate-400">{item.label}</dt>
            <dd className="font-semibold text-slate-100">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
