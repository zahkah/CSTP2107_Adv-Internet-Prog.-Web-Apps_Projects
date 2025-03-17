// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKC3m0Xsn3bYiJCEt7isYhXBR6IfUfrz4",
  authDomain: "ecomerceappnew.firebaseapp.com",
  projectId: "ecomerceappnew",
  storageBucket: "ecomerceappnew.firebasestorage.app",
  messagingSenderId: "252451580638",
  appId: "1:252451580638:web:7e36f097cf079826e0704f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider()
const db = getFirestore();
// const storage = getStorage(app); // If you are using Firebase storage
 
export { auth, googleProvider, db,  };