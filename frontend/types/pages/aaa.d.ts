import { MobxLitElement } from "@adobe/lit-mobx";
import { HTMLTemplateResult } from 'lit';
export default class IndexPage extends MobxLitElement {
    count: number;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'index-page': IndexPage;
    }
}
