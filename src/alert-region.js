import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";

class LiveRegion extends LitElement {
  static styles = css`
    #container {
      font-family: Tahoma;
      display: flex;
      font-size: 1rem;
      flex-direction: column;
      width: fit-content;
      gap: 16px;
    }

    .content {
      flex-direction: row;
      border: 1px solid black;
      align-items: center;
      padding: 4px 8px;
      display: flex;
      gap: 8px;
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
    const alertContainer = this.closest(".content");
    alertContainer.parentNode.removeChild(alertContainer);
  }

  addChild(textContent) {
    const newEl = document.createElement("div");
    newEl.className = "content";

    const textEl = document.createElement("p");
    textEl.textContent = textContent;
    textEl.id = "textContent";

    const buttonEl = document.createElement("button");
    buttonEl.onclick = this.#dismiss;
    buttonEl.setAttribute("aria-describedby", "textContent");
    buttonEl.textContent = "Dismiss";

    newEl.appendChild(textEl);
    newEl.appendChild(buttonEl);

    this.renderRoot.querySelector("#container").appendChild(newEl);
  }

  render() {
    return html`
      <div
        aria-atomic="false"
        role="status"
        aria-live="polite"
        part="container"
        id="container"
      ></div>
    `;
  }
}

customElements.define("live-region", LiveRegion);
