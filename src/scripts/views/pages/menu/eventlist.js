import Arts from '../../../network/arts';
import { createEventTemplate } from '../../templates/template-creator';

const EventList = {
  async render() {
    return `
      <div id="loading-indicator-event" class="loading-indicator">
        <p class="loading">Loading...</p>
      </div>
      <div class="card-columns" id="event-list-container">
        <!-- List of events will be displayed here -->
      </div>
    `;
  },

  async afterRender() {
    const eventContainer = document.querySelector('#event-list-container');
    const loadingIndicator = document.getElementById('loading-indicator-event');

    if (loadingIndicator) {
      loadingIndicator.style.display = 'block';
    }

    try {
      const events = await Arts.getAllEvents();

      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }

      if (events.length === 0) {
        eventContainer.innerHTML = '<p>No events found.</p>';
      } else {
        eventContainer.innerHTML = '';
        events.forEach((event) => {
          const eventItemTemplate = createEventTemplate(event);
          eventContainer.innerHTML += eventItemTemplate;
        });
      }
    } catch (error) {
      if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
      }
      eventContainer.innerHTML = '<p class="message">Error fetching event list.</p>';
    }
  },
};

export default EventList;
