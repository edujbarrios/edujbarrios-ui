import Link from "next/link";
import { RagQueryExpansion } from "@/components/ui/rag-query-expansion";

export default function RagQueryExpansionShowcase() {
  return (
    <main className="min-h-screen bg-[#07090d] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div>
          <Link href="/" className="text-sm text-slate-400 hover:text-white">← Back to components</Link>
          <h1 className="mt-4 text-3xl font-bold">RAG Query Expansion</h1>
          <p className="mt-2 max-w-2xl text-slate-400">A retrieval planning component for visualizing rewritten queries, candidate counts, source coverage, and retrieval gaps before an answer is generated.</p>
        </div>
        <div className="grid min-h-[600px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <RagQueryExpansion />
        </div>
      </div>
    </main>
  );
}
