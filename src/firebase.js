import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "reactblogsapp.firebaseapp.com",
  projectId: "reactblogsapp",
  storageBucket: "reactblogsapp.appspot.com",
  messagingSenderId: "186205095832",
  appId: "1:186205095832:web:7a79dd2dc0a05a300f0ded",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
