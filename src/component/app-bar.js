class AppBar extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
    
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }
         
          :host {
            display: block;
            width: 100%;
            color: #262626;
            text-align: center;
          }
    
          h2 {
            font-size: 60px;
            font-family: 'Merriweather', serif;
            padding: 16px;
            padding-top: 0;
            padding-bottom: 0;
          }

          p{
            padding : 3px 20px 15px 20px;
          }

        </style>
        
        <h2>Sentiment Analysis</h2>
        <p>-Analyze your caption before upload it to social media!-</p>
        `;
  }
}

customElements.define("app-bar", AppBar);
