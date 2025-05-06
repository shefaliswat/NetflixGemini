// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "netflix-clone-vite-7853b.firebaseapp.com",
  projectId: "netflix-clone-vite-7853b",
  storageBucket: "netflix-clone-vite-7853b.firebasestorage.app",
  messagingSenderId: "887193821097",
  appId: "1:887193821097:web:da5c9ef81b559eacd5aeb8",
  measurementId: "G-YXH7KWDTPH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();