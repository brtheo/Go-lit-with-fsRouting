import { MobxLitElement } from "@adobe/lit-mobx";
import {html, HTMLTemplateResult} from 'lit'
import {customElement, property} from 'lit/decorators.js'



@customElement('home-page')
export default class HomePage extends MobxLitElement {
  @property() count = 3
  override render(): HTMLTemplateResult {
    return html`
    <section>
      <h1>hello home page world</h1>
      <a href="/editor">editor page</a>
    </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-page':HomePage
  }
}

