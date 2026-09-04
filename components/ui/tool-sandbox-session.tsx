const capabilities = [
  { name: "Filesystem", scope: "/workspace", status: "Allowed" },
  { name: "Network", scope: "api.example.com", status: "Restricted" },
  { name: "Shell", scope: "read-only commands", status: "Allowed" },
  { name: "Secrets", scope: "none mounted", status: "Blocked" },
];

const events = [
  { time: "00:02", action: "Read package.json", result: "Allowed" },
  { time: "00:05", action: "GET api.example.com/v2/status", result: "Allowed" },
  { time: "00:08", action: "Read ~/.ssh/id_ed25519", result: "Blocked" },
];

const statusClass: Record<string, string> = {
  Allowed: "text-emerald-300",
  Restricted: "text-amber-300",
  Blocked: "text-rose-300",
};

export function ToolSandboxSession() {
  return (
    <section className="w-full max-w-md rounded-2xl border border-white/10 bg-[#080c11] p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-300">Tool sandbox</p>
          <h3 className="mt-1 text-base font-bold text-white">Ephemeral execution session</h3>
          <p className="mt-1 text-xs text-slate-400">Expose the exact capabilities an agent has before it executes tools.</p>
        </div>
        <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-right">
          <p className="text-[0.6rem] uppercase tracking-wider text-emerald-200/70">TTL</p>
          <strong className="text-sm tabular-nums text-emerald-200">04:52</strong>
        </div>
      </header>

      <div className="mt-4 grid grid-cols-2 gap-2">
        {capabilities.map((capability) => (
          <div key={capability.name} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold text-white">{capability.name}</p>
              <span className={`text-[0.58rem] font-semibold ${statusClass[capability.status]}`}>{capability.status}</span>
            </div>
            <p className="mt-1 truncate text-[0.64rem] text-slate-500">{capability.scope}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
        <div className="flex items-center justify-between">
          <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-slate-400">Audit trail</p>
          <span className="text-[0.6rem] text-slate-600">3 events</span>
        </div>
        <ol className="mt-2 space-y-2">
          {events.map((event) => (
            <li key={`${event.time}-${event.action}`} className="grid grid-cols-[38px_1fr_auto] items-center gap-2 text-[0.65rem]">
              <span className="font-mono text-slate-600">{event.time}</span>
              <span className="truncate text-slate-300">{event.action}</span>
              <span className={`font-semibold ${statusClass[event.result]}`}>{event.result}</span>
            </li>
          ))}
        </ol>
      </div>

      <footer className="mt-3 flex items-center justify-between rounded-xl border border-white/[0.07] p-3">
        <div><p className="text-[0.6rem] text-slate-500">Isolation</p><strong className="text-xs text-white">Fresh container · no persistence</strong></div>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[0.6rem] font-semibold text-emerald-200">Contained</span>
      </footer>
    </section>
  );
}
