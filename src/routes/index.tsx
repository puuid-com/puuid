import { createFileRoute } from '@tanstack/react-router'

import { DomainCarousel } from '#/components/domain-carousel'
import { seo } from '#/lib/seo'
import { sites } from '#/lib/sites'
import { m } from '#/paraglide/messages'

export const Route = createFileRoute('/')({
  head: () => seo({ path: '/' }),
  component: Home,
})

function Home() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-4 py-16">
      <h1 className="sr-only">{m.home_title()}</h1>
      <DomainCarousel />
      <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
        <span>{m.home_count({ count: sites.length })}</span>
        <span>
          <kbd className="text-foreground">↑</kbd>{' '}
          <kbd className="text-foreground">↓</kbd> {m.home_keys()} ·{' '}
          <kbd className="text-foreground">↵</kbd> {m.home_open()}
        </span>
      </p>
    </section>
  )
}
