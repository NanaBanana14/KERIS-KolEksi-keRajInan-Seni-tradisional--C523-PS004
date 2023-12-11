import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class KerisDesc extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="hero">
    <div class="row align-items-center">
        <!--text-->
        <div class="col-md-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Filustration-landingpage%2FQuestions-pana.png?alt=media&token=e6686d89-0708-48cb-b68d-4f9f24b6d584" alt="lp" class="w-100" />
        </div>
        <!--img-->
        <div class="col-md-6 text-md-start">
            <div class="text">
            <h2>${msg('Apa Itu KERIS ?')}</h2>
            <p class="paragraf-size-custom mt-4">${msg('KERIS adalah platform yang mempromosikan dan melestarikan seni dan budaya tradisional Indonesia. Diciptakan sebagai solusi untuk tantangan seniman dan penggemar seni tradisional, KERIS menyediakan fitur seperti "GaleriSeni," "DetailSeni," dan "ReviewKarya" untuk memamerkan karya, memberikan informasi rinci, dan menerima umpan balik. Fitur "News" dan "KalenderBudaya" bertujuan meningkatkan pengetahuan tentang seni tradisional. Bergabunglah dengan KERIS untuk menjaga dan menghargai kekayaan budaya Indonesia melalui KolEksi keRajInan Seni tradisional.')}
            </p>
            </div>
        </div>
        </div>
    </div>
    `;
  }
}

customElements.define('keris-desc', KerisDesc);
