import { CSSResultGroup, LitElement } from 'lit';
export default class JuriDoc extends LitElement {
    private _router;
    static styles?: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'juri-doc': JuriDoc;
    }
}
