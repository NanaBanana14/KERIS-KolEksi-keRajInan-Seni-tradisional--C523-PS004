import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';
import developersData from '../../../public/data/developer-data';

class DeveloperCard extends LitWithoutShadowDom {
  render() {
    return html`
    <div class="container mb-4 d-flex flex-wrap gap-4 justify-content-center mx-auto">
      ${developersData.map((developer) => html`
        <div class="card border shadow" style="width: 20rem">
          <div class="bg-brown rounded-top p-3 position-relative mb-5" style="height: 100px;">
            <img class="card-img-top w-50 position-absolute top-100 start-50 translate-middle" src="${developer.image}" alt="${developer.name}" />
          </div>      
          <div class="card-body mt-5 d-flex flex-column justify-content-evenly align-items-center">
            <h5 class="card-title m-0">${developer.name}</h5>
            <p class="m-0">${developer.position}</p>
          </div>
          <div class="bg-brown d-flex justify-content-center rounded-bottom">
            <button class="btn text-white bi bi-instagram" @click="${() => this.openSocialMedia(developer.instagram)}"></button>
            <button class="btn text-white bi bi-github" @click="${() => this.openSocialMedia(developer.github)}"></button>
            <button class="btn text-white bi bi-linkedin" @click="${() => this.openSocialMedia(developer.linkedin)}"></button>
          </div>
        </div>
      `)}
    </div>
    `;
  }

  // eslint-disable-next-line
  openSocialMedia(url) {
    window.open(url, '_blank');
  }
}

customElements.define('developer-card', DeveloperCard);
