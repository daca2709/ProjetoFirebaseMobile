import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
// @ts-ignore - TS types for React Native aren't properly resolved by default in Expo sometimes
import { getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

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


export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});
