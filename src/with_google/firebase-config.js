
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyBL2VbPoEU9c3-ujkX2duE7bg2MyUaDoyU",
  authDomain: "reactlogin1-c98e3.firebaseapp.com",
  projectId: "reactlogin1-c98e3",
  storageBucket: "reactlogin1-c98e3.appspot.com",
  messagingSenderId: "862440370869",
  appId: "1:862440370869:web:209ba4b27c179f6c7744fc",
  measurementId: "G-YD1E2RLMBZ"
};

export const firebase_app = initializeApp(firebaseConfig);

export const auth = getAuth(firebase_app);
export const db = getFirestore(firebase_app);
