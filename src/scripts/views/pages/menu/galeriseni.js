import Arts from '../../../network/arts';
import { createArtTemplate } from '../../templates/template-creator';

async function galeriSeni() {
  const arts = await Arts.getAll();
  const arrayArts = Object.values(arts); // Mengonversi nilai-nilai properti objek arts menjadi array

  const artsContainer = document.getElementById('list-arts');

  // Cetak Semua Arts Pertama kali
  arrayArts.forEach((art) => {
    artsContainer.innerHTML += createArtTemplate(art);
  });

  // Klik Cetak Semua
  const dropdownSemua = document.getElementById('dropdown-semua');
  dropdownSemua.addEventListener('click', () => {
    artsContainer.innerHTML = '';
    arrayArts.forEach((art) => {
      artsContainer.innerHTML += createArtTemplate(art);
    });
  });

  // Klik Cetak Arts Alat Musik
  const dropdownAlatMusik = document.getElementById('dropdown-alat-musik');
  dropdownAlatMusik.addEventListener('click', () => {
    const artsAlatMusik = arrayArts.filter((art) => art.category === 'Alat Musik');
    artsContainer.innerHTML = '';
    artsAlatMusik.forEach((art) => {
      artsContainer.innerHTML += createArtTemplate(art);
    });
  });

  // Klik Cetak Arts Sastra
  const dropdownSastra = document.getElementById('dropdown-sastra');
  dropdownSastra.addEventListener('click', () => {
    const artsSastra = arrayArts.filter((art) => art.category === 'Sastra');
    artsContainer.innerHTML = '';
    artsSastra.forEach((art) => {
      artsContainer.innerHTML += createArtTemplate(art);
    });
  });

  // Klik Cetak Arts Seni Rupa
  const dropdownSeniRupa = document.getElementById('dropdown-seni-rupa');
  dropdownSeniRupa.addEventListener('click', () => {
    const artsSeniRupa = arrayArts.filter((art) => art.category === 'Seni Rupa');
    artsContainer.innerHTML = '';
    artsSeniRupa.forEach((art) => {
      artsContainer.innerHTML += createArtTemplate(art);
    });
  });

  // Fitur Pencarian
  const searchButton = document.getElementById('search-button');
  searchButton.addEventListener('click', () => {
    const textInput = document.getElementById('input-name-art').value;
    const artsSearched = arrayArts.filter((art) => art.name.toLowerCase().includes(textInput.toLowerCase()));

    artsContainer.innerHTML = '';
    if (artsSearched.length >= 1) {
      artsSearched.forEach((art) => {
        artsContainer.innerHTML += createArtTemplate(art);
      });
    } else {
      artsContainer.innerHTML = `<p class='text-secondary'>${textInput} tidak ditemukan</p>`;
    }
  });
}

export default galeriSeni;
