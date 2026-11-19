// Site-wide identity used by the SEO helper, sitemap, robots.txt and manifest.
interface Site {
  name: string
  description: string
  url: string
  ogImage: string
  twitter: string
  repository: string
  themeColor: string
  sitemapPaths: ReadonlyArray<string>
}

export const site: Site = {
  name: 'puuid.com',
  description:
    'An index of the sites running on puuid.com: gas prices, budgets, timelines, room plans, barcodes and more.',
  /** Production origin, no trailing slash. Used for canonical and sitemap URLs. */
  url: 'https://puuid.com',
  /** Default social preview image (1200x630), e.g. '/og.png'. Empty to omit. */
  ogImage: '',
  /** Twitter/X handle including the @, or empty. */
  twitter: '',
  /** Source repository, linked from the footer. Empty while the repo is private. */
  repository: 'https://github.com/puuid-com/puuid',
  themeColor: '#0a0a0a',
  /** Unlocalized paths listed in sitemap.xml. Add new public pages here. */
  sitemapPaths: ['/', '/changelog'],
}
