// Import the functions you need from the SDKs you need
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6jnTf2jn1n9wawbnKGuzkwRDh5n7mMHw",
  authDomain: "loan-tracker-175.firebaseapp.com",
  projectId: "loan-tracker-175",
  storageBucket: "loan-tracker-175.firebasestorage.app",
  messagingSenderId: "581678899234",
  appId: "1:581678899234:web:27523bac741030a6736a7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);