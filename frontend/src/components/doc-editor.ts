import { html, css, LitElement, CSSResultGroup } from 'lit';
import {customElement} from 'lit/decorators.js';


@customElement("doc-editor")
export class DocEditor extends LitElement {
  static styles?: CSSResultGroup = css`
    :host {
      display: block;
      width: 900px;
      height: 100vh;
      border: 1px solid black;
      
    }
  `

  render() {
    return html`
      
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'doc-editor': DocEditor
  }
}