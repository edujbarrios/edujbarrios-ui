import Link from "next/link";
import { OrbitStatusLoader } from "@/components/ui/orbit-status-loader";

export default function OrbitStatusLoaderShowcase() {
  return (
    <main className="min-h-screen bg-[#07090d] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div>
          <Link href="/components" className="text-sm text-slate-400 hover:text-white">← Back to components</Link>
          <h1 className="mt-4 text-3xl font-bold">Orbit Status Loader</h1>
          <p className="mt-2 max-w-2xl text-slate-400">A compact workflow loader with orbit motion, progress, and status copy for long-running AI actions.</p>
        </div>
        <div className="grid min-h-[440px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <OrbitStatusLoader />
        </div>
      </div>
    </main>
  );
}
