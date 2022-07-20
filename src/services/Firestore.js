
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, collection, getDoc, doc, query, where, limit} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCvEVSYqswsF6BiynP7PCA4_LoV84CMUsM",
    authDomain: "el-mundo-de-maxi.firebaseapp.com",
    projectId: "el-mundo-de-maxi",
    storageBucket: "el-mundo-de-maxi.appspot.com",
    messagingSenderId: "678984825712",
    appId: "1:678984825712:web:9cdcd053a7b26541b1adb5"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProducts (idCategoria) {
     // const productsRef = doc(db,"products", "vVSFxUqgEwGfxZNwj9aO") "Esto es en caso de que se quiera traer por documento"

    // const productsRef = collection(db,"products") "Esto es para traer una colleccion"
    
    //referencia a la colleccion
    const productsRef = idCategoria ? query(collection(db,"products"), where("categoria", "==", idCategoria), limit(2)) : query(collection(db,"products"));
    //leemos el snapshot de los documentos actuales con getDocs
    const docSnapshot = await getDocs(productsRef);
    //recibimos el array "docs" que esta dentro de ese snapshot
    const dataProducts = docSnapshot.docs.map(item => {
        return item.data();
    })

    return (dataProducts);
}

export async function getItem (id) {
    const productsColleccion = query(collection(db,"products"), where("id", "==", id));
    const docSnapshot = await getDocs(productsColleccion)
    const dataProducts = docSnapshot.docs.map(item => {
        return item.data();
    })
    return(dataProducts);
}

console.log(getItem("1"));

export default db;