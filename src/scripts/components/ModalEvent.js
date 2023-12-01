import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class ModalEvent extends LitWithoutShadowDom {
  static properties = {
    eventDetail: { type: Object },
  };

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('showEvent', () => {
      this.show();
    });
  }

  render() {
    const { eventDetail } = this;

    return html`
      <div class="modal-dialog modal-lg modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">${eventDetail.name}</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <img src="${eventDetail['image-url']}" class="img-fluid rounded" alt="${eventDetail.name}" />
            </div>
            <table class="table table-borderless">
              <tbody>
                <tr>
                  <th class="fw-bold">Nama</th>
                  <td>${eventDetail.name}</td>
                </tr>
                <tr>
                  <th class="fw-bold">Tanggal</th>
                  <td>${eventDetail.date}</td>
                </tr>
                <tr>
                  <th class="fw-bold">Deskripsi</th>
                  <td>${eventDetail.description}</td>
                </tr>
                <!-- Tambahkan elemen lain sesuai kebutuhan -->
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">'Tutup'</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('modal-event', ModalEvent);
