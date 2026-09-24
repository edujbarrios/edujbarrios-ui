"use client";

import { useState } from "react";
import { ColorCopyButton } from "@/components/color-copy-button";
import { GalleryPreview } from "@/components/gallery-preview";
import { brandColor } from "@/lib/color-accent";
import type { ComponentItem } from "@/lib/components";

type ComponentColorPlaygroundProps = {
  component: ComponentItem;
};

export function ComponentColorPlayground({ component }: ComponentColorPlaygroundProps) {
  const [accentColor, setAccentColor] = useState(brandColor);

  return (
    <div className="grid min-w-0 gap-3">
      <div className="mobile-preview-frame">
        <GalleryPreview slug={component.slug} large accentColor={accentColor} />
      </div>
      <div className="flex flex-col items-stretch gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Preview accent</p>
        <ColorCopyButton value={component.code} color={accentColor} onColorChange={setAccentColor} />
      </div>
    </div>
  );
}
