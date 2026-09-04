import type { Metadata } from "next";
import Link from "next/link";
import { ConfidenceLedger } from "@/components/ui/confidence-ledger";

export const metadata: Metadata = {
  title: "Confidence Ledger · edujbarrios-ui",
  description: "A claim-level confidence history for agent decisions and evidence.",
};

export default function ConfidenceLedgerShowcase() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/components" className="text-sm font-semibold text-[#d8fffb] transition hover:text-white">Back to components</Link>
      <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#40E0D0]">AI Interfaces</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Confidence Ledger</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">A transparent claim ledger that shows confidence, evidence basis, and how each belief changes as an agent gathers new information.</p>
        </div>
        <div className="flex justify-center rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-10">
          <ConfidenceLedger />
        </div>
      </div>
    </main>
  );
}
