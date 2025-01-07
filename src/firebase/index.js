import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOSlUtUpWLiT2a4W7L6MOiUnW3ANj81R0",
    authDomain: "summative-a4ef2.firebaseapp.com",
    projectId: "summative-a4ef2",
    storageBucket: "summative-a4ef2.firebasestorage.app",
    messagingSenderId: "797337643655",
    appId: "1:797337643655:web:3552539661961fb3e02622"
  };
  
const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };