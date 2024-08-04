// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "expense-tracker-418e3.firebaseapp.com",
  projectId: "expense-tracker-418e3",
  storageBucket: "expense-tracker-418e3.appspot.com",
  messagingSenderId: "651405653549",
  appId: "1:651405653549:web:62cc5049fafd9f67122aa4",
  measurementId: "G-3QWJLXNM74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
