import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class HeaderKabud extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div>
        <h1 class="mb-3 text-center">${msg('Kalendar Budaya')}</h1>
        <p class="text-center text-active fw-bolder">_________________</p>
        <h5 class="text-center text-wrap">${msg('Temukan jadwal event-event seni yang diselenggarakan melalui daftar jadwal event pada kalendar ! Nikmati kemudahan dalam akses mudah informasinya.')}</h5>
    </div>
    `;
  }
}

customElements.define('header-kabud', HeaderKabud);
