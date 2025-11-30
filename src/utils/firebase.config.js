import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import dotenv from "dotenv";

dotenv.config(); 
const firebaseConfig = {
  apiKey: "AIzaSyBZ2fGtBHE1-cLZA6Uw7Mva3ZN42CFiBj8",
  authDomain: "products-71203.firebaseapp.com",
  projectId: "products-71203",
  storageBucket: "products-71203.firebasestorage.app",
  messagingSenderId: "1017479655488",
  appId: "1:1017479655488:web:16bc5364754ea23a39efa5"
};

const app = initializeApp(firebaseConfig); 
const db = getFirestore(app); 
export { db }; 