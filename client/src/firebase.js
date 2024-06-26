// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-5e3de.firebaseapp.com",
  projectId: "mern-blog-5e3de",
  storageBucket: "mern-blog-5e3de.appspot.com",
  messagingSenderId: "350340283345",
  appId: "1:350340283345:web:c5ef0cd4bc28409989bef0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
