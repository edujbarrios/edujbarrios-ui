const files = [
  { name: "prompts.csv", progress: "w-[78%]", state: "uploading" },
  { name: "evals.jsonl", progress: "w-full", state: "ready" },
  { name: "screens.zip", progress: "w-[42%]", state: "queued" },
];

export function DatasetUploadQueue() {
  return (
    <section className="w-full max-w-sm rounded-lg border border-white/12 bg-[#0b0f14]/88 p-4 shadow-2xl">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Upload queue</p>
        <span className="text-xs font-semibold text-slate-400">3 files</span>
      </div>
      <div className="mt-4 space-y-3">
        {files.map((file) => (
          <div key={file.name} className="rounded-md border border-white/10 bg-white/[0.04] p-3">
            <div className="flex justify-between gap-3 text-xs font-semibold">
              <span className="text-slate-100">{file.name}</span>
              <span className="text-slate-500">{file.state}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#1b1b1d]">
              <div className={`${file.progress} h-full rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
