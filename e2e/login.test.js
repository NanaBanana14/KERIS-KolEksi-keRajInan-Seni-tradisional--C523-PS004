Feature('Login Feature');

Scenario('User should be able to login successfully', ({ I }) => {
  I.amOnPage('/auth/login.html'); // Sesuaikan dengan URL halaman login
  I.seeElement('#email-login');
  I.fillField('#email-login', 'hani@gmail.com'); // Ganti dengan email yang valid
  I.fillField('#password-login', '123456'); // Ganti dengan kata sandi yang valid
  I.click('#masukButton'); // Klik tombol login

  I.waitForNavigation(); // Tunggu hingga navigasi selesai, bisa disesuaikan dengan kondisi halaman Anda

  // Memeriksa apakah login berhasil
  I.see('Login berhasil! Anda akan diarahkan ke halaman utama.'); // Pastikan pesan berhasil muncul
  I.seeCurrentUrlEquals('/'); // Pastikan pengguna diarahkan ke halaman utama setelah login
});
