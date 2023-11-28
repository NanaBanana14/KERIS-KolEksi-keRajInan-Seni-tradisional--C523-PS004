import Arts from '../../../network/arts';
import { createEventTemplate } from '../../templates/template-creator';

async function eventlist() {
  try {
    const eventsResponse = await Arts.getAllEvents();

    // Mengambil nilai dari objek respons
    const events = Object.values(eventsResponse);

    const eventListContainer = document.getElementById('event-list-container');

    // Periksa apakah events adalah sebuah array sebelum mencoba melakukan iterasi
    if (Array.isArray(events)) {
      events.forEach((event) => {
        const eventCard = createEventTemplate(event);
        eventListContainer.innerHTML += eventCard;
      });
    } else {
      console.error('Error: Respons dari Arts.getAllEvents() bukanlah sebuah array.');
    }
  } catch (error) {
    console.error('Error fetching and displaying events:', error);
  }
}

export default eventlist;
