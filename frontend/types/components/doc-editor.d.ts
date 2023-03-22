import { LitElement, CSSResultGroup } from 'lit';
export declare class DocEditor extends LitElement {
    static styles?: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'doc-editor': DocEditor;
    }
}
