
import { initializeApp } from "firebase/app";
import {getFirestore, getDocs, collection, query, where, addDoc, updateDoc, doc} from "firebase/firestore"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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
    const productsRef = idCategoria ? query(collection(db,"products"), where("categoria", "==", idCategoria)) : query(collection(db,"products"));
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
   
    const docSnapshot = await getDocs(productsColleccion);

    const dataProducts = docSnapshot.docs.map(item => {
        return item.data();
    })
    
    return(dataProducts);
}

export const setOrden = (orden, comprador) => {
    const ordenesCollection = collection(db, "ordenes");
    addDoc(ordenesCollection, orden).then(({id})=>MySwal.fire({
        title: "Compra finalizada",
        html: (
                <div className="orden-finalizada">
                    <span>Felicitaciones: </span>
                    <br/>
                    <span>{comprador} </span>
                    <span>ha finalizado su compra con exito</span>
                    <br/>
                    <span>Su numero de orden es: </span>
                    <span>{id}</span>
                    <br/>
                    <a href="/"><button>Ok</button></a>
                </div>
            ),
        icon: 'success',
        showConfirmButton: false,
    }))
}

export function setStock (id, stock) {
    const docRef = doc(db, 'products', id);
    updateDoc (docRef, {stock: stock});
}

export default db;