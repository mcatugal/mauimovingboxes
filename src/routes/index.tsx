import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import toteSingle from "@/assets/tote-single.jpg";
import toteStack from "@/assets/tote-stack.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maui Moving Boxes — Rent stackable moving totes on Maui" },
      {
        name: "description",
        content:
          "We drop off clean stackable moving totes anywhere on Maui, you move, we pick them up. No cardboard, no tape. Join the waitlist.",
      },
      { property: "og:title", content: "Maui Moving Boxes — Rent stackable moving totes on Maui" },
      {
        property: "og:description",
        content:
          "Reusable moving totes delivered and collected across Maui. No cardboard waste, no tape. Join the waitlist.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function WaitlistForm({ variant = "light" }: { variant?: "light" | "onPrimary" }) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const onPrimary = variant === "onPrimary";

  if (joined) {
    return (
      <p
        className={`mt-7 font-mono text-sm ${onPrimary ? "text-primary-foreground" : "text-primary"}`}
      >
        You're on the list. We'll be in touch before we launch.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setJoined(true);
      }}
      className={`mt-7 flex max-w-md flex-col gap-2.5 sm:flex-row ${onPrimary ? "mx-auto" : "animate-[rise_0.6s_var(--ease-isle)_0.18s_both]"}`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@maui.com"
        aria-label="Email address"
        className={
          onPrimary
            ? "h-12 flex-1 rounded-xl border border-primary-foreground/25 bg-primary-foreground/10 px-4 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/55"
            : "h-12 flex-1 rounded-xl border border-line bg-glass px-4 text-sm text-ink outline-none backdrop-blur placeholder:text-muted-foreground/70 focus:border-primary/60"
        }
      />
      <button
        type="submit"
        className={
          onPrimary
            ? "h-12 shrink-0 rounded-xl bg-background px-5 font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/90"
            : "h-12 shrink-0 rounded-xl bg-primary px-5 font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
        }
      >
        Join the waitlist
      </button>
    </form>
  );
}

