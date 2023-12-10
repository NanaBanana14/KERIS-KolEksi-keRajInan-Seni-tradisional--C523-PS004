/* eslint-disable */
import Arts from '../src/scripts/network/arts';

jest.mock('../src/scripts/network/arts');

describe('Newslist Functionality', () => {
  let container;
  let btnNext;

  beforeEach(() => {
    // Set up a basic HTML structure for testing
    document.body.innerHTML = `
      <div id="news-list-container"></div>
      <button id="btnNewsSelanjutnya">Selanjutnya</button>
    `;

    container = document.getElementById('news-list-container');
    btnNext = document.getElementById('btnNewsSelanjutnya');
  });

  it('should show the next news when "Selanjutnya" is clicked', async () => {
    const mockNews = {
      1: { title: 'News 1', 'publish-date': '2023-01-01' },
      2: { title: 'News 2', 'publish-date': '2023-02-01' },
      3: { title: 'News 3', 'publish-date': '2023-03-01' },
      4: { title: 'News 4', 'publish-date': '2023-04-01' },
      5: { title: 'News 5', 'publish-date': '2023-05-01' },
    };
  
    // Sort the mockNews based on the publish date
    const sortedMockNews = Object.values(mockNews).sort((a, b) => {
      const dateA = new Date(a['publish-date']);
      const dateB = new Date(b['publish-date']);
  
      return dateB - dateA; // Sort in descending order
    });
  
    Arts.getAllNews.mockResolvedValue(sortedMockNews.reduce((acc, news, index) => {
      acc[index + 1] = news;
      return acc;
    }, {}));
  
    // Import the newslist function after setting up the mock
    const newslist = require('../src/scripts/views/pages/menu/newslist').default;
  
    await newslist();
  
    // Simulate a click on the "Selanjutnya" button
    btnNext.click();
  
    // Ensure the next three news are displayed
    expect(container.children).toHaveLength(5);
  });
  

  it('should hide "Selanjutnya" button when all news are displayed', async () => {
    const mockNews = {
      1: { title: 'News 1', 'publish-date': '2023-01-01' },
      2: { title: 'News 2', 'publish-date': '2023-02-01' },
      3: { title: 'News 3', 'publish-date': '2023-03-01' },
    };

    Arts.getAllNews.mockResolvedValue(mockNews);

    // Import the newslist function after setting up the mock
    const newslist = require('../src/scripts/views/pages/menu/newslist').default;

    await newslist();

    // Simulate a click on the "Selanjutnya" button
    btnNext.click();

    // Ensure the "Selanjutnya" button is hidden after displaying all news
    expect(btnNext.style.display).toBe('none');
  });

  it('should handle errors during news fetching', async () => {
    Arts.getAllNews.mockRejectedValue(new Error('Mocked error'));

    // Import the newslist function after setting up the mock
    const newslist = require('../src/scripts/views/pages/menu/newslist').default;

    // Ensure the error is logged to the console
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    await newslist();

    expect(consoleErrorSpy).toHaveBeenCalledWith('Error fetching news:', 'Mocked error');
    consoleErrorSpy.mockRestore();
  });
});
