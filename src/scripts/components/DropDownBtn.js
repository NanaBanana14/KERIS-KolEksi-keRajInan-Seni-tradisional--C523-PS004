import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class DropdownBtn extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <li class="dropdown show nav-item">
        <a class="btn btn-brown-darkbrown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Menu </a>
        <div class="dropdown-menu" aria-labelledby="${msg('Menu')}">
          <a class="dropdown-item" href="/menu/galeri-seni.html">${msg('Galeri Seni')}</a>
          <a class="dropdown-item" href="/menu/news.html">${msg('News')}</a>
          <a class="dropdown-item" href="/menu/kalendarbudaya.html">${msg('Kalendar Budaya')}</a>
          <a class="dropdown-item" href="/menu/pusat-bantuan.html">${msg('Pusat Bantuan')}</a>
        </div>
      </li>
    `;
  }
}

customElements.define('nav-links-dropdown', DropdownBtn);
