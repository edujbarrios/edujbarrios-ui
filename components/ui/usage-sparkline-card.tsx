const bars = ["h-5", "h-8", "h-6", "h-10", "h-7", "h-12", "h-9"];

export function UsageSparklineCard() {
  return (
    <section className="w-full max-w-xs rounded-lg border border-white/12 bg-[#0b0f14]/86 p-5 shadow-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Usage trend</p>
      <div className="mt-4 flex h-16 items-end gap-2">
        {bars.map((bar, index) => (
          <span key={`${bar}-${index}`} className={`${bar} flex-1 rounded-t bg-gradient-to-t from-[#40E0D0] to-[#a78bfa]`} />
        ))}
      </div>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-3xl font-black text-white">12.4k</span>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">+18%</span>
      </div>
    </section>
  );
}
