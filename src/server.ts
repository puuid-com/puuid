import handler from '@tanstack/react-start/server-entry'
import { paraglideMiddleware } from './paraglide/server'

import { ROOT_DOMAIN } from '#/lib/sites'

const WWW_HOST = `www.${ROOT_DOMAIN}`

// The apex is canonical: `www` is attached to the same Worker only to send
// visitors one hop over, keeping the path and query. Every other request gets
// its locale resolved (URL prefix, then base locale) so server-rendered
// messages match the URL. See
// https://github.com/TanStack/router/tree/main/examples/react/start-i18n-paraglide
export default {
  fetch(req: Request): Promise<Response> {
    const url = new URL(req.url)
    if (url.hostname === WWW_HOST) {
      url.hostname = ROOT_DOMAIN
      return Promise.resolve(Response.redirect(url.toString(), 301))
    }
    return paraglideMiddleware(req, () => handler.fetch(req))
  },
}
