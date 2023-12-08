/* eslint-disable no-undef */

Feature('Login Feature');

Scenario('User should be able to login successfully', async ({ I }) => {
  // Melakukan login
  I.amOnPage('/auth/login.html');
  I.waitForElement('#email-login');
  I.fillField('#email-login', 'test@gmail.com');
  I.fillField('#password-login', '123456');
  I.click('#masukButton');
  I.waitForURL();

  // Melakukan logout
  I.waitForText('Log Out', 10);
  I.click('Log Out');
  I.wait('Apakah Anda yakin ingin logout?');
  I.acceptPopup();
});
