import type { Metadata } from "next";
import Link from "next/link";
import { RetrievalCoverageRadar } from "@/components/ui/retrieval-coverage-radar";

export const metadata: Metadata = {
  title: "Retrieval Coverage Radar · edujbarrios-ui",
  description: "A topic-level retrieval coverage and evidence gap surface.",
};

export default function RetrievalCoverageRadarShowcase() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/components" className="text-sm font-semibold text-[#d8fffb] transition hover:text-white">Back to components</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#40E0D0]">AI Interfaces</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Retrieval Coverage Radar</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">A source-coverage surface for spotting well-supported topics, weak retrieval areas, and the exact evidence gaps that should be filled before synthesis.</p>
        </div>
        <div className="flex justify-center rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-10">
          <RetrievalCoverageRadar />
        </div>
      </div>
    </main>
  );
}
