import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    this._checkAvailabilityProperty();
  }

  // eslint-disable-next-line no-underscore-dangle
  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <nav class="navbar navbar-expand-md bg-white fixed-top">
        <div class="container d-flex align-items-center">
          <img class="custom-logo-img" src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Flogo-keris.png?alt=media&token=687e3d0d-bec8-4ed2-b8a3-7264b45236c9" alt="">
          <button
            class="navbar-toggler custom-toggler-color"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <nav-links class="ms-auto mb-2 mb-md-0">
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
