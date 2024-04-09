import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDA_U1tbEtQqHw-f3sVYlzF18S4kT_3g1o",
  authDomain: "blog-3345d.firebaseapp.com",
  projectId: "blog-3345d",
  storageBucket: "blog-3345d.appspot.com",
  messagingSenderId: "907872728687",
  appId: "1:907872728687:web:2f3a09fd70186035703f9a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
