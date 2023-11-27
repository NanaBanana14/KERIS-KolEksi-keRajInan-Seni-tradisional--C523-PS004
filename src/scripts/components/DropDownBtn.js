import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class DropdownBtn extends LitWithoutShadowDom {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
        <li class="dropdown show nav-item">
            <a class="btn background-custom dropdown-toggle text-white" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
            </a>
            <div class="dropdown-menu" aria-labelledby="Menu">
                <a class="dropdown-item" href="#">Galeri Seni</a>
                <a class="dropdown-item" href="/menu/news.html">News</a>
                <a class="dropdown-item" href="/menu/kalendarbudaya.html">Kalendar Budaya</a>
            </div>
        </li>
        `;
  }
}

customElements.define('nav-links-dropdown', DropdownBtn);
