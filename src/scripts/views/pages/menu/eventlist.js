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

function getEventStatus(startDate, endDate) {
  const currentDate = new Date();

  const startDateTime = new Date(startDate);
  const endDateTime = new Date(endDate);

  if (currentDate >= startDateTime && currentDate <= endDateTime) {
    return 'Ongoing';
  } if (currentDate < startDateTime) {
    return 'Upcoming';
  }
  return 'Completed';
}

async function eventlist() {
  try {
    const eventsResponse = await Arts.getAllEvents();
    const events = Array.isArray(eventsResponse) ? eventsResponse : Object.values(eventsResponse);
    const eventListContainer = document.getElementById('event-list-container');
    const btnSelanjutnya = document.getElementById('btnSelanjutnya');

    // Pisahkan event berdasarkan status
    const ongoingEvents = events.filter(event => getEventStatus(event['start-date'], event['end-date']) === 'Ongoing');
    const upcomingEvents = events.filter(event => getEventStatus(event['start-date'], event['end-date']) === 'Upcoming');
    const completedEvents = events.filter(event => getEventStatus(event['start-date'], event['end-date']) === 'Completed');

    // Urutkan event berdasarkan tanggal (end-date) secara descending
    ongoingEvents.sort((a, b) => new Date(b['end-date']) - new Date(a['end-date']));
    upcomingEvents.sort((a, b) => new Date(b['end-date']) - new Date(a['end-date']));
    completedEvents.sort((a, b) => new Date(b['end-date']) - new Date(a['end-date']));

    // Gabungkan kembali ke dalam satu array
    const sortedEvents = [...ongoingEvents, ...upcomingEvents, ...completedEvents];

    // Hide all cards except the first three
    sortedEvents.forEach((event, index) => {
      // Mendapatkan status event berdasarkan tanggal saat ini, start-date, dan end-date
      const status = getEventStatus(event['start-date'], event['end-date']);
      event.status = status;

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

      for (let i = currentIndex; i < sortedEvents.length; i++) {
        const card = eventListContainer.children[i];
        if (card) {
          card.style.display = 'block';
        }
      }
      currentIndex = sortedEvents.length;

      btnSelanjutnya.style.display = 'none';
    });
  } catch (error) {
    // console.error('Error fetching events:', error.message);
  }
}

export default eventlist;
