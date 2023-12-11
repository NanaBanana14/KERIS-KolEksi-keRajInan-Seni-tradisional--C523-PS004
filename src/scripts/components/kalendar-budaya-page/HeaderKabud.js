import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class HeaderKabud extends LitWithoutShadowDom {
  render() {
    return html`
    <div>
        <h1 class="mb-3 text-center">Kalendar Budaya</h1>
        <p class="text-center text-active fw-bolder">_________________</p>
        <h5 class="text-center text-wrap">Temukan jadwal event-event seni yang diselenggarakan melalui daftar jadwal event pada kalendar ! Nikmati kemudahan dalam akses mudah informasinya.</h5>
    </div>
    `;
  }
}

customElements.define('header-kabud', HeaderKabud);
