import Arts from '../../../network/arts';
import { createNewsTemplate } from '../../templates/template-creator';

function formatDate(dateString) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('id-ID', options);
}

async function newslist() {
  try {
    const newsResponse = await Arts.getAllNews();
    const news = Object.values(newsResponse);
    const newsListContainer = document.getElementById('news-list-container');
    const btnNewsSelanjutnya = document.getElementById('btnNewsSelanjutnya');

    news.sort((a, b) => {
      const dateA = new Date(a['publish-date']);
      const dateB = new Date(b['publish-date']);

      if (!isNaN(dateA) && !isNaN(dateB)) {
        return dateB - dateA;
      }
      return b['publish-date'].localeCompare(a['publish-date']);
    });

    news.forEach((newsItem, index) => {
      const formattedDate = formatDate(newsItem['publish-date']);
      newsItem['formatted-date'] = formattedDate;

      const newsCard = createNewsTemplate(newsItem);
      newsListContainer.innerHTML += newsCard;

      if (index >= 3) {
        const card = newsListContainer.children[index];
        card.style.display = 'none';
      }
    });

    let currentIndex = 3;

    btnNewsSelanjutnya.addEventListener('click', (event) => {
      event.preventDefault();

      for (let i = currentIndex; i < news.length; i++) {
        const card = newsListContainer.children[i];
        if (card) {
          card.style.display = 'block';
        }
      }
      currentIndex = news.length;

      btnNewsSelanjutnya.style.display = 'none';
    });
  } catch (error) {
    console.error('Error fetching news:', error.message);
  }
}

export default newslist;
