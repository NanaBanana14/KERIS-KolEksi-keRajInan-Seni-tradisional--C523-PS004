Feature('Galeri Seni');

Scenario('Melihat Semua Arts', async ({ I }) => {
  I.amOnPage('/menu/galeri-seni.html?');
  I.seeElement('#list-arts');
});
Scenario('Mencari Arts Berdasarkan Kategori', async ({ I }) => {
    I.amOnPage('/menu/galeri-seni.html');
    I.seeElement('.dropdown-toggle');
    I.click('.dropdown-toggle');

   //I.click('#dropdown-sastra');
  //I.seeNumberOfVisibleElements('.art-card', 1);
    //I.click('#dropdown-seni-rupa');
   // I.seeNumberOfVisibleElements('.art-card', 1);
  });
  
Scenario('Mencari Arts Berdasarkan Nama', async ({ I }) => {
  I.amOnPage('/menu/galeri-seni.html?');
  const searchTerm = 'Angklung';
  I.fillField('#input-name-art', searchTerm);
});
