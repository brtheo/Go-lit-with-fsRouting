// import { MobxLitElement } from "@adobe/lit-mobx";
import {html, HTMLTemplateResult, LitElement} from 'lit'
import {customElement, property} from 'lit/decorators.js'



@customElement('index-page')
export default class IndexPage extends LitElement {
  @property() count = 3
  handleClick() {
    this.count ++
  }
  override render(): HTMLTemplateResult {
    return html`
    <section>
      <button @click=${this.handleClick}>click to increase count and to go a differetn sub page</button>
      <h1>hello home page world count : ${this.count}</h1>
      <a href="/editor">editor page</a>
      <a href=${"/editor/sub/"+this.count}>editor sub ${this.count}</a>
    </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'index-page':IndexPage
  }
}

