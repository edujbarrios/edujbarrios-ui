import Link from "next/link";
import { AuroraBorderEffect } from "@/components/ui/aurora-border-effect";
import { SpotlightGridEffect } from "@/components/ui/spotlight-grid-effect";

export default function EffectsPackShowcase() {
  return (
    <main className="min-h-screen bg-[#07090d] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div>
          <Link href="/components" className="text-sm text-slate-400 hover:text-white">← Back to components</Link>
          <h1 className="mt-4 text-3xl font-bold">Effects Pack</h1>
          <p className="mt-2 max-w-2xl text-slate-400">Two lightweight reusable visual effects for highlighted cards, AI states, empty states, and dashboard panels.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid min-h-[460px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6"><AuroraBorderEffect /></div>
          <div className="grid min-h-[460px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6"><SpotlightGridEffect /></div>
        </div>
      </div>
    </main>
  );
}
