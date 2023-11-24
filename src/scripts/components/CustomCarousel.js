import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class CustomCarousel extends LitWithoutShadowDom {
  connectedCallback() {
    super.connectedCallback();
    this.initCarousel();
  }

  initCarousel() {
    // Inisialisasi Bootstrap Carousel
    const carousel = new bootstrap.Carousel(this.shadowRoot.querySelector('.carousel'), {
      interval: 2000,
    });
  }

  render() {
    return html`
      <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.pinimg.com/564x/1e/fe/79/1efe796fe6fcb23eedb50701bfaa8b11.jpg" class="d-block w-100 rounded" alt="Slide 1">
            <div class="carousel-caption d-none d-md-block">
              <h5>Caption Slide 1</h5>
              <p>Deskripsi slide 1.</p>
              <i class="bi bi-heart"></i> <!-- Bootstrap Heart Icon -->
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://i.pinimg.com/564x/32/ea/90/32ea90b53541c1790d6d65380a2788a2.jpg" class="d-block w-100 rounded" alt="Slide 2">
            <div class="carousel-caption d-none d-md-block">
              <h5>Caption Slide 2</h5>
              <p>Deskripsi slide 2.</p>
              <i class="bi bi-star"></i>
            </div>
          </div>
          <div class="carousel-item">
          <img src="https://i.pinimg.com/564x/1d/b8/69/1db869d783ef20fbc36deaafefb59874.jpg" class="d-block w-100 rounded" alt="Slide 2">
          <div class="carousel-caption d-none d-md-block">
            <h5>Caption Slide 2</h5>
            <p>Deskripsi slide 2.</p>
            <i class="bi bi-star"></i>
          </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
         <h1><i class="bi bi-arrow-left-circle-fill"></i></h1>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <h1><i class="bi bi-arrow-right-circle-fill"></i></h1>
        </button>
      </div>
    `;
  }
}

customElements.define('custom-carousel', CustomCarousel);
