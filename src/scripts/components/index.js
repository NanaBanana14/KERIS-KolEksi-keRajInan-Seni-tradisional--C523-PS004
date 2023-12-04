import './NavApp';
import './NavLinks';
import './NavLink';
import './DropDownBtn';
import './CustomCarousel';
import './CustomCarouselGaleri';
import './ModalEvent';

import './FooterApp';

// inisialisasi komponen bootstrap
const carousels = document.querySelectorAll('.carousel'); // Temukan semua elemen dengan kelas .carousel
carousels.forEach((carouselElement) => {
  // eslint-disable-next-line no-new, no-undef
  new Carousel(carouselElement, { interval: 2000 });
});
