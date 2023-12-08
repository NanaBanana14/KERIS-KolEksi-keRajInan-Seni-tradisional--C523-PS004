/* eslint-disable no-undef */

Feature('Galeri Seni');

Scenario('Display items according to category', async ({ I }) => {
  I.amOnPage('/menu/galeri-seni.html');
  // Kategori Alat Musik
  I.click('#category-button');
  I.click('#dropdown-alat-musik');
  I.see('Angklung');
  // Kategori Sastra
  I.click('#category-button');
  I.click('#dropdown-sastra');
  I.see('Antologi Puisi');
  // Kategori Seni Rupa
  I.click('#category-button');
  I.click('#dropdown-seni-rupa');
  I.see('Wayang');
});

Scenario('Display items as searched', async ({ I }) => {
  I.amOnPage('/menu/galeri-seni.html');
  // Mencari item yang tidak ada
  I.fillField('#input-name-art', 'wkwkwk');
  I.click('#search-button');
  I.waitForText('wkwkwk tidak ditemukan');
  // Mencari item angklung
  I.fillField('#input-name-art', 'angklung');
  I.click('#search-button');
  I.waitForText('Angklung adalah');
});

Scenario('Display detail art', async ({ I }) => {
  I.amOnPage('/menu/galeri-seni.html');
  I.fillField('#input-name-art', 'angklung');
  I.click('#search-button');
  I.waitForText('Angklung adalah');
  I.seeNumberOfElements('.card-title', 1);
  I.click('Read More');
  I.waitForURL();
  I.waitForText('Angklung adalah');
});
