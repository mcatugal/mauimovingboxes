// Header, footer, and small building blocks shared by every route.
import { useState } from "react";
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Menu, X } from "lucide-react";

import logo from "@/assets/brand/logo.png";

export const CONTACT_EMAIL = "info@mauimovingtotes.com";
// Link previews need an absolute URL. The file lives in public/og-image.png.
export const SHARE_IMAGE = "https://www.mauimovingtotes.com/og-image.png";

export const SOCIAL = [
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mauimovingtotes" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/mauimovingtotes" },
];

export const NAV = [
  { label: "How It Works", href: "/#how" },
  { label: "Packages", href: "/#packages" },
  { label: "FAQ", href: "/#faq" },
  { label: "About", href: "/about" },
];

export const BOOK_CTA = "Request an Appointment";

// Shared bold/sticker-style building blocks.
export const pop = "border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]";
export const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3.5 font-display text-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none";

export function BookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="/#book"
      className={`${btnBase} bg-primary text-ink shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[6px_6px_0_0_var(--ink)] ${className}`}
    >
      {BOOK_CTA} <ArrowRight className="size-5" />
    </a>
  );
}

export function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="/" className="inline-flex items-center" aria-label="MAUI MOVING TOTES home">
      <img
        src={logo}
        alt="MAUI MOVING TOTES"
        width={1200}
        height={745}
        className={`w-auto ${small ? "h-14" : "h-12 md:h-14"}`}
      />
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-5">
        <Logo />
        <nav className="hidden items-center gap-8 font-display text-lg md:flex">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-ink/60">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="/#book"
            className={`${btnBase} bg-primary px-5 py-2.5 text-base shadow-[3px_3px_0_0_var(--ink)] hover:shadow-[5px_5px_0_0_var(--ink)]`}
          >
            <span className="hidden sm:inline">{BOOK_CTA}</span>
            <span className="sm:hidden">Book</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col border-t-2 border-ink bg-background font-display text-lg md:hidden">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink/10 px-5 py-4 last:border-b-0"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-2 border-ink bg-ink text-background">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-3">
        <div className="inline-block w-fit rounded-2xl bg-background p-2">
          <Logo small />
        </div>
        <nav className="flex flex-wrap gap-x-7 gap-y-2 font-display text-lg">
          {[...NAV, { label: BOOK_CTA, href: "/#book" }].map((n) => (
            <a key={n.href} href={n.href} className="transition-colors hover:text-primary">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="space-y-2 md:text-right">
          <ul className="space-y-2">
            <li className="flex items-center gap-2.5 md:justify-end">
              <Mail className="size-4 text-primary" /> {CONTACT_EMAIL}
            </li>
            <li className="flex items-center gap-2.5 md:justify-end">
              <MapPin className="size-4 text-primary" /> Maui, HI
            </li>
          </ul>
          <div className="flex gap-2.5 md:justify-end">
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid size-9 place-items-center rounded-full border-2 border-primary text-primary transition-colors hover:bg-primary hover:text-ink"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-background/20 bg-primary text-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} MAUI MOVING TOTES. All rights reserved.</span>
          <span>Stack it. Move it. Done.</span>
        </div>
      </div>
    </footer>
  );
}
