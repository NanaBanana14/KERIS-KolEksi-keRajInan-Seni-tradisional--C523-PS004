import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ModalEvent extends LitWithoutShadowDom {
  render() {
    return html`
    <div class="modal fade" id="eventDetailModal" tabindex="-1" role="dialog" aria-labelledby="eventDetailModalLabel" aria-hidden="true" style="background-color: rgba(0, 0, 0, 0.5)">
      <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="eventDetailModalLabel">Event Detail</h5>
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true" class="bi bi-x-square-fill"></span>
            </button>
          </div>
          <div class="modal-body" id="eventDetailContainer">
            <!-- Detail event -->
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define('modal-detail-event', ModalEvent);
