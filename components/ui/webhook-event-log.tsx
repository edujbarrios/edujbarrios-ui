const events = [
  { name: "component.created", time: "14:22", state: "200" },
  { name: "preview.rendered", time: "14:23", state: "200" },
  { name: "docs.synced", time: "14:24", state: "202" },
];

export function WebhookEventLog() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-white/12 bg-[#0b0f14]/88 shadow-2xl">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#40E0D0]">Webhook log</p>
        <span className="h-2.5 w-2.5 rounded-full bg-[#40E0D0] shadow-[0_0_14px_rgba(64,224,208,0.75)]" />
      </div>
      <div className="divide-y divide-white/8">
        {events.map((event) => (
          <div key={event.name} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 px-4 py-3 text-xs">
            <span className="font-semibold text-slate-200">{event.name}</span>
            <time className="text-slate-500">{event.time}</time>
            <span className="rounded-full bg-[#40E0D0]/12 px-2 py-0.5 font-bold text-[#d8fffb]">{event.state}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
