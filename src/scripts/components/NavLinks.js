import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class NavLinks extends LitWithoutShadowDom {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <ul class="navbar-nav d-flex align-items-center gap-3">
        <nav-link content="Home" to="/"></nav-link>
        <nav-links-dropdown></nav-links-dropdown>
        <nav-link content="About Us" to="#"></nav-link>
        <nav-link-auth class="d-none" id="userLoggedMenu"></nav-link-auth>
        <nav-link content="Log In" to="/auth/login.html" id="loginMenu"></nav-link>
      </ul>
    `;
  }
}

customElements.define('nav-links', NavLinks);
