import { HTMLTemplateResult, LitElement } from 'lit';
export default class IndexPage extends LitElement {
    count: number;
    handleClick(): void;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'index-page': IndexPage;
    }
}
