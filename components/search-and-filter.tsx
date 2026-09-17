"use client";

import { useMemo, useState } from "react";
import { ComponentCard } from "@/components/component-card";
import { categories, type ComponentItem, type Difficulty } from "@/lib/components";
import { cn } from "@/lib/utils";

type SearchAndFilterProps = {
  components: ComponentItem[];
};

type SortOption = "name-asc" | "name-desc" | "featured" | "difficulty";

const difficulties: Array<"All" | Difficulty> = ["All", "Beginner", "Intermediate", "Advanced"];
const difficultyRank: Record<Difficulty, number> = {
  Beginner: 0,
  Intermediate: 1,
  Advanced: 2,
};

const componentNameCollator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: "base",
});

export function SearchAndFilter({ components }: SearchAndFilterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState<"All" | Difficulty>("All");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [sort, setSort] = useState<SortOption>("name-asc");

  const categoryCounts = useMemo(() => {
    return categories.reduce<Record<string, number>>((counts, item) => {
      counts[item] = components.filter((component) => component.category === item).length;
      return counts;
    }, {});
  }, [components]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = components.filter((component) => {
      const searchable = [component.name, component.description, component.category, component.difficulty, ...component.tags]
        .join(" ")
        .toLowerCase();
      const matchesQuery = normalizedQuery.length === 0 || searchable.includes(normalizedQuery);
      const matchesCategory = category === "All" || component.category === category;
      const matchesDifficulty = difficulty === "All" || component.difficulty === difficulty;
      const matchesFeatured = !featuredOnly || component.featured;
      return matchesQuery && matchesCategory && matchesDifficulty && matchesFeatured;
    });

    return [...matches].sort((first, second) => {
      if (sort === "name-desc") return componentNameCollator.compare(second.name, first.name);
      if (sort === "featured") {
        const featuredDelta = Number(Boolean(second.featured)) - Number(Boolean(first.featured));
        return featuredDelta || componentNameCollator.compare(first.name, second.name);
      }
      if (sort === "difficulty") {
        const difficultyDelta = difficultyRank[first.difficulty] - difficultyRank[second.difficulty];
        return difficultyDelta || componentNameCollator.compare(first.name, second.name);
      }
      return componentNameCollator.compare(first.name, second.name);
    });
  }, [category, components, difficulty, featuredOnly, query, sort]);

  const hasActiveFilters = query.length > 0 || category !== "All" || difficulty !== "All" || featuredOnly;

  const clearFilters = () => {
    setQuery("");
    setCategory("All");
    setDifficulty("All");
    setFeaturedOnly(false);
    setSort("name-asc");
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="glass rounded-xl p-4 sm:p-5">
        <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-start">
          <label>
            <span className="sr-only">Search components</span>
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-4 grid place-items-center text-slate-500" aria-hidden="true">⌕</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by component, tag, category, difficulty, or use case..."
                className="w-full rounded-lg border border-white/10 bg-[#0b0f14]/70 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#40E0D0]/40"
              />
            </div>
            <span className="mt-2 block text-xs text-slate-500">Searches names, descriptions, tags, categories, and difficulty.</span>
          </label>

          <div className="flex flex-wrap gap-2">
            <select
              aria-label="Filter by difficulty"
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value as "All" | Difficulty)}
              className="rounded-lg border border-white/10 bg-[#0b0f14] px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-[#40E0D0]/40"
            >
              {difficulties.map((item) => <option key={item} value={item}>{item === "All" ? "All difficulties" : item}</option>)}
            </select>
            <select
              aria-label="Sort components"
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className="rounded-lg border border-white/10 bg-[#0b0f14] px-3 py-2.5 text-sm text-slate-200 outline-none focus:border-[#40E0D0]/40"
            >
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
              <option value="featured">Featured first</option>
              <option value="difficulty">Difficulty</option>
            </select>
            <button
              type="button"
              aria-pressed={featuredOnly}
              onClick={() => setFeaturedOnly((value) => !value)}
              className={cn(
                "rounded-lg border px-3 py-2.5 text-sm transition",
                featuredOnly
                  ? "border-[#40E0D0]/45 bg-[#40E0D0]/14 text-[#d8fffb]"
                  : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:text-white",
              )}
            >
              Featured only
            </button>
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1" aria-label="Filter by category">
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
              <span className={category === item ? "ml-2 text-[#d8fffb]/75" : "ml-2 text-slate-500"}>
                {item === "All" ? components.length : categoryCounts[item]}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/8 pt-4 text-xs text-slate-500">
          <span>Showing <b className="font-semibold text-slate-300">{filtered.length}</b> of {components.length} components</span>
          {hasActiveFilters ? (
            <button type="button" onClick={clearFilters} className="font-semibold text-[#d8fffb] transition hover:text-white">Clear filters</button>
          ) : (
            <span>Use filters to narrow the gallery</span>
          )}
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
          <p className="mt-2 text-sm text-slate-400">Try another search term or clear one of the active filters.</p>
          <button type="button" onClick={clearFilters} className="mt-5 rounded-full bg-[#40E0D0] px-4 py-2 text-sm font-semibold text-[#0b0f14]">Reset gallery</button>
        </div>
      )}
    </section>
  );
}
