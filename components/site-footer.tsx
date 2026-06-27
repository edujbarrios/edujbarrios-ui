import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-10 text-sm text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Built by Eduardo J. Barrios · Open source on GitHub · Deployed on Vercel</p>
        <div className="flex gap-4">
          <Link href="/components" className="transition hover:text-white">
            Components
          </Link>
          <a href={siteConfig.links.github} className="transition hover:text-white">
            GitHub
          </a>
          <a href={siteConfig.links.live} className="transition hover:text-white">
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}
