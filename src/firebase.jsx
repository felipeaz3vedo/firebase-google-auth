// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRwqOC480OCc0p6oI0EkQ4ZcI2jpJAiB4",
  authDomain: "auth-example-4eeb1.firebaseapp.com",
  projectId: "auth-example-4eeb1",
  storageBucket: "auth-example-4eeb1.appspot.com",
  messagingSenderId: "1070641579886",
  appId: "1:1070641579886:web:d9c7afcc5c74f07ab6e37f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);