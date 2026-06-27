import Link from "next/link";
import { ComponentPreview } from "@/components/component-preview";
import { CopyButton } from "@/components/copy-button";
import type { ComponentItem } from "@/lib/components";

type ComponentCardProps = {
  component: ComponentItem;
};

export function ComponentCard({ component }: ComponentCardProps) {
  return (
    <article className="glow-border rounded-lg bg-slate-950/60 p-px">
      <div className="glass h-full rounded-lg p-4">
        <ComponentPreview slug={component.slug} />
        <div className="mt-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">{component.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{component.name}</h3>
          </div>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{component.difficulty}</span>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-400">{component.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/7 px-2.5 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href={`/components/${component.slug}`}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
          >
            View component
          </Link>
          <CopyButton value={component.code} />
        </div>
      </div>
    </article>
  );
}
