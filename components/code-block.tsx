import { CopyButton } from "@/components/copy-button";

type CodeBlockProps = {
  code: string;
  label?: string;
};

export function CodeBlock({ code, label = "TypeScript" }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-[#40E0D0]/18 bg-[#05080d] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
      <div className="flex items-center justify-between border-b border-[#40E0D0]/14 bg-[#1b1b1d]/72 px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#40E0D0]">{label}</span>
        <CopyButton value={code} />
      </div>
      <pre className="code-scrollbar max-h-[560px] overflow-auto bg-[radial-gradient(circle_at_20%_0%,rgba(64,224,208,0.08),transparent_24rem)] p-4 text-sm leading-6 text-slate-200">
        <code dangerouslySetInnerHTML={{ __html: highlightCode(code) }} />
      </pre>
    </div>
  );
}

function highlightCode(code: string) {
  const escaped = escapeHtml(code);
  const placeholders: string[] = [];

  function stash(value: string, className: string) {
    const key = `\uE000${placeholders.length}\uE001`;
    placeholders.push(`<span class="${className}">${value}</span>`);
    return key;
  }

  let highlighted = escaped
    .replace(/(&quot;.*?&quot;|&#39;.*?&#39;|`[\s\S]*?`)/g, (match) => stash(match, "code-token-string"))
    .replace(/(\/\/.*$)/gm, (match) => stash(match, "code-token-comment"))
    .replace(/(&lt;\/?)([A-Z][A-Za-z0-9]*|[a-z][A-Za-z0-9-]*)/g, (_match, bracket, tag) => `${bracket}${stash(tag, "code-token-tag")}`)
    .replace(/\b(className|htmlFor|aria-label|placeholder|type|key|style|role|id|href|label|children)\b/g, (match) => stash(match, "code-token-prop"))
    .replace(/\b(export|function|return|const|let|type|import|from|default|if|else|map|true|false|null|undefined)\b/g, (match) =>
      stash(match, "code-token-keyword"),
    )
    .replace(/\b([A-Z][A-Za-z0-9_]+)\b/g, (match) => stash(match, "code-token-component"));

  placeholders.forEach((value, index) => {
    highlighted = highlighted.replaceAll(`\uE000${index}\uE001`, value);
  });

  return highlighted;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
