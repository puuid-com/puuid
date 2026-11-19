# puuid.com

The site index for [puuid.com](https://puuid.com): a landing page that links to every `*.puuid.com` site. Those sites are built from the repos in the [puuid-com](https://github.com/puuid-com) GitHub organization.

The list of sites lives in `src/lib/sites.ts`. Each entry has a subdomain prefix, a name, a one-line description, and optionally a standalone `alias` domain and the `repo` name in the GitHub organization (shown as a "source" link).

It is built on [puuid-com/template](https://github.com/puuid-com/template): TanStack Start on Cloudflare Workers, shadcn/ui with Tailwind CSS v4, Paraglide JS (English and French, locale in the URL) and the header, footer and `/changelog` page every puuid.com site shares. `www.puuid.com` redirects to the apex (see `src/server.ts`).

## Develop

```bash
bun install      # also installs the pre-push hook
bun run dev      # http://localhost:3000
```

## Checks

```bash
bun run check      # Prettier
bun run lint       # ESLint
bun run knip       # unused files, exports, dependencies
bun run typecheck  # tsc
bun run test       # Vitest
bun run doctor     # React Doctor
bun run build      # production build
```

## Release

Every change bumps `version` in `package.json` and adds an entry to `CHANGELOG.md`. Pushing `main` runs the checks and deploys to Cloudflare (`.githooks/pre-push`).
