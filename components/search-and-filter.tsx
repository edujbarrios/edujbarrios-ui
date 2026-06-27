"use client";

import { useMemo, useState } from "react";
import { ComponentCard } from "@/components/component-card";
import { categories, type ComponentItem } from "@/lib/components";
import { cn } from "@/lib/utils";

type SearchAndFilterProps = {
  components: ComponentItem[];
};

export function SearchAndFilter({ components }: SearchAndFilterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return components.filter((component) => {
      const matchesQuery = component.name.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || component.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, components, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="glass rounded-lg p-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="flex-1">
            <span className="sr-only">Search components</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by component name..."
              className="w-full rounded-lg border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
            />
          </label>
          <div className="flex gap-2 overflow-x-auto pb-1">
            {["All", ...categories].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={cn(
                  "shrink-0 rounded-full border px-3 py-2 text-sm transition",
                  category === item
                    ? "border-cyan-300/40 bg-cyan-300/14 text-cyan-100"
                    : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white",
                )}
              >
                {item}
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
