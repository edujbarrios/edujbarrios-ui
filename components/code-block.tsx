import { CopyButton } from "@/components/copy-button";

type CodeBlockProps = {
  code: string;
  label?: string;
};

export function CodeBlock({ code, label = "TypeScript" }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/12 bg-[#0b0f14]/88">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{label}</span>
        <CopyButton value={code} />
      </div>
      <pre className="max-h-[560px] overflow-auto p-4 text-sm leading-6 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}
