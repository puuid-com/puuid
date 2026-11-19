import type { ComponentType } from 'react'

import { BeforeAfter, Chip, Figure, Footer, Header, Mark } from './kit'
import { sites } from '#/lib/sites'
import { m } from '#/paraglide/messages'
import { site } from '#/site'

// One picture per visible release, keyed by its version in CHANGELOG.md.
// Use a `BeforeAfter` pair when a release changes something that existed and
// a single `Shot` when it adds something new. Keep each one small and static,
// and reuse the `m.*` labels the real UI shows. Tooling, docs and refactor
// releases get none. `previews.test.ts` checks every key is a real release.
export const previews: Record<string, ComponentType> = {
  '0.3.0': () => (
    <Figure>
      <BeforeAfter
        className="flex flex-col"
        before={
          <>
            <div className="flex justify-between px-3 py-2 font-mono">
              <span>{site.name}</span>
              <span className="text-muted-foreground">
                {m.home_count({ count: sites.length })}
              </span>
            </div>
            <Reel />
            <div className="flex justify-between px-3 py-2 font-mono text-muted-foreground">
              <span>↑ ↓ · ↵</span>
            </div>
          </>
        }
        after={
          <>
            <Header>
              <span className="flex shrink-0 items-center gap-1.5 font-semibold">
                <Mark />
                {site.name}
              </span>
              <span className="min-w-0 flex-1 truncate text-muted-foreground">
                {m.nav_changelog()}
              </span>
              <Chip>English</Chip>
            </Header>
            <Reel />
            <Footer>
              <span className="min-w-0 flex-1 truncate">
                {m.footer_rights({ year: 2026, name: site.name })}
              </span>
              <span>{m.footer_source()}</span>
              <span className="font-mono">
                {m.app_version({ version: '0.3.0' })}
              </span>
            </Footer>
          </>
        }
      />
    </Figure>
  ),
}

// The home page's hostname reel, frozen on one site.
function Reel() {
  return (
    <div className="flex-1 px-3 py-4 font-mono text-base font-medium">
      gas<span className="text-muted-foreground">.puuid.com</span>
    </div>
  )
}
