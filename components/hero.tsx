import Link from "next/link";
import { BackgroundGlow } from "@/components/background-glow";
import { ComponentPreview } from "@/components/component-preview";
import { categories, components } from "@/lib/components";
import { siteConfig } from "@/lib/config";

const previewSlugs = ["usage-sparkline-card", "prompt-diff-viewer", "data-pipeline-card", "release-checklist"] as const;
const heroStats = [
  { label: "Components", value: components.length },
  { label: "Categories", value: categories.length },
  { label: "License", value: "MPL-2.0" },
] as const;
const heroTags = ["AI interfaces", "Dashboards", "Developer tools"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundGlow />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#40E0D0]/60 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 lg:py-24">
        <div className="relative z-10 flex flex-col justify-center">
          <p className="inline-flex w-fit rounded-full border border-[#40E0D0]/24 bg-[#40E0D0]/10 px-3 py-1 text-sm font-medium text-[#d8fffb]">
            Built by Eduardo J. Barrios / edujbarrios
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Copy-paste UI components for sharp product builders.
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-[#d8fffb]">{siteConfig.tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">{siteConfig.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {heroTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/components"
              className="rounded-full bg-[#40E0D0] px-5 py-3 text-sm font-bold text-[#0b0f14] transition hover:bg-[#7ff2e8]"
            >
              Explore Components
            </Link>
            <a
              href={siteConfig.links.github}
              className="rounded-full border border-white/12 px-5 py-3 text-sm font-bold text-white transition hover:border-[#a78bfa]/40 hover:bg-[#a78bfa]/10"
            >
              View on GitHub
            </a>
          </div>
          <dl className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-lg border border-white/12 bg-[#0b0f14]/70 shadow-2xl backdrop-blur">
            {heroStats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 p-4 last:border-r-0">
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-slate-500">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-black text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative z-10 grid gap-4 sm:grid-cols-2">
          <div className="absolute -right-8 -top-8 hidden rounded-full border border-[#40E0D0]/20 bg-[#40E0D0]/10 px-4 py-2 text-xs font-semibold text-[#d8fffb] shadow-2xl backdrop-blur lg:block">
            Live previews, source included
          </div>
          {previewSlugs.map((slug) => (
            <div key={slug} className="rounded-lg bg-white/[0.03] p-2 even:translate-y-6">
              <ComponentPreview slug={slug} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
