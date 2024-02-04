import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_DB_URL,
  projectId: import.meta.env.VITE_COFFEE_BEAN_LIBRARY_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export function logIn() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logOut() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 1. 사용자가 있는 경우 (로그인 된 경우)
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser); // Navbar에서 setUser 콜백으로 전달하고 확인해보기
  });
}

async function adminUser(user) {
  // 2. 사용자가 admin 권한 가지고 있는지 확인하기
  // 3. {...user, isAdmin: true/false}
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

export async function addNewProduct(product, imageUrl) {
  console.log(product);
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imageUrl,
    options: product.options.split(","),
  });
}
