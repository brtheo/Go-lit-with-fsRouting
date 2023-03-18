import { HTMLTemplateResult, LitElement } from 'lit';
export default class EditorPage extends LitElement {
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'editor-page': EditorPage;
    }
}
