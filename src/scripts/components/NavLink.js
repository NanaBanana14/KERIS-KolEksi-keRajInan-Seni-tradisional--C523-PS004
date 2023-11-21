import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLink extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
  };

  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    this._checkAvailabilityProperty()
  }

  // eslint-disable-next-line no-underscore-dangle
  _checkAvailabilityProperty() {
    if (!this.hasAttribute('to')) {
      throw new Error(`Atribut "to" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <li class="nav-item">
        <a class="nav-link text-active" href="${this.to}">${this.content}</a>
      </li>
    `;
  }
}
 
customElements.define('nav-link', NavLink);
