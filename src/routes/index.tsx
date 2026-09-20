import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  Heart,
  Leaf,
  Layers,
  MapPin,
  Mail,
  Phone,
  Plus,
  Minus,
  Truck,
  Ban,
  Palmtree,
  ArrowRight,
} from "lucide-react";

import heroTotes from "@/assets/hero-totes.jpg";
import mauiScene from "@/assets/maui-scene.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maui Moving Boxes — Reusable moving totes delivered on Maui" },
      {
        name: "description",
        content:
          "Reusable moving boxes delivered to your door on Maui. We drop off clean stackable totes, you move, we pick them up. No cardboard, no tape. Join the waitlist.",
      },
      {
        property: "og:title",
        content: "Maui Moving Boxes — Reusable moving totes delivered on Maui",
      },
      {
        property: "og:description",
        content:
          "Skip the cardboard, tape, and last-minute store runs. Reusable moving totes delivered and picked up across Maui.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const NAV = [
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Join Waitlist", href: "#waitlist" },
];

function Logo({ small = false }: { small?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span
        className={`grid ${small ? "size-8" : "size-10"} place-items-center rounded-xl bg-primary text-primary-foreground`}
      >
        <Layers className={small ? "size-4" : "size-5"} />
      </span>
      <span className="leading-tight">
        <span className="block font-display text-lg font-bold tracking-tight">
          Maui Moving Boxes
        </span>
        <span className="block font-mono text-[9px] tracking-[0.18em] text-primary uppercase">
          Move smarter. A cleaner Maui.
        </span>
      </span>
    </a>
  );
}

function Script({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`font-display text-lg italic text-primary/80 ${className}`}>{children}</p>
  );
}

