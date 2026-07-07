"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/components", label: "Components" },
  { href: "/about", label: "Open Source" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f14]/78 shadow-[0_16px_60px_rgba(2,6,23,0.32)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[#40E0D0] via-[#a78bfa] to-[#fb923c] text-sm font-black text-[#0b0f14] shadow-[0_0_28px_rgba(64,224,208,0.22)] transition group-hover:scale-105">
            eu
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">{siteConfig.name}</span>
            <span className="block text-xs text-slate-400">by {siteConfig.handle}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm transition",
                isActivePath(pathname, item.href)
                  ? "bg-[#40E0D0]/14 text-[#d8fffb] shadow-[inset_0_0_0_1px_rgba(64,224,208,0.22)]"
                  : "text-slate-300 hover:bg-white/8 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.links.github}
            className="rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-[#40E0D0]/40 hover:bg-[#40E0D0]/10"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg border border-white/12 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/8 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      <div id="mobile-nav" className={cn("border-t border-white/10 px-4 py-3 md:hidden", !open && "hidden")}>
        <nav className="mx-auto grid max-w-7xl gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-lg px-3 py-2 text-sm transition",
                isActivePath(pathname, item.href) ? "bg-[#40E0D0]/12 text-[#d8fffb]" : "text-slate-200 hover:bg-white/8",
              )}
            >
              {item.label}
            </Link>
          ))}
          <a href={siteConfig.links.github} className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/8">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
