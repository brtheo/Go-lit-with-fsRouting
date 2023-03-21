import { RouteConfig } from "@lit-labs/router/routes";
import {unsafeHTML} from 'lit/directives/unsafe-html.js'
import { GetRoutes } from '../../wailsjs/go/main/App'

const makeArgs = (route): string => { 
  let ret: string | null = ''
  if(route.Args !== null) {
    const {origin, href} = location;
    const pattern = new URLPattern(`${origin}${route.Path}`);
    console.log(pattern, location.href)
    for(const [k,v] of Object.entries(pattern.exec(href).pathname.groups)) {
      ret += `${k}=${v} `;
    }
  }
  return ret;
}

const makeRoutes = async (): Promise<RouteConfig[]> => {
  console.log((await GetRoutes()))
  return (await GetRoutes()).map(route => 
    Object.create({
      path: route.Path,
      render: () =>    
        unsafeHTML(
          `<${route.Component} ${makeArgs(route)} >
          </${route.Component}>`
        ),
      enter: async () => await import(`../pages${route.Filename}`)
    }) as RouteConfig 
  ) as RouteConfig[]
}
export default await makeRoutes()
