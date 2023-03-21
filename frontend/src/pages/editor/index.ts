// import { MobxLitElement } from "@adobe/lit-mobx";
import {css, CSSResultGroup, html, HTMLTemplateResult, LitElement} from 'lit'
import {customElement} from 'lit/decorators.js'
import '../../components/doc-editor'




@customElement('editor-page')
export default class EditorPage extends LitElement {
  static styles?: CSSResultGroup = css`
    :host {
      box-sizing: border-box;
    }
    section {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
    }
  `
  override render(): HTMLTemplateResult {
    return html`
    <section>
      <h1>editor page</h1>
      <a href="/">go bakc</a>
      <doc-editor></doc-editor>
    </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'editor-page':EditorPage
  }
}

