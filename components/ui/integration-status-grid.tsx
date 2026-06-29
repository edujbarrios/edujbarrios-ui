const integrations = [
  { name: "GitHub", state: "synced" },
  { name: "Vercel", state: "live" },
  { name: "Docs", state: "ready" },
];

export function IntegrationStatusGrid() {
  return (
    <div className="grid w-full max-w-sm grid-cols-3 gap-2">
      {integrations.map((integration) => (
        <div key={integration.name} className="rounded-lg border border-[#40E0D0]/20 bg-[#40E0D0]/8 p-4 text-center shadow-xl">
          <span className="mx-auto block h-2.5 w-2.5 rounded-full bg-[#40E0D0] shadow-[0_0_14px_rgba(64,224,208,0.7)]" />
          <p className="mt-3 text-sm font-bold text-white">{integration.name}</p>
          <p className="mt-1 text-xs text-slate-400">{integration.state}</p>
        </div>
      ))}
    </div>
  );
}
