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

      .result {
        text-align : center;
      }

    </style>

    <div class="result">
    <h2 class="placeholder">Score for your caption is : <b>${this._result}</b></h2>
    </div>
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
        text-align : center;
     }

    </style>

        <h2 class="placeholder">${message}</h2>
     `;
  }
}

customElements.define("text-result", TextResult);
