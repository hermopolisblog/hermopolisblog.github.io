// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIJDrL-kpcNdSHjUSRwml7YxtucR33zYQ",
  authDomain: "hermopolis-c85db.firebaseapp.com",
  projectId: "hermopolis-c85db",
  storageBucket: "hermopolis-c85db.firebasestorage.app",
  messagingSenderId: "858097853709",
  appId: "1:858097853709:web:9e3bd4c3e100bf72a8bc44",
  measurementId: "G-M08CTGD010"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };