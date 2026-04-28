import Link from "next/link";
import { site, whatsappHref } from "@/lib/site";

const nav = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] bg-coal">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-white">
              88 <span className="text-gradient-gold">Society</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-zinc-500">{site.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-accent transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4">
            <Link
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-accent/40 hover:text-white"
            >
              WhatsApp
            </Link>
            <Link
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-accent/40 hover:text-white"
            >
              Instagram
            </Link>
          </div>
        </div>
        <p className="mt-12 border-t border-white/[0.06] pt-8 text-center text-xs text-zinc-600">
          © {year} {site.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
