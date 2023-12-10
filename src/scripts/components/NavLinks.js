import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <nav-link content="${msg('Beranda')}" to="/"></nav-link>
        <nav-links-dropdown></nav-links-dropdown>
        <nav-link content="${msg('Tentang Kami')}" to="/#about-us"></nav-link>
        <locale-picker class="d-block"></locale-picker>
        <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
        <nav-link class="d-none" content="${msg('Masuk')}" to="/auth/login.html" id="loginMenu"></nav-link>
        <nav-link class="d-none" content="${msg('Keluar')}" to="" id="logoutMenu"></nav-link>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
