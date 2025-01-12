// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore importi
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0vB70XWrG5a5zknqI__LHzg4rl-iCWOc",
  authDomain: "ikamolov-blog.firebaseapp.com",
  projectId: "ikamolov-blog",
  storageBucket: "ikamolov-blog.firebasestorage.app",
  messagingSenderId: "217477523346",
  appId: "1:217477523346:web:c6f586b368a8303906434b",
  measurementId: "G-J1LSW2JLTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {db, app}