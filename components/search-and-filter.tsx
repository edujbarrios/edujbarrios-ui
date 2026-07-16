"use client";

import { useMemo, useState } from "react";
import { ComponentCard } from "@/components/component-card";
import { categories, type ComponentItem } from "@/lib/components";
import { cn } from "@/lib/utils";

type SearchAndFilterProps = {
  components: ComponentItem[];
};

const componentNameCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

export function SearchAndFilter({ components }: SearchAndFilterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const sortedComponents = useMemo(
    () => [...components].sort((first, second) => componentNameCollator.compare(first.name, second.name)),
    [components],
  );
  const categoryCounts = useMemo(() => {
    return categories.reduce<Record<string, number>>((counts, item) => {
      counts[item] = components.filter((component) => component.category === item).length;
      return counts;
    }, {});
  }, [components]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return sortedComponents.filter((component) => {
      const searchable = [component.name, component.description, component.category, ...component.tags].join(" ").toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || searchable.includes(normalizedQuery);
      const matchesCategory = category === "All" || component.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, query, sortedComponents]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="glass rounded-lg p-4 sm:p-5">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <label className="flex-1">
            <span className="sr-only">Search components</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by name, tag, category, or use case..."
              className="w-full rounded-lg border border-white/10 bg-[#0b0f14]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#40E0D0]/40"
            />
            <span className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-500">
              <span>Showing {filtered.length} of {components.length} components</span>
              <span aria-label="Sorted alphabetically">A–Z</span>
            </span>
          </label>
          <div className="flex max-w-3xl gap-2 overflow-x-auto pb-1">
            {["All", ...categories].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-2 text-sm transition",
                  category === item
                    ? "border-[#40E0D0]/45 bg-[#40E0D0]/14 text-[#d8fffb]"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white",
                )}
              >
                {item}
                <span className={category === item ? "ml-2 text-[#d8fffb]/75" : "ml-2 text-slate-500"}>{item === "All" ? components.length : categoryCounts[item]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((component) => (
            <ComponentCard key={component.slug} component={component} />
          ))}
        </div>
      ) : (
        <div className="glass mt-8 rounded-lg p-10 text-center">
          <h2 className="text-xl font-semibold text-white">No components found</h2>
          <p className="mt-2 text-sm text-slate-400">Try a different name or category filter.</p>
        </div>
      )}
    </section>
  );
}
