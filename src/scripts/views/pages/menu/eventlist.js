import Arts from '../../../network/arts';
import { createEventTemplate } from '../../templates/template-creator';
import showEventDetailByUrl from './eventdetail';

function handleEventClick(event) {
  event.preventDefault();
  const detailUrl = event.target.getAttribute('data-detail-url');

  if (detailUrl) {
    showEventDetailByUrl(detailUrl);
  } else {
    console.error('Error: URL Detail Event tidak terdefinisi.');
  }
}

async function eventlist() {
  try {
    const eventsResponse = await Arts.getAllEvents();
    const events = Array.isArray(eventsResponse) ? eventsResponse : Object.values(eventsResponse);
    const eventListContainer = document.getElementById('event-list-container');
    const btnSelanjutnya = document.getElementById('btnSelanjutnya');

    // Hide all cards except the first three
    events.forEach((event, index) => {
      const eventCard = createEventTemplate(event);
      eventListContainer.innerHTML += eventCard;

      // Hide cards after the first three
      if (index >= 3) {
        const card = eventListContainer.children[index];
        card.style.display = 'none';
      }
    });

    let currentIndex = 3; // Start with the fourth card

    // Add event listener to "Read More" buttons
    document.querySelectorAll('.btn-event-detail').forEach((button) => {
      button.addEventListener('click', (event) => handleEventClick(event));
    });

    // Add event listener to "Selanjutnya" button
    btnSelanjutnya.addEventListener('click', (event) => {
      event.preventDefault(); // Mencegah perilaku default (gulir ke atas)

      // Show the next three hidden cards
      // eslint-disable-next-line no-plusplus
      for (let i = currentIndex; i < currentIndex + 3; i++) {
        const card = eventListContainer.children[i];
        if (card) {
          card.style.display = 'block';
        }
      }
      currentIndex += 3;

      // Hide the "Selanjutnya" button if there are no more cards
      if (currentIndex >= events.length) {
        btnSelanjutnya.style.display = 'none';
      }
    });
  } catch (error) {
    console.error('Error fetching events:', error.message);
  }
}

export default eventlist;
