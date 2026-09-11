import { ReasoningBudgetTuner } from "@/components/ui/reasoning-budget-tuner";

export default function ReasoningBudgetTunerShowcase() {
  return (
    <main className="min-h-screen bg-black px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">AI Interface Showcase</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Reasoning Budget Tuner</h1>
          <p className="mt-4 text-base leading-7 text-slate-400">Compare reasoning effort profiles before execution using explicit latency, cost, and quality tradeoffs.</p>
        </div>
        <ReasoningBudgetTuner />
      </div>
    </main>
  );
}
