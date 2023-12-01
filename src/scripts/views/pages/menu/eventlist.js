// event-list.js

import Arts from '../../../network/arts';
import { createEventTemplate } from '../../templates/template-creator';

async function eventlist() {
  try {
    const eventsResponse = await Arts.getAllEvents();
    const events = Object.values(eventsResponse);
    const eventListContainer = document.getElementById('event-list-container');

    if (Array.isArray(events)) {
      events.forEach((event) => {
        const eventCard = createEventTemplate(event);
        eventListContainer.innerHTML += eventCard;
      });

      // Tambahkan event listener ke setiap tombol "Read more"
      document.querySelectorAll('.btn-brown-white').forEach((button) => {
        button.addEventListener('click', (event) => handleEventClick(event));
      });
    } else {
      console.error('Error: Respons dari Arts.getAllEvents() bukanlah sebuah array.');
    }
  } catch (error) {
    console.error('Error saat mengambil dan menampilkan acara:', error);
  }
}

function handleEventClick(event) {
  event.preventDefault();
  const eventId = event.target.getAttribute('data-event-id');

  if (eventId) {
    // Panggil fungsi dari file terpisah
    showEventDetail(eventId);
  } else {
    console.error('Error: ID Acara tidak terdefinisi.');
  }
}

export default eventlist;
