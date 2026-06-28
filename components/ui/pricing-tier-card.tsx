const perks = ["20 components", "Copy source", "MIT-free remix"];

export function PricingTierCard() {
  return (
    <section className="w-full max-w-xs rounded-lg border border-[#40E0D0]/22 bg-white/[0.06] p-5 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Creator kit</p>
      <div className="mt-3 flex items-end gap-2">
        <span className="text-4xl font-black text-white">$0</span>
        <span className="pb-1 text-sm text-slate-400">open source</span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {perks.map((perk) => (
          <li key={perk} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#40E0D0]" />
            {perk}
          </li>
        ))}
      </ul>
    </section>
  );
}
