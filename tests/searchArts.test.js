/* eslint-disable */
import Arts from '../src/scripts/network/arts';
import createArtTemplate from '../src/scripts/views/templates/template-creator';

// Mock module arts
jest.mock('../src/scripts/network/arts');

import '@testing-library/jest-dom';

describe('Galeri Seni - Search Feature', () => {
  let mockGetAll;

  beforeEach(() => {
    mockGetAll = jest.fn();

    Arts.getAll.mockImplementation(mockGetAll);
    jest.clearAllMocks();
  });

  it('displays "angklung" arts when searching for "angklung"', async () => {
    // Mock data arts
    const mockArts = {
      art1: {
        name: 'Angklung',
      },
    };

    mockGetAll.mockResolvedValue(mockArts);

    // Set up HTML elements
    document.body.innerHTML = `
      <div id="list-arts"></div>
      <input id="input-name-art" type="text" value="angklung" />
      <button id="search-button">Search</button>
      <div id="dropdown-semua"></div>
      <div id="dropdown-alat-musik"></div>
      <div id="dropdown-sastra"></div>
      <div id="dropdown-seni-rupa"></div>
    `;

    // Import and call galeriSeni function
    const galeriSeni = require('../src/scripts/views/pages/menu/galeriseni').default;
    await galeriSeni();

    // Click search button
    const searchButton = document.getElementById('search-button');
    searchButton.click();

    // Expect the HTML to contain the expected text
    const expectedText = mockArts.art1.name;
    const titleElement = document.querySelector('.card-title');
    expect(titleElement).toHaveTextContent(expectedText);
  });
});
