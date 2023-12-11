import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ExploreSection extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="text-center mt-4" style="margin-bottom: 150px;">
      <h2 class="mb-3">${msg('Apa Yang Bisa Kamu Temukan Disini ?')}</h2>
      <p class="text-center text-active fw-bolder">_________________</p>
      <p class="paragraf-size-custom p-3">${msg('Eksplorasi beragam karya seni yang telah diciptakan oleh pengrajin seni dari berbagai wilayah di Indonesia melalui platform ini.')}</p>
    </div>

    <explore-card></explore-card>

    `;
  }
}

customElements.define('explore-section', ExploreSection);
