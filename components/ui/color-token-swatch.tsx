const tokens = [
  { name: "brand", value: "#40E0D0" },
  { name: "violet", value: "#a78bfa" },
  { name: "orange", value: "#fb923c" },
];

export function ColorTokenSwatch() {
  return (
    <div className="grid w-full max-w-sm gap-2 rounded-lg border border-white/12 bg-white/[0.06] p-4 shadow-2xl backdrop-blur">
      {tokens.map((token) => (
        <div key={token.name} className="flex items-center justify-between rounded-md border border-white/10 bg-[#0b0f14]/70 px-3 py-2">
          <span className="flex items-center gap-2 text-sm font-semibold text-white">
            <span className="h-5 w-5 rounded-full" style={{ backgroundColor: token.value }} />
            {token.name}
          </span>
          <code className="text-xs text-slate-400">{token.value}</code>
        </div>
      ))}
    </div>
  );
}
