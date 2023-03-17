import { MobxLitElement } from "@adobe/lit-mobx";
import { HTMLTemplateResult } from 'lit';
export default class HomePage extends MobxLitElement {
    count: number;
    render(): HTMLTemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'home-page': HomePage;
    }
}
