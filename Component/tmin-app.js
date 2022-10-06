import {
    LitElement,
    html,
  } from “https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js”;
  class Component extends LitElement {
    

    };
    render() {

      return html`
        <div>
          <value-counter label="Cookies"  count= "3"></value-counter>
          <value-counter label="Milk"  count= "2"></value-counter>
          <value-counter label="Tea"  count= "10"></value-counter>
          

          </value-counter>
        </div>
        `;
    }
  


customElements.define("tmin-app", Component);


// class JozuaCustom extends HTMLElement {
//   inner = this.attachShadow({ mode: "closed" });
  
//   count = 0;

//   connectedCallback() {
//     //a function that runs when the component mounts
//     this.inner.innerHTML = `
//         <style>
//         div {
//             display: flex;
//             border: 1px solid blue;

//         }
//         </style>

//         <div>
//         <span>0</span>
//         <button>+</button>
//         </div>
//         `;
//     const button = this.inner.querySelector("button");
//     const display = this.inner.querySelector("span");

// const handler = () => {
//     this.count = this.count + 1;
//     display.innerText = this.count;
// }
//     button.addEventListener("click", handler);
//   }
// }