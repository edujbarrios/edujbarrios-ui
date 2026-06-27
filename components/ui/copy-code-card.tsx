export function CopyCodeCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-white/12 bg-slate-950/90">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs text-slate-400">component.tsx</span>
        <button className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">Copy</button>
      </div>
      <pre className="overflow-hidden p-4 text-xs leading-5 text-cyan-100">{`<Button glow>\n  Ship it\n</Button>`}</pre>
    </div>
  );
}
