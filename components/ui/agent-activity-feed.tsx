const events = [
  { label: "Searched knowledge base", detail: "12 sources", time: "2s" },
  { label: "Compared candidate answers", detail: "3 drafts", time: "6s" },
  { label: "Prepared final response", detail: "Ready", time: "9s" },
];

export function AgentActivityFeed() {
  return (
    <section className="w-full max-w-sm rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Agent activity</p>
          <h3 className="mt-1 text-base font-bold text-white">Research assistant</h3>
        </div>
        <span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Live</span>
      </header>
      <ol className="mt-4 space-y-2">
        {events.map((event, index) => (
          <li key={event.label} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#40E0D0]/12 text-[0.65rem] font-black text-[#40E0D0]">{index + 1}</span>
            <div>
              <p className="text-xs font-semibold text-slate-200">{event.label}</p>
              <p className="mt-1 text-[0.65rem] text-slate-500">{event.detail}</p>
            </div>
            <time className="text-[0.65rem] font-semibold text-slate-500">{event.time}</time>
          </li>
        ))}
      </ol>
    </section>
  );
}
