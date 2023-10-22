import { css, html, LitElement, TemplateResult } from "lit";
import {customElement, property} from 'lit/decorators.js';


@customElement("pit-tag")
export class Tag extends LitElement {
    static styles = css`
    .pit-tag {
        display: inline-block;
        padding: 0.01rem 0.5rem;
        border-radius: 1rem;
        background-color: var(--color-background-tag, #003366);
        color: var(--color-text, #FFF);
        line-height: 1.25rem;
        font-weight: 200;
        font-size: 14px;
    }
`;

         render(): TemplateResult {
        return html`
            <div class="pit-tag">
                <slot></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'pit-tag': Tag;
    }
}