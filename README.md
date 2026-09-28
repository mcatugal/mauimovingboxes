# MAUI MOVING TOTES

Landing page for **Maui Moving Totes**, a Maui-based service that rents out heavy-duty, stackable moving totes. We deliver the totes, customers move, and we pick them up. No cardboard and no tape.

**Live site**: https://www.mauimovingtotes.com (also served at https://mauimovingboxes.lovable.app)

## Pages

- **`/`** — Hero, how it works, three weekly packages (Small $99, Home $149, Family Home $199), cardboard vs. totes, service area, FAQ, and the appointment form.
- **`/about`** — About the owner, Keanu Catugal.

Both pages share the same header (with a mobile menu) and footer, defined in `src/components/site-chrome.tsx`.

## Key integrations

- **Appointment requests** come through an embedded [Tally](https://tally.so) form. There is no backend or database in this project.
- **Analytics**: Google Analytics 4 and the Meta Pixel (PageView on every page, plus `Lead` when a Tally form is submitted, and `book_cta_click`/`generate_lead` GA events). Only event names and dropdown-style answers are sent — names, emails, and phone numbers never leave Tally.
- **SEO**: `public/sitemap.xml` and `public/robots.txt`, plus `MovingCompany` and `FAQPage` JSON-LD structured data (see `src/routes/__root.tsx` and `src/routes/index.tsx`).
- **Social**: Instagram and Facebook links live in `src/components/site-chrome.tsx` (`SOCIAL`), shown in the footer.

## Tech stack

TanStack Start and TanStack Router (React 19), Vite, Tailwind CSS v4, and shadcn/ui components. Package manager is Bun (`bun.lock`), and fonts are Rubik from Google Fonts.

## Where things live

| What                                               | Where                                         |
| -------------------------------------------------- | --------------------------------------------- |
| Homepage copy, packages, FAQ, sections             | `src/routes/index.tsx`                        |
| About page copy and bio                            | `src/routes/about.tsx`                        |
| Shared header, footer, nav, contact info, socials  | `src/components/site-chrome.tsx`              |
| Tally form ID                                      | `TALLY_FORM_ID` in `src/routes/index.tsx`     |
| Contact email/phone, social links                  | Constants in `src/components/site-chrome.tsx` |
| Page shell, fonts, GA4/Meta Pixel scripts, JSON-LD | `src/routes/__root.tsx`                       |
| GA4 and Meta Pixel IDs, event helpers              | `src/lib/analytics.ts`                        |
| Colors and fonts (design tokens)                   | `src/styles.css`                              |
| Logo and owner photo                               | `src/assets/brand/`                           |
| Package photos                                     | `src/assets/packages/`                        |
| Favicon, share image, sitemap, robots.txt          | `public/`                                     |

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
