/* eslint-disable no-undef */

Feature('Registration Feature');

Scenario('User should be able to register successfully', async ({ I }) => {
  I.amOnPage('/auth/register.html');
  I.fillField('#email-regist', 'test@gmail.com');
  I.fillField('#password-regist', '123456');
  I.click('#daftarButton');
  I.wait('email-already-in-use');
});
