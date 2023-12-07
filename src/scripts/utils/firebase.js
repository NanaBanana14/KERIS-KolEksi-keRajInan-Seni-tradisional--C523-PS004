// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAHTsorVZxftRDPSSBrK5LkQzcXBZ0xI-E',
  authDomain: 'keris-api.firebaseapp.com',
  databaseURL: 'https://keris-api-default-rtdb.firebaseio.com',
  projectId: 'keris-api',
  storageBucket: 'keris-api.appspot.com',
  messagingSenderId: '667602156235',
  appId: '1:667602156235:web:7ae42904c8e56a69ceb94e',
  measurementId: 'G-6E49YBNJRN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
