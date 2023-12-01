import CONFIG from './config';

const API_ENDPOINT = {
  ARTS: `${CONFIG.BASE_URL}/arts.json`,
  ART_DETAIL: (id) => `${CONFIG.BASE_URL}/arts/${id}.json`,
  REVIEWS: (id) => `${CONFIG.BASE_URL}/arts/${id}/reviews.json`,
  ARTS_SEARCH: (query) => `${CONFIG.BASE_URL}/arts.json?orderBy="name"&startAt="${query}"&endAt="${query}\uf8ff"`,
  NEWS: `${CONFIG.BASE_URL}/news.json`,
  NEWS_DETAIL: (id) => `${CONFIG.BASE_URL}/news/${id}.json`,
  EVENTS: `${CONFIG.BASE_URL}/events/-NkWG7KGMeb1dCI-3-Qw/events-list.json`,
  EVENT_DETAIL: (id) => `${CONFIG.BASE_URL}/events/-NkWG7KGMeb1dCI-3-Qw/events-list/${id}.json`,
};

export default API_ENDPOINT;
