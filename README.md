# MAUI MOVING TOTES

Landing page for **Maui Moving Totes**, a Maui-based service that rents out heavy-duty, stackable moving totes. We deliver the totes, customers move, and we pick them up. No cardboard and no tape.

**Live site**: https://www.mauimovingtotes.com (also served at https://mauimovingboxes.lovable.app)

## What's on the page

- Hero, how it works, three weekly packages (Small $99, Home $149, Family Home $199), cardboard vs. totes, service area, FAQ.
- **Appointment requests** come through an embedded [Tally](https://tally.so) form. There is no backend or database in this project.
- Analytics: Google Analytics 4 and the Meta Pixel (PageView on every page, plus `Lead` when a Tally form is submitted). Only event names are sent. Form answers and contact details never leave Tally.

## Tech stack

TanStack Start and TanStack Router (React 19), Vite, Tailwind CSS v4, and shadcn/ui components. Package manager is Bun (`bun.lock`), and fonts are Rubik from Google Fonts.

## Where things live

| What                                           | Where                                          |
| ---------------------------------------------- | ---------------------------------------------- |
| The whole page (copy, packages, FAQ, sections) | `src/routes/index.tsx`                         |
| Tally form ID, contact email, share image URL  | Constants at the top of `src/routes/index.tsx` |
| Page shell, fonts, GA4 and Meta Pixel scripts  | `src/routes/__root.tsx`                        |
| GA4 and Meta Pixel IDs, event helpers          | `src/lib/analytics.ts`                         |
| Colors and fonts (design tokens)               | `src/styles.css`                               |
| Logo and package photos                        | `src/assets/brand/`, `src/assets/packages/`    |
| Favicon and link-preview image                 | `public/favicon.png`, `public/og-image.png`    |

## Development

```sh
bun install
bun run dev      # http://localhost:8080
bun run build
```

`npm install` and `npm run dev` also work if you don't use Bun.

## Build with Lovable

This project is connected to [Lovable](https://lovable.dev). Continue developing it in the [Lovable editor](https://lovable.dev/projects/75343e32-f8e3-59a6-86b8-8f2f9a57ea98).

- **Stay in sync**: changes made in Lovable are committed to this repository, and pushes to `main` sync back into Lovable.
- **Don't rewrite history**: avoid force-pushing, rebasing or amending commits that are already pushed, or Lovable's project history can be lost.
