import Arts from '../../../network/arts';
import { createNewsTemplate } from '../../templates/template-creator';

async function newslist() {
  try {
    const newsResponse = await Arts.getAllNews();

    // Mengambil nilai dari objek respons
    const news = Object.values(newsResponse);

    const newsListContainer = document.getElementById('news-list-container');

    if (Array.isArray(news)) {
      news.forEach((newsItem) => {
        const newsCard = createNewsTemplate(newsItem);
        newsListContainer.innerHTML += newsCard;
      });
    } else {
      console.error('Error: Respons dari Arts.getAllNews() bukanlah sebuah array.');
    }
  } catch (error) {
    console.error('Error fetching and displaying news:', error);
  }
}

export default newslist;
