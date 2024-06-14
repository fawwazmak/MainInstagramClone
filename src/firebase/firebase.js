import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3IG2dtHY9vYD20AgKvN2EIzRA_919Lls",
  authDomain: "instagram-clone-app-project.firebaseapp.com",
  projectId: "instagram-clone-app-project",
  storageBucket: "instagram-clone-app-project.appspot.com",
  messagingSenderId: "104485666433",
  appId: "1:104485666433:web:ce12493e4fdabdbc359780",
  measurementId: "G-Z9R2LKWR09",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
