
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

//Se encarga de obtener los productos y con un condicional decide si los filtra o entrega su totalidad. Para el ItemList
export async function getProducts (idCategoria) {

    const productsRef = idCategoria ? query(collection(db,"products"), where("categoria", "==", idCategoria)) : query(collection(db,"products"));
    const docSnapshot = await getDocs(productsRef);
    const dataProducts = docSnapshot.docs.map(item => {
        return item.data();
    })

    return (dataProducts);
}

//Se encarga d ebuscar un producto por ID, para usarlo en el ItemDetail
export async function getItem (id) {
    const productsColleccion = query(collection(db,"products"), where("id", "==", id));
    const docSnapshot = await getDocs(productsColleccion);
    const dataProducts = docSnapshot.docs.map(item => {
        return item.data();
    })
    return(dataProducts);
}

//Setea la orden final de compra en la base de datos
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

//Setea el stock de la base de datos segun que funcion la consuma. 
export function setStock (id, stock) {
    const docRef = doc(db, 'products', id);
    updateDoc (docRef, {stock: stock});
}

export default db;