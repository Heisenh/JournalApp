// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2woYxLzReodQCqq913DKJ03bE20NuPHM",
  authDomain: "react-cursos-74959.firebaseapp.com",
  projectId: "react-cursos-74959",
  storageBucket: "react-cursos-74959.appspot.com",
  messagingSenderId: "1008242519643",
  appId: "1:1008242519643:web:94470bd9fd1c8b49a2d97e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );