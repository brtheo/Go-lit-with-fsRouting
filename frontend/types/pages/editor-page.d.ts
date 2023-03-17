import { MobxLitElement } from "@adobe/lit-mobx";
import { HTMLTemplateResult } from 'lit';
export default class EditorPage extends MobxLitElement {
    private _routes;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'editor-page': EditorPage;
    }
}
