import { MobxLitElement } from "@adobe/lit-mobx";
import {html} from 'lit'


import {customElement} from 'lit/decorators.js'
import {Router} from '@lit-labs/router/router.js';
import routes from './config/routes.conf'

@customElement('juri-doc')
export default class JuriDoc extends MobxLitElement {
  private _router = new Router(this, routes);
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

