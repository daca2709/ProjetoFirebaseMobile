// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOo32B387wLUj3IYHToD48-vUY31bA0Zw",
    authDomain: "aula2-24039.firebaseapp.com",
    projectId: "aula2-24039",
    storageBucket: "aula2-24039.firebasestorage.app",
    messagingSenderId: "151143866470",
    appId: "1:151143866470:web:9a0182b0de4144c3580da7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
