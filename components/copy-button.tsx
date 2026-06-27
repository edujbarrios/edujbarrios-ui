"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  value: string;
  label?: string;
  className?: string;
};

export function CopyButton({ value, label = "Copy code", className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "rounded-full border border-[#40E0D0]/20 bg-[#40E0D0]/10 px-3 py-1.5 text-xs font-semibold text-[#d8fffb] transition hover:border-[#40E0D0]/45 hover:bg-[#40E0D0]/16",
        className,
      )}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
