import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs, doc, getDoc, addDoc, query, where } from "firebase/firestore";
import products from "./products.js"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIRESTORE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIRESTORE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIRESTORE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIRESTORE_APPID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Retorna todos los productos de la coleccion 'products'
 * @returns Promesa con el array de productos
 */
export async function getProducts() {
    const productsRef = collection(db, "products");
    const productsSnapshot = await getDocs(productsRef);

    // mpaeo de los docs a { id y doc.data()}
    const dataDocs = productsSnapshot.docs.map( doc => {
        return {id : doc.id, ...doc.data()} }
    )
    if (dataDocs.length === 0) {
        throw new Error("No se encontraron productos");
    }
    return dataDocs;
}
/**
 * Retorna un producto segun su id
 * @param {string} id  ID del producto
 * @returns  Promesa con el producto
 */
export async function getProductById(id) {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}
/**
 * Retorna los productos segun su marca
 * @param {string} marcaArco  Marca del producto
 * @returns  Promesa con el array de productos
 */
export async function getProductsByMarca(marcaArco) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("marca", "==", marcaArco));
  const querySnapshot = await getDocs(q);
  
  const dataDocs = querySnapshot.docs.map( doc => (
                                            {id : doc.id, ...doc.data()}
                                          )
  )
  if (dataDocs.length === 0) {
    throw new Error("No se encontraron productos");
  }
  return dataDocs;
}
/**
 * Crea una nueva orden en la coleccion 'orders'
 * @param {object} orderData  Datos de la orden
 * @returns  Promesa con la orden creada
 */
export async function createOrder(orderData) {
  const ordersRef = collection(db, "orders");
  const newDocRef = await addDoc(ordersRef, orderData);
  return { id: newDocRef.id, ...orderData };
}
/** Sube los productos iniciales a Firestore
 */
export async function subirProductosAFiresote() {
  for (let product of products) {
    delete product.id;
    await addDoc(collection(db, "products"), product);
  }
}
export default app;