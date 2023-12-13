import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class ContactUs extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
 <div class="container mt-5">
    <div class="row">
        <div class="col-lg-8">
            <h1>${msg('Hubungi Kami')}Hubungi Kami</h1>
            <p>${msg('Hubungi Kami')}Jangan ragu untuk menghubungi kami jika ada pertanyaan atau kekhawatiran. Kami di sini untuk membantu!</p>

            <div class="contact-info">
                <p><strong>${msg('Email')}Email:</strong> info@example.com</p>
                <p><strong>${msg('Telepon')}Telepon:</strong> +1 (123) 456-7890</p>
                <p><strong>${msg('Alamat')}Alamat:</strong> 123 Jalan Utama, Kota, Provinsi, 12345</p>
            </div>
        </div>

        <div class="col-lg-4">
            <div class="contact-form">
                <form id="contactForm">
                    <div class="form-group">
                        <label for="name">${msg('Nama')}</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>

                    <div class="form-group">
                        <label for="email">${msg('Email')}Email:</label>
                        <input type="email" class="form-control" id="email" name="email" required>
                    </div>

                    <div class="form-group">
                        <label for="message">${msg('Pesan')}:</label>
                        <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                    </div>

                    <button type="button" class="btn btn-brown-white mt-4">Kirim</button>
                </form>
            </div>
        </div>
    </div>
  </div>
    `;
  }
}

customElements.define('contact-us-section', ContactUs);
