import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_DB_URL,
  projectId: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export async function signin() {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      return user;
    })
    .catch(console.error);
}

export async function signout() {
  return signOut(auth).then(() => null);
}
