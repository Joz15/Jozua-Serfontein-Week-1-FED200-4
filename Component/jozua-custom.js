

class JozuaCustom extends HTMLElement {
  inner = this.attachShadow({ mode: "closed" });

  count = 0;

  connectedCallback() {
    //a function that runs when the component mounts
    this.inner.innerHTML = `
        <style>
        div {
            display: flex;
            border: 1px solid blue;

        }
        </style>

        <div>
        <span>0</span>
        <button>+</button>
        </div>
        `;
    const button = this.inner.querySelector("button");
    const display = this.inner.querySelector("span");

const handler = () => {
    this.count = this.count + 1;
    display.innerText = this.count;
}
    button.addEventListener("click", handler);
  }
}
customElements.define("jozua-custom", JozuaCustom);
