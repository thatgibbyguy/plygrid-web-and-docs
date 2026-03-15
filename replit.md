# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   └── api-server/         # Express API server
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
│   └── src/                # Individual .ts scripts, run via `pnpm --filter @workspace/scripts run <script>`
├── pnpm-workspace.yaml     # pnpm workspace (artifacts/*, lib/*, lib/integrations/*, scripts)
├── tsconfig.base.json      # Shared TS options (composite, bundler resolution, es2022)
├── tsconfig.json           # Root TS project references
└── package.json            # Root package with hoisted devDeps
```

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`). This builds the full dependency graph so that cross-package imports resolve correctly. Running `tsc` inside a single package will fail if its dependencies haven't been built yet.
- **`emitDeclarationOnly`** — we only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/tsx/vite...etc, not `tsc`.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array. `tsc --build` uses this to determine build order and skip up-to-date packages.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages that define it
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/` and use `@workspace/api-zod` for request and response validation and `@workspace/db` for persistence.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON/urlencoded parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts sub-routers; `src/routes/health.ts` exposes `GET /health` (full path: `/api/health`)
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server
- `pnpm --filter @workspace/api-server run build` — production esbuild bundle (`dist/index.cjs`)
- Build bundles an allowlist of deps (express, cors, pg, drizzle-orm, zod, etc.) and externalizes the rest

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. Exports a Drizzle client instance and schema models.

- `src/index.ts` — creates a `Pool` + Drizzle instance, exports schema
- `src/schema/index.ts` — barrel re-export of all models
- `src/schema/<modelname>.ts` — table definitions with `drizzle-zod` insert schemas (no models definitions exist right now)
- `drizzle.config.ts` — Drizzle Kit config (requires `DATABASE_URL`, automatically provided by Replit)
- Exports: `.` (pool, db, schema), `./schema` (schema only)

Production migrations are handled by Replit when publishing. In development, we just use `pnpm --filter @workspace/db run push`, and we fallback to `pnpm --filter @workspace/db run push-force`.

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config (`orval.config.ts`). Running codegen produces output into two sibling packages:

1. `lib/api-client-react/src/generated/` — React Query hooks + fetch client
2. `lib/api-zod/src/generated/` — Zod schemas

Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec (e.g. `HealthCheckResponse`). Used by `api-server` for response validation.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec (e.g. `useHealthCheck`, `healthCheck`).

### `scripts` (`@workspace/scripts`)

Utility scripts package. Each script is a `.ts` file in `src/` with a corresponding npm script in `package.json`. Run scripts via `pnpm --filter @workspace/scripts run <script>`. Scripts can import any workspace package (e.g., `@workspace/db`) by adding it as a dependency in `scripts/package.json`.

### `artifacts/web` (`@workspace/web`)

Showcase site for the `plygrid` CSS framework (npm). Built with React + Vite. Swiss modernist design aesthetic.

- **CSS Framework**: `plygrid@1.0.2` — ratio-based CSS grid framework. Sass import via `@use 'plygrid/src/scss/ply' as *` in `index.scss`. Reference: `artifacts/web/node_modules/plygrid/PLY.md`.
- **Critical constraint**: Zero custom CSS and zero inline styles — exclusively plygrid classes plus thin Sass wrappers in `index.scss` (background colors, `color-blue`, `margin-left-auto`).
- **Routing**: wouter, 7 pages — Home, Get Started (/get-started), Grid (/grid), Typography (/typography), Controls (/controls), Navigation (/navigation), Tables (/tables), Utilities (/utilities).
- **Dark Mode**: `data-theme` attribute on `<html>`, managed by Layout.tsx header with icon-only toggle buttons (Monitor/Sun/Moon from lucide-react).
- **No backend dependencies** — pure frontend showcase.
- **Key files**:
  - `src/App.tsx` — route definitions (wouter)
  - `src/index.scss` — Sass import of plygrid + thin utility wrappers (background colors, color-blue, margin-left-auto, code overrides for blue section)
  - `src/components/Layout.tsx` — shadcn-style layout: minimal top navbar (`navbar navbar--borderless`) with Home icon + Docs/Components/Utilities links; inner pages get left sidebar (unit-20) with grouped section nav + main content (unit-80); Home page has no sidebar. Mobile: `navigation-toggle` hamburger with `nav-stacked`.
  - `src/components/CodeBlock.tsx` — native `<pre><code>` (ply auto-styles)
  - `src/pages/` — 7 content pages + Home + 404 (ControlsPage merges buttons/forms/alerts; UtilitiesPage merges helpers/theming)
  - `src/pages/GetStartedPage.tsx` — Two paths (CDN vs Sass), AI agent instructions, and "what you get" summary
- **Layout architecture**: Follows shadcn/ui pattern — minimal top nav, grouped sidebar for inner pages (Getting Started / Layout / Design / Components / Configuration sections), centered hero on Home.
- **Home page flow**: Hero → Stats bar → AI-native (blue bg, white cards) → 3 pillar cards (Just CSS, 18KB, WCAG AA) → Explore the docs (6 link cards) → Footer
- **Known plygrid v1.0.1 quirk**: `tablet-unit-100` is documented in PLY.md but NOT compiled into ply.min.css. Use `phone-unit-100` instead for full-width stacking on small screens.
- **v1.0.1 features in use**:
  - `equal-height` on `units-row` for same-height card rows (replaces display--flex workaround)
  - `text-balance` on all page h1 headings
  - `no-orphan` on lead paragraphs and body text
  - `no-link-style` on feature card containers (allows `<Link>` without blue text)
  - `text-primary`/`text-secondary`/`text-tertiary`/`text-muted` semantic text colors (replaces removed `color-gray-*`)
  - `gap-*` utilities documented on Utilities page
  - `navbar--borderless` on site nav; border variant demos on Navigation page
  - CSS custom properties reference with `--ply-nav-*` variables on Utilities page
- **Common ply class patterns used**:
  - Demo containers: `border border-radius padding`
  - Section labels: `text-xs font-semibold uppercase`
  - Page subtitles: `lead` (no color override — ply handles text color via CSS custom properties)
  - Grid demo cells: `border border-radius padding text-center text-sm` (NOT alerts)
  - Section separators: `padding-top--extra padding-bottom--extra border-bottom`
  - Surface elevation: `layer-1` used sparingly (hero background only); cards use `border border-radius padding`
  - Links styled as buttons: `<Link className="btn btn-blue">` (never nest `<button>` inside `<Link>` or `<a>`)
- **Dark mode safe**: No `color-gray-*` classes used — they don't exist in v1.0.1. Use semantic `text-primary`/`text-secondary`/`text-tertiary` instead.
- **Theme switcher**: In Home.tsx hero (right column). Uses Monitor/Sun/Moon icons. All `btn btn-smaller`, active adds `btn-blue`. UtilitiesPage also has its own independent toggle for demo purposes.
- **Icons**: `lucide-react` for inline SVG icons (Home icon in nav, Monitor/Sun/Moon in theme switcher). No icon CSS from ply — icons are React components rendering SVGs.
- **Responsive nav**: `hide-on-mobile` / `hide-on-desktop` classes switch between horizontal navbar (desktop) and `navigation-toggle` hamburger (mobile).
- **pnpm-workspace.yaml**: includes `minimumReleaseAgeExclude: - plygrid` to bypass release age policy
