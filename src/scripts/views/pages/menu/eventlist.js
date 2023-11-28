import Arts from '../../../network/arts';
import { createEventTemplate } from '../../templates/template-creator';

const EventList = {
  async render() {
    return `
      <div id="loading-indicator-events" class="loading-indicator">
        <p class="loading">Loading events...</p>
      </div>
      <div class="list-events" id="event-list">
        <!-- List of events will be displayed here -->
      </div>
    `;
  },

  async afterRender() {
    const eventListContainer = document.querySelector('#event-list');
    const loadingIndicator = document.getElementById('loading-indicator-events');

    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }

    try {
      const events = await Arts.getAllEvents();

      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }

      if (events.length === 0) {
        eventListContainer.innerHTML = '<p>No events found.</p>';
      } else {
        eventListContainer.innerHTML = '';
        events.forEach((event) => {
          const eventItem = createEventTemplate(event);
          eventListContainer.innerHTML += eventItem;
        });
      }
    } catch (error) {
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
      eventListContainer.innerHTML = '<p class="message">Error fetching event list.</p>';
    }
  },
};

export default EventList;
