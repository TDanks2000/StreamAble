import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCDleY_S1nRZ_KISJdhfy1I_TGChSMJJ2c",
  authDomain: "streamable-86c32.firebaseapp.com",
  projectId: "streamable-86c32",
  storageBucket: "streamable-86c32.appspot.com",
  messagingSenderId: "31410397955",
  appId: "1:31410397955:web:1c2fd3c8377bd0eb9b7f36",
  measurementId: "G-313HJJ7DN1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, db, auth };
