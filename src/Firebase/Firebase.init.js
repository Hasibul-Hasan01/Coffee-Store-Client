// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2hV_VjvuTQRbXK27_BcENCJU1eecmfnk",
    authDomain: "coffee-store-4efb8.firebaseapp.com",
    projectId: "coffee-store-4efb8",
    storageBucket: "coffee-store-4efb8.firebasestorage.app",
    messagingSenderId: "976325806706",
    appId: "1:976325806706:web:aceea6a6bd0657f95950eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);