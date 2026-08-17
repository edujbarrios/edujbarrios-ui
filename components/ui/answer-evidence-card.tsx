const evidence = [
  { source: "Launch brief", claim: "Release date", confidence: 98 },
  { source: "Pricing notes", claim: "Plan limits", confidence: 91 },
  { source: "Support guide", claim: "Migration path", confidence: 86 },
];

export function AnswerEvidenceCard() {
  return (
    <section className="w-full max-w-md rounded-xl border border-white/12 bg-[#0b0f14]/92 p-4 shadow-2xl">
      <header className="flex items-start justify-between gap-4">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Answer evidence</p><h3 className="mt-1 text-base font-bold text-white">3 claims supported</h3></div>
        <span className="rounded-full bg-[#40E0D0]/10 px-2.5 py-1 text-[0.65rem] font-bold text-[#d8fffb]">Verified</span>
      </header>
      <ul className="mt-4 space-y-2">
        {evidence.map((item) => (
          <li key={item.claim} className="grid grid-cols-[1fr_auto] gap-3 rounded-lg border border-white/9 bg-white/[0.025] p-3">
            <div><p className="text-xs font-semibold text-slate-200">{item.claim}</p><p className="mt-1 text-[0.65rem] text-slate-500">{item.source}</p></div>
            <span className="self-center text-xs font-black text-white" aria-label={`${item.confidence}% confidence`}>{item.confidence}%</span>
          </li>
        ))}
      </ul>
      <button type="button" className="mt-3 w-full rounded-full border border-white/12 px-4 py-2.5 text-xs font-bold text-slate-200">Review citations</button>
    </section>
  );
}
