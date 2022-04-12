// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdNxlH3c4dkFtkjTbU-hj_eMMdxJLMuBw",
  authDomain: "ema-jhon-auth-ace7f.firebaseapp.com",
  projectId: "ema-jhon-auth-ace7f",
  storageBucket: "ema-jhon-auth-ace7f.appspot.com",
  messagingSenderId: "461899272267",
  appId: "1:461899272267:web:3f9ff107587285fdf47dce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
