const attempts = [
  { endpoint: "/billing/events", status: "Delivered", code: 200, time: "84ms" },
  { endpoint: "/crm/sync", status: "Retrying", code: 503, time: "1.8s" },
  { endpoint: "/audit/logs", status: "Delivered", code: 202, time: "112ms" },
];

export function WebhookDeliveryCard() {
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Webhook delivery</p><h3 className="mt-1 text-base font-bold text-white">Recent attempts</h3></div>
        <span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">98.7% healthy</span>
      </header>
      <ul className="mt-4 space-y-2">
        {attempts.map((attempt) => (
          <li key={attempt.endpoint} className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3">
            <div><p className="font-mono text-xs font-semibold text-slate-200">{attempt.endpoint}</p><p className="mt-1 text-[0.65rem] text-slate-500">HTTP {attempt.code} · {attempt.time}</p></div>
            <span className={`rounded-full px-2 py-1 text-[0.65rem] font-bold ${attempt.status === "Delivered" ? "bg-[#40E0D0]/10 text-[#d8fffb]" : "bg-[#fb923c]/10 text-[#fed7aa]"}`}>{attempt.status}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
