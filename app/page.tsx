import Link from "next/link";
import { ComponentCard } from "@/components/component-card";
import { Hero } from "@/components/hero";
import { galleryComponents as components } from "@/lib/gallery-components";
import { siteConfig } from "@/lib/config";

const principles = [
  { title: "Copy-paste friendly", detail: "Each piece ships with source and usage." },
  { title: "Typed by default", detail: "React and TypeScript stay front and center." },
  { title: "Open-source lab", detail: "Built in public and easy to inspect." },
  { title: "Product-minded", detail: "Patterns for AI tools, dashboards, and flows." },
  { title: "Remix-ready", detail: "Small surfaces you can adapt fast." },
];
const spotlight = [
  { label: "Newest", value: components.slice(-4).map((component) => component.name).join(", ") },
  { label: "Best for", value: "AI workflows, launch reviews, and developer dashboards" },
];

export default function Home() {
  const featured = components.filter((component) => component.featured).slice(-6).reverse();

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-4 md:grid-cols-5">
          {principles.map((principle) => (
            <div key={principle.title} className="glass rounded-lg p-5">
              <span className="block h-1.5 w-10 rounded-full bg-gradient-to-r from-[#40E0D0] to-[#a78bfa]" />
              <p className="mt-4 text-sm font-semibold text-white">{principle.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-400">{principle.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#40E0D0] sm:tracking-[0.24em]">Featured components</p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">Handmade pieces for modern interfaces.</h2>
          </div>
          <Link href="/components" className="text-sm font-semibold text-[#d8fffb] transition hover:text-white">
            Browse the full gallery
          </Link>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {spotlight.map((item) => (
            <div key={item.label} className="min-w-0 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#40E0D0]">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((component) => (
            <ComponentCard key={component.slug} component={component} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="glass grid gap-8 rounded-lg p-5 sm:p-8 md:grid-cols-[1fr_0.78fr] md:p-12">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#fb923c] sm:tracking-[0.24em]">Open lab, public code</p>
            <h2 className="mt-4 text-2xl font-black text-white sm:text-3xl md:text-4xl">Copy a component, remix it, and ship something sharp.</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              {siteConfig.name} is built as a personal open-source lab: practical components, visible source, and a gallery that feels useful the moment it loads.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/components" className="rounded-full bg-[#40E0D0] px-5 py-3 text-center text-sm font-bold text-[#0b0f14]">
                Explore Components
              </Link>
              <a href={siteConfig.links.github} className="rounded-full border border-white/12 px-5 py-3 text-center text-sm font-bold text-white">
                View on GitHub
              </a>
            </div>
          </div>
          <div className="min-w-0 rounded-lg border border-white/10 bg-[#0b0f14]/70 p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#40E0D0]">Gallery pulse</p>
            <dl className="mt-5 grid grid-cols-2 gap-3">
              <div className="min-w-0 rounded-md bg-white/[0.05] p-3 sm:p-4">
                <dt className="text-xs text-slate-500">Total pieces</dt>
                <dd className="mt-2 text-2xl font-black text-white sm:text-3xl">{components.length}</dd>
              </div>
              <div className="min-w-0 rounded-md bg-white/[0.05] p-3 sm:p-4">
                <dt className="text-xs text-slate-500">Featured</dt>
                <dd className="mt-2 text-2xl font-black text-white sm:text-3xl">{featured.length}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-6 text-slate-400">New pieces are added as reusable patterns: preview, source, usage, and accessibility notes.</p>
          </div>
        </div>
      </section>
    </>
  );
}