const TIERS = [
  {
    name: "Small Move",
    price: "$99",
    totes: "20 reusable moving totes",
    extra: null as string | null,
    blurb: "Great for studios, dorms, and partial moves.",
    featured: false,
  },
  {
    name: "Home Move",
    price: "$149",
    totes: "35 reusable moving totes",
    extra: "+ moving dolly",
    blurb: "Ideal for 1–2 bedroom homes and condos.",
    featured: true,
  },
  {
    name: "Family Move",
    price: "$199",
    totes: "50 reusable moving totes",
    extra: "+ 2 dollies",
    blurb: "Best for families and larger moves.",
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

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-line bg-glass backdrop-blur-md">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-display font-semibold tracking-tight">{q}</span>
        {open ? (
          <Minus className="size-4 shrink-0 text-primary" />
        ) : (
          <Plus className="size-4 shrink-0 text-primary" />
        )}
      </button>
      {open && <p className="px-5 pb-4 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}

function WaitlistForm() {
  const [joined, setJoined] = useState(false);

  if (joined) {
    return (
      <div className="rounded-2xl border border-line bg-background/90 p-8 text-center backdrop-blur-xl">
        <h3 className="font-display text-2xl font-bold tracking-tight">You're on the list.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll reach out before we launch in your area of Maui.
        </p>
      </div>
    );
  }

  const field =
    "h-11 w-full rounded-lg border border-line bg-background px-3 text-sm text-ink outline-none placeholder:text-muted-foreground/70 focus:border-primary/60";
  const label = "mb-1.5 block text-xs font-semibold tracking-wide text-ink";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setJoined(true);
      }}
      className="rounded-2xl border border-line bg-background/90 p-6 backdrop-blur-xl md:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input id="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@example.com"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone
          </label>
          <input id="phone" type="tel" placeholder="(808) 555-0123" className={field} />
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <div>
          <label className={label} htmlFor="area">
            Area of Maui
          </label>
          <select id="area" required defaultValue="" className={field}>
            <option value="" disabled>
              Select an area
            </option>
            <option>West Maui</option>
            <option>Central Maui</option>
            <option>South Maui</option>
            <option>Upcountry</option>
            <option>East Maui</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="timeframe">
            When do you expect to move?
          </label>
          <select id="timeframe" required defaultValue="" className={field}>
            <option value="" disabled>
              Select a timeframe
            </option>
            <option>Within a month</option>
            <option>1–3 months</option>
            <option>3–6 months</option>
            <option>Just planning ahead</option>
          </select>
        </div>
        <div>
          <label className={label} htmlFor="package">
            Which package would you most likely rent?
          </label>
          <select id="package" required defaultValue="" className={field}>
            <option value="" disabled>
              Select a package
            </option>
            <option>Small Move — $99 / week</option>
            <option>Home Move — $149 / week</option>
            <option>Family Move — $199 / week</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-5 h-12 w-full rounded-lg bg-primary font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
      >
        Join the Maui Early Access List
      </button>
      <p className="mt-2.5 text-center font-mono text-[11px] text-muted-foreground">
        No payment required. Joining the waitlist does not create a reservation.
      </p>
    </form>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen font-body text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5">
          <Logo />
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#waitlist"
            className="shrink-0 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Join the Waitlist
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div className="animate-[rise_0.6s_var(--ease-isle)_both]">
            <h1 className="font-display text-5xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
              Moving Just Got Easier.
            </h1>
            <div className="mt-4 h-1 w-16 rounded-full bg-primary" />
            <h2 className="mt-5 max-w-[26ch] font-display text-xl font-semibold tracking-tight text-pretty md:text-2xl">
              Reusable moving boxes delivered to your door on Maui.
            </h2>
            <p className="mt-4 max-w-[46ch] text-pretty text-muted-foreground">
              Skip the cardboard, tape, and last-minute store runs. We deliver clean, sturdy moving
              totes to your home, and pick them up when you're done.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#waitlist"
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-primary px-5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Check Availability <ArrowRight className="size-4" />
              </a>
              <a
                href="#waitlist"
                className="inline-flex h-12 items-center rounded-xl border border-primary/40 bg-glass px-5 font-semibold text-primary backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/5"
              >
                Join the Waitlist
              </a>
            </div>
            <Script className="mt-6">Less waste. A brighter Maui.</Script>
          </div>
          <div className="animate-[stackin_0.8s_var(--ease-isle)_0.12s_both]">
            <img
              src={heroTotes}
              alt="Three teal reusable moving totes stacked on a dolly in a bright Maui living room"
              width={1280}
              height={1280}
              className="aspect-square w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* Benefit strip */}
      <section className="border-b border-line bg-background/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-9 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Leaf, title: "No Cardboard", copy: "A cleaner, greener way to move." },
            { icon: Ban, title: "No Tape", copy: "Save time and hassle." },
            {
              icon: Truck,
              title: "Delivered & Picked Up",
              copy: "We bring them to you, then pick them up.",
            },
            { icon: Layers, title: "Stackable & Durable", copy: "Strong, secure, and built to last." },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <b.icon className="size-5" />
              </span>
              <div>
                <p className="font-display font-semibold tracking-tight">{b.title}</p>
                <p className="text-sm text-muted-foreground">{b.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-b border-line py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            How It Works
          </h2>
          <p className="mt-2 text-muted-foreground">Three simple steps to a smoother move.</p>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "We Deliver",
                copy: "We bring clean, reusable moving totes to your door.",
                icon: Truck,
              },
              {
                n: "2",
                title: "You Move",
                copy: "Pack, move, and stack with ease.",
                icon: Layers,
              },
              {
                n: "3",
                title: "We Pick Them Up",
                copy: "When you're done, we'll come get them.",
                icon: MapPin,
              },
            ].map((s, i) => (
              <div
                key={s.n}
                className={`relative px-4 ${i > 0 ? "md:border-l md:border-line" : ""}`}
              >
                <div className="flex items-center justify-center gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary font-mono text-xs font-bold text-primary-foreground">
                    {s.n}
                  </span>
                  <span className="grid size-16 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="size-8" />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[28ch] text-sm text-muted-foreground">{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-b border-line py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Choose Your Move
            </h2>
            <p className="mt-2 text-muted-foreground">
              Simple, transparent pricing for every stage of life.
            </p>
          </div>
          <div className="mt-11 grid items-start gap-5 md:grid-cols-3">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-2xl p-7 backdrop-blur-md ${
                  t.featured
                    ? "border-2 border-primary/50 bg-primary/5 md:-mt-4 md:pb-9"
                    : "border border-line bg-glass"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 font-mono text-[10px] tracking-[0.14em] text-primary-foreground uppercase">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold tracking-tight">{t.name}</h3>
                <p className="mt-3">
                  <span className="font-display text-4xl font-bold tracking-tight text-primary">
                    {t.price}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">/ week</span>
                </p>
                <p className="mt-4 text-sm font-semibold">{t.totes}</p>
                {t.extra && <p className="text-sm font-semibold text-primary">{t.extra}</p>}
                <p className="mt-3 text-sm text-muted-foreground">{t.blurb}</p>
                <a
                  href="#waitlist"
                  className="mt-6 block rounded-lg bg-primary py-3 text-center font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Join the Waitlist
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why reusable */}
      <section id="why" className="relative border-b border-line">
        <img
          src={mauiScene}
          alt="Green West Maui mountains framed by palm fronds"
          width={1280}
          height={768}
          loading="lazy"
          className="absolute inset-0 size-full object-cover opacity-30"
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3 md:py-20">
          <div>
            <h2 className="max-w-[16ch] font-display text-3xl font-bold tracking-tight text-balance">
              Why Reusable Moving Boxes?
            </h2>
            <p className="mt-4 max-w-[32ch] text-muted-foreground">
              A better move for you — and a cleaner, healthier Maui.
            </p>
            <Script className="mt-6">Same great moves. A brighter tomorrow.</Script>
          </div>
          <div className="rounded-2xl border border-line bg-background/85 backdrop-blur-md">
            <div className="flex items-center gap-2.5 border-b border-line px-5 py-3.5">
              <span className="grid size-7 place-items-center rounded-md bg-secondary text-muted-foreground">
                <Ban className="size-4" />
              </span>
              <p className="font-display font-semibold tracking-tight text-muted-foreground">
                Cardboard
              </p>
            </div>
            <ul className="space-y-3 px-5 py-5">
              {[
                "Buy boxes (over and over)",
                "Assemble each box",
                "Use tape",
                "Crush easily",
                "Dispose afterward",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-destructive/15 text-[10px] font-bold text-destructive">
                    ✕
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <p className="border-t border-line px-5 py-4 text-sm text-muted-foreground">
              Expensive, wasteful, and frustrating.
            </p>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-background/90 backdrop-blur-md">
            <div className="flex items-center gap-2.5 border-b border-primary/25 bg-primary/5 px-5 py-3.5">
              <span className="grid size-7 place-items-center rounded-md bg-primary text-primary-foreground">
                <Layers className="size-4" />
              </span>
              <p className="font-display font-semibold tracking-tight">Our Boxes</p>
            </div>
            <ul className="space-y-3 px-5 py-5">
              {[
                "Delivered ready to use",
                "No assembly",
                "No tape",
                "Stack securely",
                "Weather-resistant",
                "We pick them up",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-ink">
                  <span className="grid size-4 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-2.5" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <p className="border-t border-primary/25 px-5 py-4 text-sm font-semibold text-primary">
              Convenient, sustainable, and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Built for Maui */}
      <section className="border-b border-line py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-3">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight">Built for Maui Moves</h2>
            <p className="mt-4 text-muted-foreground">
              We proudly deliver and pick up across the island — from Upcountry to Central, South,
              and West Maui.
            </p>
            <p className="mt-3 text-muted-foreground">
              Wherever you're moving, we'll meet you there.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-md">
            <ul className="space-y-3">
              {["West Maui", "Central Maui", "Upcountry", "South Maui", "East Maui"].map((a) => (
                <li key={a} className="flex items-center gap-3 text-sm font-semibold">
                  <MapPin className="size-4 shrink-0 text-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <ul className="space-y-5">
            {[
              { icon: Truck, copy: "Local delivery, local service" },
              { icon: Palmtree, copy: "Serving all of Maui" },
              { icon: Heart, copy: "A cleaner island for a brighter tomorrow" },
            ].map((i) => (
              <li key={i.copy} className="flex items-center gap-3.5">
                <i.icon className="size-5 shrink-0 text-primary" />
                <span className="text-sm text-ink">{i.copy}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="relative border-b border-line bg-primary/5 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="max-w-[16ch] font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Be First to Know When We Launch
            </h2>
            <p className="mt-4 max-w-[38ch] text-muted-foreground">
              Join our early access list and be the first to get availability, updates, and
              exclusive offers.
            </p>
            <Script className="mt-6">Good moves ahead.</Script>
          </div>
          <div className="md:col-span-3">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-muted-foreground">Quick answers to common questions.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {FAQS.map((f) => (
              <Faq key={f.q} {...f} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 md:grid-cols-3">
          <Logo small />
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <ul className="space-y-2 text-sm text-muted-foreground md:text-right">
            <li className="flex items-center gap-2.5 md:justify-end">
              <Mail className="size-4 text-primary" /> mauimovingboxes@gmail.com
            </li>
            <li className="flex items-center gap-2.5 md:justify-end">
              <Phone className="size-4 text-primary" />
            </li>
            <li className="flex items-center gap-2.5 md:justify-end">
              <MapPin className="size-4 text-primary" /> Maui, HI
            </li>
          </ul>
        </div>
        <div className="border-t border-line bg-primary/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Maui Moving Boxes. All rights reserved.</span>
            <span>A cleaner Maui. Brighter tomorrows.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
