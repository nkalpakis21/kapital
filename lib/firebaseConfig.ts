// firebase/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCVoE6f2a1yDtTFF7AUJmMuOJGjbOerL0E",
    authDomain: "kapital-nonprod.firebaseapp.com",
    projectId: "kapital-nonprod",
    storageBucket: "kapital-nonprod.firebasestorage.app",
    messagingSenderId: "43099724631",
    appId: "1:43099724631:web:a04569b94e03d63c387c12"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// Initialize Firestore
const db = getFirestore(app);

// Export the db instance
export { db };
export { auth, googleProvider };
