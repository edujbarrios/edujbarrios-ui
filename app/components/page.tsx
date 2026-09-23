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
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#40E0D0] sm:tracking-[0.24em]">Component gallery</p>
            <h1 className="mt-4 max-w-3xl text-3xl font-black text-white sm:text-5xl">Search, preview, copy, and paste.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:leading-8">
              A growing set of self-made React components for AI products, dashboards, navigation systems, and polished frontend experiments.
            </p>
          </div>
          <dl className="grid min-w-0 grid-cols-3 overflow-hidden rounded-lg border border-white/12 bg-[#0b0f14]/78 shadow-2xl backdrop-blur">
            {galleryStats.map((stat) => (
              <div key={stat.label} className="min-w-0 border-r border-white/10 p-3 last:border-r-0 sm:p-4">
                <dt className="truncate text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-slate-500 sm:text-[0.65rem] sm:tracking-[0.14em]">{stat.label}</dt>
                <dd className="mt-2 text-xl font-black text-white sm:text-2xl">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <SearchAndFilter components={components} />
    </>
  );
}
