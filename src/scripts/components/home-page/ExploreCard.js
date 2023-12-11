import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ExploreCard extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  // eslint-disable-next-line class-methods-use-this
  navigateToPage(pageId) {
    window.location.href = pageId;
  }

  render() {
    return html`
    <div class="container d-flex justify-content-center gap-5 flex-wrap">
      <div class="card card-explore-first position-relative" style="width: 260px" @click="${() => this.navigateToPage('/menu/galeri-seni.html')}">
        <img 
          class="w-75 position-absolute top-0 start-50 translate-middle"
          src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Filustration-landingpage%2Fgaleri%20seni.svg?alt=media&token=6316ef74-cac0-407b-83d0-957076cc1472" 
          alt="explore card" />
        <div class="card-body text-center" style="margin-top: 80px;">
          <h5 class="card-title mb-0">${msg('Galeri Seni')}</h5>
          <p class="card-text">${msg('Fitur yang dapat digunakan oleh Seniman untuk pamerkan karya & sumber info bagi penggemar.')}</p>
        </div>
      </div>

      <div class="card card-explore position-relative" style="width: 260px" @click="${() => this.navigateToPage('/menu/kalendarbudaya.html')}">
        <img 
          class="w-75 position-absolute top-0 start-50 translate-middle"
          src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Filustration-landingpage%2Fcalendar%20budaya.png?alt=media&token=92d54119-c894-43d7-8c9d-cf74b71425a2" 
          alt="explore card" />
        <div class="card-body text-center" style="margin-top: 80px;">
          <h5 class="card-title mb-0">${msg('Kalendar Budaya')}</h5>
          <p class="card-text">${msg('Fitur yang digunakan untuk mengakses informasi jadwal acara seni yang akan dilaksanakan.')}</p>
        </div>
      </div>

      <div class="card card-explore position-relative" style="width: 260px" @click="${() => this.navigateToPage('/menu/news.html')}">
        <img 
          class="w-75 position-absolute top-0 start-50 translate-middle"
          src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Filustration-landingpage%2FNews.png?alt=media&token=302776bf-bf47-4761-89f0-fd9a98760ebd" 
          alt="explore card" />
        <div class="card-body text-center" style="margin-top: 80px;">
          <h5 class="card-title mb-0">${msg('News')}</h5>
          <p class="card-text">${msg('Fitur yang menyajikan informasi berita dan event terkini seputar karya seni.')}</p>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('explore-card', ExploreCard);
