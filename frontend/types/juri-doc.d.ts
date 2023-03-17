import { MobxLitElement } from "@adobe/lit-mobx";
import { HTMLTemplateResult } from 'lit';
export default class JuriDoc extends MobxLitElement {
    private _router;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'juri-doc': JuriDoc;
    }
}
