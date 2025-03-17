// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOyDXKh08EWJwZLYPmdxnIiBGBqL-Jn38",
  authDomain: "bloggingapplication-b267d.firebaseapp.com",
  projectId: "bloggingapplication-b267d",
  storageBucket: "bloggingapplication-b267d.appspot.com",
  messagingSenderId: "468269314145",
  appId: "1:468269314145:web:4102f38de9968615433a20",
  measurementId: "G-YGW5FVGY27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
