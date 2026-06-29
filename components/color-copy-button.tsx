"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const brandColor = "#40E0D0";
const colorPresets = [
  { label: "Teal", value: brandColor },
  { label: "Violet", value: "#a78bfa" },
  { label: "Orange", value: "#fb923c" },
  { label: "Sky", value: "#38bdf8" },
] as const;

type ColorCopyButtonProps = {
  value: string;
  className?: string;
};

export function ColorCopyButton({ value, className }: ColorCopyButtonProps) {
  const [color, setColor] = useState(brandColor);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(applyAccentColor(value, color));
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div
      className={cn(
        "inline-flex max-w-full items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.06] p-1 shadow-xl",
        className,
      )}
    >
      <label className="relative grid h-8 w-8 shrink-0 cursor-pointer place-items-center rounded-full bg-[conic-gradient(from_90deg,#40E0D0,#a78bfa,#fb923c,#40E0D0)] p-0.5 shadow-[0_0_18px_rgba(64,224,208,0.2)]">
        <span className="grid h-full w-full place-items-center rounded-full bg-[#0b0f14]">
          <span className="h-4 w-4 rounded-full border border-white/20" style={{ backgroundColor: color }} />
        </span>
        <span className="sr-only">Pick component accent color</span>
        <input className="absolute inset-0 cursor-pointer opacity-0" type="color" value={color} onChange={(event) => setColor(event.target.value)} />
      </label>
      <div className="hidden items-center gap-1 sm:flex">
        {colorPresets.map((preset) => (
          <button
            key={preset.value}
            aria-label={`Use ${preset.label} accent`}
            className={cn(
              "h-5 w-5 rounded-full border transition",
              color.toLowerCase() === preset.value.toLowerCase() ? "border-white scale-110" : "border-white/20 hover:border-white/60",
            )}
            style={{ backgroundColor: preset.value }}
            type="button"
            onClick={() => setColor(preset.value)}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-full bg-[#40E0D0] px-3 py-1.5 text-xs font-bold text-[#0b0f14] transition hover:bg-[#7ff2e8]"
      >
        {copied ? "Copied color" : "Copy in color"}
      </button>
    </div>
  );
}

function applyAccentColor(code: string, color: string) {
  const normalized = normalizeHex(color) ?? brandColor;
  const rgb = hexToRgb(normalized);
  const light = mixHex(normalized, "#ffffff", 0.78);
  const hover = mixHex(normalized, "#ffffff", 0.35);
  const dark = mixHex(normalized, "#000000", 0.35);

  return code
    .replace(/#40E0D0/gi, normalized)
    .replace(/#d8fffb/gi, light)
    .replace(/#7ff2e8/gi, hover)
    .replace(/#008080/gi, dark)
    .replace(/rgba\(64,\s*224,\s*208,\s*([^)]+)\)/gi, `rgba(${rgb.r},${rgb.g},${rgb.b},$1)`);
}

function normalizeHex(value: string) {
  const trimmed = value.trim();
  if (/^#[0-9a-f]{6}$/i.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  return null;
}

function hexToRgb(hex: string) {
  const value = hex.replace("#", "");
  return {
    r: Number.parseInt(value.slice(0, 2), 16),
    g: Number.parseInt(value.slice(2, 4), 16),
    b: Number.parseInt(value.slice(4, 6), 16),
  };
}

function mixHex(hex: string, targetHex: string, amount: number) {
  const source = hexToRgb(hex);
  const target = hexToRgb(targetHex);
  const mix = {
    r: Math.round(source.r + (target.r - source.r) * amount),
    g: Math.round(source.g + (target.g - source.g) * amount),
    b: Math.round(source.b + (target.b - source.b) * amount),
  };

  return `#${toHex(mix.r)}${toHex(mix.g)}${toHex(mix.b)}`.toUpperCase();
}

function toHex(value: number) {
  return value.toString(16).padStart(2, "0");
}
