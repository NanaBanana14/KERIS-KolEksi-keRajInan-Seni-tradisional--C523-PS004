import Arts from '../../../network/arts';
import { createNewsTemplate } from '../../templates/template-creator';

const NewsList = {
  async render() {
    return `
      <div id="loading-indicator-news" class="loading-indicator">
        <p class="loading">Loading...</p>
      </div>
      <div class="card-columns" id="news-list-container">
        <!-- List of news will be displayed here -->
      </div>
    `;
  },

  async afterRender() {
    const newsContainer = document.querySelector('#news-list-container');
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
        newsContainer.innerHTML = '<p>No news found.</p>';
      } else {
        newsContainer.innerHTML = '';
        news.forEach((newsItem) => {
          const newsItemTemplate = createNewsTemplate(newsItem);
          newsContainer.innerHTML += newsItemTemplate;
        });
      }
    } catch (error) {
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
      newsContainer.innerHTML = '<p class="message">Error fetching news list.</p>';
    }
  },
};

export default NewsList;
