import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('sub-page')
export default class SubPage extends LitElement {
  @property({type:String}) id
  override render() {
    return html`
    <section>
      <h1>prop received from url /editor/sub/:id = ${this.id}</h1>
      <a href="/">home page</a>
    </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sub-page': SubPage
  }
}

