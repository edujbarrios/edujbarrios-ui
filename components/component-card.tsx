"use client";

import { memo, useState } from "react";
import Link from "next/link";
import { GalleryPreview } from "@/components/gallery-preview";
import { ColorCopyButton } from "@/components/color-copy-button";
import { CopyButton } from "@/components/copy-button";
import { brandColor } from "@/lib/color-accent";
import type { ComponentItem } from "@/lib/components";

type ComponentCardProps = {
  component: ComponentItem;
};

export const ComponentCard = memo(function ComponentCard({ component }: ComponentCardProps) {
  const [accentColor, setAccentColor] = useState(brandColor);

  return (
    <article className="component-card-shell glow-border min-w-0 h-full rounded-lg bg-[#0b0f14]/70 p-px">
      <div className="component-card-panel glass flex h-full min-w-0 flex-col rounded-lg p-3 sm:p-4">
        <div className="mobile-preview-frame">
          <GalleryPreview slug={component.slug} accentColor={accentColor} />
        </div>
        <div className="mt-4 flex min-h-0 flex-wrap items-start justify-between gap-3 sm:min-h-20">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">{component.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{component.name}</h3>
          </div>
          <span className="shrink-0 rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">{component.difficulty}</span>
        </div>
        <p className="mt-3 min-h-0 text-sm leading-6 text-slate-400 sm:min-h-18">{component.description}</p>
        <div className="mt-4 flex min-h-0 flex-wrap content-start gap-2 sm:min-h-14">
          {component.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white/7 px-2.5 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-1 gap-2 pt-5 sm:flex sm:flex-wrap sm:gap-3">
          <Link
            href={`/components/${component.slug}`}
            prefetch={false}
            className="rounded-full bg-[#40E0D0] px-4 py-2 text-center text-sm font-semibold text-[#0b0f14] transition hover:bg-[#7ff2e8]"
          >
            View component
          </Link>
          <CopyButton value={component.code} />
          <ColorCopyButton value={component.code} color={accentColor} onColorChange={setAccentColor} />
        </div>
      </div>
    </article>
  );
});
