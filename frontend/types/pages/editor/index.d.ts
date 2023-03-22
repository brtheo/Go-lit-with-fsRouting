import { CSSResultGroup, HTMLTemplateResult, LitElement } from 'lit';
import '../../components/doc-editor';
export default class EditorPage extends LitElement {
    static styles?: CSSResultGroup;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'editor-page': EditorPage;
    }
}
