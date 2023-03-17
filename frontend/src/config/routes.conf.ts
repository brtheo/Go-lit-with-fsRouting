import { RouteConfig } from "@lit-labs/router/routes";
import {unsafeHTML} from 'lit/directives/unsafe-html.js'
// yes
import { GetRoutes } from '../../wailsjs/go/main/App'

/* @vite-ignore */
const makeRoutes = async (): Promise<RouteConfig[]> => 
  (await GetRoutes()).map(route =>
    Object.create({
      path: route == 'home' ? '/' : `/${route}`,
      render: () => 
        unsafeHTML(
          `<${route}-page>
          </${route}-page>`
        ),
      enter: async () => await import(`../pages/${route}`)
    }) as RouteConfig
  ) as RouteConfig[]

export default await makeRoutes()