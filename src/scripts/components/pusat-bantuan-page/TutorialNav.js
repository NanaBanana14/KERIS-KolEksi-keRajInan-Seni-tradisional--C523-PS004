import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TutorialNav extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <ul class="nav nav-pills mb-3 p-2 shadow rounded" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="pills-login-register-tab" data-bs-toggle="pill" data-bs-target="#pills-login-register" type="button" role="tab" aria-controls="pills-login-register" aria-selected="true">
            ${msg('Masuk Daftar')}
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-gallery-tab" data-bs-toggle="pill" data-bs-target="#pills-gallery" type="button" role="tab" aria-controls="pills-gallery" aria-selected="false">
            ${msg('Melihat Galeri Seni')}
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-review-tab" data-bs-toggle="pill" data-bs-target="#pills-review" type="button" role="tab" aria-controls="pills-review" aria-selected="false">
            ${msg('Review Galeri Seni')}
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-news-tab" data-bs-toggle="pill" data-bs-target="#pills-news" type="button" role="tab" aria-controls="pills-news" aria-selected="false">
            ${msg('Melihat Event dan News')}
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="pills-calendar-tab" data-bs-toggle="pill" data-bs-target="#pills-calendar" type="button" role="tab" aria-controls="pills-calendar" aria-selected="false">
            ${msg('Melihat Jadwal Event')}
          </button>
        </li>
      </ul>
    `;
  }
}

customElements.define('tutorial-nav-section', TutorialNav);
