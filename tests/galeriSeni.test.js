/* eslint-disable */
import Arts from '../src/scripts/network/arts';
import galeriSeni from '../src/scripts/views/pages/menu/galeriseni';

// Mock the Arts module
jest.mock('../src/scripts/network/arts');

describe('galeriSeni', () => {
  beforeEach(() => {
    // Mock the Arts.getAll method to return a predefined set of arts
    Arts.getAll.mockResolvedValue({
      art1: { id: '1', name: 'Art 1', category: 'Alat Musik' },
      art2: { id: '2', name: 'Art 2', category: 'Sastra' },
    });

    // Create the HTML structure for testing
    document.body.innerHTML = `
      <div id="list-arts"></div>
      <div class="dropdown">
        <button class="btn btn-brown-darkbrown dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Kategori</button>
        <ul class="dropdown-menu">
          <li><a id="dropdown-semua" class="dropdown-item">Semua</a></li>
          <li><a id="dropdown-alat-musik" class="dropdown-item">Alat Musik</a></li>
          <li><a id="dropdown-sastra" class="dropdown-item">Sastra</a></li>
          <li><a id="dropdown-seni-rupa" class="dropdown-item">Seni Rupa</a></li>
        </ul>
      </div>
      <button id="search-button">Search</button>
    `;
  });

  it('fetches and displays arts correctly', async () => {
    // Call the galeriSeni function
    await galeriSeni();

    // Assert that the arts are correctly displayed in the HTML
    expect(document.getElementById('list-arts').innerHTML).toContain('Art 1');
    expect(document.getElementById('list-arts').innerHTML).toContain('Art 2');
    // Add more assertions based on your HTML structure
  });

  it('handles dropdown click events correctly', async () => {
    // Call the galeriSeni function
    await galeriSeni();

    // Simulate a click on the "Alat Musik" dropdown button
    document.getElementById('dropdown-alat-musik').click();

    // Assert that only arts with category 'Alat Musik' are displayed
    expect(document.getElementById('list-arts').innerHTML).toContain('Art 1');
    expect(document.getElementById('list-arts').innerHTML).not.toContain('Art 2');
    // Add more assertions based on your HTML structure

    // Simulate a click on the "Sastra" dropdown button
    document.getElementById('dropdown-sastra').click();

    // Assert that only arts with category 'Sastra' are displayed
    expect(document.getElementById('list-arts').innerHTML).toContain('Art 2');
    expect(document.getElementById('list-arts').innerHTML).not.toContain('Art 1');

    // Simulate a click on the "Seni Rupa" dropdown button
    document.getElementById('dropdown-seni-rupa').click();

    expect(document.getElementById('list-arts').innerHTML).not.toContain('Art 1');
    expect(document.getElementById('list-arts').innerHTML).not.toContain('Art 2');
  });
});
