import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class CustomCarousel extends LitWithoutShadowDom {
  connectedCallback() {
    super.connectedCallback();
    this.initCarousel();
  }

  // eslint-disable-next-line class-methods-use-this
  initCarousel() {

  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <div id="carouselExampleAutoplaying" class="carousel slide mt-3 align-items-center" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner rounded">
          <div class="carousel-item active">
            <img data-src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fbanner%2Fbanner-event-1.jpg?alt=media&token=f16a9587-385d-4452-9351-ceb62a3f3d4d" class="lazyload d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img data-src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fbanner%2Fbanner-event-2.jpg?alt=media&token=5b2884be-18f6-4982-87d0-a56a4f0cc4d0" class="lazyload d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img data-src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fbanner%2Fbanner-news-1.jpg?alt=media&token=4c86a62d-1c18-484c-bf23-6050af61274b" class="lazyload d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <h1><i class="bi bi-arrow-left-circle-fill" aria-hidden="true"></i></h1>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <h1><i class="bi bi-arrow-right-circle-fill" aria-hidden="true"></i></h1>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  }
}

customElements.define('custom-carousel', CustomCarousel);
