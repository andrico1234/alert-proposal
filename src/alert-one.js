import { html, LitElement, css } from "lit";
import { customElement } from "lit/decorators.js";

class AlertOne extends LitElement {
  static styles = css`
    #container {
      border: 1px solid black;
      font-family: Tahoma;
      display: flex;
      font-size: 1rem;
      flex-direction: row;
      width: fit-content;
      gap: 8px;
      align-items: center;
      padding: 4px 8px;
      box-shadow: inset 2px 2px white, 2px 2px black;
    }

    button {
      font-family: Tahoma;
      height: 100%;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1rem;
      background: white;
      cursor: pointer;
      border: 1px solid black;
      box-shadow: -1px 0 white, 0px -1px 0 white, 1px 1px black;
    }
  `;

  #dismiss() {
    this.parentNode.removeChild(this);
  }

  render() {
    return html`
      <div role="alert" aria-live="assertive" part="container" id="container">
        <div id="content">
          <slot></slot>
        </div>
        <button @click="${this.#dismiss}" aria-describedby="content">
          Dismiss
        </button>
      </div>
    `;
  }
}

customElements.define("alert-one", AlertOne);

// Questions

// What does the API look like for the button? Do we want consumers to fully override the button?
// Do we want users to simply adjust the text?
