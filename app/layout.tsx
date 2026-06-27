import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.links.live),
  title: "edujbarrios-ui — Self-made UI components",
  description: "An open-source collection of handcrafted TypeScript UI components by Eduardo J. Barrios.",
  openGraph: {
    title: "edujbarrios-ui — Self-made UI components",
    description: "An open-source collection of handcrafted TypeScript UI components by Eduardo J. Barrios.",
    url: siteConfig.links.live,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "edujbarrios-ui — Self-made UI components",
    description: "An open-source collection of handcrafted TypeScript UI components by Eduardo J. Barrios.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen overflow-hidden">
          <div className="grid-glow pointer-events-none fixed inset-0" />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
