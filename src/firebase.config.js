import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGXlLpgL3Mbd3rya4MtUGy3LgTxiRJb9c",
  authDomain: "keebspace-da755.firebaseapp.com",
  projectId: "keebspace-da755",
  storageBucket: "keebspace-da755.appspot.com",
  messagingSenderId: "612272842804",
  appId: "1:612272842804:web:fc46134b9021c543cb8261",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
