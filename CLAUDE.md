# CLAUDE.md

Guidance for AI agents working in this repository. For human-oriented setup, content editing,
theming, and deploy details, see [README.md](./README.md).

## Project Overview

A mobile-first single-page personal portfolio. All copy is Lorem Ipsum and all identity fields
are stubs — the site is a template waiting to be filled in from `src/data/`. Search for `TODO:`
to find every placeholder.

- **React 19** + **TypeScript** (strict), bundled with **Vite 8**
- **Tailwind CSS v4**, configured entirely in CSS (no `tailwind.config.js`)
- **react-router-dom v7** for routing, **lucide-react** for icons, **@emailjs/browser** for the
  contact form
- **oxlint** for linting. No test framework is set up.

## Architecture

Entry flow: `index.html` → `src/main.tsx` (defines all routes) → `src/App.tsx` (shell).

Routes (`src/main.tsx`): `/` → `Home`, `/projects/:slug` → `ProjectDetail`, `*` → `NotFound`.
All three render inside the `App` shell via `<Outlet />`.

- `src/App.tsx` — shell: `Backdrop`, skip link, `Navbar`, outlet, `Footer`. Chrome lives *outside*
  the outlet so it never remounts between routes.
- `src/components/Backdrop.tsx` — fixed background behind everything; never unmounts, so all
  content scrolls over one continuous background across route changes.
- `src/components/ScrollManager.tsx` — owns scroll on navigation: a `#hash` smooth-scrolls to that
  section, anything else jumps to top. Nav links are absolute (`/#about`) so they behave the same
  from any route.
- `src/hooks/useActiveSection.ts` — IntersectionObserver scroll-spy that tells the navbar which
  section is current.
- `src/hooks/useTheme.ts` + `components/ThemeToggle.tsx` — light/dark. The hook owns the choice
  (`data-theme` on `<html>`, `localStorage`, the `theme-color` meta); the toggle is the sun/moon
  button in the navbar. Render `ThemeToggle` **once** — it holds the theme in local state, so a
  second instance would drift out of sync.
- `src/components/Section.tsx` + `Reveal.tsx` — every home section is wrapped in `Section` (consistent
  heading/spacing/scroll-offset) and reveals on scroll via `Reveal` (respects `prefers-reduced-motion`).
- `src/data/*.ts` — **all editable content**. Pages/sections read from here; edit data, not markup,
  to change copy. See README's "Filling in your content".
- `src/lib/email.ts` — EmailJS transport for the contact form: `isEmailConfigured`, `ThrottleError`
  and `sendContactEmail`. Named exports (not a component or hook). Keeps the send path, the 2 s
  throttle and the env reads out of `Contact.tsx`.
- `src/hooks/useDocumentMeta.ts` — sets title, meta description, canonical, Open Graph/Twitter tags
  and an optional JSON-LD block for the current page. Called once per page component (`Home.tsx`,
  `ProjectDetail.tsx`, `NotFound.tsx`).
- `scripts/prerender.ts` — runs after `vite build` (see `npm run build`). Loads the built app in
  headless Chromium, visits every route, and overwrites `dist/**/index.html` with the hydrated DOM
  so a crawler that doesn't execute JS still sees real content — the app itself stays a plain
  client-rendered SPA. Also (re)generates `dist/sitemap.xml`, `dist/robots.txt` and `dist/_redirects`
  from `src/data/projects.ts`. See README's "Making the site crawlable".

Layer layout: `pages/` (route views) compose `sections/` (Hero, About, Projects, TechStack,
UserManual, Contact), which use shared `components/`, read from `data/`, and call into `lib/` for
side-effectful work (currently just email).

## Conventions

- **Components**: PascalCase filename, `default export`, function components. Props via a local
  `interface XProps`.
- **Hooks**: `useX.ts`, default export.
- **Data**: camelCase filename, exports an `as const` object/array; interfaces (e.g. `Project`)
  are documented at the top of the file.
- **Imports**: `import type { … }` for types — `verbatimModuleSyntax` is on. Use `.tsx`/`.ts`
  extensions in local imports (bundler mode allows it, and the codebase does it).
- **Styling**: Tailwind utility classes only; colors come from theme tokens (`bg-shadow`,
  `text-custard`, `border-fern`, …) defined in the `@theme` block of `src/index.css`. Change a hex
  there to restyle the whole site — do not hardcode colors. The tokens are *roles* named after
  their dark-mode value (`shadow` = page background, `custard` = ink), and light mode re-points the
  same names at new values — so a new color must go through a token, never a literal or a default
  Tailwind palette shade, or it will not follow the theme.
- **TS is strict**: unused locals/params fail the build (`tsc -b`). Keep signatures clean.

## Common Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Vite dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`), build to `dist/`, then prerender every route (`scripts/prerender.ts`) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run oxlint |

There are no tests. The build's type-check plus `npm run lint` are the only automated checks —
run both before considering a change done.

## Known Gotchas

- **Tailwind v4 has no config file.** Theme and utilities are generated from the `@theme` block in
  `src/index.css`. Do not create `tailwind.config.js`.
- **`verbatimModuleSyntax`**: importing a type without `import type` breaks the build.
- **SPA routing**: the app uses `BrowserRouter` at the root, so any static host must rewrite unknown
  paths to `/index.html` or a refresh on `/projects/<slug>` 404s. See README "Deploying".
- **Nav must stay in sync**: hashes in `navLinks` (`src/data/site.ts`) must match the `id` of the
  corresponding `Section`, or scroll-spy and nav links break.
- **Contact form is inert until configured**: it needs `VITE_EMAILJS_SERVICE_ID`,
  `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY` in `.env.local` (see `.env.example`).
  Miss any one and the form validates but tells the visitor it's not connected. The EmailJS
  template must use `{{userName}}`, `{{userEmail}}`, `{{message}}` — these names are set in
  `src/lib/email.ts` and must stay in sync with the template.
- **Light mode is a token override, not a `dark:` variant.** `html[data-theme='light']` in
  `src/index.css` re-points the six color tokens. Keep the `html` type selector: Tailwind emits
  `@theme` onto `:root` (specificity 0,1,0), so a bare `[data-theme='light']` would only tie and
  leave the result to source order. The block must also stay *outside* `@theme` — a second `@theme`
  merges into the same `:root` set instead of creating a conditional one.
- **The anti-flash script is duplicated state**: `index.html` reads `localStorage['theme']` inline
  before first paint. That key and the `'light'` value must stay in sync with `src/hooks/useTheme.ts`.
- **`src/assets/` doesn't exist yet**: images render via `PlaceholderImage`. Create the folder when
  wiring real images (README "Images").
- **`npm run build` needs Chromium once**: `scripts/prerender.ts` drives Playwright, which needs its
  browser binary installed locally/in CI first — `npx playwright install chromium`. Without
  `VITE_SITE_URL` set, canonical/Open Graph URLs and `sitemap.xml` fall back to whatever origin the
  build machine's local prerender server happens to be, which is wrong once deployed — set it as a
  real build-time env var (see README "Deploying").

## Keeping This Updated

When you make a change that affects **architecture** (new routes, shell structure, data flow),
**conventions** (naming, export style, styling approach, lint/TS rules), or **setup** (dependencies,
scripts, env vars, build/deploy), update this file in the same change so it stays accurate. If a
section here contradicts the code, fix the file. Keep it under ~150 lines — push deep detail into
`README.md` and link to it rather than growing this file.
