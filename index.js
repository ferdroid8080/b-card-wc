class bCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.template = document.createElement('template');
  }
  static get observedAttributes() {
    return ['title', 'description'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName == 'title') {
      this.title = newVal;
    } else if (attrName == 'description') {
      this.description = newVal;
    }
  }

  getTemplate() {
    this.template.innerHTML = `
      <div class='card'>
        <h1>${this.title}</h1>
        <p>${this.description}</p>
      </div>
      ${this.getStyles()}
    `;
    return this.template;
  }

  getStyles() {
    return `
      <style>
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .card {
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #fafafa;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          padding: 6px;
          width: 35%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .card h1 {
          width: 100%;
          border-bottom: 0.75px solid #ccc;
          padding: 4px;
        }
        .card p {
          padding: 8px;
        }
      </style>
    `;
  }

  connectedCallback() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
}
customElements.define('b-card', bCard);
