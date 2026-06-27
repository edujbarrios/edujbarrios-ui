import { siteConfig } from "@/lib/config";

const values = [
  "Personal craft over template sameness",
  "Readable source code before clever abstractions",
  "Components that can survive real product work",
  "Dark-mode-first visuals with practical accessibility notes",
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#40E0D0]">About / Open Source</p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">A small public lab for handcrafted interface pieces.</h1>
      <p className="mt-6 text-base leading-8 text-slate-300">
        {siteConfig.name} is created by {siteConfig.author} as a copy-paste component gallery for frontend developers, AI product builders, and creative engineers.
        The source is designed to stay local, typed, readable, and easy to deploy.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {values.map((value) => (
          <div key={value} className="glass rounded-lg p-5">
            <span className="block h-1.5 w-10 rounded-full bg-gradient-to-r from-[#40E0D0] to-[#fb923c]" />
            <p className="mt-4 font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="glass mt-10 rounded-lg p-6">
        <h2 className="text-xl font-bold text-white">Open-source path</h2>
        <p className="mt-3 leading-7 text-slate-300">
          The project is structured for GitHub and Vercel: no backend, no database, and no hidden service layer. Component metadata lives in TypeScript, previews render locally,
          and every source snippet is available from the gallery.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={siteConfig.links.github} className="rounded-full bg-[#40E0D0] px-5 py-3 text-sm font-bold text-[#0b0f14]">
            Open GitHub repository
          </a>
          <a href={siteConfig.links.live} className="rounded-full border border-white/12 px-5 py-3 text-sm font-bold text-white">
            Visit live site
          </a>
        </div>
      </div>
    </section>
  );
}
