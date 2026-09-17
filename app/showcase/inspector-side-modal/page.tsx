import Link from "next/link";
import { InspectorSideModal } from "@/components/ui/inspector-side-modal";

export default function InspectorSideModalShowcase() {
  return (
    <main className="min-h-screen bg-[#07090d] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div><Link href="/components" className="text-sm text-slate-400 hover:text-white">← Back to components</Link><h1 className="mt-4 text-3xl font-bold">Inspector Side Modal</h1><p className="mt-2 max-w-2xl text-slate-400">A side-panel modal for inspecting component properties and runtime metadata without leaving the current context.</p></div>
        <div className="grid min-h-[520px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-6"><InspectorSideModal /></div>
      </div>
    </main>
  );
}
