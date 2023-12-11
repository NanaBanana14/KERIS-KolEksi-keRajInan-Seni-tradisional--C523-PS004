import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/dom';
import eventlist from '../src/scripts/views/pages/menu/eventlist';
import showEventDetailByUrl from '../src/scripts/views/pages/menu/eventdetail';

// Mock module arts
jest.mock('../src/scripts/network/arts');

describe('Event Detail Modal', () => {
  it('displays event detail modal when "Read More" button is clicked', async () => {
    // Mock data event
    const mockEvent = {
      name: 'Event Name',
      'image-url': 'path/to/image.jpg',
      date: '2023-12-31',
      'detail-url': '/event/123',
    };

    // Mock data for fetch response
    const mockResponse = {
      json: jest.fn().mockResolvedValue(mockEvent),
    };

    // Mock the global fetch function
    global.fetch = jest.fn(() => Promise.resolve(mockResponse));

    // Set up HTML elements
    document.body.innerHTML = `
      <div class="row mx-auto gap-2" id="event-list-container">
        <div class="card mb-3 col-md-4 position-relative p-0" id="event-1" style="width: 21rem">
          <h5 class="card-title mb-5">${mockEvent.name}</h5>
          <a href="#" class="btn btn-brown-white btn-event-detail position-absolute bottom-0 end-0 mb-3 mx-3" data-toggle="modal" data-detail-url="${mockEvent['detail-url']}">Read more <i class="bi bi-arrow-right-circle-fill"></i></a>
        </div>
      </div>

      <div id="event-detail-container"></div>

      <div class="modal fade" id="eventDetailModal" tabindex="-1" role="dialog" aria-labelledby="eventDetailModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="eventDetailModalLabel">Event Detail</h5>
              <button type="button" class="close" data-dismiss="modal">
                <span aria-hidden="true" class="bi bi-x-square-fill"></span>
              </button>
            </div>
            <div class="modal-body" id="eventDetailContainer"></div>
          </div>
        </div>
      </div>
    `;

    // Call eventlist function
    await eventlist();

    // Klik tombol "Read More"
    const readMoreButton = screen.getByText('Read more');
    fireEvent.click(readMoreButton);

    // Menunggu hingga detail acara ditampilkan di modal
    await waitFor(() => {
      const eventDetailModal = screen.getByText(mockEvent.name);
      expect(eventDetailModal).toBeInTheDocument();
    });
  });
});
