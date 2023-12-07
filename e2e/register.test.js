Feature('Registration Feature');

Scenario('User should be able to register successfully', ({ I }) => {
  I.amOnPage('http://172.20.10.2:9000/auth/register.html');

  const email = 'tes.@gmail.com';
  const password = '123456';

  I.fillField('#email-regist', email);
  I.fillField('#password-regist', password);
  I.click('#daftarButton');
  
});
