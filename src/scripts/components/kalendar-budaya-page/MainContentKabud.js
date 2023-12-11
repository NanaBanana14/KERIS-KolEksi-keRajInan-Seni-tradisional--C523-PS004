import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class MainContentKabud extends LitWithoutShadowDom {
  render() {
    return html`
    <div class="main-content mt-5">
        <div class="container py-5">
            <header-kabud></header-kabud>
            <card-calendar></card-calendar>
        </div>
    </div>
    `;
  }
}

customElements.define('content-kabud', MainContentKabud);
