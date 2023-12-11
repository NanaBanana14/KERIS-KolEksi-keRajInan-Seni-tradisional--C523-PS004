import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class HeroCarouselNews extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="bg-brown py-5 p-5 mt-5">
        <div class="row">
            <div class="col-md-6 mt-2 d-flex align-items-center order-2 order-md-first">
                <h1 class="text-white text-center">${msg('Temukan Event dan Berita Seputar Seni Disini')}</h1>
            </div>
            <div class="col-md-6 order-1 order-md-last">
                <custom-carousel></custom-carousel>
            </div>
        </div>              
    </div>
    `;
  }
}

customElements.define('hero-news', HeroCarouselNews);
