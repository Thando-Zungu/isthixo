// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAj-ISUXl1TLjz2m0z2PnIw4X67GkovLPE",
  authDomain: "isthixo-store.firebaseapp.com",
  projectId: "isthixo-store",
  storageBucket: "isthixo-store.firebasestorage.app",
  messagingSenderId: "71454702637",
  appId: "1:71454702637:web:9244ef89603479b1ef0ca4"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
