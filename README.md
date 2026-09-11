# Corporate Marketing Site

A multi-page corporate marketing website (Home, About, Services, Contact) built with **TanStack Start v1** — a full-stack React 19 framework built on Vite — using TypeScript, Tailwind CSS v4, Framer Motion for entrance/scroll animations, and a shadcn-style component library. The design system (brand colors, typography, spacing, and shadows) is centralized in CSS theme tokens, page content is data-driven where it changes often, and every route ships with unique SEO metadata. The codebase is structured so a developer familiar with React but new to TanStack Start can find pages, components, and styling quickly and extend the site without touching layout code.

> **Note:** This project uses TanStack Start, not Next.js. Where the original brief referenced Next.js conventions (`tailwind.config.ts`, the App Router, `app/` directories, and Vercel), this README documents the equivalent in the actual stack. The conceptual model is the same — file-based routing, centralized design tokens, data-driven content — but the file paths and APIs differ.

## Setup

Requirements: Node.js 18+ and npm.

```sh
git clone <this-repository-url>
cd <repository-name>
npm install
npm run dev        # start the dev server (Vite)
npm run build     # production build
npm run preview   # preview the production build locally
```

Other scripts: `npm run lint` (ESLint) and `npm run format` (Prettier).

## Folder structure

```
src/
  routes/            File-based routes — one file per page
    __root.tsx        Root layout: <Navbar/>, <Outlet/>, <Footer/>, global <head>
    index.tsx         Home   (/)
    about.tsx         About  (/about)
    services.tsx      Services (/services)
    contact.tsx       Contact (/contact)
    api/              Server routes (webhooks, public HTTP endpoints)
  components/
    layout/           navbar.tsx, footer.tsx — rendered from __root.tsx on every page
    sections/         Page-specific sections (HeroSection, ServicesPreview, …)
      about/          About page sections
      services/       Services page sections
      contact/        Contact page sections
    ui/               Reusable primitives (Button, Card, Container, Section, …)
                      plus the full shadcn component set
  lib/
    services.ts       Data file backing the Services page (see below)
    utils.ts           cn() classname helper
  hooks/
  styles.css          Design system: @theme tokens, :root/.dark color values
  router.tsx          Router + query client setup
  start.ts            Client middleware (server-function auth bearer, etc.)
  server.ts           SSR entry
```

- **Pages** live in `src/routes/` (TanStack file-based routing, equivalent to the Next.js `app/` directory).
- **Components** are split into `layout/` (site chrome), `sections/` (page sections), and `ui/` (generic primitives).
- **Design tokens** live in `src/styles.css` (see below).

## Updating colors and fonts

There is no `tailwind.config.ts` — this project uses **Tailwind CSS v4**, where theme tokens are defined in CSS. All colors, fonts, radius, and shadows are declared in `src/styles.css`:

1. Edit the CSS variables under `:root` (light theme) and `.dark` (dark theme) in `src/styles.css`. Brand tokens to swap with the client's exact values:
   - `--primary` — main brand color (navy `#1E3A5F`)
   - `--secondary` — links / hover / secondary CTAs (blue `#3B82F6`)
   - `--neutral-dark`, `--neutral-mid`, `--neutral-light`, `--surface`
   - `--success`, `--error`, `--warning`
   - `--heading-font`, `--body-font`
2. The `@theme inline` block maps those variables to Tailwind utilities (`--color-primary` → `bg-primary`, `text-primary`, etc.), so utilities update automatically — no JS config to edit.
3. Fonts are loaded with a `<link>` tag in the root route head (`src/routes/__root.tsx`), then referenced by the `--heading-font` / `--body-font` variables. To use a custom font file, add the `@font-face`/link in `__root.tsx` and update the variables.

All colors use the `oklch` format; comments in `styles.css` show the matching hex value for each token.

## Adding a new service

Services are data-driven from `src/lib/services.ts` — edit the array, not the layout. Each entry follows the `Service` interface:

```ts
export interface Service {
  id: string;
  icon: LucideIcon;      // any icon from lucide-react
  title: string;
  description: string;
  includes: string[];    // bullet points shown on the card
}
```

To add a service:

1. Open `src/lib/services.ts`.
2. Append a new object to the `services` array (use an existing entry as a template).
3. Import the Lucide icon you want at the top of the file and reference it in `icon`.

The Services page (`src/routes/services.tsx` → `src/components/sections/services/ServicesList.tsx`) renders the whole array in an alternating left/right layout, so the new service appears automatically with no layout changes.

## Adding a new page

TanStack Start uses **file-based routing** in `src/routes/` (the equivalent of the Next.js App Router convention). To add a page at `/pricing`:

1. Create `src/routes/pricing.tsx`:

   ```tsx
   import { createFileRoute } from "@tanstack/react-router";

   export const Route = createFileRoute("/pricing")({
     head: () => ({
       title: "Pricing — [Company Name]",
       meta: [
         { name: "description", content: "Unique, keyword-appropriate description." },
         { property: "og:title", content: "Pricing — [Company Name]" },
         { property: "og:description", content: "…" },
       ],
     }),
     component: PricingPage,
   });

   function PricingPage() {
     return (
       <>
         {/* page sections, typically composed from src/components/sections */}
       </>
     );
   }
   ```

2. Add a link to the new route in the Navbar (`src/components/layout/navbar.tsx`) and Footer (`src/components/layout/footer.tsx`) link arrays.
3. The route tree (`src/routeTree.gen.ts`) regenerates automatically — do not edit it by hand.

Each page should set a unique `title`, meta description, and Open Graph tags in its `head()` (see existing routes for the pattern), and keep to one `<h1>` per page.

## Deployment

This project is a TanStack Start app built on Vite and deploys as an edge/serverless SSR app. The natural deployment target is a Node- or edge-compatible host — **Vercel** works, as do Cloudflare Pages/Workers, Netlify Functions, or any Node host. To deploy on Vercel: connect the repository, let Vercel auto-detect the Vite/TanStack Start preset, and it will run `npm run build` and serve the SSR output. Set any environment variables (API keys, secrets) in the host's dashboard rather than committing them. Because the app uses server functions and SSR, choose an SSR-compatible plan rather than a static-only host.
