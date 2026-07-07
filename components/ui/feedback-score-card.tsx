const ratings = [
  { label: "Useful", value: "94%" },
  { label: "Clear", value: "89%" },
  { label: "Fast", value: "96%" },
];

export function FeedbackScoreCard() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#fb923c]/22 bg-[#fb923c]/8 p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#fdba74]">Feedback</p>
          <h3 className="mt-2 text-lg font-bold text-white">Beta reviewers</h3>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold text-orange-50">128 notes</span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {ratings.map((rating) => (
          <div key={rating.label} className="rounded-md border border-white/10 bg-[#0b0f14]/55 p-3 text-center">
            <p className="text-xl font-black text-white">{rating.value}</p>
            <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">{rating.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
