import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB10PTGs_F9vuzkUK944CLKqly0PXvxciw",
  authDomain: "yoyaku-app-30332.firebaseapp.com",
  projectId: "yoyaku-app-30332",
  storageBucket: "yoyaku-app-30332.appspot.com",
  messagingSenderId: "374644690830",
  appId: "1:374644690830:web:fbb8adee27e18a59495edf",
  measurementId: "G-VS0GNLZXTP"
};


const app = initializeApp(firebaseConfig);
const firestoreDatabase = getFirestore(app);

export default firestoreDatabase;
