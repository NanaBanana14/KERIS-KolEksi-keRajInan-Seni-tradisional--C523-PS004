import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class EventSection extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="col-md-12 p-5 position-relative shadow rounded mt-5 mb-5">
        <div class="py-2">
            <h2>Event__________</h2>
            <div class="row mx-auto" id="event-list-container">
                <!-- content for the "Event" section goes here -->
            </div>
        </div>
        <div class="position-absolute bottom-0 end-0 mb-3 mx-3">
            <a href="#" id="btnSelanjutnya" class="btn btn-brown-white flex-end">${msg('Selanjutnya..')} <i class="bi bi-arrow-right-circle-fill"></i></a>
        </div>
    </div>
    <div id="event-detail-container">
        <!-- content for the "Event Detail" section goes here -->
    </div>
    `;
  }
}

customElements.define('event-section', EventSection);
