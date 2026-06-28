const memories = ["Prefers compact dashboards", "Uses eval scorecards", "Ships with dark themes"];

export function AgentMemoryCard() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#40E0D0]/22 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent memory</p>
          <h3 className="mt-2 text-lg font-bold text-white">Eduardo workspace</h3>
        </div>
        <span className="rounded-full bg-[#40E0D0]/12 px-2.5 py-1 text-xs font-semibold text-[#d8fffb]">3 saved</span>
      </div>
      <ul className="mt-4 space-y-2">
        {memories.map((memory) => (
          <li key={memory} className="flex items-center gap-2 text-sm text-slate-300">
            <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
            {memory}
          </li>
        ))}
      </ul>
    </section>
  );
}
