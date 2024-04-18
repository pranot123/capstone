
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj9xVZZgFdtzaX_pYmBEWkyH4tzewOpkU",
  authDomain: "imagepro-b7ca4.firebaseapp.com",
  projectId: "imagepro-b7ca4",
  storageBucket: "imagepro-b7ca4.appspot.com",
  messagingSenderId: "1007583114438",
  appId: "1:1007583114438:web:81424642d8a2c52dd413c7",
  measurementId: "G-215C4VWS8G"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage,db }