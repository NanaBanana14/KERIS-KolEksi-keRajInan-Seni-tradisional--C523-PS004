import CONFIG from './config';

const API_ENDPOINT = {
  ARTS: `${CONFIG.BASE_URL}/arts.json`,
  ART_DETAIL: (Id) => `${CONFIG.BASE_URL}/arts/${Id}.json`,
  REVIEWS: (Id) => `${CONFIG.BASE_URL}/arts/${Id}/reviews.json`,
  ARTS_SEARCH: (query) => `${CONFIG.BASE_URL}/arts.json?orderBy="name"&startAt="${query}"&endAt="${query}\uf8ff"`,
  NEWS: `${CONFIG.BASE_URL}/news.json`,
  NEWS_DETAIL: (Id) => `${CONFIG.BASE_URL}/news/${Id}.json`,
  EVENTS: `${CONFIG.BASE_URL}/events.json`,
  EVENT_DETAIL: (Id) => `${CONFIG.BASE_URL}/events/${Id}.json`,
};

export default API_ENDPOINT;
