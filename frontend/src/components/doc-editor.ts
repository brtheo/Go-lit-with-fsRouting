import { html, css, LitElement, CSSResultGroup } from 'lit';
import {customElement, state} from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';


@customElement("doc-editor")
export class DocEditor extends LitElement {

  @state() markdownContent: string = ""

  handleKeyPress( e: KeyboardEvent)  {
    e.preventDefault();
    switch (e.key) {
      case 'Backspace': 
      this.markdownContent = this.markdownContent.slice(0,-1);
      break;
      case 'Space':
        this.markdownContent += ' ';
      break;
      case 'Enter':
        this.markdownContent += `<br />`
      break;
      default:
        this.markdownContent += e.key;
      break;
    }

  }
  static styles?: CSSResultGroup = css`
    :host {
      display: block;
      width: 21cm;
      height: 100vh;
      border: 1px solid black;
    }
    main {
      height: -webkit-fill-available;
      line-break: anywhere;
    }
    main:focus {
      outline: none;
    }
  `
  
  render() {
    return html`
      <main tabindex="0" @keydown=${this.handleKeyPress} >
        ${unsafeHTML(this.markdownContent)}
      </main>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'doc-editor': DocEditor
  }
}