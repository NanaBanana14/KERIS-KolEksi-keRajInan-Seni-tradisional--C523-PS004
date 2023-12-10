import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ArtsNavigasi extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
            <!-- Bagian Kiri Arts Navigasi -->
            <dropdown-category></dropdown-category>
            <!-- Bagian Kanan Art Navigasi -->
            <search-button></search-button>
        </div>
    </nav>
    `;
  }
}

customElements.define('arts-navigasi', ArtsNavigasi);
