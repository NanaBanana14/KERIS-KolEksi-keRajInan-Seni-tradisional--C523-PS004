import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class TutorialBody extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
    <div class="tab-content p-4 shadow rounded" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-login-register" role="tabpanel" aria-labelledby="pills-login-register-tab" tabindex="0">
        <h5>${msg('Cara Login')}</h5>
        <ol>
          <li>${msg('klik Masuk yang berada di pojok kanan atas')}</li>
          <li>${msg('Masukkan Email yang telah terdaftar')}</li>
          <li>${msg('Masukkan Password')}</li>
          <li>${msg('Klik Masuk')}</li>
        </ol>
        <h5>${msg('Cara Register')}</h5>
        <ol>
          <li>${msg('klik Masuk yang berada di pojok kanan atas')}</li>
          <li>${msg('klik Mendaftar')}</li>
          <li>${msg('Masukkan Email')}</li>
          <li>${msg('Masukkan password (minimal 6 karakter)')}</li>
          <li>${msg('Klik Daftar')}</li>
        </ol>
      </div>
      <div class="tab-pane fade" id="pills-gallery" role="tabpanel" aria-labelledby="pills-gallery-tab" tabindex="0">
        <h5>${msg('Melihat Galeri Seni')}</h5>
        <ol>
          <li>${msg('klik Menu yang ada di Navbar')} <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fmenu.png?alt=media&token=57a4ed0d-9688-4df4-af54-7b7882241b49" style="width: 50px"> </li>
          <li>${msg('Klik Galeri Seni')}</li>
          <li>${msg('Untuk Melihat kategori seni')}</li>
          <li>${msg('Klik dropdown Kategori yang ada dipojok kiri atas')} <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2F1.dp.png?alt=media&token=02e8e60e-28ba-4027-8ab7-32361fc70d40" style="width: 50px"> </li>
          <li>${msg('Untuk Melihat informasi lebih banyak')}</li>
          <li>${msg('Klik Read more dan akan menampilkan detail galeri')}</li>
        </ol>
      </div>
      <div class="tab-pane fade" id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab" tabindex="0"> 
        <h5>${msg('Review Galeri Seni')}</h5>
        <ol>
          <li>${msg('Masuk kehalaman detail Galeri Seni')}</li>
          <li>${msg('Scroll kepaling bawah')}</li>
          <li>${msg('Tulis Ulasan, jika belum login, lakukan login terlebih dahulu')}</li>
          <li>${msg('jika sudah login')}</li>
          <li>${msg('Tuliskan Nama dan Tuliskan Ulasan')}</li>
          <li>${msg('Kirim')}</li>
        </ol>
      </div>
      <div class="tab-pane fade" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab" tabindex="0">
        <h5>${msg('Melihat Event dan News')}</h5>
        <ol>
          <li>${msg('klik Menu yang ada di Navbar')} <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fmenu.png?alt=media&token=57a4ed0d-9688-4df4-af54-7b7882241b49" style="width: 50px"></li>
          <li>${msg('Klik News')}</li>
          <li>${msg('Event, kemudian Read More')} <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2F1.rm.png?alt=media&token=777bac3c-c34e-48b1-916f-f099f8c26889" style="width: 55px"></li>
          <li>${msg('Menampilkan Detail Event')}</li>
          <li>${msg('News, lalu Read More')} <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2F1.rm.png?alt=media&token=777bac3c-c34e-48b1-916f-f099f8c26889" style="width: 55px"></li>
          <li>${msg('Pindah ke Halaman News')}</li>
        </ol>
      </div>
      <div class="tab-pane fade" id="pills-calendar" role="tabpanel" aria-labelledby="pills-calendar-tab" tabindex="0">
        <h5>${msg('Melihat Kalender Budaya')}</h5>
        <ol> 
          <li>${msg('klik Menu yang ada di Navbar')} <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2Fmenu.png?alt=media&token=57a4ed0d-9688-4df4-af54-7b7882241b49" style="width: 50px"></li>
          <li>${msg('Kalender Budaya')}</li>
          <li>${msg('Klik pada tanggal yang memiliki kegiatan')}  <img src="https://firebasestorage.googleapis.com/v0/b/keris-api.appspot.com/o/images%2F1.kb.png?alt=media&token=3a2ff03b-fb0e-4425-ad53-d960889a8c6b"  style="width: 50px"> </li>
          <li>${msg('Detail informasi kegiatan seni')}</li>
        </ol>
      </div>
    </div>
    `;
  }
}

customElements.define('tutorial-body-section', TutorialBody);
