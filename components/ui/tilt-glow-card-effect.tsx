"use client";

import { useState } from "react";

export function TiltGlowCardEffect() {
  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");

  return (
    <div
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        setTransform(`perspective(900px) rotateX(${-y * 7}deg) rotateY(${x * 8}deg)`);
      }}
      onMouseLeave={() => setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)")}
      style={{ transform }}
      className="group relative w-full max-w-md rounded-3xl border border-white/10 bg-[#0b0f14] p-6 transition-transform duration-150 will-change-transform"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-[#40E0D0]/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Tilt glow</p>
        <h3 className="mt-3 text-xl font-bold text-white">Interactive depth card</h3>
        <p className="mt-2 text-sm leading-6 text-slate-400">Subtle pointer-driven perspective and glow for featured cards and interactive surfaces.</p>
      </div>
    </div>
  );
}
