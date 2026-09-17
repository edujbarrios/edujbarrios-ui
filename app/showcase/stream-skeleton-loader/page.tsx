import Link from "next/link";
import { StreamSkeletonLoader } from "@/components/ui/stream-skeleton-loader";

export default function StreamSkeletonLoaderShowcase() {
  return (
    <main className="min-h-screen bg-[#07090d] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div>
          <Link href="/components" className="text-sm text-slate-400 hover:text-white">← Back to components</Link>
          <h1 className="mt-4 text-3xl font-bold">Stream Skeleton Loader</h1>
          <p className="mt-2 max-w-2xl text-slate-400">A streaming-response loader for AI interfaces, combining skeleton text, retrieval context, and lightweight live-state feedback.</p>
        </div>
        <div className="grid min-h-[440px] place-items-center rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <StreamSkeletonLoader />
        </div>
      </div>
    </main>
  );
}
