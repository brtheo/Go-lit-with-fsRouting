//@ts-ignore
const polyfill = !globalThis.URLPattern ? import('urlpattern-polyfill') : null
export default await polyfill