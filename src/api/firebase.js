import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDatabase,
  ref,
  get,
  set,
  remove,
  serverTimestamp,
  push,
} from "firebase/database";

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

// export async function addNewProduct(product, imageURL) {
//   const id = uuid();
//   return set(ref(database, `products/${id}`), {
//     ...product,
//     id,
//     price: parseInt(product.price),
//     imageURL: imageURL,
//     options: product.options.split(", "),
//   });
// }

export async function addNewProduct(product, imageURL) {
  const productRef = ref(database, "products");

  // push를 사용하여 고유한 키를 생성하고 데이터를 저장
  const newProductRef = push(productRef);

  return set(newProductRef, {
    ...product,
    id: newProductRef.key,
    price: parseInt(product.price),
    imageURL: imageURL,
    options: product.options.split("#"),
    buyURL: product.buyURL,
    timestamp: serverTimestamp(), // 서버 타임스탬프 사용
  });
}

export async function getProducts() {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

// 나의 원두 서재 CRUD
export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      return Object.values(items);
    });
}
export async function createOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}
export async function deleteFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
