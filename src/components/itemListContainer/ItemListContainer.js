import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firestore";

const ItemListContainer = ({nombre}) => {

    const [productos, setProductos] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const {idcategoria} = useParams();

    useEffect(()=> {

        getProducts(idcategoria).then((data)=> {
            setProductos(data);
            setIsLoading(false);
        })

    },[idcategoria])

    return (
        isLoading ? <h2>CARGANDO...</h2> :
        (
            <section className="ItemListContainer">
                <h2>Catalogo de Productos</h2>
                <p>Bienvenido {nombre}, este es nuestro catalogo actual de productos</p>
                <ItemList
                    productos={productos}
                />
            </section>
        )
    )
}

export default ItemListContainer;