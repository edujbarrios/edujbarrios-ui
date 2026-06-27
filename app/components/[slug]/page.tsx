import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/code-block";
import { ComponentCard } from "@/components/component-card";
import { ComponentPreview } from "@/components/component-preview";
import { components, getComponent, getRelatedComponents } from "@/lib/components";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return components.map((component) => ({ slug: component.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponent(slug);

  if (!component) {
    return {};
  }

  return {
    title: `${component.name} · edujbarrios-ui`,
    description: component.description,
  };
}

export default async function ComponentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const component = getComponent(slug);

  if (!component) {
    notFound();
  }

  const related = getRelatedComponents(component);

  return (
    <article className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Link href="/components" className="text-sm font-semibold text-[#d8fffb] transition hover:text-white">
        Back to components
      </Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#40E0D0]">{component.category}</p>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">{component.name}</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">{component.description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {component.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-white/7 px-3 py-1 text-xs text-slate-300">
                {tag}
              </span>
            ))}
          </div>
          <div className="glass mt-8 rounded-lg p-5">
            <h2 className="text-sm font-semibold text-white">Installation</h2>
            <p className="mt-2 text-sm text-slate-400">Copy and paste the code into your project.</p>
          </div>
          {component.accessibility ? (
            <div className="glass mt-4 rounded-lg p-5">
              <h2 className="text-sm font-semibold text-white">Accessibility notes</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{component.accessibility}</p>
            </div>
          ) : null}
        </div>
        <ComponentPreview slug={component.slug} large />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <CodeBlock code={component.code} />
        <CodeBlock code={component.usage} label="Usage" />
      </div>

      {related.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white">Related components</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <ComponentCard key={item.slug} component={item} />
            ))}
          </div>
        </section>
      ) : null}
    </article>
  );
}
