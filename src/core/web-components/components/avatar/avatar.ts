import { css, html, LitElement, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { registerCustomElement } from "../../decorators/register-custom-element";
const styles = css`
  .pit-avatar {
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    overflow: hidden;
    box-sizing: content-box;
  }

  [size="xs"] {
    width: 24px;
    height: 24px;
  }

  img {
    width: 120%;
  }
`;

@registerCustomElement("pit-avatar")
export class Avatar extends LitElement {
  static styles = styles;

  @property({ type: String }) image: string = "";
  @property({ type: String }) alt: string = "";
  @property({ type: String }) size: string = "";

  render(): TemplateResult {
    return html`
      <div class="pit-avatar" size="${this.size}">
        <slot>
          <img src="${this.image}" alt="${this.alt}" />
        </slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pit-avatar": Avatar;
  }
}
