// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBfsw_ZFOYFnfyEA217KmPTTN5lH7NwxU",
  authDomain: "nohara-591ab.firebaseapp.com",
  projectId: "nohara-591ab",
  storageBucket: "nohara-591ab.appspot.com",
  messagingSenderId: "666589655619",
  appId: "1:666589655619:web:d344f14af977eb75ec9af6",
  measurementId: "G-HF6NRBTE4N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
