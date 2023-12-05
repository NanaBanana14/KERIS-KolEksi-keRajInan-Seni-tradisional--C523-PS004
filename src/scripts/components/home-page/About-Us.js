import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class AboutUs extends LitWithoutShadowDom {
  render() {
    return html`
    <div class="mb-5">
        <div class="text-center mt-4">
          <h2 class="mb-3 text-center">About-Us</h2>
          <p class="text-center text-active fw-bolder">_________________</p>
          <div>
            <p class="text-center text-wrap paragraf-size-custom p-3">Mari Mengenal Lebih Jauh dengan Para Developer KERIS !!</p>
            <p class="text-center text-wrap paragraf-size-custom p-3 mt-0">Ketuk Salah satu social media nya untuk mengetahui lebih lanjut</p>
          </div>
        </div>
    </div>
    <developer-card></developer-card>
    `;
  }
}

customElements.define('about-us', AboutUs);
