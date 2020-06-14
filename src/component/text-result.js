class TextResult extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set result(result) {
    this._result = result;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `

    <style>

      .placeholder {
        font-weight: lighter;
        color: rgba(0,0,0,0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
     }

    </style>

        <h2 class="placeholder">${this._result}</h2>
      `;
  }

  renderError(message) {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `

    <style>

    .placeholder {
        font-weight: lighter;
        color: rgba(0,0,0,0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
     }

    </style>

        <h2 class="placeholder">${message}</h2>
     `;
  }
}

customElements.define("text-result", TextResult);
