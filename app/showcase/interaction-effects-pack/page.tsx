import Link from "next/link";
import { TiltGlowCardEffect } from "@/components/ui/tilt-glow-card-effect";
import { ScanlineFocusEffect } from "@/components/ui/scanline-focus-effect";

export default function InteractionEffectsPackShowcase() {
  return (
    <main className="min-h-screen bg-[#07090d] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div>
          <Link href="/components" className="text-sm text-slate-400 hover:text-white">← Back to components</Link>
          <h1 className="mt-4 text-3xl font-bold">Interaction Effects Pack</h1>
          <p className="mt-2 max-w-2xl text-slate-400">Two reusable interaction effects for featured cards, diagnostics, and AI-focused interfaces.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid min-h-[440px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6"><TiltGlowCardEffect /></div>
          <div className="grid min-h-[440px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6"><ScanlineFocusEffect /></div>
        </div>
      </div>
    </main>
  );
}
