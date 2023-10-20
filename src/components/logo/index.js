"use client";

class PshLogo extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = document.createElement("template");

    template.innerHTML = /*html*/ `
        <style>
          .logo{
            color: var(--color-background, #FFF);
            border-radius: 8px;
            font-size: 1.4em;
            letter-spacing: 0.2em;
          }
          .logo__it {
            color: var(--color-accent, #F3B61F);
          }
        </style>
        <strong class="logo"> {push<span class="logo__it">it</span>}</strong>
      `;
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }
}
window.customElements.define("psh-logo", PshLogo);
