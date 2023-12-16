import Arts from '../../../network/arts';
import { createEventTemplate } from '../../templates/template-creator';
import showEventDetailByUrl from './eventdetail';

function handleEventClick(event) {
  event.preventDefault();
  const detailUrl = event.target.getAttribute('data-detail-url');

  if (detailUrl) {
    showEventDetailByUrl(detailUrl);
  } else {
    // console.error('Error: URL Detail Event tidak terdefinisi.');
  }
}

async function eventlist() {
  try {
    const eventsResponse = await Arts.getAllEvents();
    const events = Array.isArray(eventsResponse) ? eventsResponse : Object.values(eventsResponse);
    const eventListContainer = document.getElementById('event-list-container');
    const btnSelanjutnya = document.getElementById('btnSelanjutnya');

    // Sort events based on status
    events.sort((a, b) => {
      const statusOrder = { Ongoing: 0, Upcoming: 1, Completed: 2 };
      return statusOrder[a.status] - statusOrder[b.status];
    });

    // Hide all cards except the first three
    events.forEach((event, index) => {
      const eventCard = createEventTemplate(event);
      eventListContainer.innerHTML += eventCard;

      if (index >= 3) {
        const card = eventListContainer.children[index];
        card.style.display = 'none';
      }
    });

    let currentIndex = 3;

    document.querySelectorAll('.btn-event-detail').forEach((button) => {
      button.addEventListener('click', (event) => handleEventClick(event));
    });

    btnSelanjutnya.addEventListener('click', (event) => {
      event.preventDefault();

      for (let i = currentIndex; i < events.length; i++) {
        const card = eventListContainer.children[i];
        if (card) {
          card.style.display = 'block';
        }
      }
      currentIndex = events.length;

      btnSelanjutnya.style.display = 'none';
    });
  } catch (error) {
    // console.error('Error fetching events:', error.message);
  }
}

export default eventlist;
