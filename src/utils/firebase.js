// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLFNT_-6O4f17rintx7-DhOg93dfG5zoM",
  authDomain: "netflixgpt-cf9c8.firebaseapp.com",
  projectId: "netflixgpt-cf9c8",
  storageBucket: "netflixgpt-cf9c8.appspot.com",
  messagingSenderId: "655400109339",
  appId: "1:655400109339:web:9eb9287c65d35d15387fbe",
  measurementId: "G-BJP2C7KE35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
