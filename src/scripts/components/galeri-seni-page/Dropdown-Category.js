import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class DropdownCategory extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="navbar-nav">
        <div class="dropdown">
            <button class="btn btn-brown-darkbrown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">${msg('Kategori')}</button>
            <ul class="dropdown-menu">
                <li><a id="dropdown-semua" class="dropdown-item">${msg('Semua')}</a></li>
                <li><a id="dropdown-alat-musik" class="dropdown-item">${msg('Alat Musik')}</a></li>
                <li><a id="dropdown-sastra" class="dropdown-item">${msg('Sastra')}</a></li>
                <li><a id="dropdown-seni-rupa" class="dropdown-item">${msg('Seni Rupa')}</a></li>
            </ul>
        </div>
    </div>
    `;
  }
}

customElements.define('dropdown-category', DropdownCategory);
