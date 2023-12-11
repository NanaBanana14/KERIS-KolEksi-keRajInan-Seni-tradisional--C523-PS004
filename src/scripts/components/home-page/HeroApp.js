import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class HeroApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="container py-5">
      <section class="hero">
        <div class="row">
          <!--img-->
          <div class="col-md-5 order-md-last">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Filustration-landingpage%2Flp.1.png?alt=media&token=f5352feb-7553-4909-802d-fdd2b30bafb7" 
              alt="landing page" 
              class="w-100" />
          </div>
          
          <!--text-->
          <div class="col-md-7 d-flex flex-column align-items-start justify-content-center order-md-first">
            <div class="text">
              <h1 class="fw-bolder">${msg('Jelajahi Galeri Seni Tradisional Indonesia Bersama KERIS !')}</h1>
              <p class="paragraf-size-custom mt-3">${msg('Temukan keindahan tak terbatas dari berbagai seni tradisional Indonesia dan rasakan cerita unik dari setiap karya yang menunggu untuk kamu ketahui. Tunggu apa lagi?')}</p>
            </div>
            <div class="buttons">
              <button onclick="window.location.href='#all-about-here'" class="btn btn-brown-darkbrown" style="width: 100px;">${msg('Mulai')}</button>
            </div>                  
          </div>
        </div>
      </section>
    </div>
    `;
  }
}

customElements.define('hero-app', HeroApp);
