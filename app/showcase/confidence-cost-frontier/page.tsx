import { ConfidenceCostFrontier } from "@/components/ui/confidence-cost-frontier";

export default function ConfidenceCostFrontierShowcase() {
  return (
    <main className="min-h-screen bg-black px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">AI Interface Showcase</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Confidence Cost Frontier</h1>
          <p className="mt-4 text-base leading-7 text-slate-400">Compare candidate AI configurations by estimated cost and confidence to find the point where additional spend stops buying meaningful assurance.</p>
        </div>
        <ConfidenceCostFrontier />
      </div>
    </main>
  );
}
