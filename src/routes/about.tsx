import { createFileRoute } from "@tanstack/react-router";
import { Baby, Dumbbell, Flame, Sunset } from "lucide-react";

import { BookButton, SHARE_IMAGE, SiteFooter, SiteHeader, pop } from "@/components/site-chrome";
import ownerPhoto from "@/assets/brand/owner.jpg";

const TITLE = "About the Owner — MAUI MOVING TOTES";
const DESCRIPTION =
  "Meet Keanu Catugal, the Maui-born owner of Maui Moving Totes — husband, father of three, and County of Maui firefighter.";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.mauimovingtotes.com/about" },
      { property: "og:image", content: SHARE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SHARE_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://www.mauimovingtotes.com/about" }],
  }),
});

const FACTS = [
  { icon: Sunset, label: "Born & raised on Maui" },
  { icon: Baby, label: "Husband & father of three" },
  { icon: Flame, label: "County of Maui firefighter" },
  { icon: Dumbbell, label: "Weightlifting & beach days" },
];

function About() {
  return (
    <div className="min-h-screen scroll-smooth font-body text-ink antialiased">
      <SiteHeader />

      <section className="relative overflow-hidden border-b-2 border-ink bg-primary">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(var(--ink) 1.5px, transparent 1.5px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="inline-block -rotate-2 rounded-full border-2 border-ink bg-background px-4 py-1.5 font-display text-base">
            About the owner
          </p>
          <h1 className="mt-5 text-6xl leading-[0.95] text-balance sm:text-7xl">Meet Keanu</h1>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:grid-cols-[minmax(0,320px)_1fr]">
          <div className="mx-auto w-full max-w-xs md:mx-0">
            <div className={`overflow-hidden rounded-[2rem] bg-card ${pop}`}>
              <img
                src={ownerPhoto}
                alt="Keanu Catugal, owner of Maui Moving Totes"
                width={900}
                height={900}
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl">Keanu Catugal</h2>
            <p className="mt-1 font-display text-xl text-primary/80 [-webkit-text-stroke:_1px_var(--ink)]">
              Owner, Maui Moving Totes
            </p>

            <p className="mt-6 max-w-[62ch] text-lg text-pretty">
              Born and raised on the island of Maui, I'm a husband and father to three beautiful
              children. When I'm not hauling totes, I'm serving our community another way — as a
              firefighter for the County of Maui. In my free time, I enjoy weightlifting and beach
              days with my family. I look forward to working with you and helping you move with
              ease.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {FACTS.map((f) => (
                <div key={f.label} className={`rounded-2xl bg-card p-4 text-center ${pop}`}>
                  <f.icon className="mx-auto size-6 text-primary" />
                  <p className="mt-2 font-display text-sm leading-tight">{f.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BookButton />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
