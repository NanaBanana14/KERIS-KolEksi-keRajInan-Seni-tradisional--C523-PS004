import './NavApp';
import './NavLinks';
import './NavLink';
import './DropDownBtn';
import './CustomCarousel';
import './CustomCarouselGaleri';

import './form/LocalePicker';

// Home Page Custom
import './home-page/DeveloperCard';
import './home-page/About-Us';
import './home-page/HeroApp';
import './home-page/ExploreCard';
import './home-page/KerisDesc';
import './home-page/ExploreSection';

// Galeri Seni
import './galeri-seni-page/HeroCarouselGaleri';

// News
import './news-page/HeroCarouselNews';

// Kalendar Budaya Page Custom
import './kalendar-budaya-page/HeaderKabud';
import './kalendar-budaya-page/CardCalendar';
import './kalendar-budaya-page/MainContentKabud';

import './FooterApp';

// inisialisasi komponen bootstrap
const carousels = document.querySelectorAll('.carousel'); // Temukan semua elemen dengan kelas .carousel
carousels.forEach((carouselElement) => {
  // eslint-disable-next-line no-new, no-undef
  new Carousel(carouselElement, { interval: 2000 });
});
