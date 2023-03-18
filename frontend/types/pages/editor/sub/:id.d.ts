import { HTMLTemplateResult, LitElement } from 'lit';
export default class SubPage extends LitElement {
    id: any;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sub-page': SubPage;
    }
}
