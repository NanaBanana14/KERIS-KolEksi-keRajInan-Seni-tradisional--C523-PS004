import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const registPageFunction = () => {
  const registButton = document.getElementById('daftarButton');
  registButton.addEventListener('click', () => {
    const email = document.getElementById('email-regist').value;
    const password = document.getElementById('password-regist').value;
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line no-unused-vars
      .then((userCredential) => {
        alert(`Email ${email} berhasil diregistrasi! Anda akan langsung Login ke aplikasi.`);
        window.location.href = '/';
      })
      .catch((error) => {
        alert(error);
      });
  });
};

export default registPageFunction;
