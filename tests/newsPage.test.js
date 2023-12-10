/* eslint-disable */
import newslist from '../src/scripts/views/pages/menu/newslist';
import eventlist from '../src/scripts/views/pages/menu/eventlist';
import Arts from '../src/scripts/network/arts';

jest.mock('../src/scripts/network/arts');

describe('Initial View', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="news-list-container"></div>
      <a href="#" id="btnNewsSelanjutnya"></a>
      <div id="event-list-container"></div>
      <a href="#" id="btnSelanjutnya"></a>
    `;
  });

  it('should have necessary HTML elements in the DOM', () => {
    expect(document.getElementById('news-list-container')).toBeTruthy();
    expect(document.getElementById('btnNewsSelanjutnya')).toBeTruthy();
    expect(document.getElementById('event-list-container')).toBeTruthy();
    expect(document.getElementById('btnSelanjutnya')).toBeTruthy();
  });
});

describe('newslist Function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="news-list-container"></div>
      <a href="#" id="btnNewsSelanjutnya"></a>
    `;
  });

  it('should display news correctly and handle "Selanjutnya" button', async () => {
    Arts.getAllNews.mockResolvedValue({
      1: { id: '1', title: 'News 1', content: 'Content 1', 'publish-date': '2023-01-01' },
      2: { id: '2', title: 'News 2', content: 'Content 2', 'publish-date': '2023-02-01' },
    });

    await newslist();

    expect(document.getElementById('news-list-container').innerHTML).toContain('News 1');
    expect(document.getElementById('news-list-container').innerHTML).toContain('News 2');

    document.getElementById('btnNewsSelanjutnya').click();
  });
});

describe('eventlist Function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="event-list-container"></div>
      <a href="#" id="btnSelanjutnya"></a>
    `;
  });

  it('should display events correctly and handle "Selanjutnya" button', async () => {
    Arts.getAllEvents.mockResolvedValue({
      1: { id: '1', name: 'Event 1', date: '2023-01-01' },
      2: { id: '2', name: 'Event 2', date: '2023-02-01' },
    });

    await eventlist();

    expect(document.getElementById('event-list-container').innerHTML).toContain('Event 1');
    expect(document.getElementById('event-list-container').innerHTML).toContain('Event 2');

    document.getElementById('btnSelanjutnya').click();
  });
});
