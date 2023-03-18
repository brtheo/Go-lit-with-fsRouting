// import { MobxLitElement } from "@adobe/lit-mobx";
import {html, HTMLTemplateResult, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'




@customElement('editor-page')
export default class EditorPage extends LitElement {
  override render(): HTMLTemplateResult {
    return html`
    <section>
      <h1>editor page</h1>
      <a href="/">go bakc</a>
    </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'editor-page':EditorPage
  }
}

