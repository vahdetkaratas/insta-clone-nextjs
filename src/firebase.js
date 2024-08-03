// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "insta-next-265b3.firebaseapp.com",
  projectId: "insta-next-265b3",
  storageBucket: "insta-next-265b3.appspot.com",
  messagingSenderId: "332977789356",
  appId: "1:332977789356:web:b13ccf6be42e98fc108209"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);