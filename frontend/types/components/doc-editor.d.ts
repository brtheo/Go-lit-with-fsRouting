import { LitElement, CSSResultGroup } from 'lit';
export declare class DocEditor extends LitElement {
    markdownContent: string;
    handleKeyPress(e: KeyboardEvent): void;
    static styles?: CSSResultGroup;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'doc-editor': DocEditor;
    }
}
