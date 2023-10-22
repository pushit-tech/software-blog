import { css, html, LitElement, TemplateResult } from "lit";
import { property, customElement } from "lit/decorators.js";

const styles = css`
  .pit-avatar {
    border-radius: 50%;
    background-color: white;
  }

  [size="xs"] {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

@customElement("pit-avatar")
export class Avatar extends LitElement {
  static styles = styles;

  @property({ type: String }) image: string = "";
  @property({ type: String }) alt: string = "";
  @property({ type: String }) size: string = "";

  render(): TemplateResult {
    return html`
      <div class="pit-avatar" size="${this.size}">
        <img src="${this.image}" alt="${this.alt}" />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pit-avatar": Avatar;
  }
}
