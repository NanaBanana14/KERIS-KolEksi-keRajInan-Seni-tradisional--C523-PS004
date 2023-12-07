import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Arts from '../../../network/arts';

const getIdFromUrl = () => {
  // Mengambil URL saat ini
  const url = window.location.href;
  // Mencari posisi tanda pagar (#) dalam URL
  const pos = url.indexOf('#');
  const id = url.substring(pos + 1);
  return id;
};

const createDetailArt = (art) => `
    <div class="bg-brown mb-3 p-4">
        <div class="container">
            <div class="row">
                 <div class="col d-flex align-items-center">
                     <img
                         class="img-fluid rounded"
                        src="${art.image_url}"
                         alt="${art.name}"
                        style="min-width: 200px; max-width: 500px"
                    />
                    </div>
                    <div class="col d-flex align-items-center">
                    <h2 class="text-white fw-bold">${art.name}</h2>
                 </div>
             </div>
        </div>
     </div>

    <div class="container mb-5">
        <h3>Ringkasan</h3>
        <hr />
        <div class="container p-0">
            <div class="row mb-3">
                <div class="col fw-bold">Deskripsi</div>
                <div class="col-10">${art.description}</div>
            </div>
            <div class="row">
                <div class="col fw-bold">Seller</div>
                <div class="col-10">
                    <ul id="seller-container" style="list-style: none; padding: 0"></ul>
                </div>
            </div>
        </div>
    </div>

    <div class="container col-md-8 mb-5">
        <h3>Ulasan</h3>
        <hr />
        <div id="reviews-container" style="max-height: 300px; overflow: auto"></div>
        <hr class="mb-3" />

        <h3>Tulis Ulasan</h3>
        <div class="form-group">
            <label for="nama">Nama:</label>
            <input id="name-input" type="text" class="form-control" id="nama" placeholder="Masukkan Nama" />
        </div>
        <div class="form-group mb-3">
            <label for="ulasan">Ulasan:</label>
            <textarea id="text-input" class="form-control" id="ulasan" rows="3" placeholder="Tulis ulasan Anda"></textarea>
        </div>

        <button id="button-submit-review" type="submit" class="btn btn-brown-darkbrown">Kirim Ulasan</button>
    </div>
`;

const createSeller = (seller) => `
    <li>- <a href="${seller.link}">${seller.name}</a></li>
`;

const createReview = (review) => `
    <div class="mb-3">
        <p class="m-0">
            <span class="fw-bold">${review.name}</span>
            <span class="text-black-50"> - ${review.date}</span>
        </p>
        <p class="m-0">${review.text}</p>
    </div>
`;

const renderReview = async (id) => {
  const reviews = await Arts.getReviewsById(id);
  const arrayReviews = Object.values(reviews);
  const reviewsContainer = document.getElementById('reviews-container');
  reviewsContainer.innerHTML = '';
  arrayReviews.forEach((review) => {
    reviewsContainer.innerHTML += createReview(review);
  });
};

const addReview = async (id) => {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const name = document.getElementById('name-input').value;
      const text = document.getElementById('text-input').value;
      const date = new Date().toDateString();
      const data = {
        name,
        date,
        text,
      };
      await Arts.postReview(id, data);
      renderReview(id);
      document.getElementById('name-input').value = '';
      document.getElementById('text-input').value = '';
    } else {
      alert('Anda harus login untuk mengirim ulasan.');
    }
  });
};

const renderDetailArtPage = async () => {
  // mendapatkan id
  const id = getIdFromUrl();

  // mendapatkan art
  const art = await Arts.getById(id);

  // render elemen main
  const mainElement = document.getElementById('main-detail-art');
  mainElement.innerHTML = createDetailArt(art);

  // render seller
  const arraySeller = Object.values(art.seller);
  const sellerContainer = document.getElementById('seller-container');
  sellerContainer.innerHTML = '';
  arraySeller.forEach((seller) => {
    sellerContainer.innerHTML += createSeller(seller);
  });

  // render review
  renderReview(id);

  // fungsional button input review
  const buttonSubmitReview = document.getElementById('button-submit-review');
  buttonSubmitReview.addEventListener('click', async () => {
    await addReview(id);
  });
};

export default renderDetailArtPage;
