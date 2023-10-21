import { css, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("pit-logo")
export class Logo extends LitElement {
  static styles = css`
    .logo {
      color: var(--color-background, #fff);
      border-radius: 8px;
      font-size: 1.4em;
      letter-spacing: 0.2em;
    }
    .logo__it {
      color: var(--color-accent, #f3b61f);
    }
  `;

      render(): TemplateResult {
        return html`
      <strong class="logo"> {push<span class="logo__it">it</span>}</strong>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pit-logo": Logo;
  }
}