function Index() {
  return (
    <div className="min-h-screen font-body text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-line bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">
              M
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Maui Moving Boxes
            </span>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#how" className="transition-colors hover:text-ink">
              How it works
            </a>
            <a href="#compare" className="transition-colors hover:text-ink">
              Why totes
            </a>
            <a href="#pricing" className="transition-colors hover:text-ink">
              Pricing
            </a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Join the waitlist
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 pt-16 pb-10 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="animate-[rise_0.5s_var(--ease-isle)_both] inline-flex items-center gap-2 rounded-full border border-line bg-glass px-3 py-1 font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase backdrop-blur">
              <span className="size-1.5 rounded-full bg-primary" /> Launching on Maui
            </div>
            <h1 className="animate-[rise_0.6s_var(--ease-isle)_0.05s_both] mt-5 max-w-[16ch] font-display text-5xl leading-[1.02] font-bold tracking-tight text-balance md:text-6xl">
              Move house. Skip the cardboard.
            </h1>
            <p className="animate-[rise_0.6s_var(--ease-isle)_0.12s_both] mt-5 max-w-[44ch] text-lg text-pretty text-muted-foreground">
              We drop off clean stackable totes when you're ready, you fill and move, and we pick
              them up after. Nothing to buy, nothing to tape, nothing to throw away.
            </p>
            <WaitlistForm />
            <p className="animate-[rise_0.6s_var(--ease-isle)_0.24s_both] mt-3 font-mono text-xs text-muted-foreground">
              No card. No account. Just a head-count for launch.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="animate-[stackin_0.7s_var(--ease-isle)_0.1s_both]">
                  <img
                    src={toteSingle}
                    alt="A single stackable moving tote with its lid on"
                    width={1024}
                    height={1024}
                    className="aspect-square w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                  />
                </div>
                <div className="animate-[stackin_0.7s_var(--ease-isle)_0.28s_both] translate-y-8">
                  <img
                    src={toteStack}
                    alt="Two moving totes stacked neatly in a hallway"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                  />
                </div>
              </div>
              <div className="animate-[stackin_0.7s_var(--ease-isle)_0.42s_both] absolute -bottom-5 -left-3 flex items-center gap-2 rounded-xl border border-line bg-glass px-3.5 py-2.5 backdrop-blur-xl">
                <span className="font-display text-lg font-bold text-primary">0</span>
                <span className="text-sm text-ink">cardboard boxes wasted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              (a) How it works
            </span>
            <h2 className="mt-3 max-w-[14ch] font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
              Three steps. A clean stack.
            </h2>
          </div>
          <p className="hidden max-w-[30ch] text-sm text-muted-foreground md:block">
            The whole move, minus the boxes and the tape and the garage full of leftovers.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-md">
            <span className="font-mono text-sm text-primary">01</span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">We drop off</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Totes arrive stacked and ready. Fill them at your own pace, lid on, square.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-md md:translate-y-6">
            <span className="font-mono text-sm text-primary">02</span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">You move</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              They stack clean, carry firm, and pack tight. No tape, no flaps, no waste.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-glass p-6 backdrop-blur-md md:translate-y-12">
            <span className="font-mono text-sm text-primary">03</span>
            <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">We pick up</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Set them back and we collect them. Leave nothing behind, buy nothing.
            </p>
          </div>
        </div>
      </section>

      <section id="compare" className="mx-auto max-w-6xl px-5 py-8">
        <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
          (b) Totes vs cardboard
        </span>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-glass p-7 backdrop-blur-md">
            <h3 className="font-display text-2xl font-bold tracking-tight">Maui Moving Boxes</h3>
            <ul className="mt-5 space-y-3.5">
              {[
                "Reusable for the whole move",
                "Stacks square, no tape",
                "Zero waste, zero cleanup",
                "Saves hours of taping",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    ✓
                  </span>
                  <span className="text-sm text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-secondary/50 p-7">
            <h3 className="font-display text-2xl font-bold tracking-tight text-muted-foreground">
              Cardboard boxes
            </h3>
            <ul className="mt-5 space-y-3.5">
              {[
                "One-time, then trash",
                "Tape everywhere, flaps everywhere",
                "Mountains of waste to haul away",
                "Hours lost cutting and taping",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 font-mono text-sm text-muted-foreground">/</span>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-5 py-16">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-glass p-8 backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
                (c) Tote bundles
              </span>
              <h2 className="mt-3 max-w-[14ch] font-display text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Pick a size, rent by the week.
              </h2>
              <p className="mt-4 max-w-[40ch] text-pretty text-muted-foreground">
                Bundles from a studio to a big Maui home. Pricing below is a planning estimate while
                we set our launch rates.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                { name: "Studio", detail: "6 totes · 1 week", price: "$110", featured: false },
                { name: "Apartment", detail: "12 totes · 1 week", price: "$180", featured: false },
                { name: "Maui Home", detail: "20 totes · 1 week", price: "$290", featured: true },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`flex items-center justify-between rounded-xl px-5 py-4 ${
                    tier.featured
                      ? "border border-primary/40 bg-primary/5"
                      : "border border-line bg-background/60"
                  }`}
                >
                  <div>
                    <p className="font-display font-semibold tracking-tight">{tier.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{tier.detail}</p>
                  </div>
                  <span
                    className={`font-display text-lg font-bold ${tier.featured ? "text-primary" : ""}`}
                  >
                    {tier.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
          (d) Good to know
        </span>
        <div className="mt-6 grid gap-x-10 gap-y-7 md:grid-cols-2">
          <div>
            <h3 className="font-display text-base font-semibold tracking-tight">
              Where do you deliver?
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Maui only — Kīhei, Wailuku, Kahului, Lahaina, Haʻikū and upcountry.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold tracking-tight">
              How long can I keep them?
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              A week to a month. Add days anytime, and we'll time the pickup to your move.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold tracking-tight">
              What if I need more totes?
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Tell us and we'll top up the bundle before or during the rental.
            </p>
          </div>
          <div>
            <h3 className="font-display text-base font-semibold tracking-tight">
              Does joining cost anything?
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              No. The waitlist is free — it just helps us know how many totes to ready.
            </p>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-6xl px-5 py-14">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 text-center md:py-20">
          <div className="pointer-events-none absolute top-1/2 -left-16 size-72 -translate-y-1/2 rounded-full bg-primary-foreground/15 blur-3xl" />
          <div className="pointer-events-none absolute -top-10 -right-10 size-56 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-[16ch] font-display text-4xl font-bold tracking-tight text-balance text-primary-foreground md:text-5xl">
              Be first when totes hit Maui.
            </h2>
            <p className="mx-auto mt-4 max-w-[40ch] text-pretty text-primary-foreground/80">
              Join the waitlist and we'll reach out the moment your area opens.
            </p>
            <WaitlistForm variant="onPrimary" />
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-md bg-primary font-display text-xs font-bold text-primary-foreground">
              M
            </span>
            <span className="font-display font-semibold tracking-tight">Maui Moving Boxes</span>
            <span className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
              Maui, HI
            </span>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            Moving on Maui, without the boxes. © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
