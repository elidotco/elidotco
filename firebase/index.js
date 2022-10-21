// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIfaWVJe39A7QNCeoMVHWDHg1LqN6P-RA",
  authDomain: "elicode-ba49f.firebaseapp.com",
  projectId: "elicode-ba49f",
  storageBucket: "elicode-ba49f.appspot.com",
  messagingSenderId: "865989881431",
  appId: "1:865989881431:web:d84294cfb5db498de73d12",
  measurementId: "G-GK2MFGQW2T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
