
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCOSSbqh4PknwbU_0OgkdTex5Igg91Nr_I",
    authDomain: "tenedores-v2-464dd.firebaseapp.com",
    projectId: "tenedores-v2-464dd",
    storageBucket: "tenedores-v2-464dd.appspot.com",
    messagingSenderId: "170808920337",
    appId: "1:170808920337:web:fd84e6d567920ca48c24b0"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);