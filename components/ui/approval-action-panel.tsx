const reviewers = ["Design", "Legal", "Ops"];

export function ApprovalActionPanel() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-[#40E0D0]/20 bg-[#0b0f14]/88 p-5 shadow-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Approval</p>
          <h3 className="mt-2 text-lg font-bold text-white">Publish launch prompt</h3>
        </div>
        <span className="rounded-full bg-[#fb923c]/12 px-2.5 py-1 text-xs font-semibold text-[#fdba74]">pending</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {reviewers.map((reviewer) => (
          <span key={reviewer} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300">
            {reviewer}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <button className="flex-1 rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/8" type="button">
          Request edits
        </button>
        <button className="flex-1 rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-bold text-[#0b0f14]" type="button">
          Approve
        </button>
      </div>
    </section>
  );
}
