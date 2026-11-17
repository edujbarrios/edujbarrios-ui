const errors = [
  { code: "429", label: "Rate limited", count: 28, change: "−12%" },
  { code: "500", label: "Server error", count: 9, change: "+3%" },
  { code: "408", label: "Timed out", count: 6, change: "−4%" },
];

export function ApiErrorSummary() {
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fb923c]">API errors</p><h3 className="mt-1 text-base font-bold text-white">Last 24 hours</h3></div>
        <div className="text-right"><p className="text-lg font-black text-white">0.18%</p><p className="text-[0.65rem] text-slate-500">error rate</p></div>
      </header>
      <div className="mt-4 overflow-hidden rounded-lg border border-white/9">
        <table className="w-full text-left">
          <thead className="bg-white/[0.04] text-[0.65rem] text-slate-500"><tr><th className="px-3 py-2 font-semibold">Error</th><th className="px-3 py-2 text-right font-semibold">Count</th><th className="px-3 py-2 text-right font-semibold">Change</th></tr></thead>
          <tbody className="divide-y divide-white/8">{errors.map((error) => <tr key={error.code}><td className="px-3 py-3"><span className="font-mono text-xs font-bold text-[#fb923c]">{error.code}</span><span className="ml-2 text-xs text-slate-300">{error.label}</span></td><td className="px-3 py-3 text-right text-xs font-bold text-white">{error.count}</td><td className="px-3 py-3 text-right text-xs text-slate-400">{error.change}</td></tr>)}</tbody>
        </table>
      </div>
    </section>
  );
}
