/* eslint-disable no-undef */

Feature('Galeri Seni');

Scenario('Display event', async ({ I }) => {
  I.amOnPage('/menu/news.html');
  I.seeElement('.event-item');
  I.click('[data-toggle = "modal"]');
  I.waitForElement('.modal');
});

Scenario('Display news', async ({ I }) => {
  I.amOnPage('/menu/news.html');
  I.seeElement('.news-item');
});
