import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Arts from '../../../network/arts';
import { createDetailArt, createSeller, createReview } from '../../templates/template-creator';

const getIdFromUrl = () => {
  // Mengambil URL saat ini
  const url = window.location.href;
  // Mencari posisi tanda pagar (#) dalam URL
  const pos = url.indexOf('#');
  const id = url.substring(pos + 1);
  return id;
};

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
    renderReview(id);
  });
};

export default renderDetailArtPage;
