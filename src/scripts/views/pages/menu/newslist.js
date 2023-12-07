import Arts from '../../../network/arts';
import { createNewsTemplate } from '../../templates/template-creator';

async function newslist() {
  try {
    const newsResponse = await Arts.getAllNews();
    const news = Object.values(newsResponse);
    const newsListContainer = document.getElementById('news-list-container');
    const btnNewsSelanjutnya = document.getElementById('btnNewsSelanjutnya');

    // Hide all news cards except the first three
    news.forEach((newsItem, index) => {
      const newsCard = createNewsTemplate(newsItem);
      newsListContainer.innerHTML += newsCard;

      // Hide cards after the first three
      if (index >= 3) {
        const card = newsListContainer.children[index];
        card.style.display = 'none';
      }
    });

    let currentIndex = 3; // Start with the fourth news card

    // Add event listener to "Selanjutnya" button
    btnNewsSelanjutnya.addEventListener('click', (event) => {
      event.preventDefault();

      // Show the next three hidden news cards
      for (let i = currentIndex; i < currentIndex + 3; i++) {
        const card = newsListContainer.children[i];
        if (card) {
          card.style.display = 'block';
        }
      }
      currentIndex += 3;

      // Hide the "Selanjutnya" button if there are no more news cards
      if (currentIndex >= news.length) {
        btnNewsSelanjutnya.style.display = 'none';
      }
    });
  } catch (error) {
    console.error('Error fetching news:', error.message);
  }
}

export default newslist;
