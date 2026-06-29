"use client";

import { useState } from "react";
import { ColorCopyButton } from "@/components/color-copy-button";
import { ComponentPreview } from "@/components/component-preview";
import { brandColor } from "@/lib/color-accent";
import type { ComponentItem } from "@/lib/components";

type ComponentColorPlaygroundProps = {
  component: ComponentItem;
};

export function ComponentColorPlayground({ component }: ComponentColorPlaygroundProps) {
  const [accentColor, setAccentColor] = useState(brandColor);

  return (
    <div className="grid gap-3">
      <ComponentPreview slug={component.slug} large accentColor={accentColor} />
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Preview accent</p>
        <ColorCopyButton value={component.code} color={accentColor} onColorChange={setAccentColor} />
      </div>
    </div>
  );
}
