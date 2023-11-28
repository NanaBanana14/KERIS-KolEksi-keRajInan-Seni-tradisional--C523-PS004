// Import our custom CSS
import '../scss/main.scss';

// Import components
import './components/index';

// Import javascript file as needed
import EventList from './views/pages/menu/eventlist';
import NewsList from './views/pages/menu/newslist';

import './utils/firebase';
/* eslint-disable */
import * as bootstrap from 'bootstrap';

const routes = {
  '/': Home,
};

const detectRoute = () => routes[window.location.pathname];

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

  const route = detectRoute();
  route.init();
});

document.addEventListener('DOMContentLoaded', async () => {
  const eventListContainer = document.getElementById('event-list-container');
  const newsListContainer = document.getElementById('news-list-container');

  // Render and display EventList
  const eventListHtml = await EventList.render();
  eventListContainer.innerHTML = eventListHtml;
  await EventList.afterRender();

  // Render and display NewsList
  const newsListHtml = await NewsList.render();
  newsListContainer.innerHTML = newsListHtml;
  await NewsList.afterRender();
});