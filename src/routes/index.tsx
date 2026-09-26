import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { track, trackMeta } from "@/lib/analytics";
import {
  ArrowRight,
  Ban,
  CalendarCheck,
  Check,
  Layers,
  Mail,
  MapPin,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  Truck,
  X,
} from "lucide-react";

import logo from "@/assets/brand/logo.png";
import toteIcon from "@/assets/brand/tote-icon.png";
import smallPhoto from "@/assets/packages/small.webp";
import homePhoto from "@/assets/packages/home.webp";
import familyPhoto from "@/assets/packages/family.webp";

// Tally form that people use to request an appointment.
// Paste the form ID (the part after tally.so/r/ in your form link) to turn the embed on.
const TALLY_FORM_ID = "xXK16d";
const CONTACT_EMAIL = "info@mauimovingtotes.com";

// Link previews need an absolute URL. The file lives in public/og-image.png.
const SHARE_IMAGE = "https://www.mauimovingtotes.com/og-image.png";

const SITE_TITLE = "MAUI MOVING TOTES — Reusable moving totes delivered on Maui";
const SITE_DESCRIPTION =
  "Rent tough, stackable moving totes on Maui. We deliver, you move, we pick them up. No cardboard, no tape, no hassle. Request an appointment today.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.mauimovingtotes.com/" },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "MAUI MOVING TOTES: Moving? Skip the cardboard." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://www.mauimovingtotes.com/" }],
  }),
});

const NAV = [
  { label: "How It Works", href: "#how" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

const BOOK_CTA = "Request an Appointment";

const TIERS = [
  {
    name: "Small Move",
    price: "$99",
    totes: "20 reusable moving totes",
    extra: "+ 2 dollies",
    blurb: "Great for studios, dorms, and partial moves.",
    img: smallPhoto as string | null,
    featured: false,
  },
  {
    name: "Home Move",
    price: "$149",
    totes: "35 reusable moving totes",
    extra: "+ 2 dollies",
    blurb: "Ideal for 1–2 bedroom homes and condos.",
    img: homePhoto as string | null,
    featured: true,
  },
  {
    name: "Family Home Move",
    price: "$199",
    totes: "50 reusable moving totes",
    extra: "+ 4 dollies",
    blurb: "Best for families and larger moves.",
    img: familyPhoto as string | null,
    featured: false,
  },
];

const FAQS = [
  {
    q: "Do you deliver and pick up?",
    a: "Yes. We bring the totes to your door and collect them from your new place when you're done — both included.",
  },
  {
    q: "Do I need tape?",
    a: "Never. The lids snap shut and the totes stack securely, so there's no tape, no cutting, and no assembly.",
  },
  {
    q: "How long is the rental?",
    a: "Packages are priced per week. Keep them longer and we'll simply extend at the weekly rate.",
  },
  {
    q: "What if I need more boxes?",
    a: "Just tell us and we'll top up your order before or during your rental.",
  },
];

const STRIP = ["No Cardboard", "No Tape", "We Deliver", "We Pick Up", "Stack & Go", "Maui Moves"];

const pop = "border-2 border-ink shadow-[5px_5px_0_0_var(--ink)]";
const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-6 py-3.5 font-display text-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none";

function BookButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="#book"
      className={`${btnBase} bg-primary text-ink shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[6px_6px_0_0_var(--ink)] ${className}`}
    >
      {BOOK_CTA} <ArrowRight className="size-5" />
    </a>
  );
}

function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#top" className="inline-flex items-center" aria-label="MAUI MOVING TOTES home">
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

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl bg-card ${pop}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display text-lg">{q}</span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink bg-primary">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      {open && <p className="px-5 pb-5 text-muted-foreground">{a}</p>}
    </div>
  );
}

