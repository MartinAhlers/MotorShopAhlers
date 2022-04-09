// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhH26omsdYXvNZyKj4-zWG79za3E-7TWU",
  authDomain: "motorshop-ahlers.firebaseapp.com",
  projectId: "motorshop-ahlers",
  storageBucket: "motorshop-ahlers.appspot.com",
  messagingSenderId: "222321817535",
  appId: "1:222321817535:web:8850dcd2b7d6a37c4b530a",
  measurementId: "G-2CQJ4S04J4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);