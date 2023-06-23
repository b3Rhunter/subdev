import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDZCAH0CqvtBzIcCFxpzmQkH06mrpaUxWY",
    authDomain: "chatapp-92024.firebaseapp.com",
    projectId: "chatapp-92024",
    storageBucket: "chatapp-92024.appspot.com",
    messagingSenderId: "916896938246",
    appId: "1:916896938246:web:265acbebcfee14a8c88687"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
