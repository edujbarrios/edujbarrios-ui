import Link from "next/link";
import { ComponentCard } from "@/components/component-card";
import { Hero } from "@/components/hero";
import { components } from "@/lib/components";
import { siteConfig } from "@/lib/config";

const principles = [
  "Copy-paste friendly",
  "Built with TypeScript",
  "Open-source on GitHub",
  "Rendered on Vercel",
  "Designed for frontend developers and AI product builders",
];

export default function Home() {
  const featured = components.filter((component) => component.featured);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-5">
          {principles.map((principle) => (
            <div key={principle} className="glass rounded-lg p-5">
              <span className="block h-1.5 w-10 rounded-full bg-gradient-to-r from-cyan-300 to-violet-300" />
              <p className="mt-4 text-sm font-semibold text-white">{principle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Featured components</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Handmade pieces for modern interfaces.</h2>
          </div>
          <Link href="/components" className="text-sm font-semibold text-cyan-100 transition hover:text-white">
            Browse the full gallery
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((component) => (
            <ComponentCard key={component.slug} component={component} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass rounded-lg p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200">Open lab, public code</p>
          <h2 className="mt-4 text-3xl font-black text-white md:text-4xl">Copy a component, remix it, and ship something sharp.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            {siteConfig.name} is built as a personal open-source lab: practical components, visible source, and a gallery that feels useful the moment it loads.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/components" className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950">
              Explore Components
            </Link>
            <a href={siteConfig.links.github} className="rounded-full border border-white/12 px-5 py-3 text-sm font-bold text-white">
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
