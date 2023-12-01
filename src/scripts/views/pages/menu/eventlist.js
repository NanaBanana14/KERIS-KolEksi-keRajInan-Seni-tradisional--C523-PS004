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

    events.forEach((event) => {
      const eventCard = createEventTemplate(event);
      eventListContainer.innerHTML += eventCard;
    });

    // Tambahkan event listener k "Read more"
    document.querySelectorAll('.btn-event-detail').forEach((button) => {
      button.addEventListener('click', (event) => handleEventClick(event));
    });
  } catch (error) {
    console.error('Error fetching events:', error.message);
  }
}

export default eventlist;
