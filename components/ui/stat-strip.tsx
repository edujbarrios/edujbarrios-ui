const stats = [
  { label: "Runs", value: "1.8k" },
  { label: "Pass", value: "98%" },
  { label: "Cost", value: "$42" },
];

export function StatStrip() {
  return (
    <dl className="grid w-full max-w-md grid-cols-3 overflow-hidden rounded-lg border border-[#40E0D0]/20 bg-[#0b0f14]/86 shadow-2xl">
      {stats.map((stat) => (
        <div key={stat.label} className="border-r border-white/10 p-4 last:border-r-0">
          <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">{stat.label}</dt>
          <dd className="mt-2 text-2xl font-black text-white">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
