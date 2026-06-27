import Link from "next/link";
import { BackgroundGlow } from "@/components/background-glow";
import { ComponentPreview } from "@/components/component-preview";
import { siteConfig } from "@/lib/config";

const previewSlugs = ["neon-gradient-button", "glass-command-card", "ai-chat-input"] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundGlow />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_0.82fr] lg:px-8 lg:py-28">
        <div className="relative z-10">
          <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
            Created by Eduardo J. Barrios · edujbarrios
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            edujbarrios-ui
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-cyan-100">{siteConfig.tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{siteConfig.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/components"
              className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
            >
              Explore Components
            </Link>
            <a
              href={siteConfig.links.github}
              className="rounded-full border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-violet-300/40 hover:bg-violet-300/10"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="relative z-10 grid gap-4">
          {previewSlugs.map((slug) => (
            <div key={slug} className="rounded-lg bg-white/[0.03] p-2">
              <ComponentPreview slug={slug} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
