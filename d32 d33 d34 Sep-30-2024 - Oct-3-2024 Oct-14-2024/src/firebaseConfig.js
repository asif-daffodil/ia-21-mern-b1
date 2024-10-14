// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDss229hCoogZe87Zum5-ULIx9sMGFPfqk",
  authDomain: "mern21b1.firebaseapp.com",
  projectId: "mern21b1",
  storageBucket: "mern21b1.appspot.com",
  messagingSenderId: "171069380587",
  appId: "1:171069380587:web:539f524aac03d651feabae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);