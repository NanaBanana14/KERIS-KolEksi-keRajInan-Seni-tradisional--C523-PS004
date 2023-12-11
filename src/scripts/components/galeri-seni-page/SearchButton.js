import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class SearchButton extends LitWithoutShadowDom {
  render() {
    return html`
    <!-- Bagian Kanan Art Navigasi -->
    <div class="navbar-nav ml-auto">
        <form class="d-flex gap-2" role="search">
            <input id="input-name-art" class="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button id="search-button" type="button" class="btn btn-white-brown"><i class="bi bi-search"></i></button>
        </form>
    </div>
    `;
  }
}

customElements.define('search-button', SearchButton);
