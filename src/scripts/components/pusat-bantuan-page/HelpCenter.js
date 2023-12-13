import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class HelpCenter extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="hero">
        <div class="row align-items-center">
            <div class="col-md-4 mx-auto">
                <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fhelp-center%2FContact%20us-pana.png?alt=media&token=e99c8261-7be0-47ca-af6a-944d35c283bb" alt="help-center" class="w-100" />
            </div>
            <div class="col-md-6 text-md-start">
                <div class="text">
                    <h2>${msg('Perlu Bantuan ?')}</h2>
                    <p class="paragraf-size-custom mt-4">${msg('Halaman ini disediakan untuk kamu yang memerlukan bantuan dalam penggunaan website ini, jangan ragu untuk menghubungi kami lebih lanjut bila terdapat keluhan !')}
                </div>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('help-center-section', HelpCenter);
