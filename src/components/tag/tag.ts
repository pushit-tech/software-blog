import { css, html, LitElement, TemplateResult } from "lit";
import {customElement, property} from 'lit/decorators.js';


@customElement("pit-tag")
export class Tag extends LitElement {
    static styles = css`
    .pit-tag {
        display: inline-block;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        background-color: yellow;
        color: #2d3748;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        text-transform: uppercase;
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