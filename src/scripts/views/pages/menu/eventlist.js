import Arts from '../../../network/arts';
import { createEventTemplate } from '../../templates/template-creator';
import showEventDetail from './eventdetail';

function handleEventClick(event) {
  event.preventDefault();
  const detailUrl = event.target.getAttribute('data-detail-url');

  if (detailUrl) {
    // console.log('Clicked Event Detail URL:', detailUrl);
    showEventDetail(detailUrl);
  } else {
    console.error('Error: URL Detail Event tidak terdefinisi.');
  }
}

async function eventlist() {
  try {
    const eventsResponse = await Arts.getAllEvents();
    // untuk menampilkan respons API ke console
    // console.log('API Response:', eventsResponse);

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
    // return error;
  }
}

export default eventlist;
