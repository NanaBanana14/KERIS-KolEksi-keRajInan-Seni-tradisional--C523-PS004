import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CustomCarouselGaleri extends LitWithoutShadowDom {
  connectedCallback() {
    super.connectedCallback();
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fbanner%2Fbanner-art-1.jpg?alt=media&token=1136c0f2-3aa7-4a9d-bb1e-9536b232bceb" class="d-block w-100 rounded" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fbanner%2Fbanner-art-2.jpg?alt=media&token=53757291-41c3-4cb7-8b30-7601c79f0d17" class="d-block w-100 rounded" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fbanner%2Fbanner-art-3.jpg?alt=media&token=4b5d128b-db2d-4156-a432-81de7cba947b" class="d-block w-100 rounded" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    `;
  }
}

customElements.define('custom-carousel-galeri', CustomCarouselGaleri);
