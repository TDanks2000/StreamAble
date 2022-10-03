import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCDleY_S1nRZ_KISJdhfy1I_TGChSMJJ2c",
  authDomain: "streamable-86c32.firebaseapp.com",
  databaseURL: "https://streamable-86c32-default-rtdb.firebaseio.com",
  projectId: "streamable-86c32",
  storageBucket: "streamable-86c32.appspot.com",
  messagingSenderId: "31410397955",
  appId: "1:31410397955:web:1c2fd3c8377bd0eb9b7f36",
  measurementId: "G-313HJJ7DN1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, auth, storage };
