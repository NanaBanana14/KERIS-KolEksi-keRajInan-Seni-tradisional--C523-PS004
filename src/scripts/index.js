// Import Firebase
import './utils/firebase';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

// Import our custom CSS
import '../scss/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import './views/pages/menu/main';
import renderDetailArtPage from './views/pages/menu/detailgaleriseni';
import loginPageFunction from './views/pages/auth/login';
import registPageFunction from './views/pages/auth/register';

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

window.addEventListener('load', async () => {
  initPages();

  // untuk tampilnya button login atau logout di navigasi
  const loginMenuButton = document.getElementById('loginMenu');
  const logoutMenuButton = document.getElementById('logoutMenu');
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      logoutMenuButton.classList.remove('d-none');
      logoutMenuButton.addEventListener('click', () => {
        const konfirmasi = confirm('Apakah Anda yakin ingin logout?');
        if (konfirmasi) {
          const auth = getAuth();
          signOut(auth)
            .then(() => {
              alert('Anda telah Logout.');
            })
            .catch((error) => {
              alert(error);
            });
        } else {
        }
      });
    } else {
      loginMenuButton.classList.remove('d-none');
    }
  });

  // untuk halaman detail galeri seni
  const url = window.location.href;
  if (url.includes('detail-galeri-seni')) {
    await renderDetailArtPage();
  }

  // Untuk halaman login
  if (url.includes('login')) {
    loginPageFunction();
  }

  // untuk halaman register
  if (url.includes('regist')) {
    registPageFunction();
  }
});
