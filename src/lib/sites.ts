export interface Site {
  /** Subdomain label in front of `.puuid.com`. */
  prefix: string
  /** Product name as the site presents itself. */
  name: string
  /** One line on what it does. */
  description: string
  /** Standalone domain pointing at the same app, when there is one. */
  alias?: string
  /** Repo name in the puuid-com GitHub organization, when it is public there. */
  repo?: string
}

/**
 * The `*.puuid.com` hostnames worth linking to, as configured in
 * Cloudflare (Workers custom domains on the puuid.com zone).
 *
 * yard.puuid.com is deliberately left out.
 */
export const sites: Array<Site> = [
  {
    prefix: 'barcodes',
    name: 'barcodes.page',
    description: 'Generate Code 128 barcodes. That is the whole site.',
    alias: 'barcodes.page',
  },
  {
    prefix: 'budget',
    name: 'Budget',
    description:
      'Track spending by category and follow recurring income and expenses.',
  },
  {
    prefix: 'cineplex',
    name: 'Cineplex',
    description:
      'Three days of premium-format seat availability across Montréal.',
  },
  {
    prefix: 'editor',
    name: 'Editor',
    description:
      'Edit XML, JSON, TXT, SQL and ZPL with a synced structure tree, tabs and diffs.',
    repo: 'editor',
  },
  {
    prefix: 'gas',
    name: 'Plein',
    description: 'Real-time gas prices across Québec, nearest to you first.',
    repo: 'gas',
  },
  {
    prefix: 'list',
    name: 'Top List',
    description:
      'Private group rankings — make a group, share the link, rate the places you go.',
  },
  {
    prefix: 'mapping',
    name: 'Typematch',
    description: 'Match and map values between data sources in a workspace.',
  },
  {
    prefix: 'metro',
    name: 'Transit Overlay',
    description:
      'Chrome extension that puts transit times on Marketplace and Centris listings.',
  },
  {
    prefix: 'patio',
    name: 'Patio Maker',
    description: 'Design layered patios and get the plank lengths in inches.',
  },
  {
    prefix: 'room',
    name: 'rmplnr',
    description:
      'Draw rooms to scale, place furniture, and see what fits before you move it.',
    alias: 'rmplnr.com',
  },
  {
    prefix: 'timeline',
    name: 'tlmkr',
    description:
      'Build layered timelines in the browser and export PNG, SVG or JSON.',
    alias: 'tlmkr.com',
  },
  {
    prefix: 'url',
    name: 'URL Decoder',
    description:
      'Paste a URL to read its query parameters decoded, edit them, and copy it back.',
    repo: 'url',
  },
  {
    prefix: 'zpl',
    name: 'ZPL editor',
    description:
      'Write Zebra ZPL labels with a live preview, compare versions, export PNG or PDF.',
  },
]

export const ROOT_DOMAIN = 'puuid.com'

export const GITHUB_ORG = 'puuid-com'

export const siteUrl = (site: Site) => `https://${site.prefix}.${ROOT_DOMAIN}`

export const repoUrl = (repo: string) =>
  `https://github.com/${GITHUB_ORG}/${repo}`
