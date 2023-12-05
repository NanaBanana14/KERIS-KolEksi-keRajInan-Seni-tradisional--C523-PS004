import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ExploreSection extends LitWithoutShadowDom {
  render() {
    return html`
    <div class="text-center mt-4" style="margin-bottom: 150px;">
      <h2 class="mb-3">Apa Yang Bisa Kamu Temukan Disini ?</h2>
      <p class="text-center text-active fw-bolder">_________________</p>
      <p class="paragraf-size-custom p-3">Eksplorasi beragam karya seni yang telah diciptakan oleh pengrajin seni dari berbagai wilayah di Indonesia melalui platform ini.</p>
    </div>

    <explore-card></explore-card>

    `;
  }
}

customElements.define('explore-section', ExploreSection);
