import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const loginPageFunction = () => {
  const loginButton = document.getElementById('masukButton');
  loginButton.addEventListener('click', () => {
    const auth = getAuth();
    const email = document.getElementById('email-login').value;
    const password = document.getElementById('password-login').value;
    // fungsi sign in
    signInWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        alert('Login berhasil! Anda akan diarahkan ke halaman utama.');
        window.location.href = '/';
      })
      .catch((error) => {
        alert(error);
      });
  });
};

export default loginPageFunction;
