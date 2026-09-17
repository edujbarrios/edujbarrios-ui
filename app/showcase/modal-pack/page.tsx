import Link from "next/link";
import { ApprovalModal } from "@/components/ui/approval-modal";
import { CommandPaletteModal } from "@/components/ui/command-palette-modal";

export default function ModalPackShowcase() {
  return (
    <main className="min-h-screen bg-[#07090d] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div>
          <Link href="/components" className="text-sm text-slate-400 hover:text-white">← Back to components</Link>
          <h1 className="mt-4 text-3xl font-bold">Modal Pack</h1>
          <p className="mt-2 max-w-2xl text-slate-400">Two reusable modal patterns: a command palette for fast navigation and an approval modal for sensitive AI actions.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="grid min-h-[460px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6"><CommandPaletteModal /></div>
          <div className="grid min-h-[460px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6"><ApprovalModal /></div>
        </div>
      </div>
    </main>
  );
}
