import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAoA6D9V0DTeqZ7dQ3ZFN7HHQsFzADNuQA",
  authDomain: "tenedores-v2-16569.firebaseapp.com",
  projectId: "tenedores-v2-16569",
  storageBucket: "tenedores-v2-16569.appspot.com",
  messagingSenderId: "1000203328355",
  appId: "1:1000203328355:web:430e592ff7cc2582b65156",
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);
