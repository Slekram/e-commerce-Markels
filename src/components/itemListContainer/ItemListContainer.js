import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../services/firestore";

const ItemListContainer = ({filtrado}) => {

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
        isLoading ? <div className="is-loading"><h2>CARGANDO...</h2></div>:
        (
            <section className="item-list-container">
                <h2>Catalogo de Productos</h2>
                <p>Bienvenido USUARIO, este es nuestro catalogo {filtrado} de productos</p>
                <ItemList
                    productos={productos}
                />
            </section>
        )
    )
}

export default ItemListContainer;