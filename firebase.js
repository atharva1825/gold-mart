// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq9twBjVDhB7HxMqm4rdHzX45TC5K9vgo",
  authDomain: "goldmart-d065c.firebaseapp.com",
  databaseURL: "https://goldmart-d065c-default-rtdb.firebaseio.com",
  projectId: "goldmart-d065c",
  storageBucket: "goldmart-d065c.appspot.com",
  messagingSenderId: "260389197570",
  appId: "1:260389197570:web:036495495a3c679491541b",
  measurementId: "G-KP3PFY290V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
