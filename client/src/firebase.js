// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mean-estate-d537e.firebaseapp.com",
  projectId: "mean-estate-d537e",
  storageBucket: "mean-estate-d537e.appspot.com",
  messagingSenderId: "397447265282",
  appId: "1:397447265282:web:d696e51776713f653c3b1b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);