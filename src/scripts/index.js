// Import our custom CSS
import '../scss/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import './views/pages/menu/main';
import renderDetailArtPage from './views/pages/menu/detailgaleriseni';

/* eslint-disable */
import * as bootstrap from 'bootstrap';

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

window.addEventListener('DOMContentLoaded', async () => {
  initPages();

  // untuk halaman detail galeri seni
  const url = window.location.href;
  if (url.includes('detail-galeri-seni')) {
    await renderDetailArtPage();
  }
});
