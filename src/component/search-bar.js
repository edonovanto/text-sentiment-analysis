class SearchBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this._shadowRoot.querySelector("#searchElement").value;
  }

  render() {
    this._shadowRoot.innerHTML = `
    <style>
    .search-container {
      max-width: 800px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      padding: 16px;
      border-radius: 5px;
      display: flex;
      position: sticky;
      top: 10px;
      background-color: white;
  }
  
  .search-container > input {
      width: 80%;
      padding: 16px;
      border: 0;
      border-bottom: 1px solid #262626;
      font-size : 20px;
      font-style: italic;
      font-family : 'Tangerine';
  }
  
  .search-container > input:focus {
      outline: 0;
      border-bottom: 2px solid #262626;
  }
  
  .search-container > input:focus::placeholder {
      font-weight: bold;
  }
  
  .search-container >  input::placeholder {
      color: #262626;
      font-weight: normal;
  }
  
  .search-container > button {
      border-radius: 25px;
      width: 18%;
      cursor: pointer;
      margin-left: auto;
      padding: 16px;
      background-color: #414141;
      color: white;
      border: 0;
      text-transform: uppercase;
  }
  
  @media screen and (max-width: 550px){
      .search-container {
          flex-direction: column;
          position: static;
      }
  
      .search-container > input {
          width: 100%;
          margin-bottom: 12px;
      }
  
      .search-container > button {
          width: 100%;
      }
  }
    </style>

    <div id="search-container" class="search-container">
      <input placeholder="Your caption here..." id="searchElement" type="search">
      <button id="searchButtonElement" type="submit">Analyze</button>
    </div>
        `;

    this._shadowRoot
      .querySelector("#searchButtonElement")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
