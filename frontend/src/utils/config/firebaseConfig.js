// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJD87Nr5vE2H3YSR5XskC5hw6zPSOhyOo",
  authDomain: "netflix-clone-2893d.firebaseapp.com",
  projectId: "netflix-clone-2893d",
  storageBucket: "netflix-clone-2893d.appspot.com",
  messagingSenderId: "431019787053",
  appId: "1:431019787053:web:fd95b3de2cfcac487a09a4",
  measurementId: "G-N2DVR9M5DP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
