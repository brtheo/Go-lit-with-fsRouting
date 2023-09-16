
import {css, CSSResultGroup, html, LitElement} from 'lit'


import {customElement} from 'lit/decorators.js'
import {Router} from '@lit-labs/router/router.js';
import routes from './config/routes.conf'

@customElement('juri-doc')
export default class JuriDoc extends LitElement {
  private _router = new Router(this, routes);
  static styles?: CSSResultGroup = css`
    :host {
      display: block;
      padding: 1rem;
    }
  `
  override render() {
    return html`
      ${this._router.outlet()}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'juri-doc':JuriDoc;
  }
}