function PackagePhoto({ src, name }: { src: string | null; name: string }) {
  if (src) {
    return (
      <img
        src={src}
        alt={`${name} package of moving totes`}
        loading="lazy"
        className="aspect-square w-full rounded-xl border-2 border-ink bg-white object-cover"
      />
    );
  }
  return (
    <div className="grid aspect-square w-full place-items-center rounded-xl border-2 border-dashed border-ink/40 bg-muted">
      <img src={toteIcon} alt="" className="w-24 opacity-30 grayscale" />
    </div>
  );
}

// Loads Tally's embed script (auto-resizes the form) and reports completed submissions.
function TallyEmbed() {
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (typeof e.data !== "string" || !e.data.includes("Tally.FormSubmitted")) return;
      try {
        // Only the event name is read. The submitted answers are never touched or forwarded.
        if ((JSON.parse(e.data) as { event?: string }).event !== "Tally.FormSubmitted") return;
      } catch {
        return;
      }
      track("generate_lead");
      trackMeta("Lead");
    };
    window.addEventListener("message", onMessage);

    const existing = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
    const load = () =>
      (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally?.loadEmbeds();
    if (existing) {
      load();
    } else {
      const s = document.createElement("script");
      s.src = "https://tally.so/widgets/embed.js";
      s.async = true;
      s.onload = load;
      document.body.appendChild(s);
    }
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      data-tally-src={`https://tally.so/embed/${TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
      title="Request an appointment"
      loading="lazy"
      width="100%"
      height="420"
      className="border-0"
    />
  );
}

function Index() {
  // Count clicks on every "Request an Appointment" button.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest('a[href="#book"]');
      if (!link) return;
      const section = link.closest("section, header, footer");
      track("book_cta_click", {
        label: (link.textContent ?? "").trim(),
        location: section?.id || section?.tagName.toLowerCase() || "page",
      });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div id="top" className="min-h-screen scroll-smooth font-body text-ink antialiased">
      {/* Header */}
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
          <a
            href="#book"
            className={`${btnBase} bg-primary px-5 py-2.5 text-base shadow-[3px_3px_0_0_var(--ink)] hover:shadow-[5px_5px_0_0_var(--ink)]`}
          >
            <span className="hidden sm:inline">{BOOK_CTA}</span>
            <span className="sm:hidden">Book</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-ink bg-primary">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(var(--ink) 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-[1.05fr_1fr] md:py-20">
          <div className="animate-[rise_0.6s_var(--ease-isle)_both]">
            <p className="inline-block -rotate-2 rounded-full border-2 border-ink bg-background px-4 py-1.5 font-display text-base">
              Reusable moving totes · Maui, HI
            </p>
            <h1 className="mt-5 text-6xl leading-[0.95] text-balance sm:text-7xl lg:text-[5.5rem]">
              Moving?
              <br />
              Skip the{" "}
              <span className="whitespace-nowrap underline decoration-[6px] underline-offset-[6px]">
                cardboard.
              </span>
            </h1>
            <p className="mt-6 max-w-[42ch] text-xl font-semibold text-pretty">
              We drop off tough, stackable totes. You move. We pick them up. No tape, no boxes to
              build, no trash to haul.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <BookButton />
              <a
                href="#packages"
                className={`${btnBase} bg-background shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[6px_6px_0_0_var(--ink)]`}
              >
                See Packages
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-[stackin_0.8s_var(--ease-isle)_0.1s_both] md:max-w-none">
            <div
              className={`rounded-[2rem] bg-background p-6 sm:p-8 ${pop} shadow-[10px_10px_0_0_var(--ink)]`}
            >
              <img
                src={logo}
                alt="MAUI MOVING TOTES logo"
                width={1200}
                height={745}
                className="w-full"
              />
            </div>
            <span className="absolute -top-4 -right-2 rotate-6 rounded-2xl border-2 border-ink bg-background px-4 py-2 font-display text-lg shadow-[4px_4px_0_0_var(--ink)]">
              Delivery + pickup included
            </span>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="overflow-hidden border-b-2 border-ink bg-ink py-3 text-primary" aria-hidden>
        <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 whitespace-nowrap font-display text-2xl">
          {[...STRIP, ...STRIP, ...STRIP, ...STRIP].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t} <span className="text-background">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* How it works */}
      <section id="how" className="border-b-2 border-ink py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl">How It Works</h2>
            <p className="mt-3 text-lg text-muted-foreground">Three easy steps. That's it.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "We Deliver",
                copy: "We bring clean, reusable moving totes right to your door.",
                icon: Truck,
                tilt: "md:-rotate-1",
              },
              {
                n: "2",
                title: "You Move",
                copy: "Pack, snap the lids shut, and stack with ease. No tape needed.",
                icon: Layers,
                tilt: "md:rotate-1",
              },
              {
                n: "3",
                title: "We Pick Them Up",
                copy: "When you're done, we'll come get them. Nothing to break down or throw away.",
                icon: MapPin,
                tilt: "md:-rotate-1",
              },
            ].map((s) => (
              <div key={s.n} className={`rounded-3xl bg-card p-7 ${pop} ${s.tilt}`}>
                <div className="flex items-center justify-between">
                  <span className="grid size-14 place-items-center rounded-full border-2 border-ink bg-primary font-display text-3xl">
                    {s.n}
                  </span>
                  <s.icon className="size-10" strokeWidth={2.2} />
                </div>
                <h3 className="mt-6 text-3xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="border-b-2 border-ink bg-secondary py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl">Choose Your Move</h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Simple, transparent weekly pricing.
            </p>
          </div>
          <div className="mt-14 grid items-start gap-7 md:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl p-6 ${pop} ${
                  t.featured ? "bg-primary md:-mt-5 md:pb-8" : "bg-card"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rotate-2 rounded-full border-2 border-ink bg-ink px-4 py-1 font-display text-base whitespace-nowrap text-primary">
                    Most popular
                  </span>
                )}
                <PackagePhoto src={t.img} name={t.name} />
                <h3 className="mt-5 text-3xl">{t.name}</h3>
                <p className="mt-2 flex items-baseline gap-1.5">
                  <span className="font-display text-6xl leading-none">{t.price}</span>
                  <span className="text-lg font-bold">/ week</span>
                </p>
                <p className="mt-4 text-lg font-extrabold">{t.totes}</p>
                {t.extra && <p className="text-lg font-extrabold">{t.extra}</p>}
                <p className={`mt-2 ${t.featured ? "text-ink/80" : "text-muted-foreground"}`}>
                  {t.blurb}
                </p>
                <a
                  href="#book"
                  className={`${btnBase} mt-6 w-full shadow-[4px_4px_0_0_var(--ink)] hover:shadow-[6px_6px_0_0_var(--ink)] ${
                    t.featured ? "bg-background" : "bg-primary"
                  }`}
                >
                  Book This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cardboard vs totes */}
      <section className="border-b-2 border-ink py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <h2 className="text-center text-5xl md:text-6xl">Cardboard vs. Totes</h2>
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-ink bg-muted p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border-2 border-ink bg-background">
                  <Ban className="size-5" />
                </span>
                <h3 className="text-3xl">Cardboard</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Buy boxes (over and over)",
                  "Assemble each box",
                  "Use tape",
                  "Crush easily",
                  "Dispose afterward",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-lg text-muted-foreground">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-ink bg-background">
                      <X className="size-3.5" strokeWidth={3} />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t-2 border-ink/20 pt-4 font-bold text-muted-foreground">
                Expensive, flimsy, and frustrating.
              </p>
            </div>
            <div className={`rounded-3xl bg-primary p-7 ${pop} shadow-[8px_8px_0_0_var(--ink)]`}>
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full border-2 border-ink bg-background">
                  <ShieldCheck className="size-5" />
                </span>
                <h3 className="text-3xl">Our Totes</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Delivered ready to use",
                  "No assembly",
                  "No tape",
                  "Stack securely",
                  "Weather-resistant",
                  "We pick them up",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-bold">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-ink bg-ink text-primary">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t-2 border-ink/30 pt-4 font-extrabold">
                Convenient, sturdy, and stress-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Maui */}
      <section className="border-b-2 border-ink bg-ink py-16 text-background md:py-20">
        <div className="mx-auto grid max-w-6xl items-stretch gap-6 px-5 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl text-primary">Built for Maui Moves</h2>
            <p className="mt-4 text-lg text-background/80">
              We proudly deliver and pick up across Maui's main communities — from Upcountry to
              Central, South, and West Maui.
            </p>
            <p className="mt-3 text-background/80">
              Not sure if we cover your address? Request an appointment and we'll confirm.
            </p>
          </div>
          <div className="flex items-center rounded-3xl border-2 border-primary p-7">
            <ul className="space-y-4">
              {["West Maui", "Central Maui", "Upcountry", "South Maui"].map((a) => (
                <li key={a} className="flex items-center gap-3 font-display text-2xl">
                  <MapPin className="size-6 shrink-0 text-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center rounded-3xl border-2 border-primary p-7">
            <ul className="space-y-4">
              {[
                { icon: Truck, copy: "Local delivery, local service" },
                { icon: MapPin, copy: "Serving Maui's main communities" },
                { icon: PackageCheck, copy: "Delivery and pickup included" },
              ].map((i) => (
                <li key={i.copy} className="flex items-center gap-3 text-lg font-bold">
                  <i.icon className="size-6 shrink-0 text-primary" />
                  {i.copy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Book an appointment */}
      <section id="book" className="scroll-mt-20 border-b-2 border-ink bg-primary py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:grid-cols-5">
          <div className="md:col-span-2">
            <span className="inline-block rotate-2 rounded-full border-2 border-ink bg-background px-4 py-1.5 font-display text-base">
              Takes about a minute
            </span>
            <h2 className="mt-5 text-5xl text-balance md:text-6xl">Ready to Move Easy?</h2>
            <p className="mt-4 max-w-[36ch] text-xl font-semibold">
              Tell us a little about your move and pick a time. We'll take it from there.
            </p>
            <ul className="mt-6 space-y-3 text-lg font-bold">
              {[
                "No payment required to request",
                "Delivery + pickup included",
                "Real people, right here on Maui",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border-2 border-ink bg-ink text-primary">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`rounded-3xl bg-background p-5 sm:p-7 md:col-span-3 ${pop} shadow-[8px_8px_0_0_var(--ink)]`}
          >
            {TALLY_FORM_ID ? (
              <TallyEmbed />
            ) : (
              <div className="py-8 text-center">
                <CalendarCheck className="mx-auto size-12" />
                <h3 className="mt-4 text-3xl">Appointment form coming soon</h3>
                <p className="mx-auto mt-2 max-w-[34ch] text-muted-foreground">
                  In the meantime, email us and we'll get you booked.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Appointment%20request`}
                  className={`${btnBase} mt-6 bg-primary shadow-[4px_4px_0_0_var(--ink)]`}
                >
                  <Mail className="size-5" /> Email us
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl">Got Questions?</h2>
            <p className="mt-3 text-lg text-muted-foreground">Quick answers to common ones.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {FAQS.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-ink bg-ink text-background">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-10 md:grid-cols-3">
          <div className="inline-block w-fit rounded-2xl bg-background p-2">
            <Logo small />
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-2 font-display text-lg">
            {[...NAV, { label: BOOK_CTA, href: "#book" }].map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <ul className="space-y-2 md:text-right">
            <li className="flex items-center gap-2.5 md:justify-end">
              <Mail className="size-4 text-primary" /> {CONTACT_EMAIL}
            </li>
            <li className="flex items-center gap-2.5 md:justify-end">
              <MapPin className="size-4 text-primary" /> Maui, HI
            </li>
          </ul>
        </div>
        <div className="border-t-2 border-background/20 bg-primary text-ink">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} MAUI MOVING TOTES. All rights reserved.</span>
            <span>Stack it. Move it. Done.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
