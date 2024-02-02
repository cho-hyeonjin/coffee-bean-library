import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_DB_URL,
  projectId: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function signin() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
    });
}
