// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYxWnOoavp0thKzKLyGz3oRkXw9GpETnk",
  authDomain: "tenedores-v2-c1997.firebaseapp.com",
  projectId: "tenedores-v2-c1997",
  storageBucket: "tenedores-v2-c1997.firebasestorage.app",
  messagingSenderId: "262458252546",
  appId: "1:262458252546:web:48eaab034d9f9e4183b61b"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);