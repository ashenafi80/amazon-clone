// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB8PKE-UUOez5RRgtIYbCQf6UT3DwvI9M",
  authDomain: "clone-d099c.firebaseapp.com",
  projectId: "clone-d099c",
  storageBucket: "clone-d099c.appspot.com",
  messagingSenderId: "740186973133",
  appId: "1:740186973133:web:0e77effee8d4df421e1a84",
  measurementId: "G-6GR7ZCFDG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};