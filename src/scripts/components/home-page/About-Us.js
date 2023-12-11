import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class AboutUs extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="mb-5">
        <div class="text-center mt-4">
          <h2 class="mb-3 text-center">${msg('Tentang Kami')}</h2>
          <p class="text-center text-active fw-bolder">_________________</p>
          <div>
            <p class="text-center text-wrap paragraf-size-custom p-3">${msg('Mari mengenal lebih jauh dengan para developer KERIS !')}</p>
            <p class="text-center text-wrap paragraf-size-custom p-3 mt-0">${msg('Ketuk Salah satu social medianya untuk mengetahui lebih lanjut')}</p>
          </div>
        </div>
    </div>
    <developer-card></developer-card>
    `;
  }
}

customElements.define('about-us', AboutUs);
