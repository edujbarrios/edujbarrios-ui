import { SearchAndFilter } from "@/components/search-and-filter";
import { categories, components } from "@/lib/components";

const galleryStats = [
  { label: "Components", value: components.length },
  { label: "Categories", value: categories.length },
  { label: "Featured", value: components.filter((component) => component.featured).length },
] as const;

export default function ComponentsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#40E0D0]">Component gallery</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black text-white sm:text-5xl">Search, preview, copy, and paste.</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              A growing set of self-made React components for AI products, dashboards, navigation systems, and polished frontend experiments.
            </p>
          </div>
          <dl className="grid grid-cols-3 overflow-hidden rounded-lg border border-white/12 bg-[#0b0f14]/78 shadow-2xl backdrop-blur">
            {galleryStats.map((stat) => (
              <div key={stat.label} className="border-r border-white/10 p-4 last:border-r-0">
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-500">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-black text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <SearchAndFilter components={components} />
    </>
  );
}
