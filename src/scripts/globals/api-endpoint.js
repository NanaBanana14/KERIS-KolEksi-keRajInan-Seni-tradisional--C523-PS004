import CONFIG from './config';

const API_ENDPOINT = {
  ARTS: `${CONFIG.BASE_URL}/arts.json`,
  ART_DETAIL: (id) => `${CONFIG.BASE_URL}/arts/${id}.json`,
  REVIEWS: (id) => `${CONFIG.BASE_URL}/arts/${id}/review.json`,
  ARTS_SEARCH: (query) => `${CONFIG.BASE_URL}/arts.json?orderBy="name"&startAt="${query}"&endAt="${query}\uf8ff"`,
  NEWS: `${CONFIG.BASE_URL}/news.json`,
  NEWS_DETAIL: (id) => `${CONFIG.BASE_URL}/news/${id}.json`,
  EVENTS: `${CONFIG.BASE_URL}/eventlist.json`,
  EVENT_DETAIL: (id) => `${CONFIG.BASE_URL}/eventlist/${id}.json`,

  CREATE_REVIEW: (id) => `https://keris-api-default-rtdb.firebaseio.com/arts/${id}/review.json`,
};

export default API_ENDPOINT;
