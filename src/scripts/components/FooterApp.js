import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="container py-5">
        <div class="row mb-5">
          <hr class="border border-white" />
        </div>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5">
          <div class="col mb-3">
            <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
              <img class="custom-logo-img" src="https://firebasestorage.googleapis.com/v0/b/restapi-keris.appspot.com/o/logo%2Flogo-keris.png?alt=media&token=67fdcc3e-f297-4fc6-b5f4-5d80cdde4338" alt="KERIS logo" />
            </a>
            <p class="text-white">&copy; 2023 KERIS, All rights reserved.</p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h5 class="text-white">${msg('Ikuti Kami')}</h5>
            <ul class="nav flex-row gap-3 mt-3">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white"><i class="bi bi-instagram"></i></a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white"><i class="bi bi-twitter"></i></a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-white"><i class="bi bi-youtube"></i></a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 class="text-white"> ${msg('Informasi')}</h5>
            <ul class="nav flex-column mt-3">
              <li class="nav-item mb-2"><a href="/#about-us" class="nav-link p-0 text-white">Tentang Kami</a></li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5 class="text-white"> ${msg('Halaman')}</h5>
            <ul class="nav flex-column mt-3">
              <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-white"> ${msg('Beranda')}</a></li>
              <li class="nav-item mb-2"><a href="/menu/galeri-seni.html" class="nav-link p-0 text-white"> ${msg('Galeri Seni')}</a></li>
              <li class="nav-item mb-2"><a href="/menu/news.html" class="nav-link p-0 text-white"> ${msg('News')}</a></li>
              <li class="nav-item mb-2"><a href="/menu/kalendarbudaya.html" class="nav-link p-0 text-white"> ${msg('Kalendar Budaya')}</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-app', FooterApp);
