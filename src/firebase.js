// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "clone-fd4c3.firebaseapp.com",
  projectId: "clone-fd4c3",
  storageBucket: "clone-fd4c3.appspot.com",
  messagingSenderId: "1088702147387",
  appId: "1:1088702147387:web:f52c486f8f6647b052251e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const provider=new GoogleAuthProvider();

export {app,auth,provider};