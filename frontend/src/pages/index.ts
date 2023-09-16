import {html, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('index-page')
export default class IndexPage extends LitElement {
  @property({type: Number}) count = 3
  render() {
    return html`
    <section>
      <button @click=${() => this.count++}>click to   increase count and to go a different sub page
      </button>
      <h1>hello home page world count : ${this.count}</h1>
      <a href="/editor">editor page</a>
      <a href=${"/editor/sub/"+this.count}>editor sub ${this.count}</a>
    </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'index-page': IndexPage
  }
}

