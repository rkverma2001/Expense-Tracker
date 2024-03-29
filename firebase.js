// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmJKsawedt2GU2UrmFWbf9jmsFoAgEea4",
  authDomain: "challenge-2509f.firebaseapp.com",
  projectId: "challenge-2509f",
  storageBucket: "challenge-2509f.appspot.com",
  messagingSenderId: "951165175515",
  appId: "1:951165175515:web:0e19f30dfc540caed92efe",
  measurementId: "G-0ETKKLQ0Y5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
