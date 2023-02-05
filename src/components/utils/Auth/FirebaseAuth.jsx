import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDjjS8Z6OyE2olVSMWU-znEEHulwhTuxBY",
  authDomain: "pet-companion-2009.firebaseapp.com",
  projectId: "pet-companion-2009",
  storageBucket: "pet-companion-2009.appspot.com",
  messagingSenderId: "587022932986",
  appId: "1:587022932986:web:be0e105e9755a74ea76243"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()