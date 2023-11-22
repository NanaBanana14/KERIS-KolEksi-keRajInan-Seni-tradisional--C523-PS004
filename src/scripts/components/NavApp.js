import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    // eslint-disable-next-line no-underscore-dangle
    this._checkAvailabilityProperty()
  }

  // eslint-disable-next-line no-underscore-dangle
  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-dark custom-navbar">
        <div class="container d-flex align-items-center">
          <img class="custom-logo-img" src="https://firebasestorage.googleapis.com/v0/b/restapi-keris.appspot.com/o/logo%2Flogo-keris.png?alt=media&token=67fdcc3e-f297-4fc6-b5f4-5d80cdde4338" alt="">
          <button
            class="navbar-toggler"
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