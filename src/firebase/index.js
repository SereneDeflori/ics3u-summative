import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "eb2eed5560b3d22c0bf7bf03c76880f0",
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