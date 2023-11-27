/* eslint-disable */
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAHTsorVZxftRDPSSBrK5LkQzcXBZ0xI-E",
  authDomain: "keris-api.firebaseapp.com",
  databaseURL: "https://keris-api-default-rtdb.firebaseio.com",
  projectId: "keris-api",
  storageBucket: "keris-api.appspot.com",
  messagingSenderId: "667602156235",
  appId: "1:667602156235:web:7ae42904c8e56a69ceb94e",
  measurementId: "G-6E49YBNJRN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export { app, database, analytics };
