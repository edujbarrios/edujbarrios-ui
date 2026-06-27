import { SearchAndFilter } from "@/components/search-and-filter";
import { components } from "@/lib/components";

export default function ComponentsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#40E0D0]">Component gallery</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-black text-white sm:text-5xl">Search, preview, copy, and paste.</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
          A growing set of self-made React components for AI products, dashboards, navigation systems, and polished frontend experiments.
        </p>
      </section>
      <SearchAndFilter components={components} />
    </>
  );
}
