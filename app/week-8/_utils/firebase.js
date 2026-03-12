// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_5YmkAnP-gMncSW_eUjjVECwqJ5WhWis",
  authDomain: "cprg306-9c3ea.firebaseapp.com",
  projectId: "cprg306-9c3ea",
  storageBucket: "cprg306-9c3ea.firebasestorage.app",
  messagingSenderId: "68050224482",
  appId: "1:68050224482:web:5de2dae2331dafce52d83b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);