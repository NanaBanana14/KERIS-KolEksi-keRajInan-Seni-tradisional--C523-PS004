import Arts from '../../../network/arts';
import { createNewsTemplate } from '../../templates/template-creator';

const NewsList = {
  async render() {
    return `
      <div id="loading-indicator-news" class="loading-indicator">
        <p class="loading">Loading news...</p>
      </div>
      <div class="list-news" id="news-list">
        <!-- List of news will be displayed here -->
      </div>
    `;
  },

  async afterRender() {
    const newsListContainer = document.querySelector('#news-list');
    const loadingIndicator = document.getElementById('loading-indicator-news');

    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }

    try {
      const news = await Arts.getAllNews();

      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }

      if (news.length === 0) {
        newsListContainer.innerHTML = '<p>No news found.</p>';
      } else {
        newsListContainer.innerHTML = '';
        news.forEach((newsItem) => {
          const newsItemHtml = createNewsTemplate(newsItem);
          newsListContainer.innerHTML += newsItemHtml;
        });
      }
    } catch (error) {
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
      newsListContainer.innerHTML = '<p class="message">Error fetching news list.</p>';
    }
  },
};

export default NewsList;
