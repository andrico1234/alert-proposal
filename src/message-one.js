import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

class MessageOne extends LitElement {
  @property()
  live: "polite" | "assertive" = "polite";

  private _dismiss() {
    this.renderRoot.remove();
  }

  render() {
    const role = this.live === "polite" ? "status" : "alert";

    return html`<div role="${role}" aria-live="${this.live}">
      This is an message
      <button @click="${this._dismiss}">Dismiss</button>
    </div>`;
  }
}

customElements.define("messge-one", MessageOne);
