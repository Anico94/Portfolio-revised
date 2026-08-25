# Portfolio

A mobile-first personal portfolio built with React, TypeScript, Tailwind CSS and Vite.

All copy is Lorem Ipsum placeholder and all identity details are stubs — see
[Filling in your content](#filling-in-your-content) for exactly what to change.

## Getting started

```bash
npm install
```

```bash
npm run dev
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Oxlint |

## Filling in your content

Almost everything lives in `src/data/` — edit those files and the pages update themselves.

| File | Holds |
| --- | --- |
| `src/data/site.ts` | Your name, initials, role, tagline, location, email, social links, nav items |
| `src/data/projects.ts` | Every project: copy, tags, live-site and repo URLs, image slots |
| `src/data/techStack.ts` | The four tech-stack groups |
| `src/data/userManual.ts` | The "how to work with me" entries |

Also worth updating:

- `index.html` — page title and meta description
- `public/favicon.svg` — the initials in the tab icon
- `src/sections/About.tsx` — the About paragraphs and the four quick facts

Search the project for `TODO:` to find every placeholder in one pass.

### Adding a project

Append an object to the `projects` array in `src/data/projects.ts`. The `Project`
interface at the top of that file documents each field. The `slug` becomes the URL
(`/projects/your-slug`), and the card, detail page, and prev/next paging are all
generated from it.

`liveUrl` and `repoUrl` are both optional — omit either one and its button simply
does not render.

### Images

Real images are not wired up yet. Each image slot renders `PlaceholderImage`, which
draws a labelled box at the right aspect ratio — the label describes the image that
belongs there.

To use a real image, drop the file in `src/assets/`, import it, and replace the
`<PlaceholderImage …/>` with a normal `<img>`:

```tsx
import cover from '../assets/orbit-cover.png'

<img src={cover} alt="Orbit Analytics dashboard" className="w-full rounded-xl" />
```

## Wiring up the contact form

The form sends through [EmailJS](https://www.emailjs.com) — no backend needed. It
validates and shows all its states out of the box, but has nowhere to send messages
until you give it credentials.

1. Copy `.env.example` to `.env.local`
2. Fill in the three values from your EmailJS dashboard:

   | Variable | Where to find it |
   | --- | --- |
   | `VITE_EMAILJS_SERVICE_ID` | Email Services → the service you send through |
   | `VITE_EMAILJS_TEMPLATE_ID` | Email Templates → the template the form fills in |
   | `VITE_EMAILJS_PUBLIC_KEY` | Account → General → "Public Key" |

3. Make sure the template uses these variables: `{{userName}}`, `{{userEmail}}`,
   `{{message}}`. A variable the template does not reference is simply dropped, so a
   template missing `{{userName}}` still sends — it just leaves the name out.
4. Restart the dev server

Leave any of the three unset and the form tells the visitor it is not connected and
points them at the direct email link below it.

The public key is meant to ship in the client bundle — it is not a secret. Restrict
delivery with EmailJS's allowed-origins and rate-limit settings rather than by hiding
it. The form also throttles itself to one send every two seconds.

When you deploy, set the same three variables as build-time environment variables on
your host — `.env.local` is not committed.

## Theme

The whole palette is defined once, in the `@theme` block at the top of
`src/index.css`:

| Token | Hex | Used for |
| --- | --- | --- |
| `--color-custard` | `#d0db97` | Headings and body text |
| `--color-emerald` | `#69b578` | Accents, links, buttons, focus rings |
| `--color-fern` | `#3a7d44` | Secondary accent, background blooms |
| `--color-spruce` | `#254d32` | Card surfaces |
| `--color-shadow` | `#181d27` | Page background |

Tailwind v4 generates utilities from those tokens automatically (`bg-shadow`,
`text-custard`, `border-fern`, …), so changing a hex here restyles the entire site.

There is no `tailwind.config.js` — v4 is configured from CSS.

## Structure

```
src/
  main.tsx              routes
  App.tsx               shell: backdrop, navbar, outlet, footer
  index.css             Tailwind import, theme tokens, base styles
  components/           Backdrop, Navbar, Footer, Section, Reveal,
                        ProjectCard, PlaceholderImage, BrandIcons, ScrollManager
  hooks/                useActiveSection (nav scroll-spy)
  lib/                  email (EmailJS transport for the contact form)
  sections/             Hero, About, Projects, TechStack, UserManual, Contact
  pages/                Home, ProjectDetail, NotFound
  data/                 all editable content
```

`Backdrop` is fixed behind everything and never unmounts, so all content scrolls
across one continuous background — including across route changes.

## Deploying

The app uses `BrowserRouter` at the site root, so the host must serve `index.html`
for unknown paths. Otherwise a refresh on `/projects/orbit-analytics` returns a 404.

- **Vercel / Netlify** — detected automatically for Vite; no extra config needed
- **GitHub Pages** — set `base: '/<repo-name>/'` in `vite.config.ts`, pass the same
  value as `basename` to `BrowserRouter`, and copy `dist/index.html` to
  `dist/404.html` after building
- **Any static host** — add a rewrite of all paths to `/index.html`
