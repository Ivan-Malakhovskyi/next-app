// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCJOZ4K5AIAyWVBtjUakxnNDmiuhHInbtE",
  authDomain: "next-app-d58b1.firebaseapp.com",
  projectId: "next-app-d58b1",
  storageBucket: "next-app-d58b1.appspot.com",
  messagingSenderId: "84432719030",
  appId: "1:84432719030:web:784472d9ca88de198e6a17",
  measurementId: "G-5RMW86FDEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
