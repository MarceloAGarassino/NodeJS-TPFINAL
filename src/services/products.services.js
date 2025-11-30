import { db } from "../utils/firebase.config.js"; // Importa la instancia de Firestore
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
  query,
  where
} from "firebase/firestore"; 
import { P_COLLECTION, cleanProduct } from "../models/product.model.js"; 

export const getAllProducts = async () => {
  const productsCol = collection(db, P_COLLECTION); 
  const productsSnap = await getDocs(productsCol);
  const productsList = productsSnap.docs.map((doc) => ({ 
    id: doc.id,
    ...doc.data(),
  })); 
  return productsList;
};


export const getProductById = async (id) => {
  const productsRef = collection(db,  P_COLLECTION);
  const q = query(productsRef, where("id", "==", Number(id)));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    throw new Error("Producto no encontrado");
  }

  return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
};





export const createProduct = async (productData) => { 
  const cleanedData = cleanProduct(productData); 
  const productsCol = collection(db, P_COLLECTION); 
  const docRef = await addDoc(productsCol, cleanedData); 
  return { id: docRef.id, ...cleanedData };
};




export const deleteProduct = async (id) => {
  const productsRef = collection(db, P_COLLECTION);

  
  const q = query(productsRef, where("id", "==", Number(id)));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    throw new Error("Producto no encontrado con id: " + id);
  }

  
  const firestoreId = querySnapshot.docs[0].id;

 
  await deleteDoc(doc(db, P_COLLECTION, firestoreId));

  return true;
};