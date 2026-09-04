import type { Metadata } from "next";
import Link from "next/link";
import { AgentStateDiffViewer } from "@/components/ui/agent-state-diff-viewer";

export const metadata: Metadata = {
  title: "Agent State Diff Viewer · edujbarrios-ui",
  description: "Compare agent state snapshots before and after a workflow mutation.",
};

export default function AgentStateDiffShowcase() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/components" className="text-sm font-semibold text-[#d8fffb] transition hover:text-white">Back to components</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#40E0D0]">AI Interfaces</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Agent State Diff Viewer</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">A before-and-after snapshot surface for understanding exactly how an agent changed its goal, risk, blockers, and ownership after an execution step.</p>
        </div>
        <div className="flex justify-center rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-10">
          <AgentStateDiffViewer />
        </div>
      </div>
    </main>
  );
}
