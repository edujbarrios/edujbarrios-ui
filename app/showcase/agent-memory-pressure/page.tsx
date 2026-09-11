import { AgentMemoryPressure } from "@/components/ui/agent-memory-pressure";

export default function AgentMemoryPressureShowcase() {
  return (
    <main className="min-h-screen bg-black px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">AI Interface Showcase</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Agent Memory Pressure</h1>
          <p className="mt-4 text-base leading-7 text-slate-400">Inspect persistent context consumption and identify what should be summarized or trimmed before the agent runs out of context headroom.</p>
        </div>
        <AgentMemoryPressure />
      </div>
    </main>
  );
}
