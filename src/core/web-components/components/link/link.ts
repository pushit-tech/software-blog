import { LitElement, html, css } from "lit";
import { property } from "lit/decorators.js";
import { registerCustomElement } from "../../decorators/register-custom-element";

@registerCustomElement("pit-link")
export class Link extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  @property({ type: String }) href: string | null = null;
  @property({ type: Boolean }) isExternal: boolean = false;

  get ref() {
    return this.isExternal ? 'rel="noopener noreferrer"' : "";
  }

  get target() {
    return this.isExternal ? "_blank" : "";
  }

  render() {
    return html`
      <a
        className="pit-link"
        href="${this.href}"
        target="${this.target}"
        ${this.ref}
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "pit-link": Link;
  }
}
