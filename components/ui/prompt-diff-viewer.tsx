const changes = [
  { mark: "-", text: "Write a short answer" },
  { mark: "+", text: "Answer with source-backed steps" },
];

export function PromptDiffViewer() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg border border-white/12 bg-[#0b0f14]/88 shadow-2xl">
      <div className="border-b border-white/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#40E0D0]">Prompt diff</div>
      <div className="grid gap-1 p-3 font-mono text-xs">
        {changes.map((change) => (
          <p key={change.text} className={change.mark === "+" ? "rounded bg-[#40E0D0]/10 px-3 py-2 text-[#d8fffb]" : "rounded bg-[#fb923c]/10 px-3 py-2 text-[#fdba74]"}>
            <span className="mr-2 font-bold">{change.mark}</span>
            {change.text}
          </p>
        ))}
      </div>
    </div>
  );
}
