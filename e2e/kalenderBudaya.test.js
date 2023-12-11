/* eslint-disable no-undef */

Feature('Kalender Budaya Feature');

Scenario('display calendar', async ({ I }) => {
  I.amOnPage('/menu/kalendarbudaya.html');
  I.waitForElement('.calendar');
});
